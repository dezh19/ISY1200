'use client'

import { useState, useEffect } from 'react'
import { cn, useTheme } from '@/lib/utils'

const navLinks = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'The Fields', href: '#disciplines' },
  { label: 'Comparison', href: '#comparison' },
  { label: 'Analogy', href: '#analogy' },
  { label: 'Careers', href: '#careers' },
  { label: 'Why UG', href: '#why-ug' },
  { label: 'Conclusion', href: '#conclusion' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [isLightSection, setIsLightSection] = useState(false)

  const { toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = navLinks.map((l) => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)

          const hasLightBg =
            el.classList.contains('bg-white') ||
            el.classList.contains('bg-surface') ||
            el.classList.contains('bg-card')
          setIsLightSection(hasLightBg)
          break
        }
      }

      if (window.scrollY < 40) {
        setIsLightSection(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-navy shadow-lg shadow-navy/30 backdrop-blur-md'
          : isLightSection
            ? 'bg-white/85 backdrop-blur-md border-b border-navy/10'
            : 'bg-transparent',
      )}
    >
      <nav className="w-full px-3 sm:px-5 lg:px-6 xl:px-8 flex items-center justify-between h-16">
        {/* Logo / Identity */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center font-serif font-bold text-navy text-base select-none">
            UG
          </div>
          <div className="leading-tight hidden sm:block">
            <p className={cn('text-xs font-semibold tracking-widest uppercase', isLightSection ? 'text-navy' : 'text-white/90')}>
              University of Guyana
            </p>
            <p className={cn('text-[10px] tracking-wide', isLightSection ? 'text-navy/60' : 'text-white/55')}>
              Dept. of Computer Science · ISY1200
            </p>
          </div>
        </div>

        {/* Desktop links + Theme toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'px-4 py-2 rounded-md text-base font-semibold transition-all duration-200',
                      activeSection === id
                        ? 'bg-gold text-navy'
                        : isLightSection
                          ? 'text-navy/75 hover:text-navy hover:bg-navy/10'
                          : 'text-white/75 hover:text-white hover:bg-white/10',
                    )}
                  >
                    {link.label}
                  </button>
                </li>
              )
            })}
          </ul>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={cn(
              'p-2 rounded-lg transition-all duration-200 flex items-center justify-center w-11 h-11',
              isLightSection ? 'hover:bg-navy/10 text-navy' : 'hover:bg-white/20 text-white',
            )}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            <svg
              className="w-6 h-6 transition-all duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
            {/* Moon icon - shown in light mode */}
            <svg
              className="w-6 h-6 transition-all duration-300 hidden dark:block"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.5 5.05l-.708.707a1 1 0 000 1.414l.707.708zM5 10a1 1 0 100-2H4a1 1 0 100 2h1z" />
            </svg>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={cn(
            'lg:hidden flex flex-col gap-1.5 p-2 rounded-md transition',
            isLightSection ? 'hover:bg-navy/10' : 'hover:bg-white/10',
          )}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              'block w-5 h-0.5 transition-all duration-300',
              isLightSection ? 'bg-navy' : 'bg-white',
              menuOpen && 'rotate-45 translate-y-2',
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 transition-all duration-300',
              isLightSection ? 'bg-navy' : 'bg-white',
              menuOpen && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'block w-5 h-0.5 transition-all duration-300',
              isLightSection ? 'bg-navy' : 'bg-white',
              menuOpen && '-rotate-45 -translate-y-2',
            )}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-navy/95 backdrop-blur-md border-t border-white/10',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <ul className="flex flex-col py-2 px-4 gap-1">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '')
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    'w-full text-left px-4 py-3 rounded-md text-base font-semibold transition-all',
                    activeSection === id
                      ? 'bg-gold text-navy'
                      : 'text-white/80 hover:bg-white/10 hover:text-white',
                  )}
                >
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  )
}
