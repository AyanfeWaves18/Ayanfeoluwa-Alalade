import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { images, projects, techStack } from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayanfeoluwa Alalade — Photographer & Front End Developer" },
      { name: "description", content: "Explore Ayanfeoluwa Alalade's cinematic photography and front-end development portfolio." },
      { property: "og:title", content: "Ayanfeoluwa Alalade — Lens & Logic" },
      { property: "og:description", content: "Cinematic photography and thoughtful front-end development by one creator." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero — the dual split */}
      <section className="relative flex min-h-screen flex-col border-b border-border md:flex-row">
        {/* Photography entry */}
        <div className="group relative flex flex-1 items-center justify-center overflow-hidden border-b border-border bg-twilight p-8 md:border-b-0 md:border-r">
          <img
            src={images.duskAvenue}
            alt="Twilight seascape at blue hour"
            width={1024}
            height={1280}
            className="absolute inset-0 h-full w-full object-cover opacity-45 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-background/40" />
          <div className="animate-fade-up relative z-10 text-center">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-dusk">
              Visual Storytelling
            </span>
            <h1 className="mb-8 font-serif text-5xl font-medium italic leading-none text-foreground md:text-7xl">
              The Lens
            </h1>
            <Link
              to="/photography"
              className="inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background ring-1 ring-foreground transition-colors hover:bg-dusk hover:text-dusk-foreground hover:ring-dusk"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Developer entry */}
        <div className="group relative flex flex-1 items-center justify-center overflow-hidden bg-terminal p-8">
          <div className="grid-dots absolute inset-0 opacity-20 transition-opacity duration-700 group-hover:opacity-30" />
          <div className="animate-fade-up animate-delay-2 relative z-10 text-center">
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-mint">
              Technical Architecture
            </span>
            <h1 className="mb-8 font-mono text-5xl font-medium leading-none tracking-tighter text-foreground md:text-7xl">
              The Logic
            </h1>
            <Link
              to="/development"
              className="inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-medium text-mint ring-1 ring-mint/50 transition-colors hover:bg-mint hover:text-mint-foreground"
            >
              Enter Terminal
            </Link>
          </div>
        </div>

        {/* Central brand */}
        <div className="absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
          <div className="grid size-24 place-items-center rounded-full border border-border bg-background shadow-lift">
            <span className="font-serif text-xl italic">AO</span>
          </div>
        </div>
      </section>

      {/* Photography world (warm) */}
      <section className="bg-twilight py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-[42ch]">
              <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.3em] text-dusk">
                01 — Photography
              </span>
              <h2 className="mb-4 font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
                Capturing the transient rhythm of light.
              </h2>
              <p className="text-pretty text-muted-foreground">
                From intimate portraiture to the vast silence of storm-lit
                landscapes, my work explores the emotional resonance of
                cinematic twilight.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2">
              <Link
                to="/photography"
                className="font-mono text-xs uppercase tracking-[0.2em] text-dusk transition-colors hover:text-foreground"
              >
                View all works →
              </Link>
              <a
                href="https://ayanfewavesvisuals.lovable.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-dusk"
              >
                Ayanfe Waves Visuals ↗
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <figure className="group md:col-span-8">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={images.hoodedPortrait}
                  alt="Shrouded Gaze — hooded cinematic portrait"
                  width={1280}
                  height={864}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="font-serif text-lg italic">
                  Shrouded Gaze
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Portrait
                </span>
              </figcaption>
            </figure>

            <div className="flex flex-col justify-between gap-6 md:col-span-4">
              <figure className="group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={images.lavenderDress}
                    alt="Lavender Poise — portrait in lavender dress"
                    width={896}
                    height={1120}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="mt-4">
                  <span className="font-serif text-lg italic">
                    Lavender Poise
                  </span>
                </figcaption>
              </figure>
              <blockquote className="rounded-xl border border-border/60 bg-card/30 p-8">
                <p className="font-serif text-sm italic text-muted-foreground">
                  "Photography is the art of observation. It has little to do
                  with the things you see and everything to do with the way you
                  see them."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The bridge — synthesis */}
      <section className="relative overflow-hidden border-y border-border bg-background py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <span className="mb-8 block font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              Synthesis
            </span>
            <h2 className="mb-8 text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              I build interfaces with the precision of a compiler and capture
              moments with the soul of a poet.
            </h2>
            <p className="mb-10 max-w-[52ch] text-pretty leading-relaxed text-muted-foreground">
              A cross-disciplinary creator. By day I architect performant
              frontend systems with React and TypeScript. By night I explore the
              cinematic intersections of everyday life through my lens. The
              precision of one shapes the emotion of the other.
            </p>
            <Link
              to="/about"
              className="inline-flex rounded-full px-5 py-2.5 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:bg-secondary"
            >
              Read the full story
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src={images.synthesis}
                alt="A creator holding a camera beside a screen of code"
                width={1008}
                height={1008}
                loading="lazy"
                className="aspect-square w-full rounded-xl object-cover ring-1 ring-border"
              />
              <div className="absolute -bottom-4 -right-4 size-24 border border-mint/40 bg-background/30 backdrop-blur-sm" />
              <div className="absolute -left-4 -top-4 size-16 border border-dusk/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Front End Development world (cool) */}
      <section className="bg-terminal py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-mint">
              Project_Manifest
            </h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-xl border border-border bg-card/20 p-8 transition-colors hover:border-mint/40"
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="mb-2 font-mono text-xl text-foreground">
                      {project.index} {project.name}
                    </h3>
                    <p className="max-w-[42ch] text-pretty text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  <span
                    className={
                      project.statusTone === "live"
                        ? "shrink-0 rounded bg-mint/10 px-2 py-1 font-mono text-[10px] text-mint"
                        : "shrink-0 rounded bg-secondary px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    }
                  >
                    {project.status}
                  </span>
                </div>
                <div className="mb-6 overflow-hidden rounded-md">
                  <img
                    src={project.image}
                    alt={`${project.name} interface preview`}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="aspect-video w-full object-cover opacity-85 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-muted-foreground"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/development"
              className="inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-medium text-mint ring-1 ring-mint/40 transition-colors hover:bg-mint hover:text-mint-foreground"
            >
              Explore all projects
            </Link>
            <a
              href="https://ayanfeoluwasportfolio.vercel.app/"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex rounded-full px-6 py-3 font-mono text-sm text-muted-foreground ring-1 ring-border transition-colors hover:text-mint"
            >
              Front End portfolio ↗
            </a>
          </div>

          {/* Tech stack strip */}
          <div className="mt-24 flex flex-wrap items-center justify-between gap-6 border-y border-border py-8 opacity-50">
            {techStack.map((tech) => (
              <span key={tech} className="font-mono text-xs text-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
