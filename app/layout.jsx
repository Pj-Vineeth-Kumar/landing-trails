import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import 'lenis/dist/lenis.css';
import '../src/styles/global.css';
import { SiteShell } from '../components/layout/SiteShell';

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const viewport = {
  themeColor: '#1950C6',
};

export const metadata = {
  metadataBase: new URL('https://www.globalcodio.ai'),
  title: {
    default: 'GlobalCodio | AI Workforce for Global Immigration - Deployed and Managed',
    template: '%s | GlobalCodio',
  },
  description: 'GlobalCodio gives immigration law firms and corporate departments their own AI workforce - built, deployed, and managed end-to-end. Cut costs and grow revenue without managing technology.',
  keywords: ['AI workforce global immigration', 'immigration law firm software', 'immigration case management', 'managed technology operations', 'immigration automation'],
  authors: [{ name: 'GlobalCodio' }],
  creator: 'GlobalCodio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.globalcodio.ai',
    siteName: 'GlobalCodio',
    title: 'GlobalCodio | AI Workforce for Global Immigration',
    description: 'GlobalCodio gives immigration law firms and corporate departments their own AI workforce - built, deployed, and managed end-to-end.',
    images: [{ url: '/assets/dashboard.png', width: 1200, height: 630, alt: 'GlobalCodio platform dashboard' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@globalcodio',
    title: 'GlobalCodio | AI Workforce for Global Immigration',
    description: 'GlobalCodio gives immigration law firms and corporate departments their own AI workforce.',
    images: ['/assets/dashboard.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
