
'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { submitCommandCenterMessage } from '@/app/actions';
import { Send, User, Loader2 } from 'lucide-react';
import { agentCrew } from '@/lib/agents';
import { useUser, useFirestore, useDoc, useMemoFirebase, setDocumentNonBlocking } from '@/firebase';
import { doc } from 'firebase/firestore';

type Message = {
  role: 'user' | 'model';
  content: string;
};

type AgentConversation = {
    userId: string;
    agentId: string;
    history: Message[];
    lastUpdated: string;
}

export function CommandCenterChat() {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(agentCrew[0].id);
  const [inputValue, setInputValue] = useState('');
  const [isAiResponding, setIsAiResponding] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();
  const firestore = useFirestore();

  const conversationRef = useMemoFirebase(() => {
    if (!firestore || !user || !selectedAgentId) return null;
    return doc(firestore, 'users', user.uid, 'agentConversations', selectedAgentId);
  }, [firestore, user, selectedAgentId]);

  const { data: conversationData, isLoading: isConversationLoading } = useDoc<AgentConversation>(conversationRef);

  const selectedAgent = useMemo(() => agentCrew.find(a => a.id === selectedAgentId)!, [selectedAgentId]);
  
  const messages = useMemo(() => {
    if (conversationData?.history) {
        return conversationData.history;
    }
    // If loading is done and there's no data, show the initial message.
    if (!isConversationLoading && !conversationData) {
        return [{ role: 'model', content: `You are now speaking with ${selectedAgent.name}, the ${selectedAgent.role}. How can I assist?` }];
    }
    // Otherwise, it's loading, so show nothing.
    return [];
  }, [conversationData, isConversationLoading, selectedAgent]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const isBusy = isAiResponding || isConversationLoading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isBusy || !user) return;

    setIsAiResponding(true);

    const userMessage: Message = { role: 'user', content: inputValue };
    const historyForAI = [...messages, userMessage];
    
    // We clear the input AFTER we've used it to build the history
    setInputValue('');

    try {
      const response = await submitCommandCenterMessage({ agentId: selectedAgentId, history: historyForAI });
      
      const finalHistory = [...historyForAI];

      if (response.success && response.data) {
        const aiMessage: Message = { role: 'model', content: response.data.response };
        finalHistory.push(aiMessage);
      } else {
        const errorMessage: Message = {
          role: 'model',
          content: response.message || 'Sorry, I had some trouble connecting.',
        };
        finalHistory.push(errorMessage);
      }
      
      if (conversationRef) {
        setDocumentNonBlocking(conversationRef, {
            history: finalHistory,
            lastUpdated: new Date().toISOString(),
            userId: user.uid,
            agentId: selectedAgentId
        }, { merge: true });
      }

    } catch (error) {
      const finalHistory = [...historyForAI, {
          role: 'model',
          content: 'Sorry, I\'m having trouble connecting right now.',
      }] as Message[];
       if (conversationRef) {
        setDocumentNonBlocking(conversationRef, {
            history: finalHistory,
            lastUpdated: new Date().toISOString(),
            userId: user.uid,
            agentId: selectedAgentId
        }, { merge: true });
      }
    } finally {
      setIsAiResponding(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
        <div className="p-4 border-b">
            <Select value={selectedAgentId} onValueChange={setSelectedAgentId} disabled={isBusy}>
                <SelectTrigger className="w-full bg-card">
                    <SelectValue placeholder="Select an agent..." />
                </SelectTrigger>
                <SelectContent>
                    {agentCrew.map(agent => (
                        <SelectItem key={agent.id} value={agent.id}>
                            <div className="flex items-center gap-2">
                                <agent.Icon className="h-4 w-4" />
                                <span>{agent.name} - <span className="text-muted-foreground">{agent.role}</span></span>
                            </div>
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
      <ScrollArea className="flex-1" ref={scrollAreaRef}>
        <div className="space-y-4 p-4">
          {isConversationLoading && messages.length === 0 && (
             <div className="flex justify-center items-center h-full">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
          )}
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                message.role === 'user' ? 'justify-end' : ''
              }`}
            >
              {message.role === 'model' && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <selectedAgent.Icon className="h-5 w-5 text-primary" />
                </div>
              )}
              <div
                className={`max-w-md rounded-lg px-4 py-2 ${
                  message.role === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary'
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === 'user' && (
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                  <User className="h-5 w-5" />
                </div>
              )}
            </div>
          ))}
          {isAiResponding && (
            <div className="flex items-start gap-3">
               <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <selectedAgent.Icon className="h-5 w-5 text-primary" />
                </div>
              <div className="max-w-xs rounded-lg bg-secondary px-4 py-2">
                  <Loader2 className="h-5 w-5 animate-spin" />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t bg-card p-4">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={isConversationLoading ? "Loading history..." : `Message ${selectedAgent.name}...`}
          disabled={isBusy}
          autoComplete="off"
        />
        <Button type="submit" size="icon" disabled={isBusy || !inputValue.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}

    