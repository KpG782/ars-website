import React from 'react'
import { Users, Wrench, Building2, Truck, BarChart, Shield, DollarSign, Globe } from 'lucide-react'

const ValueProposition = () => {
  const beneficiaries = [
    {
      icon: Users,
      title: 'Vehicle Owners',
      description: 'Commuters, professionals, ride-hailing drivers, fleet operators',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Wrench,
      title: 'Independent Mechanics',
      description: 'Skilled tradespeople seeking stable digital demand',
      color: 'from-purple-500 to-purple-600'
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
      icon: BarChart,
      title: 'Data-Driven Impact',
      description: 'Mechanic income analytics and LGU livelihood dashboards'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Credential verification and structured workflows'
    },
    {
      icon: DollarSign,
      title: 'Cost Transparency',
      description: 'Pre-booking cost estimation reduces overcharging'
    },
    {
      icon: Globe,
      title: 'Inclusivity',
      description: 'Taglish-first AI and mobile-first accessibility'
    }
  ]

  return (
    <section id="value-proposition" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Value <span className="text-primary-600">Proposition</span>
          </h2>
          <p className="section-subtitle">
            Delivering measurable impact for all stakeholders
          </p>
        </div>

        {/* Target Beneficiaries */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Target Beneficiaries</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiaries.map((beneficiary, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${beneficiary.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <beneficiary.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{beneficiary.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{beneficiary.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivered Value */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Delivered Value</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-4 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12 text-white">
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
