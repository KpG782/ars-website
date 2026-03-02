import React from 'react'
import { Search, UserCheck, MapPin, Wrench, CheckCircle } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'AI Pre-Diagnosis',
      description: 'Describe your vehicle issue in Taglish and receive structured pre-diagnosis guidance before booking.',
      color: 'from-primary to-primary-600'
    },
    {
      icon: UserCheck,
      number: '02',
      title: 'Request and Match',
      description: 'Submit your request and get matched with a nearby verified mechanic based on availability.',
      color: 'from-primary-400 to-primary-500'
    },
    {
      icon: MapPin,
      number: '03',
      title: 'Track En Route',
      description: 'Track your mechanic location and booking status in real time.',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Wrench,
      number: '04',
      title: 'Service in Progress',
      description: 'The mechanic performs the service while status updates remain visible in the booking flow.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Complete and Review',
      description: 'Finish the booking, record service details, and submit post-service feedback.',
      color: 'from-emerald-500 to-emerald-600'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-br from-surface to-primary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Booking <span className="text-primary">Lifecycle</span>
          </h2>
          <p className="section-subtitle">
            From issue description to completion: transparent, tracked, and verification-driven
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative mb-16 last:mb-0">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[2.75rem] top-24 w-0.5 h-32 bg-gradient-to-b from-primary-300 to-primary-100"></div>
              )}

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className={`relative flex-shrink-0 w-24 h-24 bg-gradient-to-br ${step.color} rounded-card flex items-center justify-center shadow-sm transform hover:scale-105 transition-transform duration-300`}>
                  <step.icon className="w-12 h-12 text-white" />
                  <div className="absolute -top-2 -right-2 bg-white text-secondary-900 font-bold text-sm w-8 h-8 rounded-full flex items-center justify-center shadow-sm">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-onSurface mb-3">{step.title}</h3>
                  <p className="text-lg text-subtitle leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-subtitle mb-6">Pilot workflow will be continuously refined with stakeholder feedback</p>
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary px-6 py-3 rounded-button border border-primary-200">
            <img src="/logo.png" alt="ARS Logo" className="w-6 h-6 object-contain" />
            <span className="font-semibold">Pilot timeline details to follow</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
