"use client"

import React from "react"
import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"
import { useRef, useCallback, useState } from "react"
import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Angie Zuo",
    role: "Founder Community Manager",
    bio: "Angie leads SVIC's founder community, building meaningful connections that help startups grow and scale. She designs community initiatives, tracks portfolio progress, and connects founders with the resources and peers they need to succeed.\n\nMS in Financial Technology (Duke University), BA in Mathematics & Quantitative Economics (UC Irvine).",
    photo: "/images/angie-zuo.png",
    linkedin: "https://www.linkedin.com/in/angie-zuo-53a099220/",
    email: "angie.zuo@sunstoneinvestment.com",
  },
  {
    name: "Potter Peng",
    role: "Founder Community Associate",
    bio: "Potter is your direct line to the Sunstone ecosystem. He drives founder engagements, cultivates partnerships, and delivers the behind-the-scenes support that helps you break through barriers.\n\nWith experience across VC, Web3, and academic research, Potter understands the startup journey from every angle. Need an intro, a resource, or just someone who gets it? He's got you covered.\n\nBrown University grad with a bachelor's from Boston University.",
    photo: "/images/potter-peng.png",
    linkedin: "https://www.linkedin.com/in/potter-peng-goat/",
    email: "potter.peng@sunstoneinvestment.com",
  },
]

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [imgError, setImgError] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = cardRef.current
    if (el) el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) translateY(0)"
  }, [])

  return (
    <div
      ref={cardRef}
      className={`reveal reveal-delay-${index + 1} tilt-card group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.05]`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Compact horizontal layout */}
      <div className="flex flex-col sm:flex-row">
        {/* Photo - smaller and circular */}
        <div className="relative flex-shrink-0 p-6 sm:p-8">
          <div className="relative h-40 w-40 overflow-hidden rounded-2xl bg-muted sm:h-48 sm:w-48">
            {!imgError ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 160px, 192px"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-purple-600">
                <span className="text-4xl font-bold text-white">{member.name.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 pt-0 sm:p-8 sm:pt-8">
          <h3 className="tilt-card-inner font-display text-xl font-bold text-foreground">{member.name}</h3>
          <p className="tilt-card-inner mt-1 text-xs font-semibold uppercase tracking-wide text-primary">{member.role}</p>

          <p className="tilt-card-inner mt-4 text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
            {member.bio}
          </p>

          {/* Contact buttons */}
          <div className="tilt-card-inner mt-5 flex items-center gap-2">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-110"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:scale-110"
              aria-label={`Email ${member.name}`}
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Hover bloom effect */}
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
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
            Meet your <span className="italic text-primary">community champions.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            The people dedicated to making sure you're never building alone. Reach out anytime — they're here to help.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
