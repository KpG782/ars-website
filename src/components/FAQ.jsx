import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What is ARS?',
      answer: 'ARS is a civic-tech platform that helps vehicle owners connect with verified mechanics through a clear and trackable service flow.'
    },
    {
      question: 'How does the AI help?',
      answer: 'Before booking, ARS Rapide helps interpret your issue in simple terms and gives guidance so you know what to expect.'
    },
    {
      question: 'Are mechanics verified?',
      answer: 'Yes. ARS is built with verification-first onboarding so only reviewed mechanics are shown in the platform workflow.'
    },
    {
      question: 'Are pilot details final?',
      answer: 'Not yet. Pilot metrics and timelines are still being validated and will be updated as implementation progresses.'
    }
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 via-white to-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary rounded-card mb-5">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="mb-4 bg-white rounded-card shadow-sm overflow-hidden border border-gray-100"
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
              <div className={`${openIndex === index ? 'max-h-72' : 'max-h-0'} overflow-hidden transition-all duration-300`}>
                <div className="px-6 pb-5 pt-2 text-subtitle leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
