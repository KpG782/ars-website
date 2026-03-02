import React from 'react'
import { AlertCircle, TrendingDown, Users, DollarSign } from 'lucide-react'

const ProblemStatement = () => {
  const problems = {
    customers: [
      'Unverified mechanics with no credential checks',
      'Price opacity and frequent overcharging',
      'Emergency vulnerability with no trusted network',
      'No centralized booking system'
    ],
    mechanics: [
      'Irregular income streams and unstable demand',
      'Limited digital presence and visibility',
      'No structured booking workflows',
      'No measurable earnings tracking'
    ]
  }

  return (
    <section id="problem-statement" className="py-20 md:py-32 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-600 rounded-2xl mb-6">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h2 className="section-title">
            The <span className="text-red-600">Problem</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Makati City has one of the highest concentrations of registered vehicles in Metro Manila, yet automotive repair services remain informal, opaque, and inconsistent.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-red-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vehicle Owners Face</h3>
            </div>
            <ul className="space-y-4">
              {problems.customers.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">{problem}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-orange-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Independent Mechanics Face</h3>
            </div>
            <ul className="space-y-4">
              {problems.mechanics.map((problem) => (
                <li key={problem} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-gray-700 leading-relaxed">{problem}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                <TrendingDown className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">National Challenge</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Although Makati supports livelihood initiatives, skilled informal trades remain digitally disconnected from secure demand systems. Nationally, informal labor remains a major challenge - automotive mechanics, welders, and technical workers often operate outside structured digital ecosystems.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-bold text-white">Without civic-tech intervention</span>, informal service markets will continue limiting income stability and consumer trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement
