"use client"

import { Navbar } from "@/components/navigation/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { PortfolioSection } from "@/components/sections/portfolio-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/layout/footer"

export default function TechPortfolio() {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
