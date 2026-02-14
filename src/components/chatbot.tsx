
'use client';

import { useState, useRef, useEffect } from 'react';
import { useChatbot, type Message } from '@/hooks/use-chatbot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { submitChatMessage } from '@/app/actions';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { GeminiIcon } from './icons/gemini-icon';
import { useFirestore } from '@/firebase';
import { addDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { collection } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export function Chatbot() {
  const { open, setOpen, messages, addMessage } = useChatbot();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const firestore = useFirestore();
  const { toast } = useToast();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    addMessage(userMessage);
    setInputValue('');
    setIsLoading(true);

    const chatHistory = [...messages, userMessage].map(m => ({ role: m.role, content: m.content }));

    try {
      const response = await submitChatMessage({ history: chatHistory });
      if (response.success && response.data) {
        const aiMessage: Message = { role: 'model', content: response.data.response };
        addMessage(aiMessage);

        // Check if the AI has returned the final submission details
        if (response.data.submissionDetails && firestore) {
          const { submitterName, contactEmail, contactPhone } = response.data.submissionDetails;

          // Resilience Guard: Only create submission if details are actually present.
          if (submitterName && contactEmail && contactPhone) {
            // Create the full conversation log for the pitch
            const fullHistory = [...chatHistory, aiMessage];
            const visionPitch = fullHistory
              .map(m => `${m.role === 'user' ? 'User' : 'AI'}: ${m.content}`)
              .join('\n\n');

            // Create the final submission object
            const submissionData = {
              applicationType: 'Venture Pitch' as const,
              visionPitch,
              submissionDate: new Date().toISOString(),
              submitterName,
              contactEmail,
              contactPhone,
              status: 'New' as const
            };
            
            const submissionsCollection = collection(firestore, 'submissions');
            addDocumentNonBlocking(submissionsCollection, submissionData);

            toast({
              title: "Pitch Received",
              description: "Thank you! We've saved your pitch and will be in touch shortly.",
            });
          }
        }

      } else {
        addMessage({
          role: 'model',
          content: response.message || 'Sorry, I had some trouble connecting. Please use the form on our Incubator page to submit your idea.',
        });
      }
    } catch (error) {
      addMessage({
        role: 'model',
        content: 'Sorry, I\'m having trouble connecting right now. Please use the form on our Incubator page to submit your idea.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Bot /> AI Partner-in-Residence
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 pr-4 -mr-4">
          <div className="space-y-4 p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  message.role === 'user' ? 'justify-end' : ''
                }`}
              >
                {message.role === 'model' && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <GeminiIcon className="h-5 w-5 text-primary" />
                  </div>
                )}
                <div
                  className={`max-w-xs rounded-lg px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary'
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
                {message.role === 'user' && (
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                    <User className="h-5 w-5" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <GeminiIcon className="h-5 w-5 text-primary" />
                  </div>
                <div className="max-w-xs rounded-lg bg-secondary px-4 py-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t p-4">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Pitch your idea..."
            disabled={isLoading}
            autoComplete="off"
          />
          <Button type="submit" size="icon" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}
