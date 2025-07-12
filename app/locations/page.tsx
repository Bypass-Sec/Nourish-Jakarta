"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Clock, Users, Utensils, AlertTriangle, Filter, Navigation, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface FoodLocation {
  id: string
  name: string
  type: "community_kitchen" | "distribution_point" | "emergency_relief"
  address: string
  district: string
  coordinates: [number, number]
  status: "open" | "closed" | "busy"
  hours: string
  capacity: number
  currentQueue: number
  services: string[]
  lastUpdated: string
  contact: string
  description: string
}

const allLocations: FoodLocation[] = [
  {
    id: "1",
    name: "Dapur Komunitas Menteng",
    type: "community_kitchen",
    address: "Jl. Menteng Raya No. 45, Menteng",
    district: "Central Jakarta",
    coordinates: [-6.1944, 106.8294],
    status: "open",
    hours: "06:00 - 20:00",
    capacity: 500,
    currentQueue: 23,
    services: ["Hot Meals", "Take Away", "Family Packs", "Vegetarian Options"],
    lastUpdated: "2 minutes ago",
    contact: "021-3456789",
    description:
      "Full-service community kitchen serving nutritious meals daily. Specializes in Indonesian cuisine with healthy options for all ages.",
  },
  {
    id: "2",
    name: "Titik Distribusi Kemayoran",
    type: "distribution_point",
    address: "Jl. Kemayoran Barat No. 12, Kemayoran",
    district: "Central Jakarta",
    coordinates: [-6.1667, 106.85],
    status: "busy",
    hours: "07:00 - 19:00",
    capacity: 300,
    currentQueue: 45,
    services: ["Food Packages", "Fresh Produce", "Baby Food", "Elderly Meals"],
    lastUpdated: "5 minutes ago",
    contact: "021-2345678",
    description:
      "Distribution center for packaged meals and fresh groceries. Weekly distribution schedule with special provisions for families.",
  },
  {
    id: "3",
    name: "Bantuan Darurat Cakung",
    type: "emergency_relief",
    address: "Jl. Cakung Timur No. 78, Cakung",
    district: "East Jakarta",
    coordinates: [-6.1833, 106.95],
    status: "open",
    hours: "24/7",
    capacity: 200,
    currentQueue: 8,
    services: ["Emergency Meals", "Water", "Medical Aid", "Shelter Referral"],
    lastUpdated: "1 minute ago",
    contact: "021-1234567",
    description:
      "24/7 emergency relief center providing immediate food assistance and basic necessities during crisis situations.",
  },
  {
    id: "4",
    name: "Dapur Komunitas Tanah Abang",
    type: "community_kitchen",
    address: "Jl. Tanah Abang III No. 22, Tanah Abang",
    district: "Central Jakarta",
    coordinates: [-6.175, 106.8167],
    status: "open",
    hours: "05:30 - 21:00",
    capacity: 400,
    currentQueue: 12,
    services: ["Hot Meals", "Breakfast Program", "Student Meals", "Senior Citizen Meals"],
    lastUpdated: "3 minutes ago",
    contact: "021-4567890",
    description:
      "Community kitchen with extended hours serving breakfast and dinner. Special programs for students and elderly residents.",
  },
  {
    id: "5",
    name: "Titik Distribusi Kelapa Gading",
    type: "distribution_point",
    address: "Jl. Kelapa Gading Raya No. 88, Kelapa Gading",
    district: "North Jakarta",
    coordinates: [-6.15, 106.9],
    status: "closed",
    hours: "08:00 - 17:00",
    capacity: 250,
    currentQueue: 0,
    services: ["Food Packages", "Hygiene Kits", "School Supplies", "Clothing"],
    lastUpdated: "10 minutes ago",
    contact: "021-5678901",
    description:
      "Multi-service distribution point offering food packages along with essential household items and educational supplies.",
  },
  {
    id: "6",
    name: "Bantuan Darurat Pluit",
    type: "emergency_relief",
    address: "Jl. Pluit Raya No. 15, Pluit",
    district: "North Jakarta",
    coordinates: [-6.1167, 106.7833],
    status: "open",
    hours: "24/7",
    capacity: 150,
    currentQueue: 3,
    services: ["Emergency Meals", "Flood Relief", "Temporary Shelter", "Medical Aid"],
    lastUpdated: "4 minutes ago",
    contact: "021-6789012",
    description:
      "Specialized emergency relief center for natural disasters and urgent situations. Equipped for flood response and temporary shelter.",
  },
]

export default function LocationsPage() {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all")
  const [selectedStatus, setSelectedStatus] = useState<string>("all")

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "community_kitchen":
        return <Utensils className="w-5 h-5" />
      case "distribution_point":
        return <MapPin className="w-5 h-5" />
      case "emergency_relief":
        return <AlertTriangle className="w-5 h-5" />
      default:
        return <MapPin className="w-5 h-5" />
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "community_kitchen":
        return "Community Kitchen"
      case "distribution_point":
        return "Distribution Point"
      case "emergency_relief":
        return "Emergency Relief"
      default:
        return type
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 border-green-200"
      case "busy":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "closed":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getQueueStatus = (current: number, capacity: number) => {
    const percentage = (current / capacity) * 100
    if (percentage < 30) return { color: "text-green-600", label: "Low wait" }
    if (percentage < 70) return { color: "text-yellow-600", label: "Moderate wait" }
    return { color: "text-red-600", label: "High wait" }
  }

  const filteredLocations = allLocations.filter((location) => {
    const typeMatch = selectedType === "all" || location.type === selectedType
    const districtMatch = selectedDistrict === "all" || location.district === selectedDistrict
    const statusMatch = selectedStatus === "all" || location.status === selectedStatus
    return typeMatch && districtMatch && statusMatch
  })

  const districts = [...new Set(allLocations.map((loc) => loc.district))]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Food Assistance Near You</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-time locations of community kitchens, distribution points, and emergency relief centers across
              Jakarta
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filter Locations</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">All Types</option>
                  <option value="community_kitchen">Community Kitchens</option>
                  <option value="distribution_point">Distribution Points</option>
                  <option value="emergency_relief">Emergency Relief</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                <select
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">All Districts</option>
                  {districts.map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">All Status</option>
                  <option value="open">Open Now</option>
                  <option value="busy">Busy</option>
                  <option value="closed">Closed</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                  <Navigation className="w-4 h-4 mr-2" />
                  Use My Location
                </Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="bg-gray-100 rounded-t-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 font-medium">Interactive Map Loading...</p>
                <p className="text-sm text-gray-500 mt-2">
                  Google Maps integration will show real-time locations and directions
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Showing {filteredLocations.length} locations</span>
                <span>Last updated: 2 minutes ago</span>
              </div>
            </div>
          </div>

          {/* Location Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {filteredLocations.map((location) => {
              const queueStatus = getQueueStatus(location.currentQueue, location.capacity)

              return (
                <div
                  key={location.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg">
                        {getTypeIcon(location.type)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{location.name}</h3>
                        <p className="text-sm text-gray-600">{getTypeLabel(location.type)}</p>
                      </div>
                    </div>
                    <Badge className={`${getStatusColor(location.status)} border`}>{location.status}</Badge>
                  </div>

                  <p className="text-gray-600 text-sm mb-4">{location.description}</p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4 flex-shrink-0" />
                      <span>{location.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Users className="w-4 h-4 flex-shrink-0 text-gray-600" />
                      <span className="text-gray-600">
                        Queue: {location.currentQueue}/{location.capacity}
                      </span>
                      <span className={`text-xs font-medium ${queueStatus.color}`}>({queueStatus.label})</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span>{location.contact}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Available Services:</p>
                    <div className="flex flex-wrap gap-1">
                      {location.services.map((service, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">Updated {location.lastUpdated}</span>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                        <Navigation className="w-4 h-4 mr-1" />
                        Directions
                      </Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
            <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-red-900 mb-2">Need Immediate Food Assistance?</h3>
            <p className="text-red-700 mb-4">
              Call our 24/7 emergency hotline for urgent food assistance and crisis support
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-red-600 hover:bg-red-700">
                <Phone className="w-4 h-4 mr-2" />
                Call 0800-NOURISH (668-7474)
              </Button>
              <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50 bg-transparent">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Report Emergency
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
