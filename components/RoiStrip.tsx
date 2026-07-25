const items = [
  {
    figure: '1×',
    label: 'Treatment today',
    detail: 'A patient pays once, leaves, and you hope they rebook.',
  },
  {
    figure: '12×',
    label: 'A year on membership',
    detail: 'The same patient, billed monthly, coming back on a schedule you set.',
  },
  {
    figure: '24h',
    label: 'To launch your app',
    detail: 'We import your brand, pricing, and services — no build queue.',
  },
];

export default function RoiStrip() {
  return (
    <section className="border-y border-charcoal/10 bg-ivory">
      <div className="mx-auto grid max-w-content gap-10 px-6 py-14 sm:grid-cols-3 lg:px-10">
        {items.map((item) => (
          <div key={item.label} className="text-center sm:text-left">
            <p className="font-display text-4xl text-burgundy">{item.figure}</p>
            <p className="mt-2 font-body text-sm font-semibold text-charcoal">{item.label}</p>
            <p className="mt-1.5 font-body text-sm leading-relaxed text-charcoal/60">
              {item.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
