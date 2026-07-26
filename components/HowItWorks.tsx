const steps = [
  {
    n: '01',
    title: 'We build your branded app',
    detail: 'Send us your logo, colors, services, and pricing. We set up memberships, rewards, financing, and offers under your name — not ours.',
  },
  {
    n: '02',
    title: 'Your app goes live',
    detail: 'Patients download it, join your membership, and start earning rewards from their next visit. No new hardware, no new checkout flow at the desk.',
  },
  {
    n: '03',
    title: 'Recurring revenue on autopilot',
    detail: 'Billing renews itself, offers go out automatically, and you watch repeat visits show up on the dashboard instead of chasing them by phone.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ivory">
      <div className="mx-auto max-w-content px-4 py-17 lg:px-7 lg:py-22">
        <p className="eyebrow text-burgundy">The setup</p>
        <h2 className="mt-4 max-w-lg font-display text-3xl text-charcoal sm:text-4xl">
          From your logo to a live app, in three steps.
        </h2>

        <div className="mt-16 grid gap-10 border-t border-charcoal/10 pt-12 sm:grid-cols-3 sm:gap-8">
          {steps.map((s) => (
            <div key={s.n}>
              <p className="font-display text-2xl text-gold">{s.n}</p>
              <h3 className="mt-3 font-body text-lg font-semibold text-charcoal">{s.title}</h3>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-charcoal/60">
                {s.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
