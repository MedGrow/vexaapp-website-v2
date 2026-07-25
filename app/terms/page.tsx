import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service — Vexaapp',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" updated="[DATE]">
      <p className="italic text-charcoal/50">
        This is a starting draft, not legal advice. Have a lawyer review and finalize this
        before relying on it for verification, compliance, or launch — especially the
        sections on billing, financing, and liability, since Vexaapp handles patient
        payment data.
      </p>

      <section>
        <h2 className="font-display text-xl text-charcoal">1. Who this agreement is with</h2>
        <p className="mt-2">
          These Terms of Service (&quot;Terms&quot;) are an agreement between [Legal company
          name], a company registered in [jurisdiction] (&quot;Vexaapp,&quot; &quot;we,&quot;
          &quot;us&quot;), and the clinic or business (&quot;Customer,&quot; &quot;you&quot;)
          that signs up for Vexaapp&apos;s white-label patient app platform.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">2. The service</h2>
        <p className="mt-2">
          Vexaapp provides a white-labeled mobile application platform enabling clinics to
          offer memberships, loyalty rewards, patient financing options, and automated
          patient offers to their end patients (&quot;Patients&quot;). Vexaapp is a
          technology provider; the underlying clinical services are provided solely by the
          Customer.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">3. Fees and billing</h2>
        <p className="mt-2">
          Customer agrees to pay the one-time setup fee and recurring monthly subscription
          fee set out at signup. Fees are billed in advance and are non-refundable except as
          required by law. Vexaapp may change pricing with [30] days&apos; notice for future
          billing cycles.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">4. Patient financing &amp; payments</h2>
        <p className="mt-2">
          Where Vexaapp facilitates patient financing or checkout through third-party
          payment processors (e.g. Klarna, card networks), those transactions are subject
          to the applicable processor&apos;s own terms. Vexaapp is not a lender and does not
          guarantee approval or terms of any financing offer.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">5. Acceptable use</h2>
        <p className="mt-2">
          Customer agrees not to use Vexaapp to send misleading offers, discriminatory
          pricing, or content that violates healthcare advertising regulations applicable
          to their jurisdiction. Customer is responsible for the accuracy of all pricing,
          treatment descriptions, and membership terms configured in their app.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">6. Data</h2>
        <p className="mt-2">
          Vexaapp processes Patient data on Customer&apos;s behalf as described in our{' '}
          <a href="/privacy/" className="text-burgundy underline">
            Privacy Policy
          </a>
          . Customer represents that it has the necessary consent from Patients to share
          their data with Vexaapp for the purposes of operating the app.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">7. Term &amp; termination</h2>
        <p className="mt-2">
          These Terms remain in effect until terminated by either party with [30] days&apos;
          written notice. Vexaapp may suspend the service immediately for non-payment or
          violation of these Terms.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">8. Limitation of liability</h2>
        <p className="mt-2">
          To the maximum extent permitted by law, Vexaapp&apos;s total liability arising out
          of these Terms is limited to the fees paid by Customer in the [12] months
          preceding the claim. Vexaapp is not liable for indirect, incidental, or
          consequential damages.
        </p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">9. Governing law</h2>
        <p className="mt-2">These Terms are governed by the laws of [jurisdiction].</p>
      </section>

      <section>
        <h2 className="font-display text-xl text-charcoal">10. Contact</h2>
        <p className="mt-2">Questions about these Terms: [support email].</p>
      </section>
    </LegalLayout>
  );
}
