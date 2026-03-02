import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Project RISE', href: '#project-rise' },
    { name: 'Features', href: '#features' },
    { name: 'Data Sources', href: '#data-sources' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Team', href: '#team' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="ARS Logo" 
              className="h-10 w-10 object-contain"
            />
              <span className="text-xl font-extrabold text-secondary-900">ARS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-subtitle hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a href="#faq" className="btn-primary">
              Learn More
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-subtitle hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-card shadow-sm">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-subtitle hover:text-primary hover:bg-primary-50 font-medium px-4 py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#faq" 
                className="mx-4 btn-primary text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn More
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
