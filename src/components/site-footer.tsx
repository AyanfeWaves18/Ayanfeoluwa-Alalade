import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              Ready to build or shoot
            </p>
            <a
              href="mailto:hello@ayanfe.studio"
              className="mt-6 block font-serif text-4xl italic leading-tight tracking-tight text-foreground transition-colors hover:text-dusk sm:text-5xl md:text-6xl"
            >
              hello@ayanfe.studio
            </a>
            <p className="mt-6 max-w-md text-pretty text-sm leading-relaxed text-muted-foreground">
              Whether it's a cinematic shoot at twilight or a fast, beautiful
              interface — let's create something worth remembering.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:items-end">
            <div className="flex flex-col gap-3">
              <a
                href="mailto:photography@ayanfe.studio"
                className="group flex items-center gap-3 text-sm font-medium text-foreground/90 transition-colors hover:text-dusk"
              >
                <span className="rounded bg-dusk/15 px-1.5 py-0.5 text-[10px] font-mono text-dusk">
                  P
                </span>
                photography@ayanfe.studio
              </a>
              <a
                href="mailto:dev@ayanfe.studio"
                className="group flex items-center gap-3 text-sm font-medium text-foreground/90 transition-colors hover:text-mint"
              >
                <span className="rounded bg-mint/15 px-1.5 py-0.5 text-[10px] font-mono text-mint">
                  D
                </span>
                dev@ayanfe.studio
              </a>
            </div>

            <div className="flex gap-6 text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              <a href="#" className="transition-colors hover:text-foreground">
                Instagram
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                GitHub
              </a>
              <a href="#" className="transition-colors hover:text-foreground">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} Ayanfeoluwa Alalade
          </p>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <Link to="/photography" className="hover:text-dusk">
              The Lens
            </Link>
            <Link to="/development" className="hover:text-mint">
              The Logic
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
