import Image from 'next/image';

export default function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-burgundy-dark">
      <div
        className="pointer-events-none absolute -right-40 top-0 h-[560px] w-[560px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #B8895E 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #F7F4EF 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto grid max-w-content items-center gap-14 px-4 py-11 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-7 lg:py-17">
        <div className="animate-fadeUp">
          <p className="eyebrow mb-6 text-gold-light">White-label patient app · Built for aesthetics &amp; wellness</p>
          <h1 className="font-display text-4xl leading-[1.08] text-ivory sm:text-5xl lg:text-[3.4rem]">
            Your patients open an app.
            <br />
            <span className="italic text-gold-light">It happens to be yours.</span>
          </h1>
          <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-ivory/75">
            Vexaapp is a branded membership, rewards, and financing app for your clinic —
            live in 24 hours, working while you sleep to bring one-time patients back on repeat.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-gold px-7 py-3.5 font-body text-sm font-semibold text-charcoal transition-transform hover:scale-[1.03] hover:bg-gold-light"
            >
              Book a call
            </a>
            <a
              href="#features"
              className="rounded-full border border-ivory/25 px-7 py-3.5 font-body text-sm font-medium text-ivory/90 transition-colors hover:border-ivory/60"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 font-mono text-[0.7rem] uppercase tracking-widest2 text-ivory/45">
            <span>No app-store account needed</span>
            <span className="h-1 w-1 rounded-full bg-ivory/30" />
            <span>Your brand, not ours</span>
          </div>
        </div>

        {/* Phone: real screenshot, kept in a proper safe zone so it never overflows or stretches */}
        <div className="mx-auto flex w-full max-w-[260px] justify-center self-center sm:max-w-[280px] lg:max-w-[300px]">
          <div className="relative w-full animate-drift">
            <div
              className="absolute inset-0 -z-10 scale-110 rounded-[3rem] opacity-35 blur-2xl"
              style={{ background: 'linear-gradient(160deg, #B8895E, #F7F4EF)' }}
            />
            <Image
              src="/images/memberships.png"
              alt="Vexaapp membership screen inside the patient app"
              width={304}
              height={640}
              className="h-auto w-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
