'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: '3', label: 'Distinct Disciplines', sub: 'Often confused' },
  { value: 'ACM', label: 'Curriculum Standard', sub: 'Globally recognized' },
  { value: '100+', label: 'Career Pathways', sub: 'Across all fields' },
]

export default function Introduction() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="introduction" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className={`flex items-center gap-3 mb-4 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
          <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            Introduction
          </span>
          <div className="h-px flex-1 bg-border max-w-[60px]" />
        </div>

        {/* Heading */}
        <h2
          className={`font-serif text-4xl md:text-5xl font-bold text-navy text-center mb-6 text-balance transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '0.1s' }}
        >
          Why the Distinction Matters
        </h2>
        <p
          className={`text-muted-foreground text-center text-lg leading-relaxed max-w-2xl mx-auto mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0.2s' }}
        >
          Choosing the right computing discipline can shape your entire career.
          Here is what you need to know before you decide.
        </p>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text content */}
          <div
            className={`space-y-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '0.25s' }}
          >
            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">ACM Curriculum Alignment</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    The Department of Computer Science at the University of Guyana follows the
                    <strong className="text-foreground"> Association for Computing Machinery (ACM) </strong>
                    curriculum guidelines — the global gold standard for computing education. This ensures
                    our graduates are internationally competitive and industry-ready.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Why Students Get Confused</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Computer Science, Information Technology, and Information Systems all involve
                    computers — but they differ fundamentally in <strong className="text-foreground">focus, depth, and purpose</strong>.
                    Many prospective students choose incorrectly, leading to mismatched careers.
                    Understanding the ACM's definitions empowers better decision-making.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-navy flex items-center justify-center">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy mb-1">Why It Matters for Your Career</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Each discipline leads to very different job roles, salaries, and industries.
                    Whether your passion is <strong className="text-foreground">building algorithms</strong>,
                    {' '}<strong className="text-foreground">managing networks</strong>, or
                    {' '}<strong className="text-foreground">streamlining business processes</strong>,
                    there is a field perfectly suited to your ambitions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats + visual */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '0.35s' }}
          >
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl text-center border border-border bg-white hover:border-gold/40 hover:shadow-md transition-all duration-300"
                  style={{ transitionDelay: `${i * 0.1 + 0.4}s` }}
                >
                  <div className="font-serif font-bold text-3xl text-navy mb-0.5">{s.value}</div>
                  <div className="text-xs font-semibold text-foreground">{s.label}</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>

            {/* ACM Quote Box */}
            <div className="relative p-8 rounded-2xl bg-navy text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
                style={{ background: 'oklch(0.78 0.14 85)', filter: 'blur(40px)', transform: 'translate(30%, -30%)' }} />
              <svg className="w-8 h-8 text-gold mb-4 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-white/85 text-sm leading-relaxed italic mb-4">
                "Computing disciplines are not monolithic. Each has a distinct body of knowledge,
                distinct skills, and distinct career opportunities. The ACM curriculum guidelines
                help students and institutions understand these differences clearly."
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-wide">ACM Computing Curricula</span>
              </div>
            </div>

            {/* Quick field overview */}
            <div className="grid gap-3">
              {[
                { label: 'Computer Science', color: 'oklch(0.38 0.15 265)', desc: 'Theory & Algorithms' },
                { label: 'Information Technology', color: 'oklch(0.45 0.14 195)', desc: 'Infrastructure & Systems' },
                { label: 'Information Systems', color: 'oklch(0.48 0.13 145)', desc: 'Business & Technology' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-border hover:border-border hover:shadow-sm transition-all">
                  <div className="w-3 h-8 rounded-full flex-shrink-0" style={{ background: f.color }} />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{f.label}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
