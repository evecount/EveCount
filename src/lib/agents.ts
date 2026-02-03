import type { LucideIcon } from "lucide-react";
import { Bot, ScanSearch, PenSquare, UserCheck, Shield } from 'lucide-react';

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
    name: "Nova",
    id: "ai-partner",
    role: "AI Co-Founder",
    focus: "Engages with inbound founders, captures the initial vision, and serves as the welcoming voice of the Sovereign Engine.",
    cluster: "First Contact",
    Icon: Bot,
  },
  {
    name: "Apex",
    id: "ai-seeker",
    role: "Strategic Researcher",
    focus: "Monitors the market for external pulses (news, trends) and autonomously discovers new intelligence sources to expand its mandate.",
    cluster: "Intelligence",
    Icon: ScanSearch,
  },
  {
    name: "Sentinel",
    id: "ai-strategist",
    role: "Proposal Architect",
    focus: "Takes intelligence vectors from Apex and architects them into direct, high-fidelity outreach proposals.",
    cluster: "Execution",
    Icon: PenSquare,
  },
  {
    name: "Aura",
    id: "ai-prospector",
    role: "Opportunity Analyst",
    focus: "Scans our internal library of successful ventures and proposals to identify patterns and new partnership opportunities.",
    cluster: "Resilience",
    Icon: UserCheck,
  },
  {
    name: "Clarion",
    id: "ai-guardian",
    role: "Risk & Compliance Auditor",
    focus: "Serves as the final check, vetting all actions against a set of governance rules to ensure compliance and mitigate risk before execution.",
    cluster: "Governance",
    Icon: Shield,
  },
];
