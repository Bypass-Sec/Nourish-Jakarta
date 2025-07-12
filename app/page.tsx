import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { LiveDonationCounter } from "@/components/live-donation-counter"
import { FoodLocationMap } from "@/components/food-location-map"
import { DonationWidget } from "@/components/donation-widget"
import { ImpactMetrics } from "@/components/impact-metrics"
import { VolunteerCTA } from "@/components/volunteer-cta"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection />
        <LiveDonationCounter />
        <FoodLocationMap />
        <DonationWidget />
        <ImpactMetrics />
        <VolunteerCTA />
      </main>
      <Footer />
    </div>
  )
}
