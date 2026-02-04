import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Megaphone, Target, Users2, Bot } from 'lucide-react';

export interface Agent {
  name: string;
  id: string;
  role: string;
  focus: string;
  cluster: "First Contact" | "Intelligence" | "Execution" | "Resilience" | "Governance";
  Icon: LucideIcon;
}

export const agentCrew: Agent[] = [
  {
    name: "Echo",
    id: "ai-partner",
    role: "The Partner (AI Partner-in-Residence)",
    focus: "The architect of the 'First Hello'. Acts as the first point of contact, engaging with founders to capture their initial vision.",
    cluster: "First Contact",
    Icon: Bot,
  },
  {
    name: "Nova",
    id: "ai-strategist",
    role: "The Visionary (AI Strategist)",
    focus: "The architect of the 'Why'. Uses strategic tools to see the market landscape, challenge assumptions, and define the core business model.",
    cluster: "Intelligence",
    Icon: BrainCircuit,
  },
  {
    name: "Apex",
    id: "ai-marketer",
    role: "The Marketer (AI GTM Lead)",
    focus: "The architect of the 'How'. Owns the go-to-market plan, defining pricing, positioning, and customer acquisition strategies.",
    cluster: "Execution",
    Icon: Megaphone,
  },
  {
    name: "Sentinel",
    id: "ai-analyst",
    role: "The Analyst (AI Business Analyst)",
    focus: "The architect of the 'What'. Owns the numbers, building revenue models, defining KPIs, and combating customer churn.",
    cluster: "Resilience",
    Icon: Target,
  },
  {
    name: "Clarion",
    id: "ai-operator",
    role: "The Operator (AI People Lead)",
    focus: "The architect of the 'Who'. Builds the human engine of the company, structuring roles and creating performance plans for team alignment.",
    cluster: "Governance",
    Icon: Users2,
  },
];