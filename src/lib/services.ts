import type { LucideIcon } from "lucide-react";
import { Scale, ShieldCheck, Calculator, Rocket, Building, Users, Megaphone } from 'lucide-react';

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
    name: "Go-to-Market Strategy",
    description: "We craft and execute your GTM strategy, from brand positioning to your first customer acquisition campaigns, ensuring a successful launch.",
    Icon: Rocket,
  },
  {
    name: "Marketing & PR",
    description: "An idea is nothing without users. Our partners build your brand's voice and drive awareness through targeted marketing and public relations.",
    Icon: Megaphone,
  },
  {
    name: "Co-working Space Partner",
    description: "Hit the ground running with a dedicated space for your team. We provide access to premier co-working environments to foster collaboration and innovation from day one.",
    Icon: Building,
  },
  {
    name: "Talent Acquisition",
    description: "Building a world-class team is paramount. Our talent partners help you source, vet, and hire the key personnel needed to scale your operations and build your vision.",
    Icon: Users,
  },
];
