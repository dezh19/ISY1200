"use client"

import { useState, useEffect, useRef } from "react"

const rows = [
  {
    aspect: "Main Focus",
    cs: "Theoretical foundations of computation, algorithm design & software creation",
    it: "Deployment, management & maintenance of computing infrastructure",
    is: "Using technology to solve business & organisational problems",
  },
  {
    aspect: "Core Skills",
    cs: "Programming, mathematics, data structures, AI/ML, system design",
    it: "Networking, system admin, cloud, security operations, hardware",
    is: "Systems analysis, database design, business process modelling, ERP",
  },
  {
    aspect: "Typical Courses",
    cs: "Algorithms, Discrete Math, AI, Compilers, OS, Software Engineering",
    it: "Networking, Cybersecurity, Cloud Computing, IT Infrastructure, ITIL",
    is: "Database Systems, ERP, Business Intelligence, Systems Analysis, IT Governance",
  },
  {
    aspect: "Career Outcomes",
    cs: "Software Engineer, AI Developer, Researcher, Cybersecurity Specialist",
    it: "Network Admin, Cloud Technician, IT Support, Systems Admin",
    is: "Business Analyst, Systems Analyst, ERP Consultant, Data Analyst",
  },
  {
    aspect: "Mathematics Depth",
    cs: "Very high — discrete math, calculus, statistics, linear algebra",
    it: "Moderate — logic, binary, basic statistics",
    is: "Moderate — business statistics, logic, modelling",
  },
  {
    aspect: "Business Integration",
    cs: "Low to moderate — primarily technical/scientific",
    it: "Moderate — supports business operations through infrastructure",
    is: "Very high — directly aligned with business strategy and processes",
  },
  {
    aspect: "ACM Curriculum",
    cs: "CS2023 — Computing Curricula: Computer Science",
    it: "IT2017 — Computing Curricula: Information Technology",
    is: "IS2020 — Computing Curricula: Information Systems",
  },
  {
    aspect: "Problem Domain",
    cs: "How does computation work? How can we do it better?",
    it: "How do we deploy and maintain technology reliably?",
    is: "How can technology solve this organisational challenge?",
  },
]

export default function ComparisonTable() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  const [activeCol, setActiveCol] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const filtered = rows.filter(
    (r) =>
      !searchTerm ||
      r.aspect.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.cs.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.it.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.is.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const highlight = (text: string) => {
    if (!searchTerm) return text
    const regex = new RegExp(`(${searchTerm})`, "gi")
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-gold/30 text-navy rounded px-0.5">{part}</mark>
      ) : (
        part
      )
    )
  }

  const cols = [
    { key: "cs", label: "Computer Science", short: "CS", color: "oklch(0.38 0.15 265)", lightBg: "bg-cs/5" },
    { key: "it", label: "Information Technology", short: "IT", color: "oklch(0.45 0.14 195)", lightBg: "bg-it/5" },
    { key: "is", label: "Information Systems", short: "IS", color: "oklch(0.48 0.13 145)", lightBg: "bg-is/5" },
  ]

  return (
    <section id="comparison" ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            ACM Comparison
          </div>
          <h2 className="reveal font-serif text-3xl sm:text-4xl font-bold text-navy text-balance mb-4">
            Side-by-Side Comparison
          </h2>
          <div className="reveal w-16 h-1 rounded-full mx-auto mb-5" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
          <p className="reveal max-w-xl mx-auto text-muted-foreground leading-relaxed mb-8">
            Compare all three disciplines across key academic and professional dimensions. Click a column header to highlight it.
          </p>

          {/* Search */}
          <div className="reveal relative max-w-sm mx-auto">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search the table..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Table wrapper */}
        <div className="reveal overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-navy">
                <th className="text-left px-6 py-4 text-white/60 text-xs font-semibold uppercase tracking-wider w-40">
                  Aspect
                </th>
                {cols.map((col) => (
                  <th
                    key={col.key}
                    className={`px-6 py-4 text-sm font-bold text-left cursor-pointer transition-all duration-200
                      ${activeCol === col.key ? "text-gold" : "text-white"}`}
                    onClick={() => setActiveCol(activeCol === col.key ? null : col.key)}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: col.color }}
                      >
                        {col.short}
                      </span>
                      <span className="hidden sm:block">{col.label}</span>
                      <span className="sm:hidden">{col.short}</span>
                      {activeCol === col.key && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="oklch(0.78 0.14 85)" strokeWidth="2.5">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-12 text-muted-foreground text-sm">
                    No results found for "{searchTerm}"
                  </td>
                </tr>
              )}
              {filtered.map((row, i) => (
                <tr
                  key={row.aspect}
                  className={`border-t border-border transition-colors duration-150 cursor-default
                    ${hoveredRow === i ? "bg-secondary/70" : i % 2 === 0 ? "bg-card" : "bg-surface"}`}
                  onMouseEnter={() => setHoveredRow(i)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="px-6 py-4">
                    <span className="text-xs font-bold text-navy uppercase tracking-wide">{highlight(row.aspect)}</span>
                  </td>
                  {cols.map((col) => (
                    <td
                      key={col.key}
                      className={`px-6 py-4 text-sm text-muted-foreground leading-relaxed transition-colors duration-200
                        ${activeCol === col.key ? "bg-secondary/80 text-navy font-medium" : ""}`}
                    >
                      {highlight(row[col.key as keyof typeof row])}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Legend */}
        <div className="reveal mt-6 flex flex-wrap gap-4 justify-center">
          {cols.map((col) => (
            <button
              key={col.key}
              onClick={() => setActiveCol(activeCol === col.key ? null : col.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                activeCol === col.key ? "border-primary bg-secondary text-navy shadow-sm" : "border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: col.color }} />
              {col.label}
            </button>
          ))}
          <span className="flex items-center gap-1.5 px-4 py-2 text-xs text-muted-foreground">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
            </svg>
            Click column to highlight
          </span>
        </div>
      </div>
    </section>
  )
}
