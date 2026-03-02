import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Vehicle Owner',
      image: '👩‍💼',
      rating: 5,
      text: 'ARS saved me when my car broke down at midnight. A mechanic arrived within 10 minutes and fixed the issue on the spot. Incredible service!'
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      image: '👨‍💻',
      rating: 5,
      text: 'As a business owner with a fleet of vehicles, ARS has been a game-changer. Quick, reliable, and professional service every single time.'
    },
    {
      name: 'David Martinez',
      role: 'Professional Mechanic',
      image: '👨‍🔧',
      rating: 5,
      text: 'Joining ARS was the best decision for my career. I now have a steady stream of clients and complete control over my schedule and earnings.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Regular Customer',
      image: '👩‍🎓',
      rating: 5,
      text: 'The app is so easy to use! I can track my mechanic in real-time and chat with them directly. No more waiting at sketchy repair shops.'
    },
    {
      name: 'James Wilson',
      role: 'Uber Driver',
      image: '🚗',
      rating: 5,
      text: 'My car is my livelihood. ARS ensures I get back on the road fast with quality repairs. The transparent pricing is a huge plus!'
    },
    {
      name: 'Lisa Thompson',
      role: 'First-time User',
      image: '👩‍🦰',
      rating: 5,
      text: 'I was skeptical at first, but the mechanic was professional, friendly, and solved my tire problem in no time. Highly recommend!'
    }
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            What Our <span className="gradient-text">Users Say</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from thousands of satisfied customers and mechanics
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative card-hover"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <Quote className="w-10 h-10" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-blue-100 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 fill-green-600 text-green-600" />
            <span className="font-semibold">Rated 4.8/5 from 2,500+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
