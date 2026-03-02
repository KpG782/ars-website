import React from 'react'
import { Brain, Shield, MapPin, CreditCard, FileCheck, Clock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Pre-Check',
      description: 'Understand likely issues before booking with clear, Taglish-friendly guidance.',
      tag: 'For Owners',
      color: 'bg-primary-100 text-primary'
    },
    {
      icon: Shield,
      title: 'Verified Mechanics',
      description: 'Only reviewed mechanics are shown, improving trust and reducing risky matches.',
      tag: 'For Owners',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: MapPin,
      title: 'Live Booking Tracking',
      description: 'Track status from request to completion so users always know what is happening.',
      tag: 'For Owners',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: CreditCard,
      title: 'Transparent Costing',
      description: 'Clear cost guidance helps reduce price surprises and overcharging concerns.',
      tag: 'For Owners',
      color: 'bg-accent-yellow/20 text-secondary-900'
    },
    {
      icon: FileCheck,
      title: 'Work and Earnings Records',
      description: 'Mechanics can track jobs and earnings while pilot teams review formalization data.',
      tag: 'For Mechanics',
      color: 'bg-purple-100 text-purple-700'
    },
    {
      icon: Clock,
      title: 'Emergency Handling',
      description: 'Urgency-aware flow helps prioritize breakdown cases and improves response clarity.',
      tag: 'Operations',
      color: 'bg-indigo-100 text-indigo-600'
    }
  ]

  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Platform <span className="text-primary">Features</span>
          </h2>
          <p className="section-subtitle">
            Six core features focused on trust, transparency, and practical service flow
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <span className="px-3 py-1 rounded-button bg-primary-50 text-primary text-xs font-semibold">For Owners</span>
          <span className="px-3 py-1 rounded-button bg-green-50 text-green-700 text-xs font-semibold">For Mechanics</span>
          <span className="px-3 py-1 rounded-button bg-indigo-50 text-indigo-700 text-xs font-semibold">Operations</span>
        </div>

        <p className="md:hidden text-center text-sm text-subtitle mb-5">Swipe to explore features</p>

        <div className="md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="min-w-[88%] snap-start group p-7 rounded-card bg-surface border border-gray-100"
            >
              <div className={`${feature.color} w-12 h-12 rounded-input flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="inline-block text-xs font-semibold text-subtitle bg-white border border-border rounded-button px-3 py-1 mb-3">
                {feature.tag}
              </span>
              <h3 className="text-xl font-bold text-onSurface mb-2">{feature.title}</h3>
              <p className="text-subtitle leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-7 rounded-card bg-surface border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <div className={`${feature.color} w-12 h-12 rounded-input flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <span className="inline-block text-xs font-semibold text-subtitle bg-white border border-border rounded-button px-3 py-1 mb-3">
                {feature.tag}
              </span>
              <h3 className="text-xl font-bold text-onSurface mb-2">{feature.title}</h3>
              <p className="text-subtitle leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
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
