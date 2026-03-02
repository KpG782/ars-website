import React from 'react'
import { Car, Calendar, Bell, History, MessageSquare, Star } from 'lucide-react'

const ForCustomers = () => {
  const benefits = [
    {
      icon: Car,
      title: 'Vehicle Management',
      description: 'Add and manage multiple vehicles with detailed information including make, model, year, and license plate.'
    },
    {
      icon: Calendar,
      title: 'Easy Booking',
      description: 'Schedule services at your convenience or get immediate emergency assistance with just a few taps.'
    },
    {
      icon: Bell,
      title: 'Real-Time Updates',
      description: 'Receive instant notifications about your service status, mechanic arrival time, and job completion.'
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication',
      description: 'Chat directly with your assigned mechanic to discuss service details and any concerns.'
    },
    {
      icon: History,
      title: 'Service History',
      description: 'Keep track of all your past repairs and maintenance for each vehicle in one convenient place.'
    },
    {
      icon: Star,
      title: 'Rate & Review',
      description: 'Share your experience and help other customers by rating mechanics and leaving reviews.'
    }
  ]

  return (
    <section id="customers" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Car className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">For Vehicle Owners</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Car Deserves the <span className="text-primary-600">Best Care</span>
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Say goodbye to unreliable mechanics and endless waiting times. With ARS, professional help is always just a tap away.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-primary-600 mb-1">5 min</div>
                <div className="text-sm text-gray-600">Average Response Time</div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </div>
            </div>

            <a href="#download" className="btn-primary inline-block">
              Get Started as a Customer
            </a>
          </div>

          {/* Right Content - Benefits */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForCustomers
