import React from 'react'
import { Users, Wrench, Building2, Truck } from 'lucide-react'

const ValueProposition = () => {
  const beneficiaries = [
    {
      icon: Users,
      title: 'Vehicle Owners',
      description: 'Commuters, professionals, ride-hailing drivers, fleet operators',
      color: 'from-primary to-primary-600'
    },
    {
      icon: Wrench,
      title: 'Independent Mechanics',
      description: 'Skilled tradespeople seeking stable digital demand',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Building2,
      title: 'Public Sector Partners',
      description: 'LGUs, PESO offices, TESDA institutions',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      title: 'Fleet & Logistics',
      description: 'Businesses requiring reliable maintenance networks',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const values = [
    {
      title: 'Data-Driven Impact',
      description: 'Mechanic income analytics and LGU livelihood dashboards'
    },
    {
      title: 'Security',
      description: 'Credential verification and structured workflows'
    },
    {
      title: 'Cost Transparency',
      description: 'Pre-booking cost estimation reduces overcharging'
    },
    {
      title: 'Inclusivity',
      description: 'Taglish-first AI and mobile-first accessibility'
    }
  ]

  return (
    <section id="value-proposition" className="py-20 md:py-32 bg-gradient-to-br from-surface to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Value <span className="text-primary">Proposition</span>
          </h2>
          <p className="section-subtitle">
            Delivering measurable impact for all stakeholders
          </p>
        </div>

        {/* Target Beneficiaries */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-onSurface mb-12">Target Beneficiaries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiaries.map((beneficiary, index) => (
              <div
                key={index}
                className="bg-white rounded-card p-6 hover:shadow-sm transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${beneficiary.color} rounded-input flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                  <beneficiary.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-onSurface mb-3">{beneficiary.title}</h4>
                <p className="text-subtitle text-sm leading-relaxed">{beneficiary.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivered Value */}
        <div>
          <h3 className="text-3xl font-bold text-center text-onSurface mb-12">Delivered Value</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-card p-6 border border-gray-100 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
                <h4 className="text-lg font-bold text-onSurface mb-2">{value.title}</h4>
                <p className="text-subtitle text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary to-primary-600 rounded-hero p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Urban Resilience</h3>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              ARS strengthens essential service reliability within cities, contributing directly to SDG 11: 
              Sustainable Cities and Communities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValueProposition
