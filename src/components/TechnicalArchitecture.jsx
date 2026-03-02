import React from 'react'
import {
  MessageSquareText,
  Search,
  Brain,
  CircleDollarSign,
  Wrench,
  ShieldCheck,
  Database,
  Languages,
  Car,
  Receipt
} from 'lucide-react'

const TechnicalArchitecture = () => {
  const steps = [
    {
      icon: MessageSquareText,
      title: '1. Describe the Problem',
      description: 'User explains the car issue in Taglish or English.',
      detail: 'Starts the flow with real-world context from the user.'
    },
    {
      icon: Search,
      title: '2. Check Knowledge Base',
      description: 'ARS compares the issue against trusted automotive references.',
      detail: 'Looks for similar symptoms, causes, and known repair patterns.'
    },
    {
      icon: Brain,
      title: '3. AI Pre-Diagnosis',
      description: 'The AI suggests likely causes in clear, simple language.',
      detail: 'Combines user input + retrieved references before response.'
    },
    {
      icon: CircleDollarSign,
      title: '4. Cost and Urgency',
      description: 'ARS gives an estimated range and urgency level.',
      detail: 'Helps users prioritize what to do next.'
    },
    {
      icon: Wrench,
      title: '5. Booking Handoff',
      description: 'Result is passed into the verified mechanic booking flow.',
      detail: 'Booking details stay aligned with the AI output.'
    },
    {
      icon: ShieldCheck,
      title: '6. Final Verification',
      description: 'A verified mechanic confirms diagnosis during actual service.',
      detail: 'Final mechanical validation happens in real service.'
    }
  ]

  const sources = [
    {
      icon: Database,
      title: 'Car Problems Knowledge Base',
      body: 'Fault patterns for engine, brake, cooling, and transmission issues.',
      hover: 'Includes OBD-style references and complaint patterns.'
    },
    {
      icon: Languages,
      title: 'Taglish Automotive Terms',
      body: 'Filipino-English vocabulary for symptom normalization.',
      hover: 'Improves understanding of mixed language user prompts.'
    },
    {
      icon: Car,
      title: 'Vehicle Specifications',
      body: 'Vehicle model and spec references for better context matching.',
      hover: 'Helps narrow likely causes by vehicle profile.'
    },
    {
      icon: Receipt,
      title: 'PH Service Pricing',
      body: 'Local price references for clearer estimate ranges.',
      hover: 'Supports practical cost guidance before booking.'
    }
  ]

  return (
    <section id="technical-architecture" className="py-16 md:py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-card mb-5">
            <img src="/logo.png" alt="ARS Logo" className="w-9 h-9 object-contain" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            ARS <span className="text-primary-300">Rapide</span> AI Flow
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Simple flow from user issue to booking-ready guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {steps.map((step) => (
            <div
              key={step.title}
              className="group bg-white/10 border border-white/20 rounded-card p-6 hover:bg-white/15 hover:border-primary-300/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-input flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <step.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{step.description}</p>
              <p className="text-xs text-primary-200 opacity-0 group-hover:opacity-100 transition-opacity">
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        <div id="data-sources" className="pt-2">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              Knowledge Base & <span className="text-primary-300">Data Sources</span>
            </h3>
            <p className="text-gray-300 max-w-3xl mx-auto">
              These references power the AI checks behind each step of the flow.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sources.map((source) => (
              <div
                key={source.title}
                className="group bg-white/10 border border-white/20 rounded-card p-5 hover:bg-white/15 hover:border-primary-300/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-primary/20 text-primary-200 rounded-input flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
                  <source.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2">{source.title}</h4>
                <p className="text-sm text-gray-300 leading-relaxed mb-3">{source.body}</p>
                <p className="text-xs text-primary-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  {source.hover}
                </p>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            ARS Rapide supports decision-making before booking. Final diagnosis is confirmed by a verified mechanic.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TechnicalArchitecture
