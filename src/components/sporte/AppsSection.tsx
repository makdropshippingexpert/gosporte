import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { apps, futureSports } from "@/lib/sporte-apps";
import { AppCard } from "./AppCard";

export function AppsSection() {
  return (
    <section id="apps" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The SportE App Family
          </h2>
          <p className="mt-4 text-muted-foreground">
            One platform, many sports. Launch what's live today and watch the
            lineup grow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map((app) => (
            <AppCard key={app.sport} app={app} />
          ))}

          <Card className="flex h-full flex-col border-dashed border-border bg-muted/30 shadow-none">
            <CardHeader>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-background text-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl">More Sports Coming</CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                The SportE platform is designed to expand into additional
                sporting event applications.
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-auto">
              <ul className="flex flex-wrap gap-2">
                {futureSports.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground border border-border/60"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
