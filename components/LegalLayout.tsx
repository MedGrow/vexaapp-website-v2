import Link from 'next/link';
import Image from 'next/image';

export default function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ivory">
      <header className="border-b border-charcoal/10 px-6 py-5 lg:px-10">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/images/vexaapp-logo-full.png"
            alt="Vexaapp"
            width={1971}
            height={529}
            className="h-8 w-auto"
          />
        </Link>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:px-10">
        <p className="eyebrow text-burgundy">Vexaapp</p>
        <h1 className="mt-3 font-display text-3xl text-charcoal sm:text-4xl">{title}</h1>
        <p className="mt-2 font-body text-sm text-charcoal/50">Last updated: {updated}</p>

        <div className="prose-legal mt-10 space-y-8 font-body text-[0.95rem] leading-relaxed text-charcoal/75">
          {children}
        </div>
      </main>

      <footer className="border-t border-charcoal/10 px-6 py-8 text-center lg:px-10">
        <Link href="/" className="font-body text-sm text-burgundy underline hover:text-burgundy-dark">
          ← Back to Vexaapp
        </Link>
      </footer>
    </div>
  );
}
