import type { Metadata } from 'next';
import { Barlow_Condensed, JetBrains_Mono, Poppins } from 'next/font/google';
import './globals.css';

// the CSS supplies its own generic fallbacks (sans-serif / monospace), as the original Google Fonts link did
const barlow = Barlow_Condensed({ weight: ['500', '600'], subsets: ['latin'], variable: '--font-barlow', adjustFontFallback: false });
const mono = JetBrains_Mono({ weight: ['400', '500'], subsets: ['latin'], variable: '--font-mono', adjustFontFallback: false });
const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'], variable: '--font-poppins', adjustFontFallback: false });

export const metadata: Metadata = {
  title: 'Lefika Moalosi — Teardown',
  description: 'Portfolio of Lefika Moalosi, told as a layer-by-layer teardown of an Nvidia 5090 GPU.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${barlow.variable} ${mono.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
