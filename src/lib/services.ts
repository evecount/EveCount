import type { LucideIcon } from "lucide-react";
import { Scale, ShieldCheck, Calculator, Rocket } from 'lucide-react';

export interface ServicePartner {
  name: string;
  description: string;
  Icon: LucideIcon;
}

export const servicePartners: ServicePartner[] = [
  {
    name: "Corporate Structuring & Incorporation",
    description: "Expert guidance on establishing the right legal entity for your venture, ensuring a solid foundation for growth and investment.",
    Icon: Scale,
  },
  {
    name: "Intellectual Property & Legal",
    description: "Comprehensive legal support to protect your IP, from patents and trademarks to licensing agreements, handled by top-tier legal minds.",
    Icon: ShieldCheck,
  },
  {
    name: "Finance & Accounting",
    description: "Full-service accounting and financial planning to manage your burn rate, prepare for audits, and set you up for future funding rounds.",
    Icon: Calculator,
  },
  {
    name: "Go-to-Market Strategy",
    description: "A dedicated team to craft and execute your GTM strategy, covering everything from brand positioning to your first user acquisition campaigns.",
    Icon: Rocket,
  },
];
