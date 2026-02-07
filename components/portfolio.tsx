"use client"

import React from "react"

import { useReveal } from "@/hooks/use-reveal"
import { useRef, useCallback } from "react"

const companies = [
  { name: "NovaTech AI", abbr: "NTA", category: "Artificial Intelligence", stage: "Series A", color: "from-violet-500 to-purple-600" },
  { name: "GreenLeaf Bio", abbr: "GLB", category: "Biotech", stage: "Seed", color: "from-emerald-500 to-teal-600" },
  { name: "CloudMesh", abbr: "CM", category: "Infrastructure", stage: "Series B", color: "from-blue-500 to-indigo-600" },
  { name: "PayForge", abbr: "PF", category: "Fintech", stage: "Series A", color: "from-amber-500 to-orange-600" },
  { name: "HealthPulse", abbr: "HP", category: "Digital Health", stage: "Seed", color: "from-rose-500 to-pink-600" },
  { name: "DataNest", abbr: "DN", category: "Data Analytics", stage: "Pre-Seed", color: "from-cyan-500 to-blue-600" },
  { name: "EduVerse", abbr: "EV", category: "EdTech", stage: "Series A", color: "from-violet-500 to-indigo-600" },
  { name: "RoboFlow", abbr: "RF", category: "Robotics & AI", stage: "Seed", color: "from-slate-500 to-gray-700" },
  { name: "SecureLayer", abbr: "SL", category: "Cybersecurity", stage: "Series A", color: "from-red-500 to-rose-600" },
  { name: "UrbanGrid", abbr: "UG", category: "Smart Cities", stage: "Pre-Seed", color: "from-teal-500 to-emerald-600" },
  { name: "AgriSync", abbr: "AS", category: "AgTech", stage: "Seed", color: "from-lime-500 to-green-600" },
  { name: "MetaWave", abbr: "MW", category: "Web3", stage: "Series A", color: "from-purple-500 to-violet-600" },
  { name: "SolarCore", abbr: "SC", category: "CleanTech", stage: "Seed", color: "from-yellow-500 to-amber-600" },
  { name: "VoxAI", abbr: "VA", category: "Voice AI", stage: "Pre-Seed", color: "from-indigo-500 to-blue-600" },
  { name: "NanoMed", abbr: "NM", category: "MedTech", stage: "Series B", color: "from-pink-500 to-rose-600" },
  { name: "DeepSight", abbr: "DS", category: "Computer Vision", stage: "Seed", color: "from-sky-500 to-cyan-600" },
]

function TiltCard({ name, abbr, category, stage, color }: { name: string; abbr: string; category: string; stage: string; color: string }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (el) el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)"
  }, [])

  return (
    <div
      ref={cardRef}
      className="tilt-card flex-shrink-0 w-[280px] cursor-default rounded-2xl border border-border bg-card p-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/[0.05] hover:border-primary/20"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Company header row */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${color} text-xs font-bold tracking-wide text-white shadow-sm`}>
          {abbr}
        </div>
        <div className="min-w-0">
          <p className="font-display text-sm font-bold text-foreground truncate">{name}</p>
          <p className="text-xs text-muted-foreground truncate">{category}</p>
        </div>
      </div>
      {/* Stage badge */}
      <div className="flex items-center gap-2">
        <span className="inline-block rounded-md border border-border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          {stage}
        </span>
      </div>
    </div>
  )
}

export function Portfolio() {
  const containerRef = useReveal()
  const row1 = companies.slice(0, 8)
  const row2 = companies.slice(8, 16)

  return (
    <section id="portfolio" className="relative overflow-hidden py-28 lg:py-36" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0 bg-muted/40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="reveal mb-16 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">Portfolio</p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Proud to back <span className="italic text-primary">exceptional companies.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            120+ companies across AI, biotech, fintech, and beyond.
          </p>
        </div>
      </div>

      {/* Row 1 - marquee left */}
      <div className="reveal reveal-delay-1 relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-muted/40 to-transparent sm:w-32" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-muted/40 to-transparent sm:w-32" />
        <div className="flex gap-4 animate-marquee-left" style={{ width: "max-content" }}>
          {[...row1, ...row1, ...row1, ...row1].map((c, i) => (
            <TiltCard key={`r1-${i}`} name={c.name} abbr={c.abbr} category={c.category} stage={c.stage} color={c.color} />
          ))}
        </div>
      </div>

      {/* Row 2 - marquee right */}
      <div className="reveal reveal-delay-2 relative">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-muted/40 to-transparent sm:w-32" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-muted/40 to-transparent sm:w-32" />
        <div className="flex gap-4 animate-marquee-right" style={{ width: "max-content" }}>
          {[...row2, ...row2, ...row2, ...row2].map((c, i) => (
            <TiltCard key={`r2-${i}`} name={c.name} abbr={c.abbr} category={c.category} stage={c.stage} color={c.color} />
          ))}
        </div>
      </div>
    </section>
  )
}
