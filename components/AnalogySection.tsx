"use client"

import { useState, useEffect, useRef } from "react"

const analogies = [
  {
    id: "cs",
    role: "Computer Science",
    short: "CS",
    metaphor: "Builds the Engine",
    description:
      "Computer Scientists are the engineers who invent, design, and build the engine itself — the core computational machinery, algorithms, and software that power everything else. Without their theoretical and creative work, none of the other disciplines would have the tools they rely on.",
    detail: "They ask: How does this work? How can we make it faster, smarter, or more efficient?",
    color: "oklch(0.38 0.15 265)",
    lightBg: "bg-[oklch(0.38_0.15_265/0.06)]",
    borderColor: "border-[oklch(0.38_0.15_265/0.25)]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    analogy_short: "Engine Designer",
  },
  {
    id: "it",
    role: "Information Technology",
    short: "IT",
    metaphor: "Keeps the Engine Running",
    description:
      "IT professionals are the skilled mechanics who install, maintain, tune, and repair the engine. They ensure it runs reliably, securely, and efficiently within an organisation. They did not design the engine, but they know it intimately and keep it operational every day.",
    detail: "They ask: Is it running properly? Is it secure? How do we fix this and prevent it from breaking again?",
    color: "oklch(0.45 0.14 195)",
    lightBg: "bg-[oklch(0.45_0.14_195/0.06)]",
    borderColor: "border-[oklch(0.45_0.14_195/0.25)]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    analogy_short: "Engine Mechanic",
  },
  {
    id: "is",
    role: "Information Systems",
    short: "IS",
    metaphor: "Decides How the Engine Helps the Business",
    description:
      "Information Systems professionals are the business strategists and fleet managers who decide which engine to use, how to integrate it into the organisation's operations, and how to extract maximum business value from it. They bridge technology and organisational goals.",
    detail: "They ask: Which technology best serves our business goals? How do we integrate it into our processes and measure success?",
    color: "oklch(0.48 0.13 145)",
    lightBg: "bg-[oklch(0.48_0.13_145/0.06)]",
    borderColor: "border-[oklch(0.48_0.13_145/0.25)]",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <path d="M6 11h4M6 15h4M14 11h4M14 15h4" />
      </svg>
    ),
    analogy_short: "Fleet Manager",
  },
]

export default function AnalogySection() {
  const [active, setActive] = useState<string | null>(null)
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
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="analogy" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-1 section-divider" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Real-World Analogy
          </div>
          <h2 className="reveal font-serif text-3xl sm:text-4xl font-bold text-navy text-balance mb-4">
            Think of It Like an Automobile
          </h2>
          <div className="reveal w-16 h-1 rounded-full mx-auto mb-5" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
          <p className="reveal max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Each discipline plays a distinct but equally important role. Click on any card to expand the full analogy and see how they relate to each other.
          </p>
        </div>

        {/* Engine diagram - visual connector */}
        <div className="reveal relative mb-12 hidden md:flex items-center justify-center gap-0">
          {analogies.map((a, i) => (
            <div key={a.id} className="flex items-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl shadow-lg cursor-pointer transition-transform hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${a.color}, ${a.color.replace(")", " / 0.7)")})` }}
                onClick={() => setActive(active === a.id ? null : a.id)}
              >
                {a.short}
              </div>
              {i < analogies.length - 1 && (
                <div className="flex items-center gap-1 mx-2">
                  <div className="w-8 h-[2px] bg-border" />
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="oklch(0.78 0.14 85)">
                    <circle cx="5" cy="5" r="4" />
                  </svg>
                  <div className="w-8 h-[2px] bg-border" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {analogies.map((a) => (
            <div
              key={a.id}
              className={`reveal rounded-2xl border-2 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                ${active === a.id ? "border-opacity-80 shadow-lg" : "border-border"}`}
              style={active === a.id ? { borderColor: a.color } : {}}
              onClick={() => setActive(active === a.id ? null : a.id)}
            >
              {/* Card header */}
              <div className="p-6 text-white relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${a.color}, ${a.color})` }}>
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="relative flex items-start justify-between">
                  <div>
                    <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">{a.role}</span>
                    <h3 className="font-serif text-xl font-bold mt-1 text-balance leading-tight">{a.metaphor}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 ml-3">
                    {a.icon}
                  </div>
                </div>
                <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs font-medium">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                  </svg>
                  Role: {a.analogy_short}
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 bg-card">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{a.description}</p>

                {/* Expandable detail */}
                <div className={`overflow-hidden transition-all duration-400 ${active === a.id ? "max-h-32 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground italic leading-relaxed">
                      <span className="font-semibold text-navy">Their core question:</span> {a.detail}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mt-4 text-xs font-medium" style={{ color: a.color }}>
                  {active === a.id ? "Click to collapse" : "Click to expand"}
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className={`transition-transform duration-300 ${active === a.id ? "rotate-180" : ""}`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary bar */}
        <div className="reveal mt-12 bg-navy rounded-2xl p-8 text-center">
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-3">The Key Takeaway</p>
          <p className="text-white text-lg font-serif leading-relaxed text-balance max-w-3xl mx-auto">
            "All three disciplines are interdependent — an organisation needs{" "}
            <span className="text-gold">CS to build</span>,{" "}
            <span style={{ color: "oklch(0.72 0.16 195)" }}>IT to maintain</span>, and{" "}
            <span style={{ color: "oklch(0.72 0.14 145)" }}>IS to strategically leverage</span>{" "}
            its technology for competitive advantage."
          </p>
        </div>
      </div>
    </section>
  )
}
