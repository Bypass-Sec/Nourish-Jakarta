"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Clock, MapPin, Heart, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface VolunteerOpportunity {
  id: string
  title: string
  description: string
  location: string
  timeCommitment: string
  skills: string[]
  impact: string
  urgency: "low" | "medium" | "high"
  category: "distribution" | "kitchen" | "outreach" | "admin"
}

const opportunities: VolunteerOpportunity[] = [
  {
    id: "1",
    title: "Food Distribution Volunteer",
    description:
      "Help distribute meals at community kitchens and serve families in need. Perfect for those who want direct community impact.",
    location: "Multiple locations across Jakarta",
    timeCommitment: "4 hours/week, flexible schedule",
    skills: ["Communication", "Physical stamina", "Empathy"],
    impact: "Serve 50+ people per session",
    urgency: "high",
    category: "distribution",
  },
  {
    id: "2",
    title: "Community Kitchen Assistant",
    description:
      "Assist with meal preparation, food safety, and kitchen operations. Great for those with culinary interests.",
    location: "Central Jakarta Community Kitchen",
    timeCommitment: "3 hours/week, morning shifts",
    skills: ["Food handling", "Teamwork", "Attention to detail"],
    impact: "Help prepare 200+ meals daily",
    urgency: "medium",
    category: "kitchen",
  },
  {
    id: "3",
    title: "Story Collection Volunteer",
    description:
      "Document impact stories, conduct interviews, and help with social media content to inspire more donations.",
    location: "Remote + field visits",
    timeCommitment: "2 hours/week, flexible",
    skills: ["Writing", "Photography", "Social media"],
    impact: "Stories inspire 20% more donations",
    urgency: "low",
    category: "outreach",
  },
  {
    id: "4",
    title: "Data Entry & Admin Support",
    description:
      "Help maintain volunteer records, donation tracking, and administrative tasks to keep operations smooth.",
    location: "Remote work available",
    timeCommitment: "3 hours/week, flexible",
    skills: ["Computer literacy", "Organization", "Attention to detail"],
    impact: "Support 500+ volunteer operations",
    urgency: "medium",
    category: "admin",
  },
]

export default function VolunteerPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [applicationStep, setApplicationStep] = useState(0)
  const [selectedOpportunity, setSelectedOpportunity] = useState<string>("")

  const filteredOpportunities = opportunities.filter(
    (opp) => selectedCategory === "all" || opp.category === selectedCategory,
  )

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleApply = (opportunityId: string) => {
    setSelectedOpportunity(opportunityId)
    setApplicationStep(1)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Volunteer Community</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Make a hands-on difference in Jakarta. Join 500+ volunteers helping fight hunger in our communities.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
                <div className="text-gray-600">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">2,400</div>
                <div className="text-gray-600">Hours Contributed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">15</div>
                <div className="text-gray-600">Districts Covered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">4.9/5</div>
                <div className="text-gray-600">Satisfaction Rating</div>
              </div>
            </div>
          </div>

          {/* Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                All Opportunities
              </Button>
              <Button
                variant={selectedCategory === "distribution" ? "default" : "outline"}
                onClick={() => setSelectedCategory("distribution")}
                className={selectedCategory === "distribution" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                Food Distribution
              </Button>
              <Button
                variant={selectedCategory === "kitchen" ? "default" : "outline"}
                onClick={() => setSelectedCategory("kitchen")}
                className={selectedCategory === "kitchen" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                Kitchen Support
              </Button>
              <Button
                variant={selectedCategory === "outreach" ? "default" : "outline"}
                onClick={() => setSelectedCategory("outreach")}
                className={selectedCategory === "outreach" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                Outreach
              </Button>
              <Button
                variant={selectedCategory === "admin" ? "default" : "outline"}
                onClick={() => setSelectedCategory("admin")}
                className={selectedCategory === "admin" ? "bg-emerald-500 hover:bg-emerald-600" : ""}
              >
                Admin Support
              </Button>
            </div>
          </div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{opportunity.title}</h3>
                  <Badge className={getUrgencyColor(opportunity.urgency)}>{opportunity.urgency} priority</Badge>
                </div>

                <p className="text-gray-600 mb-4">{opportunity.description}</p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{opportunity.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{opportunity.timeCommitment}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Award className="w-4 h-4" />
                    <span>{opportunity.impact}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-2">Skills needed:</p>
                  <div className="flex flex-wrap gap-1">
                    {opportunity.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => handleApply(opportunity.id)}
                  className="w-full bg-emerald-500 hover:bg-emerald-600"
                >
                  Apply Now
                </Button>
              </div>
            ))}
          </div>

          {/* Application Process */}
          {applicationStep > 0 && (
            <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Volunteer Application</h2>

              {applicationStep === 1 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Step 1: Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Enter your age"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        rows={3}
                        placeholder="Enter your address"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end mt-6">
                    <Button onClick={() => setApplicationStep(2)} className="bg-emerald-500 hover:bg-emerald-600">
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {applicationStep === 2 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Step 2: Availability & Preferences</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Volunteer Role</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500">
                        <option value="">Select a role</option>
                        <option value="distribution">Food Distribution Volunteer</option>
                        <option value="kitchen">Community Kitchen Assistant</option>
                        <option value="outreach">Story Collection Volunteer</option>
                        <option value="admin">Data Entry & Admin Support</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Available Days (Select all that apply)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                          <label key={day} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm text-gray-700">{day}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time Slots</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {["Morning (6AM-12PM)", "Afternoon (12PM-6PM)", "Evening (6PM-10PM)"].map((time) => (
                          <label key={time} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm text-gray-700">{time}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Volunteer Experience
                      </label>
                      <textarea
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        rows={4}
                        placeholder="Tell us about any previous volunteer experience (optional)"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={() => setApplicationStep(1)}>
                      Previous Step
                    </Button>
                    <Button onClick={() => setApplicationStep(3)} className="bg-emerald-500 hover:bg-emerald-600">
                      Submit Application
                    </Button>
                  </div>
                </div>
              )}

              {applicationStep === 3 && (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Application Submitted!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest in volunteering with NourishJakarta. We'll review your application and
                    contact you within 2-3 business days.
                  </p>
                  <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-emerald-900 mb-2">What's Next?</h4>
                    <ul className="text-sm text-emerald-800 space-y-1">
                      <li>• Background check (if required for role)</li>
                      <li>• Orientation session scheduling</li>
                      <li>• Training materials and resources</li>
                      <li>• Assignment to your preferred location</li>
                    </ul>
                  </div>
                  <Button onClick={() => setApplicationStep(0)} className="bg-emerald-500 hover:bg-emerald-600">
                    Apply for Another Role
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Benefits Section */}
          <div className="bg-emerald-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Why Volunteer with NourishJakarta?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Make Real Impact</h3>
                <p className="text-gray-600 text-sm">
                  Directly help families and individuals in need while building stronger communities
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Join Amazing People</h3>
                <p className="text-gray-600 text-sm">
                  Connect with like-minded volunteers and build lasting friendships
                </p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Develop Skills</h3>
                <p className="text-gray-600 text-sm">
                  Gain valuable experience in community service, leadership, and teamwork
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
