import React from 'react'
import { MapPin, MessageCircle, Shield, Clock, Wrench, CreditCard, Brain, FileCheck } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Assisted Pre-Diagnosis',
      description: 'ARS Rapide provides Taglish-aware pre-diagnosis and preliminary cost guidance before booking.',
      color: 'bg-primary-100 text-primary'
    },
    {
      icon: Shield,
      title: 'Verified Mechanics',
      description: 'Mechanics go through identity and credential review before becoming visible to users.',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      description: 'Track mechanic movement and booking status from acceptance through completion.',
      color: 'bg-primary-100 text-primary'
    },
    {
      icon: CreditCard,
      title: 'Transparent Costing',
      description: 'Clear cost guidance helps reduce hidden fees and pricing uncertainty.',
      color: 'bg-accent-yellow/20 text-secondary-900'
    },
    {
      icon: MessageCircle,
      title: 'Structured Messaging',
      description: 'In-app communication stays linked to each booking for clearer service coordination.',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: FileCheck,
      title: 'Earnings and Impact Data',
      description: 'Mechanic earnings history and pilot-level impact data support livelihood formalization.',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Clock,
      title: 'Emergency Flow',
      description: 'Urgency-aware workflows support breakdown cases and priority handling.',
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      icon: Wrench,
      title: 'Service Coverage',
      description: 'Supports a broad range of automotive service scenarios during pilot operations.',
      color: 'bg-pink-100 text-pink-600'
    }
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Platform <span className="text-primary">Features</span>
          </h2>
          <p className="section-subtitle">
            Core capabilities designed for transparent bookings, verified service, and stronger community trust
          </p>
        </div>

        <p className="md:hidden text-center text-sm text-subtitle mb-5">Swipe to explore features</p>

        <div className="md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="min-w-[88%] snap-start group p-8 rounded-card bg-surface hover:bg-white hover:shadow-sm transition-all duration-300 border border-gray-100"
            >
              <div className={`${feature.color} w-14 h-14 rounded-input flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-onSurface mb-3">{feature.title}</h3>
              <p className="text-subtitle leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 rounded-card bg-surface hover:bg-white hover:shadow-sm transition-all duration-300 border border-gray-100"
            >
              <div className={`${feature.color} w-14 h-14 rounded-input flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7" />
              </div>

              <h3 className="text-xl font-bold text-onSurface mb-3">{feature.title}</h3>
              <p className="text-subtitle leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-accent-yellow/20 text-secondary-900 px-6 py-3 rounded-button border border-accent-yellow/30">
            <img src="/logo.png" alt="ARS Logo" className="w-6 h-6 object-contain" />
            <span className="font-semibold">Feature scope is being finalized for pilot launch</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
