import type { LucideIcon } from "lucide-react";
import { Scale, ShieldCheck, Calculator, Rocket } from 'lucide-react';

export interface ServicePartner {
  name: string;
  description: string;
  Icon: LucideIcon;
}

export const servicePartners: ServicePartner[] = [
  {
    name: "Incorporation & Corporate Structuring",
    description: "We handle the entire incorporation process, establishing the optimal legal and corporate structure for your venture to ensure a solid foundation for growth and future investment.",
    Icon: Scale,
  },
  {
    name: "IP Protection & Legal Counsel",
    description: "With our partners, we provide comprehensive legal support to protect your intellectual property, including patents, trademarks, and all necessary agreements, handled by top-tier legal minds.",
    Icon: ShieldCheck,
  },
  {
    name: "Bookkeeping & Accounting",
    description: "You focus on the product, we'll handle the books. We provide full-service accounting and financial planning to manage your burn rate and prepare you for future funding rounds.",
    Icon: Calculator,
  },
  {
    name: "Go-to-Market Execution",
    description: "An idea is nothing without users. We provide a dedicated team to craft and execute your GTM strategy, from brand positioning to your first customer acquisition campaigns.",
    Icon: Rocket,
  },
];
