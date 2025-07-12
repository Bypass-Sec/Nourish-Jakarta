"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Heart, MapPin, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">NourishJakarta</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/locations"
              className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>Find Food</span>
            </Link>
            <Link
              href="/volunteer"
              className="flex items-center space-x-1 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Volunteer</span>
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-emerald-600 transition-colors">
              Dashboard
            </Link>
            <div className="flex items-center space-x-1 text-emerald-600 font-medium">
              <Phone className="w-4 h-4" />
              <span className="text-sm">Emergency: 0800-NOURISH</span>
            </div>
            <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/locations"
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MapPin className="w-4 h-4" />
                <span>Find Food</span>
              </Link>
              <Link
                href="/volunteer"
                className="flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Users className="w-4 h-4" />
                <span>Volunteer</span>
              </Link>
              <Link
                href="/dashboard"
                className="text-gray-700 hover:text-emerald-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="flex items-center space-x-2 text-emerald-600 font-medium py-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">Emergency: 0800-NOURISH</span>
              </div>
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600 w-full">
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                  Donate Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
