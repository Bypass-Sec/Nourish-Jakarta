import Link from "next/link"
import { Users, Heart, Clock, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const volunteerOpportunities = [
  {
    icon: Users,
    title: "Food Distribution Volunteer",
    description: "Help distribute meals at community kitchens and distribution points",
    commitment: "4 hours/week",
    impact: "Serve 50+ people per session",
  },
  {
    icon: Heart,
    title: "Community Kitchen Assistant",
    description: "Assist with meal preparation and kitchen operations",
    commitment: "3 hours/week",
    impact: "Help prepare 200+ meals daily",
  },
  {
    icon: Clock,
    title: "Story Collection Volunteer",
    description: "Document impact stories and help with community outreach",
    commitment: "2 hours/week",
    impact: "Share stories that inspire more donations",
  },
]

export function VolunteerCTA() {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Join Our Volunteer Community</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Make a hands-on difference in Jakarta. Join 500+ volunteers helping fight hunger in our communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {volunteerOpportunities.map((opportunity, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center justify-center w-12 h-12 bg-emerald-500 rounded-full mb-4">
                <opportunity.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{opportunity.title}</h3>
              <p className="text-gray-300 mb-4">{opportunity.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">{opportunity.commitment}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-gray-300">{opportunity.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-lg px-8 py-3">
            <Link href="/volunteer">
              <Users className="w-5 h-5 mr-2" />
              Become a Volunteer
            </Link>
          </Button>
          <p className="text-gray-400 mt-4 text-sm">
            Background checks provided • Flexible scheduling • Training included
          </p>
        </div>

        {/* Volunteer Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-gray-300">Active Volunteers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">2,400</div>
            <div className="text-gray-300">Hours Contributed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">15</div>
            <div className="text-gray-300">Districts Covered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-emerald-400 mb-2">4.9/5</div>
            <div className="text-gray-300">Volunteer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}
