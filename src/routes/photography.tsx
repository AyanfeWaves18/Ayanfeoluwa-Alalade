import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { externalLinks, photoCategories, photos } from "@/lib/portfolio-data";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography — Ayanfeoluwa Alalade | The Lens" },
      {
        name: "description",
        content:
          "Cinematic portraiture, editorial and storm-lit landscapes captured at twilight. The photography portfolio of Ayanfeoluwa Alalade.",
      },
      { property: "og:title", content: "Photography — The Lens" },
      {
        property: "og:description",
        content:
          "A cinematic archive of portraits, nature and editorial work in twilight tones.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ayanfeoluwa-alalade.vercel.app/photography" },
      { property: "og:image", content: "https://ayanfeoluwa-alalade.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://ayanfeoluwa-alalade.vercel.app/og-image.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://ayanfeoluwa-alalade.vercel.app/photography",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Photography — Ayanfeoluwa Alalade",
          url: "https://ayanfeoluwa-alalade.vercel.app/photography",
          description:
            "A cinematic collection of portrait, nature and editorial photography by Ayanfeoluwa Alalade.",
          creator: {
            "@type": "Person",
            "@id": "https://ayanfeoluwa-alalade.vercel.app/#person",
            name: "Ayanfeoluwa Alalade",
            alternateName: ["Alalade Ayanfeoluwa", "Ayanfe Waves Visuals"],
            url: "https://ayanfeoluwa-alalade.vercel.app/",
            sameAs: [externalLinks.photographyPortfolio, externalLinks.tiktok],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Ayanfeoluwa Alalade",
              item: "https://ayanfeoluwa-alalade.vercel.app/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Photography",
              item: "https://ayanfeoluwa-alalade.vercel.app/photography",
            },
          ],
        }),
      },
    ],
  }),
  component: PhotographyPage,
});

function PhotographyPage() {
  const [active, setActive] = useState<(typeof photoCategories)[number]>("All");
  const visible = photos.filter((p) => active === "All" || p.category === active);

  return (
    <div className="min-h-screen bg-twilight text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:pt-44">
        <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.3em] text-dusk">
          01 — Photography · The Lens
        </span>
        <h1 className="max-w-4xl text-balance font-serif text-5xl font-medium italic leading-[1.05] text-foreground md:text-7xl">
          Light, emotion and story, converged into timeless images.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Ayanfe Waves Visuals — a body of cinematic work spanning intimate
          portraiture, dramatic landscapes and editorial studies, all bathed in
          the emotional light of twilight.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={externalLinks.photographyPortfolio}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full bg-dusk px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-dusk-foreground transition-opacity hover:opacity-90"
          >
            Ayanfe Waves Visuals ↗
          </a>
          <a
            href={externalLinks.photographyWhatsApp}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-full border border-border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            Book a session
          </a>
        </div>

        <nav className="mt-12 flex flex-wrap gap-2">
          {photoCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={
                active === category
                  ? "rounded-full bg-dusk px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-dusk-foreground transition-colors"
                  : "rounded-full border border-border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {category}
            </button>
          ))}
        </nav>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6">
          {visible.map((photo) => (
            <figure
              key={photo.title}
              className={
                photo.span === "wide"
                  ? "group col-span-2 md:col-span-4"
                  : photo.span === "tall"
                    ? "group col-span-2 md:col-span-2 md:row-span-2"
                    : "group col-span-2 md:col-span-2"
              }
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className={
                    photo.span === "tall"
                      ? "aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      : "aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  }
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="font-serif text-lg italic">{photo.title}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {photo.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href={externalLinks.photographyGallery}
            target="_blank"
            rel="noreferrer noopener"
            className="font-serif text-lg italic text-muted-foreground transition-colors hover:text-dusk"
          >
            View the full gallery on Ayanfe Waves Visuals →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
