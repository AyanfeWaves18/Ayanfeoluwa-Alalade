import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  SITE_URL,
  creativeWork,
  experience,
  externalLinks,
  images,
  leadership,
  profile,
} from "@/lib/portfolio-data";

const TITLE = "Ayanfeoluwa Alalade — Who He Is & What He Does";
const DESCRIPTION =
  "Ayanfeoluwa Alalade (Alalade Ayanfeoluwa, \"World Famous\") is a Nigerian frontend developer, photographer and photo editor behind Ayanfe Waves Visuals.";

const faqs = [
  {
    q: "Who is Ayanfeoluwa Alalade?",
    a: "Ayanfeoluwa Alalade — also written Alalade Ayanfeoluwa and known as World Famous — is a Nigerian Computer Science student at Crawford University, a frontend developer, a photographer and a photo editor. He shoots and edits under the brand Ayanfe Waves Visuals.",
  },
  {
    q: "What does Ayanfeoluwa Alalade do?",
    a: "He builds responsive, accessible web interfaces with HTML, CSS, JavaScript, React and TypeScript, and shoots and edits portrait, editorial and landscape photography. He also serves as Welfare Director of the SRC, Crawford University Chapter, and as Cowrywise Campus Lead at Crawford University.",
  },
  {
    q: "Where can I see Ayanfeoluwa Alalade's work?",
    a: "His photography lives at ayanfewavesvisuals.lovable.app and his frontend development portfolio at ayanfe-dev.vercel.app. Both are collected on this site, ayanfeoluwa-alalade.vercel.app.",
  },
  {
    q: "Is Ayanfeoluwa Alalade the same person as Ayanfe Waves Visuals?",
    a: "Yes. Ayanfe Waves Visuals is the photography brand of Ayanfeoluwa Alalade, used for his portrait, editorial and landscape work.",
  },
  {
    q: "How do I contact Ayanfeoluwa Alalade?",
    a: "For photography, email ayanfewavesvisuals@gmail.com. For frontend development, email ayanfeoluwaalalade2000@gmail.com. He is also on WhatsApp at +234 816 782 9017.",
  },
];

export const Route = createFileRoute("/ayanfeoluwa-alalade")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/ayanfeoluwa-alalade` },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/ayanfeoluwa-alalade` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: `${SITE_URL}/ayanfeoluwa-alalade`,
          name: TITLE,
          description: DESCRIPTION,
          mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Ayanfeoluwa Alalade",
            alternateName: [
              "Alalade Ayanfeoluwa",
              "World Famous",
              "Ayanfe Waves Visuals",
            ],
            givenName: "Ayanfeoluwa",
            familyName: "Alalade",
            url: `${SITE_URL}/`,
            mainEntityOfPage: `${SITE_URL}/ayanfeoluwa-alalade`,
            image: `${SITE_URL}/og-image.png`,
            jobTitle: profile.jobTitle,
            nationality: "Nigerian",
            address: { "@type": "PostalAddress", addressCountry: "NG" },
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "Crawford University",
            },
            brand: { "@type": "Brand", name: "Ayanfe Waves Visuals" },
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
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Ayanfeoluwa Alalade",
              item: `${SITE_URL}/ayanfeoluwa-alalade`,
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: NamePage,
});

function NamePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-36 md:pt-44">
        <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
          Profile
        </span>
        <h1 className="max-w-4xl text-balance font-serif text-4xl font-medium italic leading-tight text-foreground md:text-6xl">
          Ayanfeoluwa Alalade
        </h1>
        <p className="mt-6 max-w-[62ch] text-pretty leading-relaxed text-muted-foreground">
          Frontend developer, photographer and photo editor from Nigeria. Also
          written <strong className="font-medium text-foreground">Alalade
          Ayanfeoluwa</strong>, and known as{" "}
          <strong className="font-medium text-foreground">World Famous</strong>.
          Computer Science student at {profile.university} and the creator
          behind{" "}
          <strong className="font-medium text-foreground">
            Ayanfe Waves Visuals
          </strong>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {profile.roles.map((role) => (
            <span
              key={role}
              className="rounded-full border border-border px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {role}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid items-start gap-16 md:grid-cols-2">
          <div className="relative">
            <img
              src={images.synthesis}
              alt="Ayanfeoluwa Alalade, frontend developer and photographer, holding a camera beside a screen of code"
              width={1008}
              height={1008}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-xl object-cover ring-1 ring-border"
            />
          </div>
          <div className="space-y-6 text-pretty leading-relaxed text-muted-foreground">
            <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
              At a glance
            </h2>
            <dl className="space-y-4 text-sm">
              {[
                ["Full name", "Ayanfeoluwa Alalade (Alalade Ayanfeoluwa)"],
                ["Also known as", "World Famous"],
                ["Roles", profile.jobTitle],
                ["Brand", "Ayanfe Waves Visuals"],
                ["University", `${profile.university} — Computer Science`],
                ["Based in", "Nigeria"],
                ["Contact", profile.whatsapp],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col gap-1 border-b border-border pb-4 sm:flex-row sm:gap-6"
                >
                  <dt className="w-40 shrink-0 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            What Ayanfeoluwa Alalade does
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {experience.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-card/20 p-8"
              >
                <h3 className="font-serif text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-twilight/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Creative work
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {creativeWork.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-card/20 p-8"
              >
                <h3 className="font-serif text-xl text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Leadership
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leadership.map((item) => (
              <article
                key={item.role}
                className="rounded-xl border border-border bg-card/20 p-8"
              >
                <h3 className="font-serif text-xl text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {item.org}
                  {item.period ? ` · ${item.period}` : ""}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Ayanfeoluwa Alalade online
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                label: "Ayanfe Waves Visuals — photography portfolio",
                href: externalLinks.photographyPortfolio,
              },
              {
                label: "Frontend development portfolio",
                href: externalLinks.devPortfolio,
              },
              { label: "GitHub — AyanfeWaves18", href: externalLinks.github },
              { label: "LinkedIn", href: externalLinks.linkedin },
              { label: "TikTok — @ayanfewaves_visuals1", href: externalLinks.tiktok },
              { label: "WhatsApp", href: externalLinks.generalWhatsApp },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener me"
                className="rounded-xl border border-border p-6 text-sm text-muted-foreground transition-colors hover:border-dusk/50 hover:text-foreground"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Frequently asked questions
          </h2>
          <div className="mt-12 space-y-8">
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-border pb-8">
                <h3 className="font-serif text-xl text-foreground">{f.q}</h3>
                <p className="mt-3 max-w-[70ch] text-pretty text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
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
                Explore front end development →
              </p>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
