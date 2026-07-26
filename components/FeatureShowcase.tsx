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
  w: number;
  h: number;
  side: 'left' | 'right';
};

const FEATURES: Feature[] = [
  {
    key: 'offers',
    tab: 'Automated Offers',
    chartRef: 'MOD-01',
    headline: 'Sell more, while you sleep',
    copy: 'Automated win-back offers reach patients based on their treatment history and browsing behavior — no staff time spent chasing rebookings.',
    image: '/images/automated_offers.png',
    w: 296,
    h: 631,
    side: 'left',
  },
  {
    key: 'financing',
    tab: 'Patient Financing',
    chartRef: 'MOD-02',
    headline: 'Sell the bigger package, without the friction',
    copy: 'Built-in financing at checkout means patients can say yes to the full treatment plan today, splitting payments while you get paid in full upfront.',
    image: '/images/financeing.png',
    w: 298,
    h: 636,
    side: 'left',
  },
  {
    key: 'rewards',
    tab: 'Rewards',
    chartRef: 'MOD-03',
    headline: 'Give patients a reason to come back',
    copy: 'Points on every visit, a cash balance they can see, and rewards that convert straight into their next booking. Loyalty that feels like a perk, not a punch card.',
    image: '/images/rewards.png',
    w: 304,
    h: 642,
    side: 'right',
  },
  {
    key: 'memberships',
    tab: 'Memberships',
    chartRef: 'MOD-04',
    headline: 'The membership that pays for itself',
    copy: 'Turn a single treatment into a monthly plan patients renew on their own. You set the price, the minimum term, and the perks — Vexaapp handles the recurring billing.',
    image: '/images/memberships.png',
    w: 304,
    h: 640,
    side: 'right',
  },
];

function FeatureButton({
  feature,
  active,
  onSelect,
}: {
  feature: Feature;
  active: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`w-full rounded-2xl border px-5 py-4 text-left transition-colors ${
        active
          ? 'border-gold bg-gold/15'
          : 'border-ivory/10 bg-ivory/5 hover:border-ivory/25 hover:bg-ivory/10'
      }`}
    >
      <p className={`font-body text-sm font-semibold ${active ? 'text-gold-light' : 'text-ivory/85'}`}>
        {feature.tab}
      </p>
    </button>
  );
}

export default function FeatureShowcase() {
  const [active, setActive] = useState(FEATURES[3].key); // default: Memberships
  const current = FEATURES.find((f) => f.key === active) ?? FEATURES[0];
  const leftFeatures = FEATURES.filter((f) => f.side === 'left');
  const rightFeatures = FEATURES.filter((f) => f.side === 'right');

  return (
    <section id="features" className="bg-burgundy-dark">
      <div className="mx-auto max-w-content px-4 py-17 lg:px-7 lg:py-20">
        <div className="mb-14 text-center">
          <p className="eyebrow text-gold-light">What patients actually open</p>
          <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
            One app. Four ways it earns.
          </h2>
        </div>

        {/* Mobile: simple tab row above the phone */}
        <div className="mb-8 flex flex-wrap justify-center gap-2 lg:hidden">
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

        {/* Desktop: features split evenly left/right around a centered phone */}
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <div className="hidden flex-col gap-4 lg:flex">
            {leftFeatures.map((f) => (
              <FeatureButton key={f.key} feature={f} active={active === f.key} onSelect={() => setActive(f.key)} />
            ))}
          </div>

          <div className="mx-auto w-full max-w-[280px]">
            <div className="relative">
              <div
                className="absolute inset-0 -z-10 scale-110 rounded-[3rem] opacity-30 blur-3xl transition-colors"
                style={{ background: 'linear-gradient(160deg, #B8895E, #F7F4EF)' }}
              />
              <div key={current.key} className="animate-fadeUp">
                <Image
                  src={current.image}
                  alt={`${current.tab} screen inside the Vexaapp patient app`}
                  width={current.w}
                  height={current.h}
                  className="h-auto w-full drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

          <div className="hidden flex-col gap-4 lg:flex">
            {rightFeatures.map((f) => (
              <FeatureButton key={f.key} feature={f} active={active === f.key} onSelect={() => setActive(f.key)} />
            ))}
          </div>
        </div>

        {/* Copy for the selected feature, centered under the phone */}
        <div key={`${current.key}-copy`} className="animate-fadeUp mx-auto mt-10 max-w-md text-center">
          <p className="font-mono text-[0.7rem] tracking-widest2 text-gold-light">{current.chartRef}</p>
          <h3 className="mt-3 font-display text-2xl italic text-ivory sm:text-3xl">{current.headline}</h3>
          <p className="mt-4 font-body leading-relaxed text-ivory/70">{current.copy}</p>
        </div>
      </div>
    </section>
  );
}
