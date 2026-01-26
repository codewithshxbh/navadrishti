'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Platform from '@/components/Platform'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import VideoTestimonials from '@/components/VideoTestimonials'
import FAQ from '@/components/FAQ'
import Impact from '@/components/Impact'
import Footer from '@/components/Footer'
import CursorEffect from '@/components/CursorEffect'
import PageLoader from '@/components/PageLoader'
import ScrollProgress from '@/components/ScrollProgress'
import PremiumEffects from '@/components/PremiumEffects'
import ScrollToTop from '@/components/ScrollToTop'

export default function Home() {
  return (
    <>
      <PageLoader />
      <CursorEffect />
      <ScrollProgress />
      <PremiumEffects />
      <Navigation />
      <Hero />
      <About />
      <Platform />
      <Features />
      <Testimonials />
      <VideoTestimonials />
      <FAQ />
      <Impact />
      <Footer />
      <ScrollToTop />
    </>
  )
}
