import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Smartlook from './components/Smartlook';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hajj & Umrah Packages - Find Trusted Providers',
  description: 'Compare verified Hajj and Umrah package providers in your city. Get the best deals on packages starting from ₹75,000.',
  keywords: 'hajj packages, umrah packages, islamic pilgrimage, makkah packages, madina packages',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-16476185607`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16476185607');
          `}
        </Script>
        <Smartlook />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}