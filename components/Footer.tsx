import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 border-t border-charcoal/10 px-6 py-10 text-center sm:flex-row sm:text-left lg:px-10">
        <Image
          src="/images/vexaapp-logo-full.png"
          alt="Vexaapp"
          width={1971}
          height={529}
          className="h-7 w-auto"
        />
        <div className="flex flex-col items-center gap-2 sm:items-end">
          <p className="font-body text-xs text-charcoal/50">
            © {new Date().getFullYear()} Vexaapp. The patient retention app for aesthetic &amp; wellness clinics.
          </p>
          <div className="flex gap-4">
            <a href="/terms/" className="font-body text-xs text-charcoal/50 underline hover:text-burgundy">
              Terms of Service
            </a>
            <a href="/privacy/" className="font-body text-xs text-charcoal/50 underline hover:text-burgundy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
