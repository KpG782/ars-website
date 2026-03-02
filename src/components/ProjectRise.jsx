import React from 'react'
import { Target, TrendingUp, Users, Building2 } from 'lucide-react'

const ProjectRise = () => {
  const sdgs = [
    {
      number: '8',
      title: 'Decent Work and Economic Growth',
      description: 'Formalizing mechanic income and creating stable digital demand'
    },
    {
      number: '10',
      title: 'Reduced Inequalities',
      description: 'Increasing economic inclusion for informal workers'
    },
    {
      number: '1',
      title: 'No Poverty',
      description: 'Supporting poverty reduction through structured livelihood'
    },
    {
      number: '11',
      title: 'Sustainable Cities and Communities',
      description: 'Improving trusted city infrastructure systems'
    }
  ]

  return (
    <section id="project-rise" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            PROJECT <span className="text-primary-400">RISE</span>
          </h2>
          <p className="text-2xl font-semibold text-primary-300 mb-4">
            Resiliency, Innovation, Sustainability, and Entrepreneurship
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Category: <span className="font-bold text-white">Resilient Communities</span>
          </p>
        </div>

        {/* Executive Summary */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Executive Summary</h3>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              ARS (Auto Repair Service) is a mobile-first civic-tech automotive service platform designed to formalize 
              informal mechanic labor, reduce service scams, and strengthen economic resilience in Makati City.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Built with real-time mechanic discovery and powered by an <span className="font-bold text-primary-400">Agentic RAG AI diagnostic assistant (ARS Rapide)</span>, 
              the platform connects vehicle owners exclusively with verified mechanics through structured booking workflows.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Despite Makati's role as the financial capital of the Philippines, its automotive repair sector remains fragmented 
              and largely informal. ARS strengthens community resilience by formalizing income pathways, improving consumer protection, 
              and building trusted digital infrastructure for essential services.
            </p>
          </div>
        </div>

        {/* SDG Goals */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            Supporting UN Sustainable Development Goals
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgs.map((sdg, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mb-4 text-3xl font-bold group-hover:scale-110 transition-transform">
                  {sdg.number}
                </div>
                <h4 className="text-lg font-bold mb-3">{sdg.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{sdg.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-2">Economic Resilience</h4>
            <p className="text-gray-300">Formalizing informal labor through digital infrastructure</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold mb-2">Community Trust</h4>
            <p className="text-gray-300">Verified mechanics and transparent pricing reduce scams</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
