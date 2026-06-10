import { Heart, Building2, Users, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Heart,
    title: "Charity Outings",
    description:
      "Run charity golf tournaments that raise more with less overhead.",
  },
  {
    icon: Building2,
    title: "Golf Courses & Clubs",
    description:
      "Public and private courses hosting tournaments, leagues, and member events.",
  },
  {
    icon: Briefcase,
    title: "Event Professionals",
    description:
      "Planners running sporting events as a business — for clients or sponsors.",
  },
  {
    icon: Users,
    title: "Players & Organizers",
    description:
      "Hobbyists organizing leagues and friendly competitions with their crew.",
  },
];

export function WhoItsFor() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for Every Kind of Organizer
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whether you play or just plan, SportE gives you the tools to run
            great events.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <a.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
