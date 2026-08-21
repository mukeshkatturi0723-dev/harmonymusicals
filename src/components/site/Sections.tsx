import { Reveal } from "./Reveal";
import catGuitars from "@/assets/cat-guitars.jpg";
import catKeys from "@/assets/cat-keys.jpg";
import catDrums from "@/assets/cat-drums.jpg";
import catIndian from "@/assets/cat-indian.jpg";
import school from "@/assets/school.jpg";
import repair from "@/assets/repair.jpg";
import store from "@/assets/store.jpg";
import pAcoustic from "@/assets/p-acoustic.jpg";
import pPiano from "@/assets/p-piano.jpg";
import pViolin from "@/assets/p-violin.jpg";
import pTabla from "@/assets/p-tabla.jpg";

function SectionHead({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 font-display text-[1.9rem] leading-tight md:text-[2.5rem]">
          {title}
        </h2>
      </div>
      {note && (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          {note}
        </p>
      )}
    </div>
  );
}

/* ---------------- Categories ---------------- */

export function Categories() {
  const small = [
    { img: catKeys, name: "Keyboards & Pianos", count: "Digital pianos, synths, arrangers" },
    { img: catDrums, name: "Drums & Percussion", count: "Acoustic kits, electronic pads, cajóns" },
    { img: catIndian, name: "Indian Classical", count: "Tabla, veena, harmonium, mridangam" },
  ];

  return (
    <section id="categories" className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <SectionHead
          eyebrow="Shop by category"
          title="What we keep on the floor"
          note="Every instrument on this page can be played in the shop before you buy it."
        />
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <a href="#instruments" className="group block h-full">
            <div className="relative h-[420px] overflow-hidden md:h-full md:min-h-[520px]">
              <img
                src={catGuitars}
                alt="Acoustic guitar strings and sound hole"
                width={1200}
                height={1400}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,17,14,0.75),transparent_55%)]" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="font-display text-2xl text-ivory md:text-3xl">
                  Guitars & Basses
                </h3>
                <p className="mt-1 text-sm text-ivory/70">
                  Acoustic, electric, classical, ukulele and amplification
                </p>
              </div>
            </div>
          </a>
        </Reveal>

        <div className="grid gap-4 md:col-span-5">
          {small.map((c, i) => (
            <Reveal key={c.name} delay={i * 80}>
              <a href="#instruments" className="group block">
                <div className="relative h-[190px] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    width={1000}
                    height={700}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,17,14,0.7),transparent_60%)]" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="font-display text-xl text-ivory">{c.name}</h3>
                    <p className="mt-0.5 text-xs text-ivory/65">{c.count}</p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured instruments ---------------- */

const products = [
  {
    img: pAcoustic,
    brand: "Yamaha",
    name: "F310 Dreadnought Acoustic",
    price: "₹ 9,990",
    stock: "In stock",
  },
  {
    img: pPiano,
    brand: "Casio",
    name: "CDP-S110 Digital Piano, 88 keys",
    price: "₹ 38,500",
    stock: "In stock",
  },
  {
    img: pViolin,
    brand: "Granada",
    name: "4/4 Violin Outfit with bow & case",
    price: "₹ 12,400",
    stock: "2 left",
  },
  {
    img: pTabla,
    brand: "Mukta",
    name: "Sheesham Tabla Pair, tuned",
    price: "₹ 15,800",
    stock: "Order on request",
  },
];

export function Featured() {
  return (
    <section id="instruments" className="border-t border-border bg-sand/40">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <SectionHead
            eyebrow="Featured instruments"
            title="A few things worth playing this month"
            note="Prices shown are indicative demo listings. Call the store for current stock and final pricing."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-6">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 70}>
              <article className="group flex h-full flex-col">
                <div className="overflow-hidden border border-border bg-card">
                  <img
                    src={p.img}
                    alt={`${p.brand} ${p.name}`}
                    width={900}
                    height={900}
                    loading="lazy"
                    className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-4 text-xs tracking-wide text-muted-foreground">
                  {p.brand}
                </p>
                <h3 className="mt-1 font-sans text-[0.95rem] leading-snug font-medium">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-baseline justify-between gap-2">
                  <span className="text-[0.95rem]">{p.price}</span>
                  <span className="text-xs text-muted-foreground">{p.stock}</span>
                </div>
                <a
                  href="#contact"
                  className="mt-3 inline-block self-start border-b border-foreground/30 pb-0.5 text-sm transition-colors hover:border-champagne hover:text-champagne"
                >
                  View product
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Music school ---------------- */

export function School() {
  const courses = [
    ["Guitar", "Acoustic, electric and classical, beginner to grade level"],
    ["Keyboard & Piano", "Western theory alongside practical playing"],
    ["Drums", "Rudiments, groove and band practice"],
    ["Carnatic Vocal & Tabla", "Traditional lessons with local teachers"],
  ];

  return (
    <section id="school" className="border-t border-border">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <img
            src={school}
            alt="A teacher guiding a student through a guitar lesson"
            width={1200}
            height={912}
            loading="lazy"
            className="h-full max-h-[520px] w-full object-cover"
          />
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow">Harmony Music School</p>
          <h2 className="mt-2 font-display text-[1.9rem] leading-tight md:text-[2.5rem]">
            Lessons in the room behind the shop
          </h2>
          <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-muted-foreground">
            We teach small batches and one-to-one classes for children and
            adults. Students practise on the same instruments we sell, and can
            borrow one while they learn.
          </p>

          <dl className="mt-8 divide-y divide-border border-y border-border">
            {courses.map(([title, desc]) => (
              <div key={title} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                <dt className="w-48 shrink-0 text-[0.95rem] font-medium">{title}</dt>
                <dd className="text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#contact"
            className="mt-8 inline-block bg-foreground px-6 py-3 text-sm text-primary-foreground transition-colors hover:bg-foreground/90"
          >
            Ask about class timings
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

export function Services() {
  return (
    <section id="services" className="border-t border-border bg-ink text-ivory">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-[0.7rem] tracking-[0.14em] text-ivory/50">
              REPAIR & SETUP
            </p>
            <h2 className="mt-2 font-display text-[1.9rem] leading-tight text-ivory md:text-[2.4rem]">
              Bring it in, we'll look at it
            </h2>
            <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-ivory/70">
              String changes, fret and action setup, electronics and jack
              repairs, keyboard servicing, tabla re-skinning and harmonium
              tuning. Most small jobs are done in-store.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ivory/70">
              <li>Guitar setup and restringing</li>
              <li>Pickup, jack and wiring repair</li>
              <li>Keyboard and amplifier servicing</li>
              <li>Tabla, mridangam and harmonium work</li>
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-block border-b border-champagne pb-0.5 text-sm text-champagne"
            >
              Request a repair estimate
            </a>
          </Reveal>

          <Reveal delay={80} className="md:border-l md:border-ivory/15 md:pl-16">
            <p className="text-[0.7rem] tracking-[0.14em] text-ivory/50">RENTALS</p>
            <h2 className="mt-2 font-display text-[1.9rem] leading-tight text-ivory md:text-[2.4rem]">
              Rent before you commit
            </h2>
            <p className="mt-4 max-w-prose text-[0.95rem] leading-relaxed text-ivory/70">
              Monthly rentals for students, and short-term hire for events,
              recordings and college functions. Rental amounts can be adjusted
              against a purchase.
            </p>
            <div className="mt-8 overflow-hidden">
              <img
                src={repair}
                alt="A guitar on the workbench during a repair"
                width={1100}
                height={800}
                loading="lazy"
                className="h-56 w-full object-cover md:h-64"
              />
            </div>
            <a
              href="#contact"
              className="mt-6 inline-block border-b border-champagne pb-0.5 text-sm text-champagne"
            >
              Check rental availability
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Store experience + heritage ---------------- */

export function StoreExperience() {
  return (
    <section id="store" className="border-t border-border">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <Reveal className="md:col-span-7">
            <img
              src={store}
              alt="The Harmony Musicals counter and accessory shelves"
              width={1200}
              height={912}
              loading="lazy"
              className="w-full object-cover md:h-[520px]"
            />
            <p className="mt-3 text-xs text-muted-foreground">
              Store photograph placeholder — replace with your own shop photos.
            </p>
          </Reveal>

          <Reveal delay={80} className="md:col-span-5">
            <p className="eyebrow">The store</p>
            <h2 className="mt-2 font-display text-[1.9rem] leading-tight md:text-[2.4rem]">
              We are a real shop in Visakhapatnam
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
              Come in, plug something in, and take your time. Our counter staff
              play too — ask them anything before you decide.
            </p>

            <dl className="mt-8 divide-y divide-border border-y border-border text-sm">
              <div className="py-4">
                <dt className="text-xs tracking-wide text-muted-foreground">Address</dt>
                <dd className="mt-1 leading-relaxed">
                  [Shop address placeholder]
                  <br />
                  Visakhapatnam, Andhra Pradesh
                </dd>
              </div>
              <div className="py-4">
                <dt className="text-xs tracking-wide text-muted-foreground">Phone</dt>
                <dd className="mt-1">[Phone number placeholder]</dd>
              </div>
              <div className="py-4">
                <dt className="text-xs tracking-wide text-muted-foreground">Hours</dt>
                <dd className="mt-1 leading-relaxed">
                  Monday – Saturday: [opening hours placeholder]
                  <br />
                  Sunday: [opening hours placeholder]
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div className="border border-border">
            <iframe
              title="Harmony Musicals location in Visakhapatnam"
              src="https://www.google.com/maps?q=Visakhapatnam&output=embed"
              loading="lazy"
              className="h-[300px] w-full grayscale-[0.35] md:h-[380px]"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Map area placeholder — set to the exact shop pin once confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Heritage() {
  return (
    <section id="about" className="border-t border-border bg-sand/40">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-20 md:grid-cols-12 md:gap-16 md:px-8 md:py-28">
        <Reveal className="md:col-span-5">
          <p className="eyebrow">About Harmony Musicals</p>
          <h2 className="mt-2 font-display text-[1.9rem] leading-tight md:text-[2.4rem]">
            A shop built around the people who play
          </h2>
        </Reveal>
        <Reveal delay={80} className="md:col-span-7">
          <div className="space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
            <p>
              Harmony Musicals began as a small counter selling strings, reeds
              and repair services to the musicians of Visakhapatnam. The shop
              grew the way music shops do — one player at a time, one school
              band at a time.
            </p>
            <p>
              Today we stock instruments for beginners and working musicians,
              run a teaching room behind the showroom, and keep a workbench busy
              with repairs. The website is new; the shop is not.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */

const reviews = [
  {
    quote:
      "They set up my guitar properly instead of just selling me a new one. That is why I keep going back.",
    name: "Ravi K.",
    detail: "Guitarist, Visakhapatnam",
  },
  {
    quote:
      "My daughter started keyboard lessons here two years ago. Patient teachers and honest advice about what to buy.",
    name: "Sridevi M.",
    detail: "Parent",
  },
  {
    quote:
      "Rented a drum kit for a college function at short notice. Delivered on time and in good condition.",
    name: "Arun P.",
    detail: "Event organiser",
  },
];

export function Reviews() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-8 md:py-24">
        <Reveal>
          <p className="eyebrow">Customer reviews</p>
        </Reveal>
        <div className="mt-8 grid gap-8 border-t border-border pt-8 md:grid-cols-3 md:gap-12">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <blockquote className="text-[0.975rem] leading-relaxed">
                “{r.quote}”
              </blockquote>
              <footer className="mt-4 text-sm text-muted-foreground">
                {r.name} — {r.detail}
              </footer>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Sample reviews for layout purposes — replace with verified customer
          feedback.
        </p>
      </div>
    </section>
  );
}
