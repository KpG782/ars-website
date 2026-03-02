import React from 'react'
import { Smartphone, MapPin, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-30 -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-20 -ml-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Project RISE — Civic-Tech Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              ARS — Auto Repair
              <span className="text-primary-600"> Service</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl font-semibold">
              A Civic-Tech Platform for Community-Verified Automotive Services
            </p>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Formalizing informal mechanic labor, reducing service scams, and strengthening economic resilience in Makati City through verified mechanic networks and AI-powered diagnostics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#download" className="btn-primary text-center">
                Get Started Free
              </a>
              <a href="#how-it-works" className="btn-secondary text-center">
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600">Mechanics</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-gray-600">Repairs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">4.8★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Phone Frame */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gray-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <span>●●●●●</span>
                  </div>
                  
                  {/* App Screen Content */}
                  <div className="bg-gradient-to-br from-primary-50 to-white p-6 h-[600px] flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Find a Mechanic</h3>
                      <p className="text-gray-600">Real-time location tracking</p>
                    </div>
                    
                    {/* Map Placeholder */}
                    <div className="flex-1 bg-gradient-to-br from-primary-200 to-primary-100 rounded-3xl flex items-center justify-center shadow-inner">
                      <MapPin className="w-16 h-16 text-primary-600 animate-bounce" />
                    </div>
                    
                    {/* Bottom Action */}
                    <button className="mt-6 bg-primary-600 text-white py-4 rounded-2xl font-semibold shadow-lg">
                      Request Service Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-float">
                <Smartphone className="w-8 h-8 text-primary-600" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-float" style={{animationDelay: '1s'}}>
                <div className="text-sm font-semibold text-gray-900">⚡ Quick Response</div>
                <div className="text-xs text-gray-600">Avg. 5 min arrival</div>
              </div>
              
              <div className="absolute top-1/2 -left-12 bg-green-500 text-white p-3 rounded-xl shadow-xl animate-pulse-slow">
                <div className="text-xs font-bold">✓ Verified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
