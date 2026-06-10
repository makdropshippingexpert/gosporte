import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "We ran our charity outing for 144 players without a single spreadsheet. The cash purse for the skills contest was a huge hit and raised more than we expected.",
    name: "Megan B.",
    role: "Charity Tournament Director",
  },
  {
    quote:
      "Our members love how easy it is to sign up for league nights. SportE Golf has cut my admin time in half and made our private events feel premium.",
    name: "David Chen",
    role: "Head Pro, Private Country Club",
  },
  {
    quote:
      "Hosting public scrambles used to be chaos. Now players register online, pay in, and the brackets just work. The purse payouts to 1st, 2nd, and 3rd are automatic.",
    name: "Carlos Rivera",
    role: "Public Course General Manager",
  },
  {
    quote:
      "I plan corporate golf events for a living. SportE is the first platform that handles public and private events equally well — exactly what my clients need.",
    name: "Priya Shah",
    role: "Independent Event Planner",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border/60 bg-muted/30 py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Loved by Organizers
          </h2>
          <p className="mt-4 text-muted-foreground">
            From charity outings to private clubs, SportE powers events that
            people remember.
          </p>
        </div>

        <div className="mt-14 relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
            {testimonials.map((t) => (
              <Card
                key={t.name}
                className="snap-start shrink-0 w-[85%] sm:w-[calc((100%-3rem)/3)] border-border/60 bg-card shadow-sm"
              >
                <CardContent className="p-7">
                  <Quote className="h-7 w-7 text-accent/40" />
                  <p className="mt-4 text-sm leading-relaxed text-foreground">
                    "{t.quote}"
                  </p>
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <p className="text-sm font-semibold text-foreground">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-muted/80 to-transparent hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
