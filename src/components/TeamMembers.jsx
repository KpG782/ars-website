import React from 'react'
import { Users } from 'lucide-react'

const TeamMembers = () => {
  const members = [
    'Ferdinand J. Piano',
    'Paul Vallo',
    'Mark Angelo Rivera',
    'Rhumel Abbang',
    'Ken Patrick A. Garcia',
    'Exequel B. Adizon',
    'Chester B. Magtajas',
    'Ervin Babiera'
  ]

  return (
    <section id="team" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary rounded-card mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="section-title">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="section-subtitle">
            Meet the dedicated team behind Project RISE and ARS
          </p>
        </div>

        {/* Team Members */}
        <div className="max-w-5xl mx-auto">
          <p className="md:hidden text-center text-sm text-subtitle mb-5">Swipe to explore team</p>

          <div className="md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {members.map((member) => (
              <div
                key={member}
                className="min-w-[78%] snap-start bg-gradient-to-br from-primary-50 to-surface rounded-card p-6 text-center border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {member.split(' ')[0].charAt(0)}
                  {member.split(' ')[member.split(' ').length - 1].charAt(0)}
                </div>
                <h3 className="font-semibold text-onSurface text-sm leading-relaxed">{member}</h3>
              </div>
            ))}
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <div
                key={member}
                className="bg-gradient-to-br from-primary-50 to-surface rounded-card p-6 text-center hover:shadow-sm transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold group-hover:scale-105 transition-transform">
                  {member.split(' ')[0].charAt(0)}
                  {member.split(' ')[member.split(' ').length - 1].charAt(0)}
                </div>
                <h3 className="font-semibold text-onSurface text-sm leading-relaxed">{member}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-subtitle mb-6">
            Together, we're building a more resilient and inclusive future for automotive services
          </p>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
