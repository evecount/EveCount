import type { LucideIcon } from "lucide-react";
import { Atom, BrainCircuit, FlaskConical } from 'lucide-react';

export interface ResearchProject {
  name: string;
  repoUrl: string;
  field: string;
  authors: string;
  description: string;
  status: 'Completed' | 'In Progress';
  Icon: LucideIcon;
}

export const researchProjects: ResearchProject[] = [
  {
    name: "Quantum Entanglement Simulator",
    repoUrl: "https://github.com/evecount/quantum-research-101",
    field: "Quantum Computing",
    authors: "Ada Lovelace",
    description: "A web-based simulator demonstrating the principles of quantum entanglement using Firebase for state management.",
    status: "Completed",
    Icon: Atom,
  },
  {
    name: "AI-Powered Drug Discovery",
    repoUrl: "https://github.com/evecount/quantum-research-101",
    field: "Bio-Informatics / AI",
    authors: "Alan Turing",
    description: "Utilizing Colab notebooks to run machine learning models that predict protein folding for drug discovery.",
    status: "Completed",
    Icon: BrainCircuit,
  },
  {
    name: "Algorithmic Chemistry",
    repoUrl: "https://github.com/evecount/quantum-research-101",
    field: "Computational Chemistry",
    authors: "Marie Curie",
    description: "A cloud-native application that models chemical reactions based on input parameters, deployed on Firebase.",
    status: "In Progress",
    Icon: FlaskConical,
  },
];
