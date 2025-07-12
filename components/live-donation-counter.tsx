"use client"

import { useState, useEffect } from "react"
import { TrendingUp, Users, Utensils } from "lucide-react"

export function LiveDonationCounter() {
  const [donations, setDonations] = useState({
    total: 2847650,
    today: 45230,
    mealsProvided: 113906,
    activeDonors: 1247,
  })

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDonations((prev) => ({
        total: prev.total + Math.floor(Math.random() * 500) + 100,
        today: prev.today + Math.floor(Math.random() * 100) + 25,
        mealsProvided: prev.mealsProvided + Math.floor(Math.random() * 20) + 5,
        activeDonors: prev.activeDonors + (Math.random() > 0.7 ? 1 : 0),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section className="bg-emerald-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Live Impact Dashboard</h2>
          <p className="text-emerald-100 text-lg">Real-time transparency - see your donations at work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total Donations */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold mb-2">{formatCurrency(donations.total)}</div>
            <div className="text-emerald-100 text-sm">Total Raised</div>
            <div className="text-xs text-emerald-200 mt-1">All time</div>
          </div>

          {/* Today's Donations */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold mb-2">{formatCurrency(donations.today)}</div>
            <div className="text-emerald-100 text-sm">Raised Today</div>
            <div className="text-xs text-emerald-200 mt-1">+{Math.floor(donations.today / 25)} meals funded</div>
          </div>

          {/* Meals Provided */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
              <Utensils className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold mb-2">{donations.mealsProvided.toLocaleString()}</div>
            <div className="text-emerald-100 text-sm">Meals Provided</div>
            <div className="text-xs text-emerald-200 mt-1">₹25 = 1 nutritious meal</div>
          </div>

          {/* Active Donors */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-2xl font-bold mb-2">{donations.activeDonors.toLocaleString()}</div>
            <div className="text-emerald-100 text-sm">Active Donors</div>
            <div className="text-xs text-emerald-200 mt-1">This month</div>
          </div>
        </div>

        {/* Live Update Indicator */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-emerald-100">Live updates every 5 seconds</span>
          </div>
        </div>
      </div>
    </section>
  )
}
