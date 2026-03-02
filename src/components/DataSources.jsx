import React from 'react'
import { Database, Languages, Car, Receipt } from 'lucide-react'

const DataSources = () => {
  const sources = [
    {
      icon: Database,
      title: 'Car Problems Knowledge Base',
      body: 'Curated fault patterns covering electrical, engine, brake, cooling, and transmission systems with Taglish symptom variants.',
      links: [
        { label: 'OBD Codes Reference', href: 'https://www.obd-codes.com/p01-codes' },
        { label: 'NHTSA Datasets & APIs', href: 'https://www.nhtsa.gov/nhtsa-datasets-and-apis' },
        { label: 'Kaggle Automotive Datasets', href: 'https://www.kaggle.com/datasets?search=automotive+fault' }
      ]
    },
    {
      icon: Languages,
      title: 'Taglish Automotive Terms',
      body: 'Filipino-English automotive vocabulary and issue descriptions used for Taglish normalization and retrieval accuracy.',
      links: [
        { label: 'Tsikot Forums', href: 'https://www.tsikot.com/forums/' },
        { label: 'Talkpal Tagalog Terms', href: 'https://talkpal.ai/vocabulary/automotive-and-mechanical-terms-in-tagalog/' },
        { label: 'ProZ Automotive Glossary', href: 'https://www.proz.com/kudoz/english-to-tagalog/automotive-cars-trucks' }
      ]
    },
    {
      icon: Car,
      title: 'Vehicle Database',
      body: 'Car models, engine specs, and local Philippine vehicle references including Hyundai PH lineup data.',
      links: [
        { label: 'Hyundai PH Vehicle Lineup', href: 'https://www.hyundai.com/ph/en/find-a-car/select-a-vehicle' },
        { label: 'Kaggle Car Specs Datasets', href: 'https://www.kaggle.com/datasets?search=car+specifications' }
      ]
    },
    {
      icon: Receipt,
      title: 'PH Pricing Data',
      body: 'Service pricing in Philippine Peso for talyer (independent shops) and casa (dealership) references, combined with ARS Rapide internal estimates.',
      links: [
        { label: 'CarGuide PH Service Articles', href: 'https://www.carguide.ph/search/label/Service' },
        { label: 'Hyundai PH Service & Parts', href: 'https://www.hyundai.com/ph/en/connect-to-service/contact-center' }
      ]
    }
  ]

  return (
    <section id="data-sources" className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Knowledge Base & <span className="text-primary-300">Data Sources</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The ARS Rapide AI is backed by real-world Philippine and international datasets
          </p>
        </div>

        <p className="md:hidden text-center text-sm text-gray-400 mb-5">Swipe to explore data sources</p>

        <div className="md:hidden -mx-4 px-4 flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {sources.map((source) => (
            <div
              key={source.title}
              className="min-w-[88%] snap-start bg-white/5 border border-white/15 rounded-card p-7 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-input bg-primary/20 text-primary flex items-center justify-center mb-5">
                <source.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{source.title}</h3>
              <p className="text-gray-300 leading-relaxed">{source.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {source.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1 rounded-button bg-white/10 hover:bg-white/20 text-primary-200 border border-white/20 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-8">
          {sources.map((source) => (
            <div
              key={source.title}
              className="bg-white/5 border border-white/15 rounded-card p-7 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-input bg-primary/20 text-primary flex items-center justify-center mb-5">
                <source.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{source.title}</h3>
              <p className="text-gray-300 leading-relaxed">{source.body}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {source.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs px-3 py-1 rounded-button bg-white/10 hover:bg-white/20 text-primary-200 border border-white/20 transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            All data is used strictly for AI diagnostic assistance and cost estimation. No personal vehicle data is collected.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DataSources
