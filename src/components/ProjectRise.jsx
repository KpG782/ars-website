import React from 'react'
import { TrendingUp, Users, Building2 } from 'lucide-react'

const ProjectRise = () => {
  const keyPoints = [
    'Verified mechanics only',
    'Clear service flow from request to completion',
    'Better trust for vehicle owners and mechanics'
  ]

  return (
    <section id="project-rise" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow/30 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-sm rounded-card mb-5">
            <img src="/logo.png" alt="ARS Logo" className="w-9 h-9 object-contain" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            PROJECT <span className="text-primary-300">RISE</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            ARS is a civic-tech service platform for Makati City that helps make automotive repair safer, more transparent, and easier to trust.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-hero p-6 md:p-8 border border-white/20">
            <h3 className="text-xl md:text-2xl font-bold mb-4">What ARS does</h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {keyPoints.map((point) => (
                <li key={point} className="text-gray-200 flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary-300 flex-shrink-0"></span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center bg-white/10 rounded-card p-6 border border-white/20">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary-300" />
            <h4 className="text-lg font-bold mb-1">Economic Resilience</h4>
            <p className="text-gray-300 text-sm">Supports more stable livelihood pathways.</p>
          </div>
          <div className="text-center bg-white/10 rounded-card p-6 border border-white/20">
            <Users className="w-8 h-8 mx-auto mb-3 text-primary-300" />
            <h4 className="text-lg font-bold mb-1">Community Trust</h4>
            <p className="text-gray-300 text-sm">Verification-first approach for safer transactions.</p>
          </div>
          <div className="text-center bg-white/10 rounded-card p-6 border border-white/20">
            <Building2 className="w-8 h-8 mx-auto mb-3 text-primary-300" />
            <h4 className="text-lg font-bold mb-1">Service Reliability</h4>
            <p className="text-gray-300 text-sm">Clear booking flow and better visibility for users.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectRise
