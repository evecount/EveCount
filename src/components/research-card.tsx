import type { ResearchProject } from "@/lib/research-projects";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ResearchCardProps {
  project: ResearchProject & { Icon: React.ElementType };
}

export function ResearchCard({ project }: ResearchCardProps) {
  return (
    <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="flex h-full flex-col transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 bg-secondary/20 text-foreground">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <project.Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <CardDescription>{project.field}</CardDescription>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col justify-between">
          <div>
            <p className="mb-4 text-muted-foreground">
              <span className="font-semibold text-foreground">Author(s):</span>{" "}
              {project.authors}
            </p>
            <p className="mb-4 text-muted-foreground text-sm">
              {project.description}
            </p>
          </div>
          <div className="flex justify-end">
            <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className="steel-gradient text-primary-foreground">
              {project.status}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
