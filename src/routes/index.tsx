import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  SITE_URL,
  externalLinks,
  images,
  profile,
  projects,
  techStack,
} from "@/lib/portfolio-data";
import logo from "@/assets/brand/ayanfeoluwa-alalade-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayanfeoluwa Alalade | Frontend Developer & Photographer" },
      {
        name: "description",
        content:
          "Ayanfeoluwa Alalade is a Computer Science student at Crawford University, Frontend Developer, Photographer, Photo Editor and Creative Artist.",
      },
      { property: "og:title", content: "Ayanfeoluwa Alalade | Frontend Developer & Photographer" },
      {
        property: "og:description",
        content:
          "The official website of Ayanfeoluwa Alalade — Frontend Developer, Photographer and Photo Editor, and the creator behind Ayanfe Waves Visuals.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Ayanfeoluwa Alalade" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${SITE_URL}/#profilepage`,
          url: `${SITE_URL}/`,
          name: "Ayanfeoluwa Alalade | Frontend Developer & Photographer",
          mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Ayanfeoluwa Alalade",
            alternateName: [
              "World Famous",
              "Alalade Ayanfeoluwa",
              "Ayanfe Waves Visuals",
            ],
            givenName: "Ayanfeoluwa",
            familyName: "Alalade",
            url: `${SITE_URL}/`,
            image: `${SITE_URL}/og-image.png`,
            jobTitle: "Frontend Developer, Photographer & Photo Editor",
            description:
              "Ayanfeoluwa Alalade is a Computer Science student at Crawford University, Frontend Developer, Photographer, Photo Editor and Creative Artist.",
            nationality: "Nigerian",
            address: { "@type": "PostalAddress", addressCountry: "NG" },
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "Crawford University",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Crawford University",
            },
            brand: { "@type": "Brand", name: "Ayanfe Waves Visuals" },
            knowsAbout: [
              "Frontend development",
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "TypeScript",
              "Photography",
              "Portrait photography",
              "Editorial photography",
              "Photo editing",
              "Visual storytelling",
            ],
            email: "mailto:ayanfeoluwaalalade2000@gmail.com",
            sameAs: [
              externalLinks.photographyPortfolio,
              externalLinks.devPortfolio,
              externalLinks.tiktok,
              externalLinks.github,
              externalLinks.linkedin,
            ],
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          name: "Ayanfeoluwa Alalade",
          alternateName: ["Alalade Ayanfeoluwa", "Ayanfeoluwa Alalade Portfolio"],
          url: `${SITE_URL}/`,
          inLanguage: "en",
          description:
            "The official website of Ayanfeoluwa Alalade — Frontend Developer, Photographer and Photo Editor.",
          publisher: { "@id": `${SITE_URL}/#person` },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Identity band — the strongest on-page signal for the name */}
      <section className="border-b border-border bg-background px-6 pb-10 pt-32 md:pt-36">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="text-balance font-serif text-4xl font-medium leading-tight text-foreground md:text-6xl">
            Ayanfeoluwa Alalade
          </h1>
          <p className="mx-auto mt-5 max-w-[62ch] text-pretty leading-relaxed text-muted-foreground">
            Computer Science student at Crawford University — Frontend
            Developer, Photographer, Photo Editor and Creative Artist. I build
            web interfaces and shoot cinematic images under{" "}
            <strong className="font-medium text-foreground">
              Ayanfe Waves Visuals
            </strong>
            .
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-border px-3 py-1.5"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </section>

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
            <h2 className="mb-8 font-serif text-5xl font-medium italic leading-none text-foreground md:text-7xl">
              The Lens
            </h2>
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
            <h2 className="mb-8 font-mono text-5xl font-medium leading-none tracking-tighter text-foreground md:text-7xl">
              The Logic
            </h2>
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
          <div className="size-24 overflow-hidden rounded-full border border-border bg-background shadow-lift">
            <img
              src={logo}
              alt="Ayanfeoluwa Alalade logo"
              width={96}
              height={96}
              className="size-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Explore My Work — gateway to the two specialized portfolios */}
      <section
        id="explore-my-work"
        className="border-b border-border bg-background py-24 md:py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Explore My Work
          </h2>
          <p className="mt-4 max-w-[56ch] text-pretty leading-relaxed text-muted-foreground">
            One person, two disciplines. Each has its own dedicated portfolio.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="flex flex-col rounded-xl border border-border bg-terminal p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-mint">
                Frontend Development
              </span>
              <h3 className="mt-4 font-mono text-2xl tracking-tighter text-foreground">
                Frontend Development
              </h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                Explore my frontend development projects, technical skills, and
                web development work.
              </p>
              <a
                href={externalLinks.devPortfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex w-fit rounded-full bg-mint px-6 py-3 font-mono text-sm text-mint-foreground transition-opacity hover:opacity-90"
              >
                View Frontend Portfolio ↗
              </a>
            </article>

            <article className="flex flex-col rounded-xl border border-border bg-twilight p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-dusk">
                Ayanfe Waves Visuals
              </span>
              <h3 className="mt-4 font-serif text-2xl italic text-foreground">
                Photography
              </h3>
              <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                Explore my photography, photo editing, and visual storytelling
                work.
              </p>
              <a
                href={externalLinks.photographyPortfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-8 inline-flex w-fit rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-dusk hover:text-dusk-foreground"
              >
                View Photography Portfolio ↗
              </a>
            </article>
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
                href={externalLinks.photographyPortfolio}
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
                  alt="Cinematic close-up portrait of a young man in a dark hood, face half lit by cool twilight light, photographed by Ayanfeoluwa Alalade"
                  title="Shrouded Gaze"
                  width={1280}
                  height={864}
                  loading="lazy"
                  className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-4">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-serif text-lg italic">
                    Shrouded Gaze
                  </span>
                  <span className="shrink-0 text-[10px] uppercase tracking-widest text-muted-foreground">
                    Portrait
                  </span>
                </div>
                <p className="mt-2 max-w-[52ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                  A hooded portrait shot in low twilight light — the hood frames
                  the face so the eyes carry the whole story.
                </p>
              </figcaption>
            </figure>

            <div className="flex flex-col justify-between gap-6 md:col-span-4">
              <figure className="group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={images.lavenderDress}
                    alt="Full-length portrait of a woman in a flowing lavender dress standing calmly against a muted outdoor backdrop"
                    title="Lavender Poise"
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
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    A standing portrait in a flowing lavender dress, styled for
                    soft colour harmony between fabric and evening sky.
                  </p>
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
              I'm <strong className="font-medium text-foreground">Ayanfeoluwa Alalade</strong>{" "}
              (also written Alalade Ayanfeoluwa), a cross-disciplinary creator
              based in Nigeria. By day I architect performant
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
              href={externalLinks.devPortfolio}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex rounded-full px-6 py-3 font-mono text-sm text-muted-foreground ring-1 ring-border transition-colors hover:text-mint"
            >
              Ayanfeoluwa Alalade | Frontend Developer ↗
            </a>
            <a
              href={externalLinks.generalWhatsApp}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex rounded-full bg-mint px-6 py-3 font-mono text-sm text-mint-foreground transition-opacity hover:opacity-90"
            >
              Discuss a project on WhatsApp
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
