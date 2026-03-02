import React from 'react'
import { Search, UserCheck, MapPin, Wrench, CheckCircle, MessageCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'AI Pre-Diagnosis',
      description: 'Describe your issue to ARS Rapide AI in Taglish. Get instant diagnosis, cost estimate, and urgency classification before booking.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: UserCheck,
      number: '02',
      title: 'Request & Match',
      description: 'Submit your service request and get matched with the nearest verified mechanic. Status: Pending → Accepted.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      number: '03',
      title: 'Track En Route',
      description: 'Watch real-time tracking as your mechanic travels to your location. Communicate via controlled in-app messaging.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Service In Progress',
      description: 'Your verified mechanic arrives and begins work. Track progress and communicate transparently throughout the service.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Complete & Review',
      description: 'Service completed! Make secure payment through the app and rate your experience to maintain platform quality.',
      color: 'from-emerald-500 to-emerald-600'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Booking <span className="text-primary-600">Lifecycle</span>
          </h2>
          <p className="section-subtitle">
            From AI diagnosis to service completion — transparent, tracked, and verified
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[2.75rem] top-24 w-0.5 h-32 bg-gradient-to-b from-primary-300 to-primary-100"></div>
              )}

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                {/* Icon Circle */}
                <div className={`relative flex-shrink-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-12 h-12 text-white" />
                  <div className="absolute -top-2 -right-2 bg-white text-gray-900 font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to experience hassle-free auto repair?</p>
          <a href="#download" className="btn-primary inline-block">
            Download ARS Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
