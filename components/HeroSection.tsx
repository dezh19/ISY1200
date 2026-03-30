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
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.4 + 0.8,
        alpha: Math.random() * 0.45 + 0.25,
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
        ctx.fillStyle = `rgba(255,215,90,${p.alpha})`
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
            ctx.strokeStyle = `rgba(255,215,90,${0.12 * (1 - dist / 100)})`
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

      {/* Floating discipline badges */}
      <div className="absolute top-1/4 right-[3%] md:right-[6%] hidden lg:flex flex-col gap-3 md:gap-4">
        {[
          { label: "Shailendra Haripersaud", id: "1043300", icon: "⬡", color: "cs" },
          { label: "Prakash Dindyal", id: "1057546", icon: "⬢", color: "it" },
          { label: "Deshawn Mitchell", id: "1057711", icon: "⬟", color: "is" },
          { label: "Aaliyah Trotz", id: "1058875", icon: "⬠", color: "cs" },
        ].map((item, i) => (
          <div
            key={item.label}
            className="glass-card px-4 md:px-5 py-3 md:py-3.5 rounded-lg md:rounded-xl shadow-lg animate-float flex items-center gap-3 md:gap-3.5 w-56 md:w-64"
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <span className="text-lg md:text-2xl shrink-0">{item.icon}</span>
            <div className="font-semibold text-white flex flex-col">
              <span className="text-sm md:text-base leading-tight">{item.label}</span>
              <span className="text-gold text-xs md:text-sm font-semibold">{item.id}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="section-container relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-2xl md:max-w-3xl">
          {/* Assignment badge */}
          <div className="fade-in-up stagger-1 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-slow" />
            <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">
              ISY1200 — Department of Computer Science
            </span>
          </div>

          {/* Main title */}
          <h1 className="fade-in-up stagger-2 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6 md:mb-8">
            Computer Science,{" "}
            <span className="text-gold">Information Technology</span>,{" "}
            & Information Systems
          </h1>

          <p className="fade-in-up stagger-3 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-3 md:mb-4 text-pretty">
            Understanding the Differences
          </p>
          <p className="fade-in-up stagger-4 text-xs sm:text-sm md:text-base text-white/60 mb-10 md:mb-12 flex items-center gap-2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            Based on ACM Computing Curriculum recommendations
          </p>

          {/* CTA buttons */}
          <div className="fade-in-up stagger-5 flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-16 md:mb-20">
            <button
              onClick={() => scrollTo("disciplines")}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl bg-gold text-navy font-bold text-sm sm:text-base
                hover:bg-gold/90 transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5active:scale-95"
            >
              Explore the Fields
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("comparison")}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl bg-white/10 text-white font-semibold text-sm sm:text-base border border-white/20
                hover:bg-white/20 transition-all duration-200 backdrop-blur-sm active:scale-95"
            >
              View Comparison Table
            </button>
          </div>

          {/* Stats row */}
          <div className="fade-in-up grid grid-cols-3 gap-6 sm:gap-8 max-w-lg" style={{ animationDelay: "0.6s" }}>
            {stats.map((stat) => (
              <div key={stat.label} className="text-center border-r border-white/10 last:border-0 pr-6 sm:pr-8 last:pr-0">
                <div className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-gold">{stat.value}</div>
                <div className="text-white/60 text-xs sm:text-sm mt-2 sm:mt-1 leading-tight">{stat.label}</div>
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
