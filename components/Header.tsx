import Image from 'next/image';

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Built for clinics', href: '#built-for' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2.5">
          <Image src="/images/Vexaapp_New_Logo.png" alt="Vexaapp" width={34} height={34} priority />
          <span className="font-display text-xl font-semibold tracking-tight text-charcoal">
            Vexaapp
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-body text-sm text-charcoal/70 transition-colors hover:text-burgundy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="rounded-full bg-burgundy px-5 py-2.5 font-body text-sm font-medium text-ivory transition-all hover:bg-burgundy-dark"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
