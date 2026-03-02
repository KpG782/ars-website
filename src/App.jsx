import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectRise from './components/ProjectRise'
import ProblemStatement from './components/ProblemStatement'
import Stats from './components/Stats'
import Features from './components/Features'
import TechnicalArchitecture from './components/TechnicalArchitecture'
import HowItWorks from './components/HowItWorks'
import ValueProposition from './components/ValueProposition'
import ProjectedOutcomes from './components/ProjectedOutcomes'
import ForCustomers from './components/ForCustomers'
import ForMechanics from './components/ForMechanics'
import TeamMembers from './components/TeamMembers'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Download from './components/Download'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ProjectRise />
      <ProblemStatement />
      <Stats />
      <Features />
      <TechnicalArchitecture />
      <HowItWorks />
      <ValueProposition />
      <ProjectedOutcomes />
      <ForCustomers />
      <ForMechanics />
      <TeamMembers />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Download />
      <Footer />
    </div>
  )
}

export default App
