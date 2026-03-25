"use client"

import { useEffect, useRef } from "react"

const stats = [
  { value: "3", label: "Distinct Disciplines" },
  { value: "ACM", label: "Curriculum Standard" },
  { value: "100+", label: "Career Pathways" },
]

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    let frame: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${p.alpha})`
        ctx.fill()
      })

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(201,168,76,${0.08 * (1 - dist / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      frame = requestAnimationFrame(draw)
    }
    draw()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    window.addEventListener("resize", handleResize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
      {/* Animated particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative floating circles */}
      <div className="absolute top-24 right-[8%] w-72 h-72 rounded-full border border-white/5 animate-pulse-slow hidden lg:block" />
      <div className="absolute top-32 right-[10%] w-52 h-52 rounded-full border border-gold/10 animate-float hidden lg:block" />
      <div className="absolute bottom-20 left-[5%] w-40 h-40 rounded-full border border-white/5 animate-float" style={{ animationDelay: "2s" }} />

      {/* Floating discipline badges */}
      <div className="absolute top-1/4 right-[6%] hidden xl:flex flex-col gap-4">
        {[
          { label: "Computer Science", icon: "⬡", color: "cs" },
          { label: "Information Technology", icon: "⬢", color: "it" },
          { label: "Information Systems", icon: "⬟", color: "is" },
        ].map((item, i) => (
          <div
            key={item.label}
            className="glass-card px-4 py-2.5 rounded-xl shadow-lg animate-float flex items-center gap-2.5 w-56"
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-xs font-semibold text-navy">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Assignment badge */}
          <div className="fade-in-up stagger-1 inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
            <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">
              ISY1200 — Department of Computer Science
            </span>
          </div>

          {/* Main title */}
          <h1 className="fade-in-up stagger-2 font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
            Computer Science,{" "}
            <span className="text-gold">Information Technology</span>,{" "}
            & Information Systems
          </h1>

          <p className="fade-in-up stagger-3 text-lg sm:text-xl text-white/80 leading-relaxed mb-3 text-pretty">
            Understanding the Differences
          </p>
          <p className="fade-in-up stagger-4 text-sm text-white/60 mb-10 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Based on ACM Computing Curriculum recommendations
          </p>

          {/* CTA buttons */}
          <div className="fade-in-up stagger-5 flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => scrollTo("disciplines")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gold text-navy font-bold text-sm
                hover:bg-gold/90 transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5"
            >
              Explore the Fields
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("comparison")}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 text-white font-semibold text-sm border border-white/20
                hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              View Comparison Table
            </button>
          </div>

          {/* Stats row */}
          <div className="fade-in-up grid grid-cols-3 gap-4 max-w-lg" style={{ animationDelay: "0.6s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border-r border-white/10 last:border-0 pr-4 last:pr-0">
                <div className="font-serif text-3xl font-bold text-gold">{stat.value}</div>
                <div className="text-white/60 text-xs mt-0.5 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
