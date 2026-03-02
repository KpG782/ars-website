import React, { useRef } from 'react'
import { Users, ChevronLeft, ChevronRight } from 'lucide-react'

const TeamMembers = () => {
  const scrollRef = useRef(null)

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

  const scrollByAmount = (direction) => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.clientWidth * 0.85
    scrollRef.current.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth'
    })
  }

  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary rounded-card mb-5">
            <Users className="w-7 h-7" />
          </div>
          <h2 className="section-title">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="section-subtitle">
            Meet the dedicated team behind Project RISE and ARS
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-end gap-2 mb-4">
            <button
              type="button"
              onClick={() => scrollByAmount('prev')}
              className="w-10 h-10 rounded-full border border-border bg-white hover:bg-surface flex items-center justify-center transition-colors"
              aria-label="Previous team members"
            >
              <ChevronLeft className="w-5 h-5 text-onSurface" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount('next')}
              className="w-10 h-10 rounded-full border border-border bg-white hover:bg-surface flex items-center justify-center transition-colors"
              aria-label="Next team members"
            >
              <ChevronRight className="w-5 h-5 text-onSurface" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
          >
            {members.map((member) => (
              <div
                key={member}
                className="w-[85%] sm:w-[48%] lg:w-[31%] xl:w-[23%] flex-shrink-0 snap-start bg-gradient-to-br from-primary-50 to-surface rounded-card p-6 text-center border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {member.split(' ')[0].charAt(0)}
                  {member.split(' ')[member.split(' ').length - 1].charAt(0)}
                </div>
                <h3 className="font-semibold text-onSurface text-sm leading-relaxed">{member}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers
