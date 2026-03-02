import React from 'react'
import { MapPin, Info } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navigationLinks = [
    { name: 'Project RISE', href: '#project-rise' },
    { name: 'Features', href: '#features' },
    { name: 'Technical Architecture', href: '#technical-architecture' },
    { name: 'Data Sources', href: '#data-sources' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Projected Outcomes', href: '#projected-outcomes' },
    { name: 'For Mechanics', href: '#mechanics' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' }
  ]

  const projectNotes = [
    'Pilot metrics are under validation and may change after baseline measurement.',
    'Implementation details will be updated as stakeholder coordination progresses.',
    'Current content reflects project direction, not finalized public commitments.'
  ]

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="ARS Logo" className="h-11 w-11 object-contain" />
              <div>
                <h3 className="text-2xl font-extrabold text-onSurface leading-none">ARS</h3>
                <p className="text-sm text-subtitle">Auto Repair Service</p>
              </div>
            </div>

            <p className="text-subtitle max-w-2xl leading-relaxed mb-5">
              ARS is a civic-tech platform for resilient automotive communities. Project RISE focuses on verification-first service workflows, fairer service visibility, and livelihood formalization in Makati City.
            </p>

            <div className="bg-card border border-border rounded-card p-4">
              <div className="flex items-center gap-2 text-onSurface font-semibold text-sm mb-1">
                <MapPin className="w-4 h-4 text-primary" />
                Pilot Geography
              </div>
              <p className="text-xs text-subtitle">Makati City, Philippines</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-card p-6">
            <h4 className="text-onSurface font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-subtitle hover:text-primary transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-card p-6">
            <h4 className="text-onSurface font-bold text-lg mb-4">Project Notes</h4>
            <ul className="space-y-2">
              {projectNotes.map((note) => (
                <li key={note} className="text-sm text-subtitle leading-relaxed flex items-start gap-2">
                  <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-subtitle">
            (c) {currentYear} ARS Auto Repair Service - Project RISE. Civic-Tech for resilient communities.
          </p>
          <a href="#project-rise" className="text-sm font-semibold text-primary hover:text-primary-600 transition-colors">
            Back to project overview
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
