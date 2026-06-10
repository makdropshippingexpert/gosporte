export function Vision() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
          One Platform. <span className="text-accent">Unlimited Sports.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          SportE is building a unified ecosystem for sports organizers. Each
          sport receives a dedicated application while sharing a common user
          experience and platform philosophy.
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border/60 bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-muted-foreground">
          Questions, feedback, or interested in a sport we haven't launched yet?
          We'd love to hear from you.
        </p>
        <a
          href="mailto:hello@gosporte.com"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3 text-sm font-medium text-accent-foreground shadow-lg shadow-accent/20 transition-transform hover:bg-accent/90 hover:-translate-y-0.5"
        >
          hello@gosporte.com
        </a>
      </div>
    </section>
  );
}
