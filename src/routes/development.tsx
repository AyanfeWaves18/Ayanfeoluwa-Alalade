import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { externalLinks, projects, skills, techStack } from "@/lib/portfolio-data";

export const Route = createFileRoute("/development")({
  head: () => ({
    meta: [
      { title: "Front End Development — Ayanfeoluwa Alalade" },
      {
        name: "description",
        content:
          "Frontend projects, skills and tech stack. Clean, responsive, accessible interfaces built with React, TypeScript and modern CSS.",
      },
      { property: "og:title", content: "Front End Development — The Logic" },
      {
        property: "og:description",
        content:
          "Frontend engineering: performant, accessible, beautifully built interfaces.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://ayanfeoluwa-alalade.vercel.app/development" },
      { property: "og:image", content: "https://ayanfeoluwa-alalade.vercel.app/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://ayanfeoluwa-alalade.vercel.app/og-image.png" },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://ayanfeoluwa-alalade.vercel.app/development",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Front End Development — Ayanfeoluwa Alalade",
          url: "https://ayanfeoluwa-alalade.vercel.app/development",
          description:
            "A collection of front end development projects by Ayanfeoluwa Alalade.",
          creator: {
            "@type": "Person",
            "@id": "https://ayanfeoluwa-alalade.vercel.app/#person",
            name: "Ayanfeoluwa Alalade",
            alternateName: ["Alalade Ayanfeoluwa"],
            url: "https://ayanfeoluwa-alalade.vercel.app/",
            sameAs: [
              externalLinks.devPortfolio,
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
              name: "Front End Development",
              item: "https://ayanfeoluwa-alalade.vercel.app/development",
            },
          ],
        }),
      },
    ],
  }),
  component: DevelopmentPage,
});

function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-terminal text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:pt-44">
        <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.3em] text-mint">
          02 — Front End Development · The Logic
        </span>
        <h1 className="max-w-4xl text-balance font-mono text-4xl font-medium leading-[1.1] tracking-tighter text-foreground md:text-6xl">
          Code as a creative medium.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          I transform complex problems into intuitive, delightful interfaces —
          caring about clean code, thoughtful design, and experiences that feel
          effortless to use.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={externalLinks.devPortfolio}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md bg-mint px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-mint-foreground transition-opacity hover:opacity-90"
          >
            Front End portfolio ↗
          </a>
          <a
            href={externalLinks.github}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={externalLinks.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={externalLinks.generalWhatsApp}
            target="_blank"
            rel="noreferrer noopener"
            className="rounded-md bg-mint px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] text-mint-foreground transition-opacity hover:opacity-90"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="mb-12 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-mono text-sm uppercase tracking-[0.3em] text-mint">
            Project_Manifest
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
              className="group block rounded-xl border border-border bg-card/20 p-8 transition-colors hover:border-mint/40"
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
            </a>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 font-mono text-sm uppercase tracking-[0.3em] text-mint">
          Skills_&_Expertise
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-xl border border-border bg-card/20 p-8"
            >
              <h3 className="mb-3 text-lg font-medium text-foreground">
                {skill.title}
              </h3>
              <p className="mb-6 text-pretty text-sm leading-relaxed text-muted-foreground">
                {skill.body}
              </p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-secondary/50 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-y border-border py-8 opacity-50">
          {techStack.map((tech) => (
            <span key={tech} className="font-mono text-xs text-foreground">
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href={externalLinks.devProjects}
            target="_blank"
            rel="noreferrer noopener"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-mint"
          >
            See all projects on ayanfeoluwasportfolio.vercel.app →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
