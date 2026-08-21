import heroStore from "@/assets/hero-store.jpg";

export function Hero() {
  return (
    <section id="top" className="relative bg-ink">
      <img
        src={heroStore}
        alt="Guitars on the wall inside the Harmony Musicals showroom"
        width={1600}
        height={1104}
        className="h-[86vh] min-h-[520px] w-full object-cover opacity-80 md:h-[92vh]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,17,14,0.86),rgba(20,17,14,0.35))]" />

      <div className="absolute inset-0 flex items-end">
        <div className="mx-auto w-full max-w-[1180px] px-5 pb-14 md:px-8 md:pb-20">
          <p className="text-[0.7rem] tracking-[0.2em] text-champagne">
            Harmony Musicals &middot; Visakhapatnam
          </p>
          <h1 className="mt-4 max-w-[14ch] font-display text-[3rem] leading-[0.95] text-ivory sm:text-[4rem] md:text-[5.25rem]">
            Find Your Sound.
          </h1>
          <p className="mt-5 max-w-md text-[0.975rem] leading-relaxed text-ivory/75">
            Guitars, keyboards, drums and classical Indian instruments — sold,
            serviced and taught by people who play them every day.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#instruments"
              className="bg-champagne px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-champagne/85"
            >
              Explore Instruments
            </a>
            <a
              href="#store"
              className="border border-ivory/40 px-6 py-3 text-sm text-ivory transition-colors hover:border-ivory"
            >
              Visit Our Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
