'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const disciplines = [
  {
    id: 'cs',
    abbr: 'CS',
    title: 'Computer Science',
    tagline: 'The Foundation of Computing',
    gradient: 'cs-gradient',
    borderColor: 'border-blue-700/30',
    accentColor: 'oklch(0.38 0.15 265)',
    lightBg: 'oklch(0.96 0.02 265)',
    acmDescription:
      'ACM defines CS as the systematic study of algorithmic processes — their theory, design, analysis, implementation, and application. CS emphasizes computation, problem-solving, and the mathematical underpinnings of software and hardware.',
    focus: [
      'Algorithms & Data Structures',
      'Programming Languages & Compilers',
      'Artificial Intelligence & Machine Learning',
      'Software Engineering & Design',
      'Theory of Computation',
      'Computer Architecture',
      'Cybersecurity Principles',
    ],
    math: 'Strong — Discrete Mathematics, Calculus, Linear Algebra, Statistics, Logic',
    business: 'Minimal — CS focuses on technical depth over business processes',
    careers: [
      { role: 'Software Engineer', level: 'Entry–Senior' },
      { role: 'AI / ML Developer', level: 'Mid–Senior' },
      { role: 'Cybersecurity Specialist', level: 'Mid–Senior' },
      { role: 'Research Scientist', level: 'Senior' },
      { role: 'Game Developer', level: 'Entry–Mid' },
      { role: 'Systems Programmer', level: 'Mid–Senior' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    ),
    courses: ['Data Structures', 'Algorithm Design', 'Operating Systems', 'Machine Learning', 'Compiler Design', 'Computer Graphics'],
    quote: '"CS builds the intellectual tools that make all computing possible."',
  },
  {
    id: 'it',
    abbr: 'IT',
    title: 'Information Technology',
    tagline: 'The Infrastructure of Computing',
    gradient: 'it-gradient',
    borderColor: 'border-cyan-700/30',
    accentColor: 'oklch(0.45 0.14 195)',
    lightBg: 'oklch(0.96 0.02 195)',
    acmDescription:
      'ACM describes IT as focusing on the practical aspects of computing technology — selecting, deploying, maintaining, and operating computing and communication infrastructure. IT professionals ensure that technology works reliably for organizations and users.',
    focus: [
      'Network Administration & Architecture',
      'Systems Administration & Cloud',
      'Hardware Installation & Maintenance',
      'IT Security & Compliance',
      'Database Management',
      'Virtualization & Cloud Services',
      'User Support & Help Desk',
    ],
    math: 'Moderate — Binary/Networking math, some Statistics, basic Logic',
    business: 'Moderate — IT supports business operations but does not design them',
    careers: [
      { role: 'Network Administrator', level: 'Entry–Senior' },
      { role: 'IT Support Specialist', level: 'Entry–Mid' },
      { role: 'Cloud Technician', level: 'Mid–Senior' },
      { role: 'Systems Administrator', level: 'Mid–Senior' },
      { role: 'IT Security Analyst', level: 'Mid–Senior' },
      { role: 'Database Administrator', level: 'Mid–Senior' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    courses: ['Networking Fundamentals', 'Cloud Computing', 'Cybersecurity', 'Linux Administration', 'Virtualization', 'IT Project Management'],
    quote: '"IT keeps the digital world running smoothly and securely."',
  },
  {
    id: 'is',
    abbr: 'IS',
    title: 'Information Systems',
    tagline: 'The Bridge Between Technology & Business',
    gradient: 'is-gradient',
    borderColor: 'border-green-700/30',
    accentColor: 'oklch(0.48 0.13 145)',
    lightBg: 'oklch(0.96 0.02 145)',
    acmDescription:
      'ACM frames IS as a discipline concerned with the information needs of organizations and the information systems that serve those needs. IS professionals apply technology to solve organizational and societal problems by bridging the gap between business and computing.',
    focus: [
      'Enterprise Resource Planning (ERP)',
      'Database Design & Management',
      'Business Process Analysis',
      'Decision Support Systems',
      'Systems Analysis & Design',
      'E-Commerce & Digital Strategy',
      'IT Project Management',
    ],
    math: 'Light — Statistics, Basic Math for analytics; less theory than CS',
    business: 'Strong — IS is fundamentally about aligning technology with business goals',
    careers: [
      { role: 'Business Analyst', level: 'Entry–Senior' },
      { role: 'Systems Analyst', level: 'Mid–Senior' },
      { role: 'ERP Consultant', level: 'Mid–Senior' },
      { role: 'IT Project Manager', level: 'Senior' },
      { role: 'Data Analyst', level: 'Entry–Mid' },
      { role: 'CIO / IT Director', level: 'Executive' },
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
      </svg>
    ),
    courses: ['Systems Analysis', 'Database Management', 'Business Intelligence', 'ERP Systems', 'IT Strategy', 'Management Information Systems'],
    quote: '"IS turns data into decisions and technology into value."',
  },
]

export default function DisciplineCards() {
  const [activeTab, setActiveTab] = useState<Record<string, string>>({
    cs: 'focus',
    it: 'focus',
    is: 'focus',
  })
  const [expanded, setExpanded] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const tabs = ['focus', 'courses', 'careers']

  return (
    <section id="fields" ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="h-px w-12 bg-border" />
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">The Three Fields</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-navy mb-4 text-balance transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Explore Each Discipline
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Click on each card to dive deeper into its focus areas, courses, and career outcomes.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {disciplines.map((d, idx) => (
            <div
              key={d.id}
              className={cn(
                'rounded-3xl overflow-hidden border-2 bg-white shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group cursor-pointer',
                d.borderColor,
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                expanded === d.id ? 'ring-2 ring-offset-2' : '',
              )}
              style={{
                transitionDelay: `${idx * 0.15 + 0.1}s`,
                ...(expanded === d.id ? { ringColor: d.accentColor } : {}),
              }}
              onClick={() => setExpanded(expanded === d.id ? null : d.id)}
            >
              {/* Card header */}
              <div className={`${d.gradient} p-7 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 blur-2xl"
                  style={{ background: 'white', transform: 'translate(30%, -30%)' }} />
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white">
                    {d.icon}
                  </div>
                  <span className="text-3xl font-serif font-black text-white/25 select-none">{d.abbr}</span>
                </div>
                <h3 className="font-serif text-xl font-bold mb-1">{d.title}</h3>
                <p className="text-white/70 text-xs font-medium tracking-wide uppercase">{d.tagline}</p>
              </div>

              {/* ACM Quote */}
              <div className="px-6 pt-5 pb-3">
                <p className="text-muted-foreground text-xs leading-relaxed italic border-l-2 pl-3"
                  style={{ borderColor: d.accentColor }}>
                  {d.acmDescription}
                </p>
              </div>

              {/* Tab switcher */}
              <div className="px-6 pb-2">
                <div className="flex rounded-xl overflow-hidden border border-border bg-surface text-xs font-semibold">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveTab((prev) => ({ ...prev, [d.id]: tab }))
                      }}
                      className={cn(
                        'flex-1 py-2 capitalize transition-all duration-200',
                        activeTab[d.id] === tab
                          ? 'text-white'
                          : 'text-muted-foreground hover:text-foreground',
                      )}
                      style={activeTab[d.id] === tab ? { background: d.accentColor } : {}}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab content */}
              <div className="px-6 pb-6 flex-1">
                {activeTab[d.id] === 'focus' && (
                  <ul className="space-y-1.5 mt-3">
                    {d.focus.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: d.accentColor }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab[d.id] === 'courses' && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {d.courses.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ background: d.accentColor }}
                      >
                        {c}
                      </span>
                    ))}
                    <div className="w-full mt-3">
                      <p className="text-xs text-muted-foreground">
                        <strong>Mathematics requirement:</strong>{' '}
                        <span className="italic">{d.math}</span>
                      </p>
                    </div>
                  </div>
                )}
                {activeTab[d.id] === 'careers' && (
                  <ul className="mt-3 space-y-2">
                    {d.careers.map((c) => (
                      <li key={c.role} className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{c.role}</span>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full text-white"
                          style={{ background: d.accentColor + 'cc' }}
                        >
                          {c.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer quote */}
              <div className="px-6 py-4 border-t border-border bg-surface">
                <p className="text-xs italic text-muted-foreground text-center">{d.quote}</p>
              </div>

              {/* Expand chevron */}
              <div className="flex justify-center pb-3">
                <svg
                  className={cn('w-4 h-4 text-muted-foreground transition-transform duration-300', expanded === d.id ? 'rotate-180' : '')}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </div>

              {/* Expanded content */}
              {expanded === d.id && (
                <div className="px-6 pb-6 border-t border-border pt-4 bg-white animate-in fade-in duration-300">
                  <h4 className="font-semibold text-sm text-foreground mb-2">Business Alignment</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">{d.business}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
