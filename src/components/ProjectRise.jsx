import React from 'react'
import { TrendingUp, Users, Building2 } from 'lucide-react'

const ProjectRise = () => {
  return (
    <section id="project-rise" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-yellow/30 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-card mb-6">
            <img src="/logo.png" alt="ARS Logo" className="w-10 h-10 object-contain" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            PROJECT <span className="text-primary-300">RISE</span>
          </h2>
          <p className="text-2xl font-semibold text-primary-200 mb-4">
            Resiliency, Innovation, Sustainability, and Entrepreneurship
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Category: <span className="font-bold text-white">Resilient Communities</span>
          </p>
        </div>

        {/* Executive Summary */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-hero p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Executive Summary</h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              ARS (Auto Repair Service) is a mobile-first civic-tech automotive service platform designed to formalize 
              informal mechanic labor, reduce service scams, and strengthen economic resilience in Makati City.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Built with real-time mechanic discovery and powered by an <span className="font-bold text-primary-300">Agentic RAG AI diagnostic assistant (ARS Rapide)</span>, 
              the platform connects vehicle owners exclusively with verified mechanics through structured booking workflows.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Despite Makati's role as the financial capital of the Philippines, its automotive repair sector remains fragmented 
              and largely informal. ARS strengthens community resilience by formalizing income pathways, improving consumer protection, 
              and building trusted digital infrastructure for essential services.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-card flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-2">Economic Resilience</h4>
            <p className="text-gray-300">Formalizing informal labor through digital infrastructure</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-card flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-2">Community Trust</h4>
            <p className="text-gray-300">Verified mechanics and transparent pricing reduce scams</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-card flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-2">Urban Infrastructure</h4>
            <p className="text-gray-300">Strengthening essential service systems in cities</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectRise
