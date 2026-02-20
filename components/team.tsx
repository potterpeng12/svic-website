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
  {
    name: "Jasmine Jiang",
    role: "Senior Vice President of Investment Operation",
    bio: "",
    photo: "/images/team/jasmine_paint.png",
    linkedin: "https://www.linkedin.com/in/jasminejiangoc/",
    email: "Jasmine.Jiang@SunstoneInvestment.com",
  },
  {
    name: "Steven Jiang",
    role: "Investment Analyst",
    bio: "",
    photo: "/images/team/steven_paint.png",
    linkedin: "https://www.linkedin.com/in/kuilin-jiang-523096148/",
    email: "steven.jiang@SunstoneInvestment.com",
  },
  {
    name: "Sabrina Li",
    role: "Investment Associate",
    bio: "",
    photo: "/images/team/sabrina_paint.png",
    linkedin: "https://www.linkedin.com/in/xinyili-sabrina/",
    email: "Sabrina.Li@SunstoneInvestment.com",
  },
  {
    name: "Cindy Lin",
    role: "Market Research Analyst",
    bio: "",
    photo: "/images/team/cindy_paint.png",
    linkedin: "https://www.linkedin.com/in/cindyhylin/",
    email: "Cindy.Lin@SunstoneInvestment.com",
  },
  {
    name: "Clark Hsu",
    role: "Investor Relations Manager",
    bio: "",
    photo: "/images/team/clark_paint.png",
    linkedin: "https://www.linkedin.com/in/clarkhshsu/",
    email: "Clark.Hsu@SunstoneInvestment.com",
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
      {/* Refined horizontal layout */}
      <div className="flex flex-col items-center p-8 sm:flex-row sm:items-start sm:gap-8 sm:p-10 text-center sm:text-left">
        {/* Photo - full circle with light ring border */}
        <div className="relative flex-shrink-0 mb-6 sm:mb-0">
          <div className="relative h-40 w-40 overflow-hidden rounded-full ring-2 ring-border shadow-md sm:h-44 sm:w-44">
            {!imgError ? (
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: member.photo.includes('_paint') ? 'center 10%' : 'center center' }}
                sizes="(max-width: 640px) 160px, 176px"
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
        <div className="flex flex-1 flex-col justify-start">
          <h3 className="tilt-card-inner font-display text-2xl font-bold text-foreground sm:text-2xl">{member.name}</h3>
          <p className="tilt-card-inner mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">{member.role}</p>

          {/* Contact buttons */}
          <div className="tilt-card-inner mt-6 flex items-center justify-center gap-3 sm:justify-start">
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${member.email}`}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white"
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
