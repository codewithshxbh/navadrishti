'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Platform from '@/components/Platform';
import Services from '@/components/Services';
import WhyNavadrishti from '@/components/WhyNavadrishti';
import WorkWith from '@/components/WorkWith';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import PremiumEffects from '@/components/PremiumEffects';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <PremiumEffects />
      <Navigation />
      <Hero />
      <About />
      <Platform />
      <Services />
      <WhyNavadrishti />
      <WorkWith />
      <Footer />
      <ScrollToTop />
    </>
  );
}
