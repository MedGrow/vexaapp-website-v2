'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Is this a native app or a browser page?',
    a: 'It\u2019s a real app under your clinic\u2019s name, built on Vexaapp\u2019s platform. Patients get the app-store experience without you building or maintaining a native app yourself.',
  },
  {
    q: 'How long until it\u2019s live?',
    a: 'Most clinics are live within 24 hours of sending over their brand, services, and pricing. You review it before it goes out to patients.',
  },
  {
    q: 'Do we need to change how we take payments in-clinic?',
    a: 'No. Vexaapp runs alongside your existing point-of-sale — memberships, rewards, and financing happen in the app, not at your front desk.',
  },
  {
    q: 'What does it cost?',
    a: 'A one-time setup fee plus a monthly subscription. We\u2019ll walk through exact pricing for your clinic size and services on the call.',
  },
  {
    q: 'Can we set our own membership prices and rules?',
    a: 'Yes. You control pricing, minimum commitment terms, and which treatments are included — Vexaapp handles the billing and renewals underneath.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-charcoal">
      <div className="mx-auto max-w-content px-6 py-24 lg:px-10 lg:py-28">
        <p className="eyebrow text-gold-light">Questions</p>
        <h2 className="mt-4 font-display text-3xl text-ivory sm:text-4xl">
          Before you book the call
        </h2>

        <div className="mt-12 divide-y divide-ivory/10 border-t border-ivory/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-body text-base font-medium text-ivory sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 font-display text-2xl text-gold-light transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="max-w-2xl pb-6 font-body text-sm leading-relaxed text-ivory/60">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
