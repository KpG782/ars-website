import React from 'react'
import { Users, Wrench, TrendingUp } from 'lucide-react'

const ProjectedOutcomes = () => {
  const outcomes = [
    {
      category: 'User Growth',
      icon: Users,
      metrics: [
        { label: 'App Downloads', target: '12,000', purpose: 'Market validation' },
        { label: 'Registered Mechanics', target: '1,500', purpose: 'Livelihood formalization' },
        { label: 'Monthly Active Users', target: '5,000', purpose: 'Engagement' }
      ],
      color: 'from-primary to-primary-600'
    },
    {
      category: 'Service Impact',
      icon: Wrench,
      metrics: [
        { label: 'Successful Repairs', target: '6,000', purpose: 'Economic activity' },
        { label: 'Avg. Time to Booking', target: '10 minutes', purpose: 'Efficiency' },
        { label: 'AI Diagnostic Sessions', target: '15,000', purpose: 'Feature utilization' }
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      category: 'Economic Impact',
      icon: TrendingUp,
      metrics: [
        { label: 'Mechanics with Stable Income', target: '500', purpose: 'SDG 1 & 8 impact' },
        { label: 'Average Income Increase', target: '35%', purpose: 'Poverty reduction' },
        { label: 'Service Scam Reduction', target: '80%', purpose: 'Consumer protection' }
      ],
      color: 'from-green-500 to-green-600'
    }
  ]

  const highlights = [
    {
      title: 'Community Resilience',
      description: 'Building trusted digital infrastructure for essential urban services'
    },
    {
      title: 'Economic Formalization',
      description: 'Transitioning informal mechanics to stable digital income streams'
    },
    {
      title: 'AI-Powered Transparency',
      description: 'Reducing information asymmetry through diagnostic assistance'
    },
    {
      title: 'Service Efficiency',
      description: 'Fast matching and transparent pricing for emergency situations'
    }
  ]

  return (
    <section id="projected-outcomes" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Projected <span className="text-primary">Outcomes</span>
          </h2>
          <p className="section-subtitle">
            Our Year-1 targets for measurable civic and economic impact
          </p>
        </div>

        {/* Outcomes Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-surface to-primary-50 rounded-hero p-8 border border-gray-100 hover:shadow-sm transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${outcome.color} rounded-input flex items-center justify-center mb-6`}>
                <outcome.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-onSurface mb-6">{outcome.category}</h3>
              <div className="space-y-4">
                {outcome.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white rounded-input p-4 border border-gray-100">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-sm text-subtitle">{metric.label}</span>
                      <span className="text-2xl font-bold text-primary">{metric.target}</span>
                    </div>
                    <p className="text-xs text-gray-500">{metric.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary-600 rounded-hero p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Impact Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index}>
                  <div className="w-10 h-1 bg-white/50 rounded-full mb-3"></div>
                  <h4 className="font-bold text-lg mb-2">{highlight.title}</h4>
                  <p className="text-primary-100">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectedOutcomes
