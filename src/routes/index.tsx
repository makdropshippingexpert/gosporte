import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/sporte/Navbar";
import { Hero } from "@/components/sporte/Hero";
import { AppsSection } from "@/components/sporte/AppsSection";
import { WhoItsFor } from "@/components/sporte/WhoItsFor";
import { Features } from "@/components/sporte/Features";
import { Testimonials } from "@/components/sporte/Testimonials";
import { Vision, Contact } from "@/components/sporte/Vision";
import { Footer } from "@/components/sporte/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SportE | Sporting Event Planning Platform" },
      {
        name: "description",
        content:
          "SportE is a multi-sport event planning platform. Launch SportE Golf today and discover future applications for basketball, dodgeball, and more.",
      },
      {
        name: "keywords",
        content:
          "SportE, Golf Event Planning, Sports Tournament Software, Basketball Tournament Management, Dodgeball League Management, Sports Scheduling Software",
      },
      { property: "og:title", content: "SportE | Sporting Event Planning Platform" },
      {
        property: "og:description",
        content:
          "A modern platform for organizing sporting events, leagues, tournaments, and friendly competitions across multiple sports.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "SportE",
          url: "https://www.gosporte.com",
          description:
            "Multi-sport event planning platform for organizing leagues, tournaments, and friendly competitions.",
          sameAs: [
            "https://app.golf.gosporte.com/",
            "https://app.basketball.gosporte.com/",
            "https://app.dodgeball.gosporte.com/",
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <AppsSection />
        <Features />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
