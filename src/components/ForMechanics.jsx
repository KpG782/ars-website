import React from 'react'
import { Briefcase, DollarSign, TrendingUp, MapPin, Users, Award } from 'lucide-react'

const ForMechanics = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Income Stability',
      description: 'Move from irregular earnings to structured digital bookings and transparent payouts.'
    },
    {
      icon: MapPin,
      title: 'Location-Based Matching',
      description: 'Receive nearby requests based on your location and verified service category.'
    },
    {
      icon: Users,
      title: 'Community Trust',
      description: 'Build credibility through verification, transparent reviews, and clear service history.'
    },
    {
      icon: TrendingUp,
      title: 'Earnings Insights',
      description: 'Track completed jobs and income trends through clear dashboard reporting.'
    },
    {
      icon: Award,
      title: 'Verified Profile',
      description: 'Showcase certifications and work experience in a consistent profile format.'
    },
    {
      icon: Briefcase,
      title: 'Economic Inclusion',
      description: 'Support decent work and reduced inequalities through formal digital participation.'
    }
  ]

  const requirements = [
    'Government-issued ID',
    'Background screening',
    'Proof of automotive experience',
    'Complete profile details',
    'Service area and availability setup',
    'Agreement to platform standards'
  ]

  return (
    <section id="mechanics" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="lg:hidden text-center text-sm text-gray-300 mb-4">Swipe to explore mechanic benefits</p>

            <div className="lg:hidden -mx-4 px-4 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="min-w-[88%] snap-start bg-white/10 backdrop-blur-sm p-6 rounded-card border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-primary text-white w-12 h-12 rounded-input flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-card border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="bg-primary text-white w-12 h-12 rounded-input flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-button mb-6">
              <img src="/logo.png" alt="ARS Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold">For Mechanics</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Formalizing <span className="text-primary-300">Mechanic Livelihoods</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              ARS is designed to help informal mechanics transition into structured digital work with better visibility, clearer workflows, and stronger consumer trust.
            </p>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-card border border-white/20 mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-300" />
                Onboarding Requirements
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-300 mr-2"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-flex items-center gap-2 bg-accent-yellow text-secondary-900 px-6 py-3 rounded-button font-semibold">
              <img src="/logo.png" alt="ARS Logo" className="w-6 h-6 object-contain" />
              Pilot onboarding details to be announced
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForMechanics
