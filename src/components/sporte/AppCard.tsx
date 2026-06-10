import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { SporteApp } from "@/lib/sporte-apps";

export function AppCard({ app }: { app: SporteApp }) {
  const isLive = app.status === "live";
  return (
    <Card className="group flex h-full flex-col border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <CardHeader>
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg">
            {app.name.replace("SportE ", "").charAt(0)}
          </div>
          {isLive ? (
            <Badge className="bg-success text-success-foreground hover:bg-success/90">LIVE</Badge>
          ) : (
            <Badge variant="secondary" className="uppercase tracking-wide">Coming Soon</Badge>
          )}
        </div>
        <CardTitle className="text-xl">{app.name}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">
          {app.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        {isLive ? (
          <Button
            asChild
            className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href={app.url} target="_blank" rel="noopener noreferrer">
              Open App
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        ) : (
          <Button disabled className="w-full rounded-full" variant="secondary">
            Coming Soon
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
