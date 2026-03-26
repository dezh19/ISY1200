"use client"

import { useEffect, useRef } from "react"

const summary = [
  {
    label: "Computer Science",
    short: "CS",
    verdict: "Choose CS if you are passionate about mathematical theory, algorithm design, software development, and building new computing technologies from the ground up.",
    color: "oklch(0.38 0.15 265)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    label: "Information Technology",
    short: "IT",
    verdict: "Choose IT if you enjoy hands-on work with hardware, networks, and infrastructure — keeping technology systems running reliably and securely for organisations.",
    color: "oklch(0.45 0.14 195)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    label: "Information Systems",
    short: "IS",
    verdict: "Choose IS if you are interested in how technology solves business problems — using databases, ERP systems, and data analytics to drive organisational decisions.",
    color: "oklch(0.48 0.13 145)",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
]

export default function ConclusionFooter() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120)
            })
          }
        })
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Conclusion Section */}
      <section id="conclusion" ref={sectionRef} className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="reveal inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              Conclusion
            </div>
            <h2 className="reveal font-serif text-3xl sm:text-4xl font-bold text-navy text-balance mb-4">
              Which Field Is Right for You?
            </h2>
            <div className="reveal w-16 h-1 rounded-full mx-auto mb-5" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
            <p className="reveal max-w-2xl mx-auto text-muted-foreground leading-relaxed text-balance">
              All three disciplines are important, interdependent, and in high demand. The right choice depends on your natural inclinations — whether that is theoretical problem-solving, practical infrastructure management, or business-technology integration.
            </p>
          </div>

          {/* Summary decision cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {summary.map((s) => (
              <div
                key={s.label}
                className="reveal group rounded-2xl overflow-hidden border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6 text-white" style={{ background: s.color }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">{s.icon}</div>
                    <span className="font-serif font-bold text-4xl text-white/20">{s.short}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg">{s.label}</h3>
                </div>
                <div className="p-6 bg-card">
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.verdict}</p>
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold" style={{ color: s.color }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                    View Programme Details
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Final message */}
          <div className="reveal rounded-2xl bg-navy p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }} />
            <div className="relative max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="oklch(0.78 0.14 85)" strokeWidth="1.8">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <p className="font-serif text-2xl md:text-3xl font-bold text-black leading-tight text-balance mb-6">
                Whichever path you choose, the Department of Computer Science at the{" "}
                <span className="text-gold">University of Guyana</span>{" "}
                is equipped to take you there.
              </p>
              <p className="text-black/70 text-sm leading-relaxed max-w-xl mx-auto">
                Our ACM-aligned programmes in CS, IT, and IS are designed to produce graduates who are ready to contribute, innovate, and lead in the digital economy — regionally and internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[oklch(0.14_0.06_255)] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8 mb-10 pb-10 border-b border-white/10">
            {/* Branding */}
            <div className="sm:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold font-serif font-bold text-sm">UG</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">University of Guyana</p>
                  <p className="text-xs text-white/40">Dept. of Computer Science</p>
                </div>
              </div>
              <p className="text-white/50 text-xs leading-relaxed">
                Proudly serving the education needs of Guyana and the Caribbean since 1963.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Page Sections</p>
              <div className="space-y-2">
                {["Introduction", "Disciplines", "Comparison", "Analogy", "Careers", "Why UG", "Quiz"].map((link) => (
                  <button
                    key={link}
                    onClick={() => document.getElementById(link.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" })}
                    className="block text-white/60 text-sm hover:text-gold transition-colors text-left"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Assignment info */}
            <div>
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-4">Assignment Details</p>
              <div className="space-y-3 text-sm text-white/60">
                <div className="flex gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-gold">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                  <span>Course: ISY1200</span>
                </div>
                <div className="flex gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-gold">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span>ACM CS2023 / IT2017 / IS2020</span>
                </div>
                <div className="flex gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-gold">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>2025 Academic Year</span>
                </div>
                <div className="flex gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-gold">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <span>Department of Computer Science</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs text-center sm:text-left">
              Prepared for Department of Computer Science assignment | University of Guyana | ISY1200
            </p>
            <div className="flex items-center gap-2">
              <span className="text-white/30 text-xs">Curriculum Standard:</span>
              <div className="flex gap-1.5">
                {["CS2023", "IT2017", "IS2020"].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-white/10 text-white/50 text-[10px] font-medium">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
