'use client'

import { useEffect, useRef, useState } from 'react'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  delay: Math.random() * 4,
  duration: Math.random() * 6 + 4,
}))

export default function Hero() {
  const [visible, setVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleExplore = () => {
    const el = document.getElementById('introduction')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-gradient"
    >
      {/* Animated grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gold opacity-20"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
        style={{ background: 'oklch(0.55 0.20 265)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'oklch(0.78 0.14 85)' }} />

      {/* Badge */}
      <div
        className={`mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '0.1s' }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs font-semibold tracking-widest uppercase">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          ISY1200 · University of Guyana · Dept. of Computer Science
        </span>
      </div>

      {/* Main Title */}
      <div className="text-center px-6 max-w-5xl mx-auto">
        <h1
          className={`font-serif font-bold leading-tight text-white mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            transitionDelay: '0.2s',
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
          }}
        >
          Computer Science,{' '}
          <span className="text-gold">Information Technology,</span>
          <br />
          <span className="text-white/80">and Information Systems</span>
          <br />
          <span className="text-white">Understanding the Differences</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.35s' }}
        >
          Based on{' '}
          <span className="text-gold font-semibold">ACM Computing Curriculum</span>{' '}
          recommendations — guiding students to choose the right computing discipline
          for their future.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.5s' }}
        >
          <button
            onClick={handleExplore}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gold text-navy font-bold text-base shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all duration-300"
          >
            Explore the Fields
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('comparison')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white font-medium text-base hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            View Comparison Table
          </button>
        </div>
      </div>

      {/* Three discipline pill badges */}
      <div
        className={`mt-16 flex flex-wrap justify-center gap-4 px-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ transitionDelay: '0.65s' }}
      >
        {[
          { label: 'Computer Science', icon: '⚙', color: 'oklch(0.38 0.15 265)', abbr: 'CS' },
          { label: 'Information Technology', icon: '🔧', color: 'oklch(0.45 0.14 195)', abbr: 'IT' },
          { label: 'Information Systems', icon: '📊', color: 'oklch(0.48 0.13 145)', abbr: 'IS' },
        ].map((d) => (
          <div
            key={d.abbr}
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/20 border border-white/30 text-white text-sm font-semibold backdrop-blur-md hover:bg-white/25 transition-all cursor-default shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
          >
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
              style={{ background: d.color }}
            >
              {d.abbr}
            </span>
            {d.label}
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
