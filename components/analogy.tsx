'use client'

import { useEffect, useRef, useState } from 'react'

const analogyItems = [
  {
    abbr: 'CS',
    title: 'Computer Science',
    role: 'Builds the Engine',
    description:
      'A Computer Scientist designs and engineers the engine itself — understanding every gear, combustion cycle, and thermodynamic principle. They create the algorithms and underlying systems that power everything else.',
    detail:
      'Just as automotive engineers invent new engine designs using physics and material science, CS professionals invent new computational methods using mathematics and logic.',
    color: 'oklch(0.38 0.15 265)',
    lightColor: '#eff3ff',
    gradient: 'cs-gradient',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    abbr: 'IT',
    title: 'Information Technology',
    role: 'Keeps the Engine Running',
    description:
      'An IT professional is the skilled mechanic who installs, maintains, repairs, and optimizes the engine in real-world vehicles. They ensure systems operate efficiently, reliably, and securely every day.',
    detail:
      'Just as a pit crew keeps a race car performing at peak condition, IT professionals maintain servers, networks, and infrastructure to ensure zero downtime.',
    color: 'oklch(0.45 0.14 195)',
    lightColor: '#e8f7fb',
    gradient: 'it-gradient',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    abbr: 'IS',
    title: 'Information Systems',
    role: 'Decides How the Engine Serves the Business',
    description:
      'An IS professional is the fleet manager who determines which vehicles are needed, how they should be used, what routes maximize efficiency, and how the whole operation serves business goals.',
    detail:
      'Just as a logistics director uses data and systems to optimize a delivery fleet, IS professionals align technology with organizational strategy to drive business value.',
    color: 'oklch(0.48 0.13 145)',
    lightColor: '#eaf7ee',
    gradient: 'is-gradient',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
]

export default function Analogy() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeItem, setActiveItem] = useState<number | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="analogy" ref={sectionRef} className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(oklch(1 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'oklch(0.78 0.14 85)' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{ background: 'oklch(0.45 0.14 195)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="h-px w-12 bg-white/20" />
            <span className="text-xs font-bold tracking-widest uppercase text-gold">Real-World Analogy</span>
            <div className="h-px w-12 bg-white/20" />
          </div>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-white mb-4 text-balance transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Think of It as an Automobile
          </h2>
          <p
            className={`text-white/60 text-lg max-w-2xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            The three disciplines work together — but each plays a very different role.
            Click each card to explore its unique contribution.
          </p>
        </div>

        {/* Analogy flow */}
        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector arrows (desktop only) */}
          <div className="hidden md:flex absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 z-10">
            <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <div className="hidden md:flex absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 z-10">
            <svg className="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>

          {analogyItems.map((item, idx) => (
            <div
              key={item.abbr}
              className={`rounded-3xl border-2 p-8 cursor-pointer transition-all duration-500 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{
                transitionDelay: `${idx * 0.15 + 0.2}s`,
                borderColor: activeItem === idx ? item.color : 'oklch(1 0 0 / 0.1)',
                background: activeItem === idx
                  ? 'oklch(1 0 0 / 0.1)'
                  : 'oklch(1 0 0 / 0.05)',
              }}
              onClick={() => setActiveItem(activeItem === idx ? null : idx)}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>

              {/* Abbr badge */}
              <span
                className="inline-block px-3 py-0.5 rounded-full text-xs font-bold text-white mb-3"
                style={{ background: item.color + 'aa' }}
              >
                {item.abbr}
              </span>

              <h3 className="font-serif text-xl font-bold text-white mb-1">{item.title}</h3>
              <p className="text-gold text-sm font-semibold mb-4 italic">"{item.role}"</p>
              <p className="text-white/65 text-sm leading-relaxed">{item.description}</p>

              {/* Expanded detail */}
              {activeItem === idx && (
                <div className="mt-5 pt-5 border-t border-white/10 animate-in fade-in duration-300">
                  <p className="text-white/80 text-sm leading-relaxed">{item.detail}</p>
                </div>
              )}

              <div className="mt-5 flex justify-end">
                <svg
                  className={`w-4 h-4 text-white/30 transition-transform duration-300 ${activeItem === idx ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Summary tagline */}
        <div
          className={`mt-12 text-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.7s' }}
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-white/80 font-medium text-sm">
              CS <span className="text-gold font-bold">creates</span> &nbsp;·&nbsp;
              IT <span className="text-gold font-bold">operates</span> &nbsp;·&nbsp;
              IS <span className="text-gold font-bold">applies</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
