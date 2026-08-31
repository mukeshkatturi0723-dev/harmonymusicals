import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { cartCount, cartEvent } from "@/lib/cart";

const links = [
  { label: "Instruments", to: "/instruments" as const },
  { label: "Categories", href: "#categories" },
  { label: "Music School", href: "#school" },
  { label: "Services", href: "#services" },
  { label: "Store", href: "#store" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { const sync = () => setCount(cartCount()); sync(); window.addEventListener(cartEvent, sync); return () => window.removeEventListener(cartEvent, sync); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  const linkClass = scrolled || open ? "text-muted-foreground hover:text-foreground" : "text-ivory/80 hover:text-ivory";

  return <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-border bg-background/95 backdrop-blur-[2px]" : "border-b border-transparent"}`}><div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:h-20 md:px-8"><Link to="/" className="flex items-baseline gap-2"><span className={`font-display text-[1.35rem] leading-none ${scrolled || open ? "text-foreground" : "text-ivory"}`}>Harmony Musicals</span><span className={`hidden text-[0.6rem] tracking-[0.2em] sm:inline ${scrolled || open ? "text-muted-foreground" : "text-ivory/60"}`}>VISAKHAPATNAM</span></Link>
    <nav className="hidden items-center gap-7 md:flex">{links.map(l => l.to ? <Link key={l.label} to={l.to} className={`text-sm transition-colors ${linkClass}`}>{l.label}</Link> : <a key={l.label} href={l.href} className={`text-sm transition-colors ${linkClass}`}>{l.label}</a>)}<Link to="/cart" className={`border px-4 py-2 text-sm transition-colors ${scrolled ? "border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground" : "border-ivory/40 text-ivory hover:border-ivory"}`}>Cart {count > 0 ? `(${count})` : ""}</Link></nav>
    <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)} className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden ${scrolled || open ? "text-foreground" : "text-ivory"}`}><span className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} /><span className={`block h-px w-6 bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} /></button></div>
    {open && <div className="border-t border-border bg-background md:hidden"><nav className="mx-auto flex max-w-[1180px] flex-col px-5 py-2">{links.map(l => l.to ? <Link key={l.label} to={l.to} onClick={() => setOpen(false)} className="border-b border-border py-4 text-base text-foreground last:border-0">{l.label}</Link> : <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="border-b border-border py-4 text-base text-foreground last:border-0">{l.label}</a>)}<Link to="/cart" onClick={() => setOpen(false)} className="mt-4 mb-5 bg-foreground py-3 text-center text-sm text-primary-foreground">View cart {count > 0 ? `(${count})` : ""}</Link></nav></div>}</header>;
}
