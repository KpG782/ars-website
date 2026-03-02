import React from 'react'
import { PlayCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary-50 via-white to-surface overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20 -mr-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl opacity-15 -ml-48"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-4 py-2 rounded-button mb-6 border border-primary-200">
              <img src="/logo.png" alt="ARS" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold">Project RISE - Civic-Tech Innovation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-onSurface mb-6 leading-tight">
              ARS - Auto Repair
              <span className="text-primary"> Service</span>
            </h1>

            <p className="text-xl md:text-2xl text-secondary-800 mb-4 max-w-2xl font-semibold">
              A Civic-Tech Platform for Community-Verified Automotive Services
            </p>

            <p className="text-lg text-subtitle mb-8 max-w-2xl">
              ARS helps formalize mechanic livelihoods, improve consumer protection, and strengthen service reliability in Makati City through verification workflows and AI-assisted pre-diagnosis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a href="#project-rise" className="btn-primary text-center">
                Learn About Project RISE
              </a>
              <a href="#team" className="btn-secondary text-center">
                Meet the Team
              </a>
            </div>

            <div className="inline-flex items-center gap-2 bg-accent-yellow/20 text-secondary-900 px-4 py-2 rounded-button mb-8 border border-accent-yellow/30">
              <img src="/logo.png" alt="ARS" className="w-5 h-5 object-contain" />
              <span className="text-sm font-semibold">Pilot details are being finalized</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">SDG 11</div>
                <div className="text-xs sm:text-sm text-subtitle">Sustainable Cities</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">SDG 9</div>
                <div className="text-xs sm:text-sm text-subtitle">Industry and Innovation</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary">SDG 8</div>
                <div className="text-xs sm:text-sm text-subtitle">Decent Work</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-xl">
              <div className="bg-white rounded-hero border border-border shadow-sm overflow-hidden">
                <div className="px-5 sm:px-6 py-4 border-b border-border bg-surface flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-onSurface">Mechanic Service Demo</h3>
                    <p className="text-sm text-subtitle">ARS booking and service flow preview</p>
                  </div>
                  <PlayCircle className="w-6 h-6 text-primary flex-shrink-0" />
                </div>

                <div className="p-4 sm:p-5">
                  <div className="rounded-card overflow-hidden border border-border bg-black">
                    <iframe
                      className="w-full aspect-video"
                      src="https://www.youtube.com/embed/09zIjp0qBRs"
                      title="ARS Mechanic Service Demo"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
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
