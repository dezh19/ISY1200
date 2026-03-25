'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

const tableRows = [
  {
    criterion: 'Main Focus',
    cs: 'Computation, algorithms, and the theory of software & hardware',
    it: 'Deploying, maintaining, and managing computing infrastructure',
    is: 'Using technology to solve organizational and business problems',
  },
  {
    criterion: 'Core Skills',
    cs: 'Programming, mathematical reasoning, algorithm design, AI/ML',
    it: 'Networking, server management, cloud, security operations',
    is: 'Business analysis, database design, systems integration, management',
  },
  {
    criterion: 'Typical Courses',
    cs: 'Data Structures, Algorithms, OS, Compilers, Machine Learning, Computer Architecture',
    it: 'Networking, Cloud Computing, Linux Admin, Cybersecurity, Virtualization',
    is: 'MIS, ERP Systems, Database Design, IT Strategy, Business Intelligence, Systems Analysis',
  },
  {
    criterion: 'Career Outcomes',
    cs: 'Software Engineer, AI Developer, Researcher, Cybersecurity Analyst, Game Dev',
    it: 'Network Admin, Systems Admin, Cloud Tech, IT Support, Database Admin',
    is: 'Business Analyst, Systems Analyst, ERP Consultant, IT Project Manager, Data Analyst',
  },
  {
    criterion: 'Mathematics Depth',
    cs: 'Very High — Discrete Math, Calculus, Linear Algebra, Probability, Logic',
    it: 'Moderate — Networking math, binary, basic logic',
    is: 'Light — Statistics, basic quantitative methods',
  },
  {
    criterion: 'Business Orientation',
    cs: 'Low — Primarily technical; business context minimal',
    it: 'Moderate — Supports business but does not drive strategy',
    is: 'High — Central focus is aligning technology with business goals',
  },
  {
    criterion: 'ACM Emphasis',
    cs: '"The study of algorithmic processes, their theory, design, and implementation"',
    it: '"Selection, creation, deployment, and management of computing infrastructure"',
    is: '"The organizational and societal use of information systems"',
  },
]

const highlightMap: Record<string, string> = {
  'Very High': 'bg-blue-50 text-blue-800 font-semibold',
  'Moderate': 'bg-amber-50 text-amber-800 font-semibold',
  'Light': 'bg-green-50 text-green-800 font-semibold',
  'High': 'bg-green-50 text-green-800 font-semibold',
  'Low': 'bg-slate-50 text-slate-600 font-semibold',
}

export default function AcmTable() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  const [activeCol, setActiveCol] = useState<'cs' | 'it' | 'is' | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const colColors = {
    cs: { header: 'oklch(0.38 0.15 265)', light: '#eff3ff', border: '#bbc8f5' },
    it: { header: 'oklch(0.45 0.14 195)', light: '#e8f7fb', border: '#9fd4e8' },
    is: { header: 'oklch(0.48 0.13 145)', light: '#eaf7ee', border: '#9fd3b2' },
  }

  return (
    <section id="comparison" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className={`flex items-center justify-center gap-3 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="h-px w-12 bg-border" />
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">ACM Comparison</span>
            <div className="h-px w-12 bg-border" />
          </div>
          <h2
            className={`font-serif text-4xl md:text-5xl font-bold text-navy mb-4 text-balance transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Side-by-Side Comparison
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-xl mx-auto transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.2s' }}
          >
            Based on ACM Computing Curricula. Hover over columns to highlight differences. Click a discipline header to filter.
          </p>
        </div>

        {/* Column highlight buttons */}
        <div className={`flex justify-center gap-4 mb-8 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.3s' }}>
          {(['cs', 'it', 'is'] as const).map((col) => (
            <button
              key={col}
              onClick={() => setActiveCol(activeCol === col ? null : col)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-300',
                activeCol === col ? 'text-white border-transparent shadow-md scale-105' : 'bg-white text-foreground hover:scale-105',
              )}
              style={activeCol === col
                ? { background: colColors[col].header }
                : { borderColor: colColors[col].header + '80', color: colColors[col].header }}
            >
              {col === 'cs' ? 'Computer Science' : col === 'it' ? 'Information Technology' : 'Information Systems'}
            </button>
          ))}
          {activeCol && (
            <button
              onClick={() => setActiveCol(null)}
              className="px-4 py-2 rounded-full text-sm border border-border text-muted-foreground hover:bg-surface transition-all"
            >
              Clear
            </button>
          )}
        </div>

        {/* Table */}
        <div
          className={`rounded-2xl overflow-hidden border border-border shadow-lg transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '0.35s' }}
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              {/* Header */}
              <thead>
                <tr>
                  <th className="bg-navy text-white text-left px-6 py-5 text-sm font-semibold w-40">
                    Criterion
                  </th>
                  {(['cs', 'it', 'is'] as const).map((col) => (
                    <th
                      key={col}
                      className="text-white text-left px-6 py-5 text-sm font-bold transition-all duration-300 cursor-pointer hover:brightness-110"
                      style={{
                        background: colColors[col].header,
                        opacity: activeCol && activeCol !== col ? 0.5 : 1,
                      }}
                      onClick={() => setActiveCol(activeCol === col ? null : col)}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center text-xs font-black">
                          {col.toUpperCase()}
                        </span>
                        <span>{col === 'cs' ? 'Computer Science' : col === 'it' ? 'Information Technology' : 'Information Systems'}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.criterion}
                    className={cn(
                      'border-t border-border transition-all duration-200 cursor-default',
                      hoveredRow === i ? 'bg-slate-50' : i % 2 === 0 ? 'bg-white' : 'bg-surface',
                    )}
                    onMouseEnter={() => setHoveredRow(i)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="px-6 py-4 text-sm font-bold text-navy whitespace-nowrap border-r border-border">
                      {row.criterion}
                    </td>
                    {(['cs', 'it', 'is'] as const).map((col) => (
                      <td
                        key={col}
                        className="px-6 py-4 text-sm text-foreground leading-relaxed align-top transition-all duration-300"
                        style={{
                          opacity: activeCol && activeCol !== col ? 0.35 : 1,
                          background: activeCol === col && hoveredRow === i
                            ? colColors[col].light
                            : activeCol === col
                              ? colColors[col].light + '60'
                              : undefined,
                        }}
                      >
                        {row[col]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className={`mt-6 flex flex-wrap justify-center gap-6 text-xs text-muted-foreground transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '0.5s' }}>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: colColors.cs.header }} />
            Computer Science
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: colColors.it.header }} />
            Information Technology
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm" style={{ background: colColors.is.header }} />
            Information Systems
          </span>
          <span className="text-muted-foreground italic">
            Source: ACM/IEEE Computing Curricula 2020
          </span>
        </div>
      </div>
    </section>
  )
}
