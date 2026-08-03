import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ayanfeoluwa Alalade" },
      {
        name: "description",
        content:
          "Get in touch with Ayanfeoluwa Alalade for photography sessions or frontend development work.",
      },
      { property: "og:title", content: "Contact — Ayanfeoluwa Alalade" },
      {
        property: "og:description",
        content:
          "Let's create something worth remembering — for the lens or the screen.",
      },
    ],
  }),
  component: ContactPage,
});

const services = [
  {
    tone: "dusk" as const,
    tag: "P",
    label: "Photography",
    items: ["Portraits", "Events", "Editorial", "Landscapes"],
    email: "ayanfewavesvisuals@gmail.com",
    portfolio: "https://ayanfewavesvisuals.lovable.app/",
    portfolioLabel: "ayanfewavesvisuals.lovable.app",
  },
  {
    tone: "mint" as const,
    tag: "D",
    label: "Development",
    items: ["Frontend builds", "Landing pages", "Design systems", "UI work"],
    email: "ayanfeoluwaalalade2000@gmail.com",
    portfolio: "https://ayanfeoluwasportfolio.vercel.app/",
    portfolioLabel: "ayanfeoluwasportfolio.vercel.app",
  },
];


function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:pt-44">
        <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
          Get in touch
        </span>
        <h1 className="max-w-3xl text-balance font-serif text-4xl font-medium italic leading-tight text-foreground md:text-6xl">
          Let's create something worth remembering.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Booking a cinematic shoot or building a fast, beautiful interface —
          reach out and let's talk about what you have in mind.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.label}
              href={`mailto:${service.email}`}
              className={
                service.tone === "dusk"
                  ? "group rounded-xl border border-border bg-twilight p-8 transition-colors hover:border-dusk/50"
                  : "group rounded-xl border border-border bg-terminal p-8 transition-colors hover:border-mint/50"
              }
            >
              <div className="flex items-center gap-3">
                <span
                  className={
                    service.tone === "dusk"
                      ? "rounded bg-dusk/15 px-1.5 py-0.5 font-mono text-[10px] text-dusk"
                      : "rounded bg-mint/15 px-1.5 py-0.5 font-mono text-[10px] text-mint"
                  }
                >
                  {service.tag}
                </span>
                <h2 className="text-lg font-medium">{service.label}</h2>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p
                className={
                  service.tone === "dusk"
                    ? "mt-8 text-sm font-medium text-foreground transition-colors group-hover:text-dusk"
                    : "mt-8 text-sm font-medium text-foreground transition-colors group-hover:text-mint"
                }
              >
                {service.email} →
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
          <a
            href="https://www.tiktok.com/@ayanfewaves_visuals1"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-dusk"
          >
            TikTok
          </a>
          <a
            href="https://github.com/AyanfeWaves18"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-mint"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ayanfeoluwa-alalade-34b759362"
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-mint"
          >
            LinkedIn
          </a>
        </div>

      </section>

      <SiteFooter />
    </div>
  );
}
