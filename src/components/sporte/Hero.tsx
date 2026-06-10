import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GOLF_URL } from "@/lib/sporte-apps";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border/60 bg-gradient-to-b from-background to-muted/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-accent) 0, transparent 40%), radial-gradient(circle at 80% 60%, var(--color-primary) 0, transparent 40%)",
        }}
      />
      <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-success" />
          A multi-sport event platform
        </div>
        <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Plan Better Sporting Events.{" "}
          <span className="text-accent">Play More.</span> Organize Less.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
          SportE is a modern platform for organizing sporting events, leagues,
          tournaments, and friendly competitions across multiple sports.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accent px-7 text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:bg-accent/90 hover:-translate-y-0.5"
          >
            <a href={GOLF_URL} target="_blank" rel="noopener noreferrer">
              Launch SportE Golf
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-7"
          >
            <a href="#apps">Explore SportE Apps</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
