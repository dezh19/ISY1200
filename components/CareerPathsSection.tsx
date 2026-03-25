"use client"

import { useState, useEffect, useRef } from "react"

const tracks = [
  {
    id: "cs",
    label: "Computer Science",
    color: "oklch(0.38 0.15 265)",
    lightColor: "oklch(0.38 0.15 265 / 0.1)",
    steps: [
      { year: "Year 1–2", title: "Foundation", desc: "Programming fundamentals, discrete mathematics, data structures, algorithms, computer organisation." },
      { year: "Year 2–3", title: "Specialisation", desc: "Operating systems, software engineering, AI & ML, computer networks, database systems." },
      { year: "Year 3–4", title: "Advanced Study", desc: "Compilers, cryptography, advanced algorithms, research projects, thesis or capstone." },
      { year: "Graduate", title: "Career Entry", desc: "Junior software engineer, research assistant, AI developer trainee, cybersecurity analyst." },
      { year: "3–5 Years", title: "Mid-Career", desc: "Senior software engineer, ML engineer, security researcher, systems architect." },
      { year: "5–10 Years", title: "Senior Roles", desc: "Principal engineer, CTO, research scientist, startup founder, professor." },
    ],
  },
  {
    id: "it",
    label: "Information Technology",
    color: "oklch(0.45 0.14 195)",
    lightColor: "oklch(0.45 0.14 195 / 0.1)",
    steps: [
      { year: "Year 1–2", title: "Foundation", desc: "IT fundamentals, networking basics, operating systems, hardware, IT support principles." },
      { year: "Year 2–3", title: "Specialisation", desc: "Network administration, cloud computing, cybersecurity, virtualisation, database administration." },
      { year: "Year 3–4", title: "Advanced Study", desc: "IT project management, cloud architecture, advanced security, compliance frameworks, capstone." },
      { year: "Graduate", title: "Career Entry", desc: "IT support technician, junior network admin, help desk analyst, cloud associate." },
      { year: "3–5 Years", title: "Mid-Career", desc: "Network engineer, systems administrator, cloud engineer, IT security analyst." },
      { year: "5–10 Years", title: "Senior Roles", desc: "IT manager, cloud architect, CISO, infrastructure director, IT consultant." },
    ],
  },
  {
    id: "is",
    label: "Information Systems",
    color: "oklch(0.48 0.13 145)",
    lightColor: "oklch(0.48 0.13 145 / 0.1)",
    steps: [
      { year: "Year 1–2", title: "Foundation", desc: "Information systems concepts, business fundamentals, database basics, systems thinking, statistics." },
      { year: "Year 2–3", title: "Specialisation", desc: "Systems analysis & design, ERP systems, business intelligence, project management, e-commerce." },
      { year: "Year 3–4", title: "Advanced Study", desc: "IT governance, advanced BI, digital transformation, strategic IS management, capstone project." },
      { year: "Graduate", title: "Career Entry", desc: "Junior business analyst, systems analyst trainee, ERP associate consultant, data analyst." },
      { year: "3–5 Years", title: "Mid-Career", desc: "Business analyst, ERP consultant, data analyst, IS project manager." },
      { year: "5–10 Years", title: "Senior Roles", desc: "CIO, IS director, enterprise architect, digital transformation lead, management consultant." },
    ],
  },
]

export default function CareerPathsSection() {
  const [activeTrack, setActiveTrack] = useState("cs")
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  const track = tracks.find((t) => t.id === activeTrack)!

  useEffect(() => {
    setVisibleSteps([])
    track.steps.forEach((_, i) => {
      setTimeout(() => setVisibleSteps((prev) => [...prev, i]), i * 120)
    })
  }, [activeTrack])

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
    <section id="careers" ref={sectionRef} className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Career Roadmap
          </div>
          <h2 className="reveal font-serif text-3xl sm:text-4xl font-bold text-navy text-balance mb-4">
            Your Journey from Student to Professional
          </h2>
          <div className="reveal w-16 h-1 rounded-full mx-auto mb-5" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
          <p className="reveal max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Explore the typical academic and career progression for each discipline over a 10-year horizon.
          </p>
        </div>

        {/* Track selector */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-14">
          {tracks.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTrack(t.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200
                ${activeTrack === t.id ? "text-white border-transparent shadow-md scale-105" : "bg-card border-border text-navy hover:-translate-y-0.5 hover:shadow-sm"}`}
              style={activeTrack === t.id ? { background: t.color } : {}}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2"
            style={{ background: `linear-gradient(to bottom, ${track.color}, transparent)` }} />

          <div className="space-y-8">
            {track.steps.map((step, i) => {
              const isLeft = i % 2 === 0
              const isVisible = visibleSteps.includes(i)
              return (
                <div
                  key={i}
                  className={`relative flex items-start md:items-center gap-4 md:gap-0 transition-all duration-500
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}
                  `}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Content */}
                  <div className={`flex-1 md:w-[calc(50%-2.5rem)] pl-14 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                    <div className={`inline-flex items-center gap-1.5 mb-2 px-3 py-1 rounded-full text-white text-xs font-bold`}
                      style={{ background: track.color }}>
                      {step.year}
                    </div>
                    <h4 className="font-serif font-bold text-navy text-base mb-1.5">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Central dot */}
                  <div className="absolute left-3.5 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className={`w-5 h-5 rounded-full border-3 border-white shadow-md transition-all duration-300`}
                      style={{ background: track.color, borderWidth: 3 }} />
                  </div>

                  {/* Empty spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              )
            })}
          </div>
        </div>

        {/* Salary & demand info cards */}
        <div className="reveal mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[
            { label: "Computer Science", demand: "Very High", growth: "+25%", salary: "USD 95K–150K", color: "oklch(0.38 0.15 265)" },
            { label: "Information Technology", demand: "High", growth: "+15%", salary: "USD 65K–110K", color: "oklch(0.45 0.14 195)" },
            { label: "Information Systems", demand: "High", growth: "+18%", salary: "USD 70K–120K", color: "oklch(0.48 0.13 145)" },
          ].map((item) => (
            <div key={item.label} className="bg-card rounded-2xl border border-border p-6 hover:shadow-md transition-shadow">
              <div className="w-3 h-3 rounded-full mb-4" style={{ background: item.color }} />
              <p className="font-serif font-bold text-navy text-base mb-4">{item.label}</p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Job Demand</span>
                  <span className="text-xs font-semibold text-navy">{item.demand}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">10-yr Growth</span>
                  <span className="text-xs font-bold" style={{ color: item.color }}>{item.growth}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Global Avg. Salary</span>
                  <span className="text-xs font-semibold text-navy">{item.salary}</span>
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">*Based on BLS & industry data (2024)</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
