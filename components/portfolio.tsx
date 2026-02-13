"use client"

import React from "react"

import { useReveal } from "@/hooks/use-reveal"
import { useRef, useCallback, useState } from "react"
import { getPortfolioCompanies, getCompanyCount, type DisplayCompany } from "@/lib/portfolio-utils"

const companies = getPortfolioCompanies()
console.log("[v0] Portfolio companies count:", companies.length)
console.log("[v0] Companies with logos:", companies.filter(c => c.logo).length)
console.log("[v0] First 3 companies with logos:", companies.filter(c => c.logo).slice(0, 3).map(c => ({ name: c.name, logo: c.logo?.substring(0, 80) })))

function TiltCard({ name, abbr, category, logo, website, color, onHoverChange }: { name: string; abbr: string; category: string; logo: string | null; website: string | null; color: string; onHoverChange: (isHovered: boolean) => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [logoError, setLogoError] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(600px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`
  }, [])

  const handleMouseEnter = useCallback(() => {
    onHoverChange(true)
  }, [onHoverChange])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (el) el.style.transform = "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)"
    onHoverChange(false)
  }, [onHoverChange])

  const handleClick = useCallback(() => {
    if (website) {
      window.open(website, "_blank", "noopener,noreferrer")
    }
  }, [website])

  return (
    <div
      ref={cardRef}
      className={`tilt-card flex-shrink-0 w-[280px] rounded-2xl border border-border bg-card p-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/[0.05] hover:border-primary/20 ${website ? "cursor-pointer" : "cursor-default"}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Company header row */}
      <div className="flex items-center gap-3 mb-3">
        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${logo && !logoError ? "bg-white border border-border" : `bg-gradient-to-br ${color}`} text-xs font-bold tracking-wide ${logo && !logoError ? "text-foreground" : "text-white"} shadow-sm overflow-hidden`}>
          {logo && !logoError ? (
            <img src={logo} alt={name} className="w-full h-full object-contain p-1" onError={(e) => { console.log("[v0] Logo load FAILED for:", name, "url:", logo?.substring(0, 80)); setLogoError(true) }} onLoad={() => console.log("[v0] Logo loaded OK for:", name)} />
          ) : (
            abbr
          )}
        </div>
        <div className="min-w-0">
          <p className="font-display text-sm font-bold text-foreground truncate">{name}</p>
          <p className="text-xs text-muted-foreground truncate">{category}</p>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  const containerRef = useReveal()
  const companyCount = getCompanyCount()
  const [isPaused, setIsPaused] = useState(false)

  // Split companies into two rows for marquee effect
  const midpoint = Math.ceil(companies.length / 2)
  const row1 = companies.slice(0, midpoint)
  const row2 = companies.slice(midpoint)

  const handleCardHoverChange = useCallback((isHovered: boolean) => {
    setIsPaused(isHovered)
  }, [])

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
            100+ companies across AI, healthcare, mobility, DTC, and beyond.
          </p>
        </div>
      </div>

      {/* Row 1 - marquee left */}
      <div className="reveal reveal-delay-1 relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-muted/40 to-transparent sm:w-32" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-muted/40 to-transparent sm:w-32" />
        <div className="flex gap-4 animate-marquee-left" style={{ width: "max-content", animationPlayState: isPaused ? "paused" : "running" }}>
          {[...row1, ...row1, ...row1, ...row1].map((c, i) => (
            <TiltCard key={`r1-${i}`} name={c.name} abbr={c.abbr} category={c.category} logo={c.logo} website={c.website} color={c.color} onHoverChange={handleCardHoverChange} />
          ))}
        </div>
      </div>

      {/* Row 2 - marquee right */}
      <div className="reveal reveal-delay-2 relative">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-muted/40 to-transparent sm:w-32" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-muted/40 to-transparent sm:w-32" />
        <div className="flex gap-4 animate-marquee-right" style={{ width: "max-content", animationPlayState: isPaused ? "paused" : "running" }}>
          {[...row2, ...row2, ...row2, ...row2].map((c, i) => (
            <TiltCard key={`r2-${i}`} name={c.name} abbr={c.abbr} category={c.category} logo={c.logo} website={c.website} color={c.color} onHoverChange={handleCardHoverChange} />
          ))}
        </div>
      </div>
    </section>
  )
}
