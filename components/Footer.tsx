import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-ivory">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-6 border-t border-charcoal/10 px-6 py-10 text-center sm:flex-row sm:text-left lg:px-10">
        <div className="flex items-center gap-2.5">
          <Image src="/images/Vexaapp_New_Logo.png" alt="Vexaapp" width={26} height={26} />
          <span className="font-display text-base font-semibold text-charcoal">Vexaapp</span>
        </div>
        <p className="font-body text-xs text-charcoal/50">
          © {new Date().getFullYear()} Vexaapp. The patient retention app for aesthetic &amp; wellness clinics.
        </p>
      </div>
    </footer>
  );
}
