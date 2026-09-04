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

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ayanfeoluwa Alalade | Frontend Developer & Photographer" },
      {
        name: "description",
        content:
          "About Ayanfeoluwa Alalade — Computer Science student at Crawford University, Frontend Developer, Photographer, Photo Editor and Creative Artist behind Ayanfe Waves Visuals.",
      },
      { property: "og:title", content: "About Ayanfeoluwa Alalade" },
      {
        property: "og:description",
        content:
          "One person, several crafts: frontend development, photography, photo editing and creative work — plus leadership at Crawford University.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          url: `${SITE_URL}/about`,
          name: "About Ayanfeoluwa Alalade",
          mainEntity: {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: "Ayanfeoluwa Alalade",
            alternateName: ["World Famous", "Alalade Ayanfeoluwa"],
            jobTitle: "Frontend Developer, Photographer & Photo Editor",
            url: `${SITE_URL}/`,
            affiliation: {
              "@type": "CollegeOrUniversity",
              name: "Crawford University",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Crawford University",
            },
            brand: { "@type": "Brand", name: "Ayanfe Waves Visuals" },
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
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "Who is Ayanfeoluwa Alalade?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Ayanfeoluwa Alalade (also written Alalade Ayanfeoluwa, and known as World Famous) is a Computer Science student at Crawford University, a Frontend Developer, Photographer, Photo Editor and Creative Artist. He shoots under the brand Ayanfe Waves Visuals.",
              },
            },
            {
              "@type": "Question",
              name: "What does Ayanfeoluwa Alalade do?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "He builds responsive, accessible web interfaces with HTML, CSS, JavaScript, React and TypeScript, and shoots and edits portrait, editorial and landscape photography. He also serves as Welfare Director of the SRC, Crawford University Chapter and as Cowrywise Campus Lead at Crawford University.",
              },
            },
            {
              "@type": "Question",
              name: "Is Ayanfeoluwa Alalade a frontend developer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Ayanfeoluwa Alalade is a frontend developer working with HTML, CSS, JavaScript, React and TypeScript. His dedicated frontend portfolio is at https://ayanfe-dev.vercel.app/.",
              },
            },
            {
              "@type": "Question",
              name: "Is Ayanfeoluwa Alalade a photographer?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. He is a photographer and photo editor working under the brand Ayanfe Waves Visuals, with a specialized photography portfolio at https://ayanfewavesvisuals.lovable.app/.",
              },
            },
            {
              "@type": "Question",
              name: "How can I hire or contact Ayanfeoluwa Alalade?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "For photography, email ayanfewavesvisuals@gmail.com. For frontend development work, email ayanfeoluwaalalade2000@gmail.com. He is also reachable on WhatsApp at +234 816 782 9017.",
              },
            },
          ],
        }),
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
          About
        </span>
        <h1 className="max-w-4xl text-balance font-serif text-4xl font-medium italic leading-tight text-foreground md:text-6xl">
          About Ayanfeoluwa Alalade
        </h1>
        <p className="mt-6 max-w-[62ch] text-pretty leading-relaxed text-muted-foreground">
          {profile.jobTitle} — and a Computer Science student at{" "}
          {profile.university}.
        </p>
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
              I'm{" "}
              <strong className="font-medium text-foreground">
                Ayanfeoluwa Alalade
              </strong>{" "}
              — also written Alalade Ayanfeoluwa, and known to friends as World
              Famous. I'm a Computer Science student at Crawford University, a
              frontend developer, a photographer, a photo editor and a creative
              artist.
            </p>
            <p>
              On the technical side I build responsive, accessible web
              interfaces with HTML, CSS and JavaScript, working with React and
              TypeScript. On the visual side I shoot and edit portrait,
              editorial and landscape photography under my brand{" "}
              <strong className="font-medium text-foreground">
                Ayanfe Waves Visuals
              </strong>
              .
            </p>
            <p>
              Outside of coursework and client work, I serve as{" "}
              <span className="text-foreground">Welfare Director</span> for the
              SRC, Crawford University Chapter, and as{" "}
              <span className="text-foreground">Cowrywise Campus Lead</span> at
              Crawford University.
            </p>
            <p>
              The technical precision of development informs how I compose a
              frame, while the cinematic instinct of my photography brings
              warmth to the interfaces I build. Different tools, same goal:{" "}
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
              Explore front end development →
            </p>
          </Link>
        </div>
      </section>

      {/* Leadership & Achievements */}
      <section
        id="leadership"
        className="border-t border-border bg-background py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Leadership &amp; Achievements
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {leadership.map((item) => (
              <article
                key={item.role}
                className="rounded-xl border border-border bg-card/20 p-8"
              >
                <h3 className="font-medium text-foreground">{item.role}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.org}
                  {item.period ? ` · ${item.period}` : ""}
                </p>
                <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-t border-border bg-background py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Experience
          </h2>
          <dl className="mt-12 divide-y divide-border border-y border-border">
            {experience.map((item) => (
              <div key={item.title} className="grid gap-3 py-8 md:grid-cols-3">
                <dt className="font-medium text-foreground">{item.title}</dt>
                <dd className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
                  {item.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Creative Work */}
      <section
        id="creative-work"
        className="border-t border-border bg-twilight py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
            Creative Work
          </h2>
          <p className="mt-4 max-w-[60ch] text-pretty leading-relaxed text-muted-foreground">
            My creative practice and my technical work feed each other: framing,
            colour and rhythm from photography shape the interfaces I build, and
            the discipline of code keeps my visual work consistent.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {creativeWork.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-card/20 p-8"
              >
                <h3 className="font-serif text-xl italic text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <a
            href={externalLinks.photographyPortfolio}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-10 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-dusk hover:text-dusk-foreground"
          >
            See the Ayanfe Waves Visuals photography portfolio ↗
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-8 font-serif text-3xl font-medium leading-tight text-foreground md:text-4xl">
          Frequently asked
        </h2>
        <dl className="divide-y divide-border border-y border-border">
          <div className="grid gap-3 py-8 md:grid-cols-3">
            <dt className="font-serif text-xl italic">
              Who is Ayanfeoluwa Alalade?
            </dt>
            <dd className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
              Ayanfeoluwa Alalade (also written Alalade Ayanfeoluwa, known as
              World Famous) is a Computer Science student at Crawford
              University, a Frontend Developer, Photographer, Photo Editor and
              Creative Artist. He shoots under the brand Ayanfe Waves Visuals.
            </dd>
          </div>
          <div className="grid gap-3 py-8 md:grid-cols-3">
            <dt className="font-serif text-xl italic">
              What does Ayanfeoluwa Alalade do?
            </dt>
            <dd className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
              He builds responsive, accessible web interfaces with HTML, CSS,
              JavaScript, React and TypeScript, and shoots and edits portrait,
              editorial and landscape photography. He also serves as Welfare
              Director of the SRC, Crawford University Chapter and as Cowrywise
              Campus Lead at Crawford University.
            </dd>
          </div>
          <div className="grid gap-3 py-8 md:grid-cols-3">
            <dt className="font-serif text-xl italic">
              Is Ayanfeoluwa Alalade a frontend developer?
            </dt>
            <dd className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
              Yes — he works with HTML, CSS, JavaScript, React and TypeScript.
              His dedicated{" "}
              <a
                href={externalLinks.devPortfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="text-foreground underline decoration-mint/50 underline-offset-4 hover:text-mint"
              >
                frontend development portfolio
              </a>{" "}
              covers those projects in depth.
            </dd>
          </div>
          <div className="grid gap-3 py-8 md:grid-cols-3">
            <dt className="font-serif text-xl italic">
              Is Ayanfeoluwa Alalade a photographer?
            </dt>
            <dd className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
              Yes — he is a photographer and photo editor working as{" "}
              <a
                href={externalLinks.photographyPortfolio}
                target="_blank"
                rel="noreferrer noopener"
                className="text-foreground underline decoration-dusk/50 underline-offset-4 hover:text-dusk"
              >
                Ayanfe Waves Visuals
              </a>
              .
            </dd>
          </div>
          <div className="grid gap-3 py-8 md:grid-cols-3">
            <dt className="font-serif text-xl italic">
              How can I hire or contact him?
            </dt>
            <dd className="text-pretty leading-relaxed text-muted-foreground md:col-span-2">
              For photography, email{" "}
              <span className="break-all text-foreground">
                {profile.emails.photography}
              </span>
              . For frontend development, email{" "}
              <span className="break-all text-foreground">
                {profile.emails.development}
              </span>
              . He's also reachable on WhatsApp at {profile.whatsapp}.
            </dd>
          </div>
        </dl>
      </section>

      <SiteFooter />
    </div>
  );
}
