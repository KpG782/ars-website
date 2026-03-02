import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is Project RISE and ARS?',
      answer: 'Project RISE (Resiliency, Innovation, Sustainability, and Entrepreneurship) is a civic-tech initiative for resilient communities. ARS (Auto Repair Service) is its platform for verified automotive service workflows in Makati City.'
    },
    {
      question: 'How does ARS Rapide work?',
      answer: 'ARS Rapide is an Agentic RAG system designed for Taglish automotive pre-diagnosis. It processes user input, classifies intent, and returns structured guidance to support booking decisions.'
    },
    {
      question: 'Are all mechanics verified?',
      answer: 'The platform is designed around verification-first onboarding. Mechanics are screened through identity and credential checks before activation.'
    },
    {
      question: 'How are costs presented?',
      answer: 'ARS focuses on transparent costing. Users receive pre-booking cost guidance and clearer service visibility through structured workflows.'
    },
    {
      question: 'Can mechanics track their work?',
      answer: 'Yes. Mechanic-side tools are intended to include job history and earnings tracking as part of formalization and accountability.'
    },
    {
      question: 'What does the booking lifecycle include?',
      answer: 'The intended lifecycle is: AI pre-diagnosis, request and matching, en route tracking, service progress, and completion with review.'
    },
    {
      question: 'Are pilot metrics final?',
      answer: 'No. Pilot metrics and timelines are currently being validated with stakeholders and may be updated as implementation progresses.'
    }
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-gradient-to-br from-primary-50 via-white to-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary rounded-card mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle">
            Core information about ARS and Project RISE. Details may evolve during pilot planning.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="mb-4 bg-white rounded-card shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-primary-50 transition-colors"
              >
                <span className="font-semibold text-onSurface text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2 text-subtitle leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-subtitle mb-4">Want to know more about Project RISE?</p>
          <a
            href="#project-rise"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-600 transition-colors"
          >
            Explore Project RISE
            <span>-&gt;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
