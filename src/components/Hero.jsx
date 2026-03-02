import React from 'react'
import { MapPin } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 via-white to-surface overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20 -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl opacity-15 -ml-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-button mb-6 border border-primary-200">
              <img src="/logo.png" alt="ARS" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold">Project RISE — Civic-Tech Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-onSurface mb-6 leading-tight">
              ARS — Auto Repair
              <span className="text-primary"> Service</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary-800 mb-4 max-w-2xl font-semibold">
              A Civic-Tech Platform for Community-Verified Automotive Services
            </p>
            
            <p className="text-lg text-subtitle mb-8 max-w-2xl">
              Formalizing informal mechanic labor, reducing service scams, and strengthening economic resilience in Makati City through verified mechanic networks and AI-powered diagnostics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#project-rise" className="btn-primary text-center">
                Learn About Project RISE
              </a>
              <a href="#team" className="btn-secondary text-center">
                Meet the Team
              </a>
            </div>
            
            {/* Development Status */}
            <div className="inline-flex items-center gap-2 bg-accent-yellow/20 text-secondary-900 px-4 py-2 rounded-button mb-8 border border-accent-yellow/30">
              <img src="/logo.png" alt="ARS" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold">🚧 Currently in Development</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              <div>
                <div className="text-3xl font-extrabold text-primary">1.5K</div>
                <div className="text-sm text-subtitle">Target Mechanics</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">6K</div>
                <div className="text-sm text-subtitle">Target Repairs</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary">4</div>
                <div className="text-sm text-subtitle">SDG Goals</div>
              </div>
            </div>
          </div>

          {/* Right Content - App Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              {/* Phone Frame */}
              <div className="bg-secondary-900 rounded-[3rem] p-3 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-secondary-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <span>●●●●●</span>
                  </div>
                  
                  {/* App Screen Content */}
                  <div className="bg-gradient-to-br from-primary-50 to-white p-6 h-[600px] flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-onSurface mb-2">Find a Mechanic</h3>
                      <p className="text-subtitle">Real-time location tracking</p>
                    </div>
                    
                    {/* Map Placeholder */}
                    <div className="flex-1 bg-gradient-to-br from-primary-200 to-primary-100 rounded-card flex items-center justify-center shadow-inner">
                      <MapPin className="w-16 h-16 text-primary animate-bounce" />
                    </div>
                    
                    {/* Bottom Action */}
                    <button className="mt-6 bg-primary hover:bg-primary-600 text-white py-4 rounded-button font-semibold shadow-sm">
                      Request Service Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
