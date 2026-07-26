const verticals = [
  'Med spas',
  'GLP-1 & weight loss clinics',
  'Regenerative medicine',
  'IV therapy',
  'Peptide & hormone clinics',
  'Aesthetic & dermatology practices',
];

export default function BuiltFor() {
  return (
    <section id="built-for" className="bg-burgundy-dark">
      <div className="mx-auto max-w-content px-4 py-17 lg:px-7 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          <div>
            <p className="eyebrow text-gold-light">Not a generic membership tool</p>
            <h2 className="mt-4 font-display text-3xl italic text-ivory sm:text-4xl">
              Built for clinics that sell results, not retail.
            </h2>
            <p className="mt-5 font-body leading-relaxed text-ivory/65">
              Generic loyalty apps are built for coffee shops. Vexaapp is built around
              treatment plans, financing, and the repeat-visit cycle that aesthetic and
              wellness clinics actually run on.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {verticals.map((v) => (
              <div
                key={v}
                className="rounded-2xl border border-ivory/10 bg-ivory/5 px-4 py-5 font-body text-sm text-ivory/80"
              >
                {v}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
