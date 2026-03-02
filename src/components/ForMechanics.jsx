import React from 'react'
import { Briefcase, DollarSign, TrendingUp, MapPin, Users, Award } from 'lucide-react'

const ForMechanics = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Earn More',
      description: 'Set your own rates and work on your schedule. Get paid directly through the app with no hidden fees.'
    },
    {
      icon: MapPin,
      title: 'Find Jobs Nearby',
      description: 'See service requests in your area on an interactive map. Accept jobs that are convenient for you.'
    },
    {
      icon: Users,
      title: 'Build Your Reputation',
      description: 'Gain positive reviews and ratings to attract more customers and grow your business.'
    },
    {
      icon: TrendingUp,
      title: 'Track Earnings',
      description: 'Monitor your income with detailed earnings dashboard and comprehensive job history.'
    },
    {
      icon: Award,
      title: 'Professional Profile',
      description: 'Showcase your certifications, specialties, and experience to stand out from the competition.'
    },
    {
      icon: Briefcase,
      title: 'Flexible Schedule',
      description: 'Go online when you want to work and offline when you need a break. You\'re in control.'
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
                <div className="bg-primary-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
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
            <div className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-full mb-6">
              <Briefcase className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">For Mechanics</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Grow Your <span className="text-primary-400">Mechanic Business</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of professional mechanics who are building successful businesses with ARS. Get more customers, earn more money, and work on your own terms.
            </p>

            {/* Requirements */}
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 mb-8">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-400" />
                Requirements to Join
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400 mr-2"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-600 p-6 rounded-2xl">
                <div className="text-3xl font-bold mb-1">₱50K+</div>
                <div className="text-sm text-primary-100">Avg. Monthly Earnings</div>
              </div>
              <div className="bg-green-600 p-6 rounded-2xl">
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm text-green-100">Active Mechanics</div>
              </div>
            </div>

            <a href="#download" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 inline-block">
              Join as a Mechanic
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForMechanics
