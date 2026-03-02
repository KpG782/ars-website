import React from 'react'
import { MapPin, MessageCircle, Shield, Clock, Wrench, CreditCard, Brain, FileCheck } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Diagnostics',
      description: 'ARS Rapide provides pre-diagnosis and cost estimation in Taglish before booking, reducing information asymmetry.',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Shield,
      title: 'Verified Mechanics Only',
      description: 'All mechanics undergo thorough verification with ID, certifications, and background checks required for onboarding.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Track your mechanic\'s location in real-time through structured booking lifecycle from acceptance to completion.',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Transparent Pricing',
      description: 'Get upfront cost estimates before booking. No hidden fees, no overcharging—just fair, transparent pricing.',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: MessageCircle,
      title: 'Controlled In-App Chat',
      description: 'Secure communication directly with your mechanic through our platform throughout the service lifecycle.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: FileCheck,
      title: 'Earnings Analytics',
      description: 'Mechanics receive earnings dashboards while LGUs get impact analytics on livelihood formalization.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Clock,
      title: 'Emergency Handling',
      description: 'Specialized workflows for emergency breakdowns with urgency classification and priority matching.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Wrench,
      title: 'Full Service Range',
      description: 'From routine maintenance to emergency repairs—comprehensive automotive services on demand.',
      color: 'bg-pink-100 text-pink-600'
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Platform <span className="text-primary-600">Features</span>
          </h2>
          <p className="section-subtitle">
            Civic-tech innovation designed to formalize automotive services and strengthen community resilience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`${feature.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a href="#download" className="btn-primary inline-block">
            Start Using ARS Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Features
