import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is Project RISE and ARS?',
      answer: 'Project RISE (Resiliency, Innovation, Sustainability, and Entrepreneurship) is a civic-tech initiative focusing on Resilient Communities. ARS (Auto Repair Service) is the flagship platform that formalizes informal mechanic labor, reduces service scams, and strengthens economic resilience in Makati City through verified mechanic networks and AI-powered diagnostics.'
    },
    {
      question: 'How does ARS Rapide AI work?',
      answer: 'ARS Rapide is an Agentic RAG AI system optimized for Taglish automotive diagnostics. It normalizes your input, classifies intent, routes through a LangGraph state machine to provide diagnosis, cost estimation, and urgency classification—all before you book a mechanic. This reduces information asymmetry and prevents overcharging.'
    },
    {
      question: 'How quickly can I get a mechanic?',
      answer: 'On average, mechanics respond and are matched within 10 minutes. Arrival time depends on your location and traffic conditions, but our real-time tracking keeps you informed throughout. For emergency services, we use urgency classification to prioritize your request.'
    },
    {
      question: 'Are all mechanics verified?',
      answer: 'Yes! Every mechanic undergoes thorough verification including ID checks, professional certifications, and background verification. This is part of our civic-tech approach to formalizing informal labor and building community trust through transparent credentialing.'
    },
    {
      question: 'How do I pay for the service?',
      answer: 'Payment is simple and secure through the app. You receive transparent cost estimates before booking (powered by ARS Rapide AI), and can pay using credit/debit cards, GCash, PayMaya, or cash. All prices are shown upfront with no hidden fees.'
    },
    {
      question: 'What SDGs does ARS support?',
      answer: 'ARS directly contributes to four UN Sustainable Development Goals: SDG 8 (Decent Work and Economic Growth) by formalizing mechanic income, SDG 10 (Reduced Inequalities) through economic inclusion, SDG 1 (No Poverty) via stable livelihoods, and SDG 11 (Sustainable Cities and Communities) by strengthening urban service infrastructure.'
    },
    {
      question: 'Can mechanics track their earnings?',
      answer: 'Absolutely! Mechanics receive earnings analytics dashboards showing their income trends, completed jobs, ratings, and performance metrics. This formalization of income tracking is a key part of transitioning informal workers into structured digital livelihood systems.'
    },
    {
      question: 'What is the booking lifecycle?',
      answer: 'Our structured booking lifecycle ensures transparency: (1) AI Pre-Diagnosis, (2) Request & Match (Pending → Accepted), (3) Track En Route with real-time location, (4) Service In Progress with controlled messaging, (5) Complete & Review with secure payment. Every step is tracked and visible.'
    }
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about ARS. Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Contact our support team
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
