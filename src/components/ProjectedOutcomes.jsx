import React from 'react'
import { Users, Wrench, TrendingUp, ShieldCheck } from 'lucide-react'

const ProjectedOutcomes = () => {
  const statusCards = [
    {
      icon: Users,
      title: 'User Onboarding',
      status: 'Pilot validation',
      note: 'Tracking adoption and first-time usage.'
    },
    {
      icon: Wrench,
      title: 'Service Completion',
      status: 'In progress',
      note: 'Monitoring service flow and completion quality.'
    },
    {
      icon: TrendingUp,
      title: 'Mechanic Livelihood',
      status: 'Under evaluation',
      note: 'Reviewing stability and formalization progress.'
    },
    {
      icon: ShieldCheck,
      title: 'Consumer Trust',
      status: 'Under evaluation',
      note: 'Tracking transparency, dispute handling, and trust signals.'
    }
  ]

  return (
    <section id="projected-outcomes" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Pilot <span className="text-primary">Status</span>
          </h2>
          <p className="section-subtitle">
            Current focus areas being measured during rollout
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statusCards.map((card) => (
            <div key={card.title} className="bg-surface border border-border rounded-card p-6">
              <div className="w-12 h-12 bg-primary text-white rounded-input flex items-center justify-center mb-4">
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-onSurface mb-1">{card.title}</h3>
              <p className="text-sm font-semibold text-primary mb-2">{card.status}</p>
              <p className="text-sm text-subtitle">{card.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectedOutcomes
