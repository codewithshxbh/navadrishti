'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Platform from '@/components/Platform'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Impact from '@/components/Impact'
import Footer from '@/components/Footer'
import CursorEffect from '@/components/CursorEffect'
import PageLoader from '@/components/PageLoader'
import ScrollProgress from '@/components/ScrollProgress'
import PremiumEffects from '@/components/PremiumEffects'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    console.log('Navadrishti Portfolio - Senior Developer Edition Loaded')
    console.log('Advanced Effects: Custom Cursor, Page Loader, Smooth Animations')
    console.log('Performance: 60fps animations, GPU-accelerated')
  }, [])

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
      <FAQ />
      <Impact />
      <Footer />
    </>
  )
}
