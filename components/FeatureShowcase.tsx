'use client';

import { useState } from 'react';
import Image from 'next/image';

type Feature = {
  key: string;
  tab: string;
  chartRef: string;
  headline: string;
  copy: string;
  image: string;
};

const FEATURES: Feature[] = [
  {
    key: 'memberships',
    tab: 'Memberships',
    chartRef: 'MOD-01',
    headline: 'The membership that pays for itself',
    copy: 'Turn a single treatment into a monthly plan patients renew on their own. You set the price, the minimum term, and the perks — Vexaapp handles the recurring billing.',
    image: '/images/memberships.png',
  },
  {
    key: 'rewards',
    tab: 'Rewards',
    chartRef: 'MOD-02',
    headline: 'Give patients a reason to come back',
    copy: 'Points on every visit, a cash balance they can see, and rewards that convert straight into their next booking. Loyalty that feels like a perk, not a punch card.',
    image: '/images/rewards.png',
  },
  {
    key: 'financing',
    tab: 'Patient Financing',
    chartRef: 'MOD-03',
    headline: 'Sell the bigger package, without the friction',
    copy: 'Built-in financing at checkout means patients can say yes to the full treatment plan today, splitting payments while you get paid in full upfront.',
    image: '/images/financeing.png',
  },
  {
    key: 'offers',
    tab: 'Automated Offers',
    chartRef: 'MOD-04',
    headline: 'Sell more, while you sleep',
    copy: 'Automated win-back offers reach patients based on their treatment history and browsing behavior — no staff time spent chasing rebookings.',
    image: '/images/automated_offers.png',
  },
];

export default function FeatureShowcase() {
  const [active, setActive] = useState(FEATURES[0].key);
  const current = FEATURES.find((f) => f.key === active) ?? FEATURES[0];

  return (
    <section id="features" className="bg-charcoal">
      <div className="mx-auto max-w-content px-6 py-24 lg:px-10 lg:py-32">
        <div className="mb-14 max-w-xl">
          <p className="eyebrow text-gold-light">What patients actually open</p>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
            One app. Four ways it earns.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Tabs + copy */}
          <div>
            <div className="flex flex-wrap gap-2 border-b border-ivory/10 pb-6 sm:gap-3">
              {FEATURES.map((f) => (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`rounded-full px-4 py-2 font-body text-sm transition-colors ${
                    active === f.key
                      ? 'bg-gold text-charcoal font-semibold'
                      : 'bg-ivory/5 text-ivory/60 hover:bg-ivory/10 hover:text-ivory'
                  }`}
                >
                  {f.tab}
                </button>
              ))}
            </div>

            <div key={current.key} className="animate-fadeUp mt-8">
              <p className="font-mono text-[0.7rem] tracking-widest2 text-gold-light">
                {current.chartRef}
              </p>
              <h3 className="mt-3 font-display text-2xl italic text-ivory sm:text-3xl">
                {current.headline}
              </h3>
              <p className="mt-4 max-w-md font-body leading-relaxed text-ivory/65">
                {current.copy}
              </p>
              <a
                href="#book"
                className="mt-7 inline-block border-b border-gold-light pb-0.5 font-body text-sm font-medium text-gold-light transition-colors hover:text-gold"
              >
                See it on a call →
              </a>
            </div>
          </div>

          {/* Phone: the real screenshot, swapped by tab. No rebuilt UI here. */}
          <div className="relative mx-auto w-full max-w-[300px]">
            <div
              className="absolute inset-0 -z-10 scale-110 rounded-[3rem] opacity-30 blur-3xl transition-colors"
              style={{ background: 'linear-gradient(160deg, #B8895E, #6D1F3A)' }}
            />
            <div key={current.key} className="animate-fadeUp">
              <Image
                src={current.image}
                alt={`${current.tab} screen inside the Vexaapp patient app`}
                width={620}
                height={1266}
                className="w-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
