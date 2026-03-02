import React from 'react'
import { BarChart3, Users, Wrench, Target, Clock, Brain, TrendingUp, DollarSign } from 'lucide-react'

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
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Service Impact',
      icon: Wrench,
      metrics: [
        { label: 'Successful Repairs', target: '6,000', purpose: 'Economic activity' },
        { label: 'Avg. Time to Booking', target: '10 minutes', purpose: 'Efficiency' },
        { label: 'AI Diagnostic Sessions', target: '15,000', purpose: 'Feature utilization' }
      ],
      color: 'from-purple-500 to-purple-600'
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

  return (
    <section id="projected-outcomes" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-6">
            <BarChart3 className="w-8 h-8" />
          </div>
          <h2 className="section-title">
            Projected <span className="text-primary-600">Outcomes</span>
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
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${outcome.color} rounded-xl flex items-center justify-center mb-6`}>
                <outcome.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{outcome.category}</h3>
              <div className="space-y-4">
                {outcome.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className="text-2xl font-bold text-primary-600">{metric.target}</span>
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
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Impact Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Community Resilience</h4>
                  <p className="text-primary-100">Building trusted digital infrastructure for essential urban services</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Economic Formalization</h4>
                  <p className="text-primary-100">Transitioning informal mechanics to stable digital income streams</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">AI-Powered Transparency</h4>
                  <p className="text-primary-100">Reducing information asymmetry through diagnostic assistance</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Service Efficiency</h4>
                  <p className="text-primary-100">Fast matching and transparent pricing for emergency situations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectedOutcomes
