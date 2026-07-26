import type { Metadata } from 'next';
import Script from 'next/script';
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
  display: 'swap',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vexaapp — The Patient Retention App for Aesthetic & Wellness Clinics',
  description:
    'Vexaapp turns your one-time patients into recurring revenue with a white-labeled app: memberships, rewards, financing, and automated win-back offers — live in 24 hours.',
  openGraph: {
    title: 'Vexaapp — The Patient Retention App for Aesthetic & Wellness Clinics',
    description:
      'Vexaapp turns your one-time patients into recurring revenue with a white-labeled app: memberships, rewards, financing, and automated win-back offers — live in 24 hours.',
    url: 'https://vexaapp.net',
    type: 'website',
    images: [
      {
        url: 'https://vexaapp.net/images/Vexaapp_New_Logo.png',
        width: 200,
        height: 200,
        alt: 'Vexaapp Logo',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <body className="font-body antialiased">
        {children}

        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a657650f1929b03b04f4d01"
          data-source="WEB_USER"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
