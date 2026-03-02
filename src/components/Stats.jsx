import React from 'react'
import { ShieldCheck, Users, BarChart3, Clock } from 'lucide-react'

const Stats = () => {
  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Verification-First',
      description: 'Credential checks and transparent service workflows'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Built for vehicle owners, mechanics, and local institutions'
    },
    {
      icon: BarChart3,
      title: 'Impact Tracking',
      description: 'Pilot metrics are tracked and reviewed with partners'
    },
    {
      icon: Clock,
      title: 'Pilot Stage',
      description: 'Rollout details are under validation and planning'
    }
  ]

  return (
    <section className="py-12 bg-white relative z-10 -mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-hero shadow-sm p-8 md:p-12 border border-border">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div key={item.title} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-card mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-xl font-bold text-onSurface mb-2">{item.title}</div>
                <div className="text-sm md:text-base text-subtitle font-medium">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
