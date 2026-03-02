import React from 'react'
import { Check, Zap } from 'lucide-react'

const Pricing = () => {
  const services = [
    {
      name: 'Oil Change',
      price: '₱800',
      duration: '30 min',
      popular: false
    },
    {
      name: 'Brake Service',
      price: '₱2,500',
      duration: '1-2 hrs',
      popular: true
    },
    {
      name: 'Engine Diagnostic',
      price: '₱1,500',
      duration: '45 min',
      popular: false
    },
    {
      name: 'Tire Change',
      price: '₱500',
      duration: '20 min',
      popular: false
    },
    {
      name: 'Battery Replacement',
      price: '₱3,000',
      duration: '30 min',
      popular: false
    },
    {
      name: 'AC Service',
      price: '₱2,000',
      duration: '1 hr',
      popular: false
    }
  ]

  const benefits = [
    'No hidden fees',
    'Upfront pricing',
    'Pay through the app',
    'Parts included',
    '30-day warranty',
    'Flexible scheduling'
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-subtitle">
            Know exactly what you'll pay before booking. No surprises, no hidden fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Pricing Cards */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl border-2 transition-all duration-300 card-hover ${
                    service.popular
                      ? 'border-primary-600 bg-gradient-to-br from-primary-50 to-white shadow-lg'
                      : 'border-gray-200 bg-white hover:border-primary-300'
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <div className="text-4xl font-bold text-primary-600 mb-2">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-600">
                      Avg. {service.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
              <p className="text-center text-gray-700">
                <span className="font-semibold">Need a custom service?</span> Get a personalized quote through the app based on your specific needs.
              </p>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">What's Included</h3>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-100">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              <p className="text-sm text-gray-300 mb-3">
                💡 <span className="font-semibold">Pro Tip:</span> Book regular maintenance to save up to 20% on future services!
              </p>
            </div>

            <a href="#download" className="mt-6 block text-center bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition-colors">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
