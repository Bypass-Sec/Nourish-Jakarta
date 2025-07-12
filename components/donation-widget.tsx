"use client"

import { useState } from "react"
import { Heart, CreditCard, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const donationAmounts = [
  { amount: 25, meals: 1, popular: false },
  { amount: 50, meals: 2, popular: false },
  { amount: 100, meals: 4, popular: true },
  { amount: 250, meals: 10, popular: false },
  { amount: 500, meals: 20, popular: false },
]

export function DonationWidget() {
  const [selectedAmount, setSelectedAmount] = useState(100)
  const [isRecurring, setIsRecurring] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"midtrans" | "stripe">("midtrans")

  const handleDonate = () => {
    // Integration with payment processors
    console.log("Processing donation:", {
      amount: selectedAmount,
      recurring: isRecurring,
      paymentMethod,
    })
  }

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Make a Difference Today</h2>
          <p className="text-xl text-gray-600">Every ₹25 provides one nutritious meal to someone in need</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Amount Selection */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Amount</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {donationAmounts.map(({ amount, meals, popular }) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`relative p-4 rounded-lg border-2 transition-all ${
                    selectedAmount === amount
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-200 hover:border-emerald-300"
                  }`}
                >
                  {popular && <Badge className="absolute -top-2 -right-2 bg-emerald-500">Popular</Badge>}
                  <div className="text-lg font-bold text-gray-900">₹{amount}</div>
                  <div className="text-sm text-gray-600">
                    {meals} meal{meals > 1 ? "s" : ""}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Recurring Option */}
          <div className="mb-8">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="recurring"
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
              />
              <label htmlFor="recurring" className="text-gray-700">
                Make this a monthly donation
              </label>
              {isRecurring && <Badge className="bg-emerald-100 text-emerald-800">12x Impact!</Badge>}
            </div>
            {isRecurring && (
              <p className="text-sm text-gray-600 mt-2 ml-7">
                Monthly donations help us plan better and provide consistent support
              </p>
            )}
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Method</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod("midtrans")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "midtrans"
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Smartphone className="w-6 h-6 text-emerald-600" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Midtrans</div>
                    <div className="text-sm text-gray-600">Indonesian payments</div>
                  </div>
                </div>
              </button>
              <button
                onClick={() => setPaymentMethod("stripe")}
                className={`p-4 rounded-lg border-2 transition-all ${
                  paymentMethod === "stripe"
                    ? "border-emerald-500 bg-emerald-50"
                    : "border-gray-200 hover:border-emerald-300"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-6 h-6 text-emerald-600" />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">Stripe</div>
                    <div className="text-sm text-gray-600">International cards</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Impact Summary */}
          <div className="bg-emerald-50 rounded-lg p-6 mb-8">
            <h4 className="font-semibold text-emerald-900 mb-3">Your Impact</h4>
            <div className="space-y-2 text-sm text-emerald-800">
              <div className="flex justify-between">
                <span>Meals provided:</span>
                <span className="font-medium">
                  {Math.floor(selectedAmount / 25)} {isRecurring ? "/ month" : "one-time"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>People helped:</span>
                <span className="font-medium">
                  ~{Math.floor(selectedAmount / 25)} {isRecurring ? "/ month" : "one-time"}
                </span>
              </div>
              {isRecurring && (
                <div className="flex justify-between font-semibold">
                  <span>Annual impact:</span>
                  <span>{Math.floor(selectedAmount / 25) * 12} meals</span>
                </div>
              )}
            </div>
          </div>

          {/* Donate Button */}
          <Button onClick={handleDonate} className="w-full bg-emerald-500 hover:bg-emerald-600 text-lg py-6">
            <Heart className="w-5 h-5 mr-2" />
            Donate ₹{selectedAmount} {isRecurring ? "/ month" : "now"}
          </Button>

          {/* Trust Indicators */}
          <div className="mt-6 text-center text-sm text-gray-600">
            <p className="mb-2">🔒 Secure payment • 100% transparent • Tax deductible</p>
            <p>Join 1,247+ donors fighting hunger in Jakarta</p>
          </div>
        </div>
      </div>
    </section>
  )
}
