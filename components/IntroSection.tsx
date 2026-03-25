"use client"

import { useEffect, useRef } from "react"

const points = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "ACM-Guided Curriculum",
    desc: "The University of Guyana's Department of Computer Science structures its programmes in alignment with the Association for Computing Machinery (ACM) Computing Curricula guidelines — the global gold standard for computing education.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Why Students Get Confused",
    desc: "Computer Science, Information Technology, and Information Systems all involve computers and technology — but they differ significantly in focus, depth, and application. Prospective students routinely confuse them because institutions sometimes use the names interchangeably.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Why the Distinction Matters",
    desc: "Choosing the right field shapes your courses, skills, and career opportunities. A student passionate about designing AI algorithms has different needs than one who wants to manage enterprise databases or maintain corporate network infrastructure.",
  },
]

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150)
            })
          }
        })
      },
      { threshold: 0.15 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="introduction" ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Introduction
          </div>
          <h2 className="reveal font-serif text-3xl sm:text-4xl font-bold text-navy text-balance mb-4">
            Three Disciplines, One University
          </h2>
          <div className="reveal w-16 h-1 rounded-full mx-auto mb-6" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
          <p className="reveal max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed text-pretty">
            Understanding which computing discipline aligns with your goals is the first — and most important — step toward a fulfilling career in technology.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {points.map((point) => (
            <div
              key={point.title}
              className="reveal group bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl hover:shadow-navy/8 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary mb-5 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                {point.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-navy mb-3">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* ACM callout */}
        <div className="reveal rounded-2xl overflow-hidden border border-border">
          <div className="flex flex-col md:flex-row">
            <div className="bg-navy p-8 md:w-56 flex flex-col items-center justify-center text-center shrink-0 gap-3">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-1">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="oklch(0.78 0.14 85)" strokeWidth="1.5">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M12 6h4M12 10h4M12 14h4" />
                </svg>
              </div>
              <p className="text-gold font-serif font-bold text-xl leading-tight">ACM</p>
              <p className="text-white/60 text-xs leading-snug">Association for Computing Machinery</p>
            </div>
            <div className="bg-card p-8 flex-1">
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">About the ACM Standard</p>
              <h3 className="font-serif text-xl font-bold text-navy mb-4 text-balance">
                The Global Benchmark for Computing Education
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                The ACM, in partnership with IEEE-CS, publishes comprehensive Computing Curricula documents that define what each computing discipline should emphasise. These reports — updated periodically — form the foundation of degree programmes at universities worldwide, including the University of Guyana.
              </p>
              <div className="flex flex-wrap gap-2">
                {["CS2023", "IT2017", "IS2020", "Globally Recognised", "Peer Reviewed"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary text-navy text-xs font-medium border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
