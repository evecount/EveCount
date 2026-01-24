import type { LucideIcon } from "lucide-react";
import { Atom, BrainCircuit, FlaskConical } from 'lucide-react';
import projectData from './research-projects.json';

export interface ResearchProject {
  name: string;
  repoUrl: string;
  field: string;
  authors: string;
  description: string;
  status: 'Completed' | 'In Progress';
  icon: 'Atom' | 'BrainCircuit' | 'FlaskConical';
}

const icons: { [key: string]: LucideIcon } = {
  Atom,
  BrainCircuit,
  FlaskConical,
};

export const researchProjects = projectData.map(project => ({
  ...project,
  Icon: icons[project.icon],
}));
