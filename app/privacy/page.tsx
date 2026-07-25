import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy — Vexaapp',
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="[DATE]">
      <p className="italic text-charcoal/50">
        This is a starting draft, not legal advice. Have a lawyer review this before relying
        on it for verification, compliance, or launch — particularly around patient health
        and payment data, which may be subject to regulations like HIPAA, GDPR, or
        equivalent local law depending on where you and your clinics operate.
      </p>

      <section>
        <h2 className="font-display text-xl text-charcoal">1. Who this applies to</h2>
        <p className="mt-2">
          This Privacy Policy explains how [Legal company name] (&quot;Vexaapp,&quot;
          &quot;we&quot;) collects and uses information from (a) clinics that use our
          platform (&quot;Customers&quot;) and (b) patients who use a Vexaapp-powered app
          (&quot;Patients&quot;). Vexaapp acts as a data processor for Patient data on
          behalf of the Customer, and as a data controller for Customer account data.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">2. Information we collect</h2>
        <ul className="mt-2 list-disc space-y-1.5 pl-5">
          <li>Customer account details: business name, contact info, billing info.</li>
          <li>
            Patient profile data entered into the app: name, contact info, membership and
            rewards activity, treatment history relevant to offers, and payment tokens
            (never full card numbers — handled by our payment processors).
          </li>
          <li>Usage data: how the app is used, for analytics and product improvement.</li>
        </ul>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">3. How we use information</h2>
        <p className="mt-2">
          To operate the membership, rewards, financing, and automated offer features;
          to process payments through third-party processors; to provide customer support;
          and to improve the platform. We do not sell Patient data to third parties.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">4. Third-party processors</h2>
        <p className="mt-2">
          We rely on third-party providers for payments and financing (e.g. Klarna, card
          processors), hosting and infrastructure (e.g. Cloudflare), and analytics. These
          providers process data under their own privacy terms and only to the extent
          necessary to provide their service to us.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">5. Data retention</h2>
        <p className="mt-2">
          We retain Patient and Customer data for as long as the Customer account is active,
          and for a limited period afterward as required for legal, tax, or dispute-resolution
          purposes, after which it is deleted or anonymized.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">6. Your rights</h2>
        <p className="mt-2">
          Depending on your location, you may have the right to access, correct, or delete
          your personal data, or object to certain processing. Patients should contact their
          clinic first, since the clinic controls their account; clinics can reach us at
          [support email].
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">7. Security</h2>
        <p className="mt-2">
          We use industry-standard safeguards to protect data in transit and at rest.
          No system is perfectly secure, and we encourage Customers to use strong,
          unique credentials for their accounts.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">8. Changes to this policy</h2>
        <p className="mt-2">
          We may update this policy from time to time. Material changes will be
          communicated to Customers by email or in-app notice.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">9. Contact</h2>
        <p className="mt-2">Questions about this policy: [support email].</p>
      </section>
    </LegalLayout>
  );
}
