import React from 'react'
import { Users, Wrench, TrendingUp } from 'lucide-react'

const ProjectedOutcomes = () => {
  const outcomes = [
    {
      category: 'User Growth',
      icon: Users,
      metrics: [
        { label: 'User onboarding', status: 'Pilot validation', purpose: 'Adoption readiness' },
        { label: 'Mechanic activation', status: 'In progress', purpose: 'Livelihood formalization' },
        { label: 'Monthly engagement', status: 'To be measured', purpose: 'Retention and usage' }
      ],
      color: 'from-primary to-primary-600'
    },
    {
      category: 'Service Impact',
      icon: Wrench,
      metrics: [
        { label: 'Completed services', status: 'Pilot tracking', purpose: 'Operational impact' },
        { label: 'Time to booking', status: 'Baseline pending', purpose: 'Service efficiency' },
        { label: 'AI session usage', status: 'Pilot tracking', purpose: 'Feature utilization' }
      ],
      color: 'from-primary-500 to-primary-600'
    },
    {
      category: 'Economic Impact',
      icon: TrendingUp,
      metrics: [
        { label: 'Income stabilization', status: 'Under evaluation', purpose: 'Livelihood formalization impact' },
        { label: 'Scam reduction', status: 'Under evaluation', purpose: 'Consumer protection' },
        { label: 'Formalization progress', status: 'Quarterly review', purpose: 'Inclusion outcomes' }
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
      description: 'Supporting more stable livelihood pathways for informal mechanics'
    },
    {
      title: 'AI-Assisted Transparency',
      description: 'Reducing information asymmetry through structured pre-diagnosis'
    },
    {
      title: 'Operational Efficiency',
      description: 'Tracking booking stages to improve reliability over time'
    }
  ]

  return (
    <section id="projected-outcomes" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Projected <span className="text-primary">Outcomes</span>
          </h2>
          <p className="section-subtitle">
            Pilot outcomes are tracked through baseline measurement and regular review
          </p>
        </div>

        <p className="lg:hidden text-center text-sm text-subtitle mb-5">Swipe to explore outcome tracks</p>

        <div className="lg:hidden -mx-4 px-4 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2 mb-12">
          {outcomes.map((outcome) => (
            <div
              key={outcome.category}
              className="min-w-[88%] snap-start bg-gradient-to-br from-surface to-primary-50 rounded-hero p-8 border border-gray-100"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${outcome.color} rounded-input flex items-center justify-center mb-6`}>
                <outcome.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-onSurface mb-6">{outcome.category}</h3>
              <div className="space-y-4">
                {outcome.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white rounded-input p-4 border border-gray-100">
                    <div className="flex items-baseline justify-between mb-2 gap-3">
                      <span className="text-sm text-subtitle">{metric.label}</span>
                      <span className="text-sm font-bold text-primary">{metric.status}</span>
                    </div>
                    <p className="text-xs text-gray-500">{metric.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-16">
          {outcomes.map((outcome) => (
            <div
              key={outcome.category}
              className="bg-gradient-to-br from-surface to-primary-50 rounded-hero p-8 border border-gray-100 hover:shadow-sm transition-all duration-300"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${outcome.color} rounded-input flex items-center justify-center mb-6`}>
                <outcome.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-onSurface mb-6">{outcome.category}</h3>
              <div className="space-y-4">
                {outcome.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white rounded-input p-4 border border-gray-100">
                    <div className="flex items-baseline justify-between mb-2 gap-3">
                      <span className="text-sm text-subtitle">{metric.label}</span>
                      <span className="text-sm font-bold text-primary">{metric.status}</span>
                    </div>
                    <p className="text-xs text-gray-500">{metric.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary-600 rounded-hero p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Impact Highlights</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {highlights.map((highlight) => (
                <div key={highlight.title}>
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
