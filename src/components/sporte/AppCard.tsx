import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { SporteApp } from "@/lib/sporte-apps";

export function AppCard({ app }: { app: SporteApp }) {
  const isLive = app.status === "live";
  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/60 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl pt-0">
      {app.image && (
        <div className="relative aspect-[16/10] overflow-hidden bg-primary">
          <img
            src={app.image}
            alt={`${app.name} illustration`}
            loading="lazy"
            width={1024}
            height={640}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute right-3 top-3">
            {isLive ? (
              <Badge className="bg-success text-success-foreground hover:bg-success/90 shadow-md">
                LIVE
              </Badge>
            ) : (
              <Badge variant="secondary" className="uppercase tracking-wide shadow-md">
                Coming Soon
              </Badge>
            )}
          </div>
        </div>
      )}
      <CardHeader>
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
