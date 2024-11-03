"use client"; // Mark this file as a Client Component

import Hero from '@/components/Hero';
import PackageCategories from '@/components/PackageCategories';
import Hajj2025 from '@/components/Hajj2025';
import QuickLinks from '@/components/QuickLinks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <script defer src="https://shown.io/metrics/2E3rPgk79d" type="text/javascript"></script>
      <main className="min-h-screen bg-background">
        <Hero />
        <PackageCategories />
        <Hajj2025 />
        <QuickLinks />
        <Footer />
        
      </main>
    </>
  );
}