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
    <section id="introduction" ref={sectionRef} className="py-20 sm:py-28 md:py-32 lg:py-40 bg-surface">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          <div className="reveal inline-flex items-center gap-2 mb-5 px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            Introduction
          </div>
          <h2 className="reveal font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-balance mb-4 sm:mb-6 md:mb-8">
            Three Disciplines, One University
          </h2>
          <div className="reveal w-12 sm:w-14 md:w-16 h-1 rounded-full mx-auto mb-6 sm:mb-8 md:mb-10" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
          <p className="reveal max-w-2xl mx-auto text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed text-pretty">
            Understanding which computing discipline aligns with your goals is the first — and most important — step toward a fulfilling career in technology.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10 mb-16 sm:mb-20 md:mb-24 lg:mb-28">
          {points.map((point) => (
            <div
              key={point.title}
              className="reveal group bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 border border-border shadow-sm hover:shadow-xl hover:shadow-navy/8 hover:-translate-y-1.5 transition-all duration-300"
            >
              <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center text-primary mb-5 sm:mb-6 md:mb-7 group-hover:bg-navy group-hover:text-white transition-all duration-300 shrink-0">
                {point.icon}
              </div>
              <h3 className="font-serif text-base sm:text-lg md:text-xl font-bold text-navy mb-3 sm:mb-4 md:mb-5">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* ACM callout */}
        <div className="reveal rounded-xl sm:rounded-2xl overflow-hidden border border-border">
          <div className="flex flex-col md:flex-row">
            <div className="bg-navy p-8 sm:p-10 md:p-12 lg:p-14 md:w-56 lg:w-72 flex flex-col items-center justify-center text-center shrink-0 gap-3 sm:gap-4 md:gap-5">
              <div className="w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-lg sm:rounded-2xl bg-white/10 flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="oklch(0.78 0.14 85)" strokeWidth="1.5" className="md:w-12 md:h-12">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M12 6h4M12 10h4M12 14h4" />
                </svg>
              </div>
              <p className="text-gold font-serif font-bold text-lg sm:text-xl md:text-2xl leading-tight">ACM</p>
              <p className="text-white/60 text-xs sm:text-sm leading-snug">Association for Computing Machinery</p>
            </div>
            <div className="bg-card p-7 sm:p-8 md:p-10 lg:p-12 flex-1">
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-3 sm:mb-4 md:mb-5">About the ACM Standard</p>
              <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-navy mb-4 sm:mb-5 md:mb-6 text-balance">
                The Global Benchmark for Computing Education
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 md:mb-6">
                The ACM, in partnership with IEEE-CS, publishes comprehensive Computing Curricula documents that define what each computing discipline should emphasise. These reports — updated periodically — form the foundation of degree programmes at universities worldwide, including the University of Guyana.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {["CS2023", "IT2017", "IS2020", "Globally Recognised", "Peer Reviewed"].map((tag) => (
                  <span key={tag} className="px-3 py-2 rounded-full bg-secondary text-navy text-xs font-medium border border-border">
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
