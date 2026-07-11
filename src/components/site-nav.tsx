import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/photography", label: "Photography" },
  { to: "/development", label: "Development" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Ayanfeoluwa Alalade — home"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-background/70 font-serif text-sm italic backdrop-blur">
            AO
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-foreground/90 sm:block">
            Ayanfeoluwa Alalade
          </span>
        </Link>

        <nav className="flex items-center gap-1 rounded-full border border-border/70 bg-background/60 px-1.5 py-1.5 backdrop-blur">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              className="rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
