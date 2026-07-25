export default function BookingSection() {
  return (
    <section id="book" className="bg-ivory">
      <div className="mx-auto max-w-content px-6 py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch lg:gap-16">
          {/* Left: copy + CTA */}
          <div className="flex flex-col justify-center">
            <p className="eyebrow text-burgundy">Let&apos;s talk</p>
            <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
              See your clinic&apos;s app before you commit to anything.
            </h2>
            <p className="mt-5 max-w-md font-body leading-relaxed text-charcoal/65">
              Book a 15-minute call. We&apos;ll walk through memberships, rewards, and
              financing set up for your services and pricing — you&apos;ll see exactly
              what your patients would see.
            </p>

            <ul className="mt-8 space-y-3 font-body text-sm text-charcoal/70">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                No pressure, no scripted pitch
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Pick any time that works on your calendar
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                Free to look at — no card, no obligation
              </li>
            </ul>
          </div>

          {/* Right: embedded booking calendar */}
          <div className="min-h-[640px] overflow-hidden rounded-3xl border border-charcoal/10 bg-white shadow-xl shadow-charcoal/5">
            <iframe
              src="https://my.vexaapp.net/book-call-page"
              title="Book a call with Vexaapp"
              className="h-full min-h-[640px] w-full"
              loading="lazy"
            />
          </div>
          {/*
            If your booking host sends an X-Frame-Options / CSP header that blocks
            framing, the iframe above will render blank. Test this after deploy —
            if it's blocked, swap the <iframe> for a button linking to the same
            URL with target="_blank", or ask your booking provider to allowlist
            your domain for embedding.
          */}
        </div>
      </div>
    </section>
  );
}
