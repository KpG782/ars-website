import React from 'react'
import { Briefcase, DollarSign, TrendingUp, MapPin, Users, Award } from 'lucide-react'

const ForMechanics = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Stable Income',
      description: 'Transition from irregular earnings to structured digital income through verified booking workflows.'
    },
    {
      icon: MapPin,
      title: 'Real-Time Matching',
      description: 'Get matched with nearby service requests based on your location and verified skill set.'
    },
    {
      icon: Users,
      title: 'Community Trust',
      description: 'Build reputation through transparent ratings and verification, reducing informal market challenges.'
    },
    {
      icon: TrendingUp,
      title: 'Earnings Analytics',
      description: 'Track your income with detailed dashboards—formalizing your work through data transparency.'
    },
    {
      icon: Award,
      title: 'Verified Profile',
      description: 'Showcase your certifications and become part of Makati\'s trusted mechanic network.'
    },
    {
      icon: Briefcase,
      title: 'Economic Inclusion',
      description: 'Access digital livelihood systems designed to reduce inequalities (SDG 10) and support decent work (SDG 8).'
    }
  ]

  const requirements = [
    'Valid NBI Clearance',
    'Driver\'s License',
    'Professional Certificate',
    'Proven Experience',
    'Own Tools & Equipment',
    'Clean Background Check'
  ]

  return (
    <section id="mechanics" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Benefits */}
          <div className="order-2 lg:order-1 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-primary text-white w-12 h-12 rounded-input flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-button mb-6">
              <img src="/logo.png" alt="ARS Logo" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold">For Mechanics</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Formalizing <span className="text-primary-300">Mechanic Livelihoods</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              ARS is designed to transition informal mechanics into structured digital income systems. Get verified, 
              access stable demand, and track your earnings through our civic-tech platform.
            </p>

            {/* Requirements */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-300" />
                Requirements to Join
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-300 mr-2"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-primary p-6 rounded-card">
                <div className="text-3xl font-bold mb-1">1,500</div>
                <div className="text-sm text-primary-100">Target Mechanics (Year-1)</div>
              </div>
              <div className="bg-green-600 p-6 rounded-card">
                <div className="text-3xl font-bold mb-1">500</div>
                <div className="text-sm text-green-100">Target Stable Income</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-accent-yellow text-secondary-900 px-6 py-3 rounded-button font-semibold">
              <img src="/logo.png" alt="ARS Logo" className="w-6 h-6 object-contain" />
              🚧 Platform in Development
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForMechanics
