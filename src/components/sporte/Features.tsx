import { CalendarCheck, Trophy, LayoutGrid } from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Easy Event Planning",
    description: "Create and manage sporting events quickly.",
  },
  {
    icon: Trophy,
    title: "Tournament Management",
    description: "Handle brackets, teams, and scheduling with less effort.",
  },
  {
    icon: LayoutGrid,
    title: "Multi-Sport Platform",
    description: "One ecosystem for many different sports.",
  },
];

export function Features() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why SportE
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for organizers who'd rather be playing.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
