import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { images } from "@/lib/portfolio-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ayanfeoluwa Alalade | One creator, two crafts" },
      {
        name: "description",
        content:
          "The story of Ayanfeoluwa Alalade — a Lagos-based photographer and frontend developer working at the intersection of cinematic emotion and engineered precision.",
      },
      { property: "og:title", content: "About — Ayanfeoluwa Alalade" },
      {
        property: "og:description",
        content:
          "One creator, two crafts: the story bridging photography and frontend development.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:pt-44">
        <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
          Synthesis
        </span>
        <h1 className="max-w-4xl text-balance font-serif text-4xl font-medium italic leading-tight text-foreground md:text-6xl">
          Two perspectives, one vision.
        </h1>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div className="relative">
            <img
              src={images.synthesis}
              alt="Ayanfeoluwa Alalade holding a camera beside a screen of code"
              width={1008}
              height={1008}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-xl object-cover ring-1 ring-border"
            />
            <div className="absolute -bottom-4 -right-4 size-24 border border-mint/40 bg-background/30 backdrop-blur-sm" />
            <div className="absolute -left-4 -top-4 size-16 border border-dusk/40" />
          </div>

          <div className="space-y-6 text-pretty leading-relaxed text-muted-foreground">
            <p>
              I'm Ayanfeoluwa, a cross-disciplinary creator based in Nigeria. My
              work lives in two worlds that quietly inform one another — the
              cinematic stillness of photography and the kinetic craft of
              frontend development.
            </p>
            <p>
              My journey into tech began in the classroom, from a first exposure
              to code that revealed how logic and creativity could build real,
              tangible things. In parallel, the camera taught me to see — light,
              emotion, timing, and the way a single frame can hold a whole story.
            </p>
            <p>
              The technical precision of development informs the composition of
              my photography, while the cinematic soul of my visual work brings
              warmth to the interfaces I build. Whether I'm adjusting shutter
              speed for a twilight landscape or refining an interaction until it
              feels effortless, the goal is the same:{" "}
              <span className="font-medium text-foreground">
                clarity, intention, and resonance.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2">
          <Link
            to="/photography"
            className="group rounded-xl border border-border bg-twilight p-8 transition-colors hover:border-dusk/50"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dusk">
              The Lens
            </span>
            <p className="mt-3 font-serif text-2xl italic">
              Explore the photography →
            </p>
          </Link>
          <Link
            to="/development"
            className="group rounded-xl border border-border bg-terminal p-8 transition-colors hover:border-mint/50"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mint">
              The Logic
            </span>
            <p className="mt-3 font-mono text-2xl tracking-tighter">
              Explore the development →
            </p>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
