'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Platform from '@/components/Platform';
import Features from '@/components/Features';
import VideoTestimonials from '@/components/VideoTestimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import CursorEffect from '@/components/CursorEffect';
import ScrollProgress from '@/components/ScrollProgress';
import PremiumEffects from '@/components/PremiumEffects';
import ScrollToTop from '@/components/ScrollToTop';

export default function Home() {
  return (
    <>
      <CursorEffect />
      <ScrollProgress />
      <PremiumEffects />
      <Navigation />
      <Hero />
      <About />
      <Platform />
      <Features />
      <VideoTestimonials />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </>
  );
}
