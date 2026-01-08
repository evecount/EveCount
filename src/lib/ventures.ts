import type { LucideIcon } from "lucide-react";
import { UtensilsCrossed, HeartPulse, Briefcase, Landmark, Newspaper } from 'lucide-react';

export interface Venture {
  name: string;
  url: string;
  sector: string;
  injection: string;
  status: 'Live' | 'In Development';
  Icon: LucideIcon;
}

export const ventures: Venture[] = [
  {
    name: "TopDownFood.com",
    url: "https://www.google.com/search?q=TopDownFood.com",
    sector: "F&B / Creative",
    injection: "AI Computer Vision for Food Styling & Menu Auto-Gen.",
    status: "Live",
    Icon: UtensilsCrossed,
  },
  {
    name: "FiendandFriend.com",
    url: "https://www.google.com/search?q=FiendandFriend.com",
    sector: "Health / Wellness",
    injection: "Dual-Persona AI Feedback Loop & Vibe-Slider Tech.",
    status: "Live",
    Icon: HeartPulse,
  },
  {
    name: "OpenHours.ai",
    url: "https://www.google.com/search?q=OpenHours.ai",
    sector: "Productivity / SaaS",
    injection: "AI Gatekeeper \"Poke\" & Stripe Connect Architecture.",
    status: "Live",
    Icon: Briefcase,
  },
  {
    name: "ILP.expert",
    url: "https://www.google.com/search?q=ILP.expert",
    sector: "FinTech / Compliance",
    injection: "Multilingual OCR Fact-Extraction & Gap-Analysis Logic.",
    status: "Live",
    Icon: Landmark,
  },
  {
    name: "VentureWit.com",
    url: "https://www.google.com/search?q=VentureWit.com",
    sector: "Media / Finance",
    injection: "\"Bleed\" Calculation Engine & Interactive Digital Library.",
    status: "Live",
    Icon: Newspaper,
  },
];
