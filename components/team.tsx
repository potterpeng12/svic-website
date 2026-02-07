"use client"

import React from "react"

import { useReveal } from "@/hooks/use-reveal"
import { useRef, useCallback } from "react"
import { Linkedin } from "lucide-react"

const team = [
  { name: "Alex Chen", role: "Managing Partner", bio: "Former founder (acquired by Cisco). 15+ years in early-stage investing.", initials: "AC", color: "from-violet-500 to-purple-600" },
  { name: "Priya Sharma", role: "Partner", bio: "Ex-Google PM. Specializes in AI/ML and enterprise SaaS.", initials: "PS", color: "from-blue-500 to-indigo-600" },
  { name: "Marcus Johnson", role: "Partner", bio: "Serial entrepreneur with 3 exits. Fintech and marketplaces.", initials: "MJ", color: "from-emerald-500 to-teal-600" },
  { name: "Sarah Kim", role: "Principal", bio: "Stanford biotech researcher. Healthcare and deep tech.", initials: "SK", color: "from-rose-500 to-pink-600" },
  { name: "Daniel Okafor", role: "VP of Community", bio: "Built founder communities at YC. Events and mentorship.", initials: "DO", color: "from-amber-500 to-orange-600" },
  { name: "Lily Zhang", role: "Head of Platform", bio: "Former Stripe recruiter. Talent, GTM, and founder services.", initials: "LZ", color: "from-cyan-500 to-blue-600" },
]

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-4px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (el) el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)"
  }, [])

  return (
    <div
      ref={cardRef}
      className={`reveal reveal-delay-${Math.min(index + 1, 6)} tilt-card group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-shadow duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.04] lg:p-10`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Avatar */}
      <div className={`tilt-card-inner mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${member.color} text-xl font-bold text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rounded-3xl`}>
        {member.initials}
      </div>

      <h3 className="tilt-card-inner font-display text-xl font-bold text-foreground">{member.name}</h3>
      <p className="tilt-card-inner mt-1 text-sm font-semibold text-primary">{member.role}</p>
      <p className="tilt-card-inner mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>

      {/* LinkedIn on hover */}
      <div className="tilt-card-inner mt-5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground/5 text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
          <Linkedin className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className={`absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${member.color} opacity-[0.04] transition-transform duration-700 group-hover:scale-[3]`} />
    </div>
  )
}

export function Team() {
  const containerRef = useReveal()

  return (
    <section id="team" className="relative px-6 py-28 lg:py-36" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-20 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">Team</p>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {"We've been in "}<span className="italic text-primary">your shoes.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our team combines deep operational experience with a genuine passion for helping founders build something meaningful.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
