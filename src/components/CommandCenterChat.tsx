'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { submitCommandCenterMessage } from '@/app/actions';
import { Send, User, Loader2 } from 'lucide-react';
import { agentCrew } from '@/lib/agents';

type Message = {
  role: 'user' | 'model';
  content: string;
};

export function CommandCenterChat() {
  const [selectedAgentId, setSelectedAgentId] = useState<string>(agentCrew[0].id);
  const [conversation, setConversation] = useState<Record<string, Message[]>>({});
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const selectedAgent = useMemo(() => agentCrew.find(a => a.id === selectedAgentId)!, [selectedAgentId]);
  
  const messages = useMemo(() => conversation[selectedAgentId] || [
    { role: 'model', content: `You are now speaking with ${selectedAgent.name}, the ${selectedAgent.role}. How can I assist?` }
  ], [conversation, selectedAgentId, selectedAgent]);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const addMessage = (agentId: string, message: Message) => {
    setConversation(prev => {
        const agentConvo = prev[agentId] || [
            { role: 'model', content: `You are now speaking with ${agentCrew.find(a => a.id === agentId)!.name}, the ${agentCrew.find(a => a.id === agentId)!.role}. How can I assist?` }
        ];
        return {
            ...prev,
            [agentId]: [...agentConvo, message]
        };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    addMessage(selectedAgentId, userMessage);
    setInputValue('');
    setIsLoading(true);

    const chatHistory = [...messages, userMessage];

    try {
      const response = await submitCommandCenterMessage({ agentId: selectedAgentId, history: chatHistory });
      if (response.success && response.data) {
        const aiMessage: Message = { role: 'model', content: response.data.response };
        addMessage(selectedAgentId, aiMessage);
      } else {
        addMessage(selectedAgentId, {
          role: 'model',
          content: response.message || 'Sorry, I had some trouble connecting.',
        });
      }
    } catch (error) {
      addMessage(selectedAgentId, {
        role: 'model',
        content: 'Sorry, I\'m having trouble connecting right now.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-background">
        <div className="p-4 border-b">
            <Select value={selectedAgentId} onValueChange={setSelectedAgentId}>
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
          {isLoading && (
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
          placeholder={`Message ${selectedAgent.name}...`}
          disabled={isLoading}
          autoComplete="off"
        />
        <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
