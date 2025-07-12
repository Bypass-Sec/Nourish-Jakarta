import { TrendingUp, Users, MapPin, Clock } from "lucide-react"

const metrics = [
  {
    icon: TrendingUp,
    title: "Meals Distributed",
    value: "12,847",
    change: "+23% this month",
    description: "Nutritious meals provided to Jakarta communities",
  },
  {
    icon: MapPin,
    title: "Active Locations",
    value: "45",
    change: "+5 new this month",
    description: "Community kitchens and distribution points",
  },
  {
    icon: Users,
    title: "People Served",
    value: "8,234",
    change: "+18% this month",
    description: "Individuals receiving regular food assistance",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "< 2 hrs",
    change: "Emergency assistance",
    description: "Average time to provide urgent food aid",
  },
]

export function ImpactMetrics() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent reporting on how your donations are making a real difference in Jakarta communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4">
                <metric.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-emerald-600 font-medium text-sm mb-2">{metric.change}</div>
              <div className="text-gray-600 text-sm">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Additional Impact Stories */}
        <div className="mt-16 bg-emerald-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Real Stories, Real Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h4 className="font-semibold text-gray-900 mb-2">Families Fed</h4>
              <p className="text-gray-600 text-sm">
                "Thanks to NourishJakarta, my children have nutritious meals every day. The community kitchen near us
                provides fresh, healthy food."
              </p>
              <p className="text-emerald-600 font-medium text-sm mt-2">- Sari, Mother of 3</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏫</div>
              <h4 className="font-semibold text-gray-900 mb-2">Students Supported</h4>
              <p className="text-gray-600 text-sm">
                "The school meal program helps me focus on studies instead of worrying about lunch. Now I can
                concentrate on my education."
              </p>
              <p className="text-emerald-600 font-medium text-sm mt-2">- Ahmad, Student</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">👴</div>
              <h4 className="font-semibold text-gray-900 mb-2">Elderly Cared For</h4>
              <p className="text-gray-600 text-sm">
                "The volunteers bring meals to my door every day. It's not just food, it's care and companionship that
                keeps me going."
              </p>
              <p className="text-emerald-600 font-medium text-sm mt-2">- Pak Budi, 72</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
