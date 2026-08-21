import { useEffect, useState } from "react";

const links = [
  { label: "Instruments", href: "#instruments" },
  { label: "Categories", href: "#categories" },
  { label: "Music School", href: "#school" },
  { label: "Services", href: "#services" },
  { label: "Store", href: "#store" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur-[2px]"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:h-20 md:px-8">
        <a href="#top" className="flex items-baseline gap-2">
          <span
            className={`font-display text-[1.35rem] leading-none ${
              scrolled || open ? "text-foreground" : "text-ivory"
            }`}
          >
            Harmony Musicals
          </span>
          <span
            className={`hidden text-[0.6rem] tracking-[0.2em] sm:inline ${
              scrolled || open ? "text-muted-foreground" : "text-ivory/60"
            }`}
          >
            VISAKHAPATNAM
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-ivory/80 hover:text-ivory"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`border px-4 py-2 text-sm transition-colors ${
              scrolled
                ? "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground"
                : "border-ivory/40 text-ivory hover:border-ivory"
            }`}
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden ${
            scrolled || open ? "text-foreground" : "text-ivory"
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-[1180px] flex-col px-5 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-base text-foreground last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 mb-5 bg-foreground py-3 text-center text-sm text-primary-foreground"
            >
              Contact the store
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
