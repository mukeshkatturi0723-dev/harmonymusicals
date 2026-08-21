export function Footer() {
  return (
    <footer id="contact" className="bg-ink text-ivory">
      <div className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <h2 className="font-display text-[1.9rem] leading-tight text-ivory md:text-[2.4rem]">
              Come by, or send us a message
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-ivory/70">
              Tell us what you play and what you're looking for. We'll reply
              with availability and pricing.
            </p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <label htmlFor="name" className="block text-xs text-ivory/60">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full border-b border-ivory/25 bg-transparent py-2 text-sm text-ivory outline-none focus:border-champagne"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-ivory/60">
                  Phone or email
                </label>
                <input
                  id="phone"
                  name="phone"
                  required
                  className="mt-1 w-full border-b border-ivory/25 bg-transparent py-2 text-sm text-ivory outline-none focus:border-champagne"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs text-ivory/60">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="mt-1 w-full resize-none border-b border-ivory/25 bg-transparent py-2 text-sm text-ivory outline-none focus:border-champagne"
                />
              </div>
              <button
                type="submit"
                className="bg-champagne px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-champagne/85"
              >
                Send enquiry
              </button>
            </form>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-6 md:col-start-8">
            <div>
              <p className="text-[0.7rem] tracking-[0.14em] text-ivory/45">STORE</p>
              <address className="mt-3 text-sm leading-relaxed text-ivory/75 not-italic">
                Harmony Musicals
                <br />
                [Shop address placeholder]
                <br />
                Visakhapatnam, Andhra Pradesh
                <br />
                <br />
                [Phone number placeholder]
                <br />
                [Email placeholder]
              </address>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.14em] text-ivory/45">BROWSE</p>
              <ul className="mt-3 space-y-2 text-sm text-ivory/75">
                <li>
                  <a href="#categories" className="hover:text-ivory">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#instruments" className="hover:text-ivory">
                    Instruments
                  </a>
                </li>
                <li>
                  <a href="#school" className="hover:text-ivory">
                    Music school
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-ivory">
                    Repair & rental
                  </a>
                </li>
                <li>
                  <a href="#store" className="hover:text-ivory">
                    Visit the store
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Harmony Musicals, Visakhapatnam</span>
          <span>Product listings and reviews shown are demo content.</span>
        </div>
      </div>
    </footer>
  );
}
