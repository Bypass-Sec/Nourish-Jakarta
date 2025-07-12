import Link from "next/link"
import { ArrowRight, MapPin, Users, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Fighting Hunger
            <span className="block text-emerald-600">Together in Jakarta</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            AI-powered food distribution connecting communities with free meals. Find nearby community kitchens, donate
            transparently, and help us serve
            <span className="font-semibold text-emerald-600"> 1,000+ meals daily</span> across Jakarta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-3">
              <Link href="/locations" className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Find Food Near Me</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/donate" className="flex items-center space-x-2">
                <span>Donate ₹25 = 1 Meal</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <Utensils className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">12,847</div>
              <div className="text-gray-600">Meals Distributed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <MapPin className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">45</div>
              <div className="text-gray-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <Users className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">94.2%</div>
              <div className="text-gray-600">AI Prediction Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
