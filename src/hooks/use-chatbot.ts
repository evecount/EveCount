
'use client';

import { create } from 'zustand';

export type Message = {
  role: 'user' | 'model';
  content: string;
};

type ChatbotState = {
  open: boolean;
  messages: Message[];
  setOpen: (open: boolean) => void;
  addMessage: (message: Message) => void;
};

const useChatbotStore = create<ChatbotState>((set) => ({
  open: false,
  messages: [
    {
      role: 'model',
      content: "I'm Eve Count's AI Partner-in-Residence. Pitch me your vision. What are you building?",
    },
  ],
  setOpen: (open) => set({ open }),
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));

export const useChatbot = useChatbotStore;
