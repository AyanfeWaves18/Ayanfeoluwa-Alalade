import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <Link
          to="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Ayanfeoluwa Alalade — home"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-border bg-background/70 font-serif text-sm italic backdrop-blur">
            AO
          </span>
          <span className="truncate text-sm font-medium tracking-tight text-foreground/90">
            Ayanfeoluwa Alalade
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-background/60 px-1.5 py-1.5 backdrop-blur md:flex">
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

        <Sheet>
          <SheetTrigger asChild>
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="size-10 shrink-0 rounded-full border-border/70 bg-background/70 backdrop-blur md:hidden"
              aria-label="Open navigation menu"
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[min(86vw,22rem)] border-border bg-background/95 px-6 py-8 backdrop-blur-xl"
          >
            <SheetHeader className="border-b border-border pb-6 text-left">
              <SheetTitle className="font-serif text-2xl italic font-normal">
                Ayanfeoluwa Alalade
              </SheetTitle>
              <SheetDescription className="font-mono text-[10px] uppercase tracking-[0.25em]">
                Lens &amp; Logic
              </SheetDescription>
            </SheetHeader>

            <nav className="mt-8 flex flex-col" aria-label="Mobile navigation">
              {links.map((link, index) => (
                <SheetClose asChild key={link.to}>
                  <Link
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    className="grid grid-cols-[2rem_minmax(0,1fr)] items-center border-b border-border py-4 text-lg text-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
                  >
                    <span className="font-mono text-[10px] text-muted-foreground">
                      0{index + 1}
                    </span>
                    <span>{link.label}</span>
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
