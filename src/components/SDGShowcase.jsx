import React from 'react'

const SDGShowcase = () => {
  const sdgs = [
    {
      number: 1,
      title: 'No Poverty',
      logo: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-01.jpg',
      color: '#E5243B',
      impact: 'Supporting poverty reduction through structured livelihood systems'
    },
    {
      number: 8,
      title: 'Decent Work and Economic Growth',
      logo: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-08.jpg',
      color: '#A21942',
      impact: 'Formalizing mechanic income and creating stable digital demand'
    },
    {
      number: 10,
      title: 'Reduced Inequalities',
      logo: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-10.jpg',
      color: '#DD1367',
      impact: 'Increasing economic inclusion for informal workers'
    },
    {
      number: 11,
      title: 'Sustainable Cities and Communities',
      logo: 'https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-11.jpg',
      color: '#FD9D24',
      impact: 'Improving trusted city infrastructure systems'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-onSurface mb-3">
            UN Sustainable Development Goals
          </h3>
          <p className="text-subtitle max-w-2xl mx-auto">
            ARS directly contributes to four key SDGs, addressing poverty, economic growth, inequality, and urban resilience
          </p>
        </div>

        {/* SDG Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {sdgs.map((sdg) => (
            <div
              key={sdg.number}
              className="group bg-white rounded-card overflow-hidden border-2 border-gray-100 hover:border-primary-200 transition-all duration-300 hover:shadow-sm"
            >
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-2">
                <img
                  src={sdg.logo}
                  alt={`SDG ${sdg.number}: ${sdg.title}`}
                  className="w-full h-full object-contain rounded-input group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-onSurface text-sm mb-1">SDG {sdg.number}</h4>
                <p className="text-xs text-subtitle leading-relaxed">{sdg.impact}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-primary-50 to-surface rounded-card px-8 py-4 border border-primary-100">
            <p className="text-subtitle font-medium">
              <span className="font-bold text-primary">Project RISE</span> aligns with the UN's 2030 Agenda for Sustainable Development
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SDGShowcase
