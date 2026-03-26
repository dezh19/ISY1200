"use client"

import { useEffect, useRef } from "react"

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "ACM-Aligned Curriculum",
    desc: "Our degree programmes directly follow ACM Computing Curricula recommendations — CS2023, IT2017, and IS2020 — ensuring graduates meet international academic and professional standards recognised by employers worldwide.",
    badge: "Global Standard",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Regional Relevance",
    desc: "Our curriculum is adapted to the Caribbean and South American context — addressing the specific digital transformation, e-governance, fintech, and agricultural technology challenges facing Guyana and the wider CARICOM region.",
    badge: "Caribbean Context",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Career-Ready Graduates",
    desc: "Through practical labs, industry partnerships, capstone projects, and internship opportunities, UG graduates are equipped to contribute from day one — whether entering the Guyanese public sector, regional private sector, or international tech firms.",
    badge: "Industry Ready",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Experienced Faculty",
    desc: "Learn from faculty who combine academic credentials with real-world computing experience, providing mentorship that bridges theory and the demands of the modern technology workplace both locally and internationally.",
    badge: "Expert Mentorship",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Modern Infrastructure",
    desc: "State-of-the-art computing laboratories, high-speed internet connectivity, licensed software tools, and access to cloud computing platforms ensure students train on the technologies they will use in professional environments.",
    badge: "Modern Labs",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Accredited & Recognised",
    desc: "The University of Guyana is nationally accredited and a recognised Caribbean higher education institution. Our computing degrees are accepted for further study and professional certification pathways internationally.",
    badge: "Accredited",
  },
]

const stats = [
  { value: "50+", label: "Years of Excellence" },
  { value: "3", label: "Computing Programmes" },
  { value: "ACM", label: "Curriculum Standard" },
  { value: "CARICOM", label: "Regional Recognition" },
]

export default function WhyUGSection() {
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
    <section id="why-ug" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Why University of Guyana
          </div>
          <h2 className="reveal font-serif text-3xl sm:text-4xl font-bold text-navy text-balance mb-4">
            World-Class Computing Education <br className="hidden sm:block" />
            <span className="text-gold">Rooted in Guyana</span>
          </h2>
          <div className="reveal w-16 h-1 rounded-full mx-auto mb-5" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
          <p className="reveal max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            The University of Guyana's Department of Computer Science offers internationally benchmarked computing education tailored to the needs of our nation and region.
          </p>
        </div>

        {/* Stats bar */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-slate-900 rounded-2xl p-6 text-center">
              <div className="font-serif text-3xl font-bold text-amber-300 mb-1">{s.value}</div>
              <div className="text-slate-200 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="reveal group bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0 group-hover:bg-navy group-hover:text-white transition-all duration-300">
                  {pillar.icon}
                </div>
                <span className="mt-1 px-2.5 py-0.5 rounded-full bg-gold/15 text-gold text-[10px] font-bold uppercase tracking-wide border border-gold/20">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="font-serif font-bold text-navy text-base mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote block */}
        <div className="reveal mt-14 rounded-2xl bg-surface border border-border p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-4 left-8 font-serif text-8xl text-navy/5 select-none leading-none">"</div>
          <div className="relative max-w-3xl mx-auto text-center">
            <p className="font-serif text-xl text-navy leading-relaxed italic mb-6 text-balance">
              "The future of Guyana depends on a digitally literate, technologically empowered population. The University of Guyana is committed to producing the computing professionals who will drive that transformation."
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              — Department of Computer Science, University of Guyana
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
