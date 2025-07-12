"use client"

import { useState } from "react"
import { MapPin, Clock, Users, Utensils, AlertTriangle, Filter } from "lucide-react"
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
}

const mockLocations: FoodLocation[] = [
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
    services: ["Hot Meals", "Take Away", "Family Packs"],
    lastUpdated: "2 minutes ago",
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
    services: ["Food Packages", "Fresh Produce", "Baby Food"],
    lastUpdated: "5 minutes ago",
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
    services: ["Emergency Meals", "Water", "Medical Aid"],
    lastUpdated: "1 minute ago",
  },
]

export function FoodLocationMap() {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all")

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "community_kitchen":
        return <Utensils className="w-4 h-4" />
      case "distribution_point":
        return <MapPin className="w-4 h-4" />
      case "emergency_relief":
        return <AlertTriangle className="w-4 h-4" />
      default:
        return <MapPin className="w-4 h-4" />
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
        return "bg-green-100 text-green-800"
      case "busy":
        return "bg-yellow-100 text-yellow-800"
      case "closed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const filteredLocations = mockLocations.filter((location) => {
    const typeMatch = selectedType === "all" || location.type === selectedType
    const districtMatch = selectedDistrict === "all" || location.district === selectedDistrict
    return typeMatch && districtMatch
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Food Assistance Near You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time locations of community kitchens, distribution points, and emergency relief centers across Jakarta
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filter by:</span>
          </div>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Types</option>
            <option value="community_kitchen">Community Kitchens</option>
            <option value="distribution_point">Distribution Points</option>
            <option value="emergency_relief">Emergency Relief</option>
          </select>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="all">All Districts</option>
            <option value="Central Jakarta">Central Jakarta</option>
            <option value="East Jakarta">East Jakarta</option>
            <option value="West Jakarta">West Jakarta</option>
            <option value="North Jakarta">North Jakarta</option>
            <option value="South Jakarta">South Jakarta</option>
          </select>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-100 rounded-lg h-96 mb-8 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Interactive Map Loading...</p>
            <p className="text-sm text-gray-500 mt-2">Google Maps integration will show real-time locations</p>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLocations.map((location) => (
            <div
              key={location.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {getTypeIcon(location.type)}
                  <h3 className="font-semibold text-gray-900">{location.name}</h3>
                </div>
                <Badge className={getStatusColor(location.status)}>{location.status}</Badge>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{location.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{location.hours}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>
                    Queue: {location.currentQueue}/{location.capacity}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Services:</p>
                <div className="flex flex-wrap gap-1">
                  {location.services.map((service, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Updated {location.lastUpdated}</span>
                <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                  Get Directions
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <AlertTriangle className="w-8 h-8 text-red-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-900 mb-2">Need Immediate Food Assistance?</h3>
          <p className="text-red-700 mb-4">Call our 24/7 emergency hotline for urgent food assistance</p>
          <Button className="bg-red-600 hover:bg-red-700">Call 0800-NOURISH (668-7474)</Button>
        </div>
      </div>
    </section>
  )
}
