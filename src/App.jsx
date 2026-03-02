import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SDGShowcase from './components/SDGShowcase'
import ProjectRise from './components/ProjectRise'
import ProblemStatement from './components/ProblemStatement'
import Stats from './components/Stats'
import Features from './components/Features'
import TechnicalArchitecture from './components/TechnicalArchitecture'
import HowItWorks from './components/HowItWorks'
import ValueProposition from './components/ValueProposition'
import ProjectedOutcomes from './components/ProjectedOutcomes'
import ForMechanics from './components/ForMechanics'
import TeamMembers from './components/TeamMembers'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SDGShowcase />
      <ProjectRise />
      <ProblemStatement />
      <Stats />
      <Features />
      <TechnicalArchitecture />
      <HowItWorks />
      <ValueProposition />
      <ProjectedOutcomes />
      <ForMechanics />
      <TeamMembers />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
