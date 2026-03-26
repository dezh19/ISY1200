"use client"

import { useState, useEffect, useRef } from "react"

const disciplines = [
  {
    id: "cs",
    name: "Computer Science",
    short: "CS",
    tagline: "The Science of Computation",
    acmDesc: "Computer Science is rooted in the mathematical foundations of computation, algorithm design, and the theoretical underpinnings of software. It develops students who can innovate, create new technologies, and solve complex problems from first principles.",
    focus: "Algorithms, programming, theory, software development, and artificial intelligence",
    mathLevel: 95,
    practiceLevel: 65,
    businessLevel: 30,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" opacity="0.4" />
      </svg>
    ),
    gradient: "cs-gradient",
    lightBg: "bg-cs/5",
    borderColor: "border-cs/30",
    accentColor: "text-cs",
    dotColor: "bg-cs",
    topics: [
      "Data Structures & Algorithms",
      "Theory of Computation",
      "Artificial Intelligence",
      "Machine Learning",
      "Software Engineering",
      "Computer Architecture",
      "Cryptography",
      "Programming Languages",
    ],
    careers: [
      { title: "Software Engineer", icon: "💻" },
      { title: "AI / ML Developer", icon: "🤖" },
      { title: "Research Scientist", icon: "🔬" },
      { title: "Cybersecurity Expert", icon: "🛡" },
      { title: "Systems Programmer", icon: "⚙" },
    ],
    strength: "Strong mathematical and theoretical foundation",
    quote: "Builds the future of computing from mathematical first principles.",
  },
  {
    id: "it",
    name: "Information Technology",
    short: "IT",
    tagline: "The Practice of Technology",
    acmDesc: "Information Technology focuses on the practical deployment, management, and maintenance of computing infrastructure. IT professionals ensure organisations can effectively use technology by maintaining networks, systems, and security.",
    focus: "Networks, hardware, systems administration, cybersecurity support",
    mathLevel: 45,
    practiceLevel: 95,
    businessLevel: 55,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 8h.01M9 8h.01M12 8h2M6 11h.01M9 11h2M13 11h2" opacity="0.5" />
      </svg>
    ),
    gradient: "it-gradient",
    lightBg: "bg-it/5",
    borderColor: "border-it/30",
    accentColor: "text-it",
    dotColor: "bg-it",
    topics: [
      "Network Administration",
      "Systems Administration",
      "Cloud Computing",
      "IT Security & Compliance",
      "Hardware & Infrastructure",
      "Database Management",
      "IT Project Management",
      "Technical Support",
    ],
    careers: [
      { title: "Network Administrator", icon: "🌐" },
      { title: "Cloud Technician", icon: "☁" },
      { title: "IT Support Specialist", icon: "🔧" },
      { title: "Systems Administrator", icon: "🖥" },
      { title: "IT Security Analyst", icon: "🔐" },
    ],
    strength: "Hands-on, practical technology management",
    quote: "Keeps the technology infrastructure of organisations running smoothly.",
  },
  {
    id: "is",
    name: "Information Systems",
    short: "IS",
    tagline: "Technology Meets Business",
    acmDesc: "Information Systems bridges the gap between computing technology and organisational needs. IS professionals solve business problems using technology, focusing on designing systems that support decision-making, processes, and strategy.",
    focus: "Business processes, databases, enterprise systems, decision support",
    mathLevel: 40,
    practiceLevel: 60,
    businessLevel: 95,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    gradient: "is-gradient",
    lightBg: "bg-is/5",
    borderColor: "border-is/30",
    accentColor: "text-is",
    dotColor: "bg-is",
    topics: [
      "Enterprise Resource Planning",
      "Database Design",
      "Business Intelligence",
      "Systems Analysis & Design",
      "Decision Support Systems",
      "Project Management",
      "IT Governance",
      "E-Commerce Systems",
    ],
    careers: [
      { title: "Business Analyst", icon: "📊" },
      { title: "Systems Analyst", icon: "📋" },
      { title: "ERP Consultant", icon: "🏢" },
      { title: "Data Analyst", icon: "📈" },
      { title: "IT Manager", icon: "👔" },
    ],
    strength: "Connects business strategy with technological solutions",
    quote: "Translates organisational needs into effective information solutions.",
  },
]

type TabId = "cs" | "it" | "is"

function SkillBar({ label, value, color }: { label: string; value: number; color: string }) {
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.style.width = `${value}%`
        obs.disconnect()
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return (
    <div>
      <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
        <span className="font-medium">{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-border overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: "0%", background: color }}
        />
      </div>
    </div>
  )
}

export default function DisciplinesSection() {
  const [active, setActive] = useState<TabId>("cs")
  const sectionRef = useRef<HTMLDivElement>(null)

  const disc = disciplines.find((d) => d.id === active)!

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

  const gradientMap: Record<TabId, string> = {
    cs: "linear-gradient(135deg, oklch(0.30 0.16 265), oklch(0.42 0.14 258))",
    it: "linear-gradient(135deg, oklch(0.35 0.16 195), oklch(0.50 0.13 200))",
    is: "linear-gradient(135deg, oklch(0.36 0.14 145), oklch(0.52 0.12 150))",
  }
  const barColorMap: Record<TabId, string> = {
    cs: "oklch(0.38 0.15 265)",
    it: "oklch(0.45 0.14 195)",
    is: "oklch(0.48 0.13 145)",
  }

  return (
    <section id="disciplines" ref={sectionRef} className="py-20 sm:py-28 md:py-32 lg:py-40 bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-18 md:mb-20 lg:mb-24 reveal">
          <div className="inline-flex items-center gap-2 mb-5 px-3 sm:px-4 py-1.5 rounded-full bg-secondary text-navy text-xs font-semibold uppercase tracking-wider border border-border">
            <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
            The Three Disciplines
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy text-balance mb-4 sm:mb-6 md:mb-8">
            Explore Each Field in Depth
          </h2>
          <div className="w-12 sm:w-14 md:w-16 h-1 rounded-full mx-auto mb-6 sm:mb-8 md:mb-10" style={{ background: "linear-gradient(90deg, oklch(0.32 0.12 255), oklch(0.78 0.14 85))" }} />
          <p className="max-w-xl mx-auto text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Select a discipline below to explore its focus, topics, skill demands, and career pathways.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="reveal flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          {disciplines.map((d) => (
            <button
              key={d.id}
              onClick={() => setActive(d.id as TabId)}
              className={`group flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-4 sm:px-6 md:px-7 py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-2xl font-semibold text-sm border-2 transition-all duration-300 shadow-sm hover:shadow-md
                ${active === d.id
                  ? "text-white border-transparent shadow-lg scale-105"
                  : "bg-card text-navy border-border hover:-translate-y-0.5"
                }`}
              style={active === d.id ? { background: gradientMap[d.id as TabId] } : {}}
            >
              <span className={`text-lg md:text-xl ${active === d.id ? "text-white" : `${d.accentColor}`}`}>{d.icon}</span>
              <span className="hidden sm:inline text-sm md:text-base">{d.name}</span>
              <span className="sm:hidden font-bold text-xs md:text-sm">{d.short}</span>
              {active === d.id && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="hidden sm:block">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div key={active} className="grid lg:grid-cols-5 gap-5 sm:gap-7 md:gap-8 lg:gap-10 fade-in-up">
          {/* Left: info */}
          <div className="lg:col-span-3 space-y-5 sm:space-y-7 md:space-y-8">
            {/* Header card */}
            <div
              className="rounded-xl sm:rounded-2xl p-7 sm:p-9 md:p-10 text-white relative overflow-hidden"
              style={{ background: gradientMap[active] }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/4 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-1/3 -translate-x-1/4" />
              <div className="relative">
                <div className="flex items-start justify-between mb-5 sm:mb-6 md:mb-7">
                  <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-lg sm:rounded-xl md:rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                    {disc.icon}
                  </div>
                  <span className="text-white/60 font-serif font-bold text-5xl sm:text-6xl md:text-7xl leading-none">{disc.short}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">{disc.name}</h3>
                <p className="text-white/70 text-sm sm:text-base mb-5 sm:mb-6">{disc.tagline}</p>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed italic border-l-3 border-white/30 pl-4 sm:pl-5">
                  "{disc.quote}"
                </p>
              </div>
            </div>

            {/* ACM description */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-border">
              <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-3 sm:mb-4">ACM Curriculum Description</p>
              <p className="text-foreground text-sm sm:text-base leading-relaxed mb-5">{disc.acmDesc}</p>
              <div className="p-4 sm:p-5 rounded-lg sm:rounded-xl bg-secondary flex gap-3 sm:gap-4 items-start">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="oklch(0.32 0.12 255)" strokeWidth="2" className="shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
                <p className="text-xs sm:text-sm text-navy/80 leading-relaxed"><strong className="text-navy">Core Focus:</strong> {disc.focus}</p>
              </div>
            </div>

            {/* Skill levels */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-5 sm:mb-6 md:mb-7">Skill Emphasis Profile</p>
              <div className="space-y-4 sm:space-y-5">
                <SkillBar label="Mathematics & Theory" value={disc.mathLevel} color={barColorMap[active]} />
                <SkillBar label="Practical / Technical" value={disc.practiceLevel} color={barColorMap[active]} />
                <SkillBar label="Business & Organisational" value={disc.businessLevel} color={barColorMap[active]} />
              </div>
              <p className="mt-6 sm:mt-7 text-xs text-muted-foreground italic">{disc.strength}</p>
            </div>
          </div>

          {/* Right: topics + careers */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-7 md:space-y-8">
            {/* Topics */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 sm:mb-5 md:mb-6">Key Topics & Courses</p>
              <div className="grid grid-cols-1 gap-2.5">
                {disc.topics.map((topic, i) => (
                  <div key={topic} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: gradientMap[active] }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm text-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Careers */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 border border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 sm:mb-5 md:mb-6">Career Pathways</p>
              <div className="space-y-2.5">
                {disc.careers.map((career) => (
                  <div
                    key={career.title}
                    className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border border-border hover:border-primary/30 hover:bg-secondary/50 transition-all cursor-default"
                  >
                    <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-secondary flex items-center justify-center text-base sm:text-lg shrink-0">
                      {career.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-navy">{career.title}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-auto text-muted-foreground shrink-0">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
