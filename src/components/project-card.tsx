import type { Venture } from "@/lib/ventures";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  venture: Venture;
}

export function ProjectCard({ venture }: ProjectCardProps) {
  return (
    <Link href={venture.url} target="_blank" rel="noopener noreferrer" className="group block">
      <Card className="flex h-full flex-col transition-all duration-300 ease-in-out group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                <venture.Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-lg">{venture.name}</CardTitle>
                <CardDescription>{venture.sector}</CardDescription>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </div>
        </CardHeader>
        <CardContent className="flex flex-grow flex-col justify-between">
          <p className="mb-4 text-muted-foreground">
            <span className="font-semibold text-foreground">Eve Count Injection:</span>{" "}
            {venture.injection}
          </p>
          <div className="flex justify-end">
            <Badge variant={venture.status === 'Live' ? 'default' : 'secondary'} className="steel-gradient text-primary-foreground">
              {venture.status}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
