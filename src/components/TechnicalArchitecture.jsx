import React from 'react'
import { Brain, Database, Zap, Server, Shield, BarChart2 } from 'lucide-react'

const TechnicalArchitecture = () => {
  const techStack = [
    {
      icon: Brain,
      title: 'Agent Orchestration',
      tech: 'LangGraph',
      description: 'State-driven agentic workflow with controlled reasoning paths'
    },
    {
      icon: Zap,
      title: 'LLM',
      tech: 'Gemini Flash Family',
      description: 'Configurable model version for automotive diagnostics'
    },
    {
      icon: Database,
      title: 'Vector Search',
      tech: 'Sentence Transformers',
      description: 'MiniLM embeddings with cosine similarity'
    },
    {
      icon: Server,
      title: 'API',
      tech: 'FastAPI + Uvicorn',
      description: 'High-performance async API with Redis caching'
    },
    {
      icon: Shield,
      title: 'Monitoring',
      tech: 'Prometheus',
      description: 'Structured logging and rate limiting'
    },
    {
      icon: BarChart2,
      title: 'Deployment',
      tech: 'Docker + VPS',
      description: 'Containerized, cloud-native architecture'
    }
  ]

  const workflow = [
    'User Message (Taglish/English)',
    'Taglish Normalizer',
    'Intent Classifier',
    'LangGraph State Machine',
    'Diagnosis Node (RAG)',
    'Cost Estimator Node',
    'Urgency Classifier',
    'Structured JSON Response'
  ]

  return (
    <section id="technical-architecture" className="py-20 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-2xl mb-6">
            <Brain className="w-8 h-8" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ARS <span className="text-primary-400">Rapide</span>
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Agentic RAG AI System
          </p>
          <p className="section-subtitle text-gray-400 max-w-3xl mx-auto">
            A state-driven Agentic Retrieval-Augmented Generation system optimized for Taglish automotive diagnostics
          </p>
        </div>

        {/* Key Features */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Unlike Traditional RAG Systems</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-200">Normalizes Taglish automotive language</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-200">Classifies user intent</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-200">Routes through LangGraph state machine</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-200">Separates diagnosis and cost estimation</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-200">Outputs structured JSON responses</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2"></div>
                <p className="text-gray-200">Deterministic agentic workflow</p>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow Diagram */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Technical Workflow</h3>
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col gap-4">
              {workflow.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <p className="text-gray-200">{step}</p>
                  </div>
                  {index < workflow.length - 1 && (
                    <div className="w-px h-8 bg-primary-400/50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Core Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <tech.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                <p className="text-primary-400 font-semibold mb-2">{tech.tech}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scalability Note */}
        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-primary-600/20 backdrop-blur-sm rounded-2xl p-8 border border-primary-400/30">
            <p className="text-lg text-gray-200">
              <span className="font-bold text-primary-400">Scalability Pathway:</span> Migration to FAISS or hosted 
              vector databases available as knowledge base grows, ensuring enterprise-grade performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalArchitecture
