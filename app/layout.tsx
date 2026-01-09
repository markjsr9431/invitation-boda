import type { Metadata, Viewport } from 'next';
import { Montserrat, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Invitación de Boda - Andrés Felipe & María Isabel',
  description: 'Invitación de boda de Andrés Felipe Rubio Castro y María Isabel Marín - 17 de Mayo de 2026',
  icons: {
    icon: '/icon.svg',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${montserrat.variable} ${inter.variable} ${playfairDisplay.variable}`}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}

