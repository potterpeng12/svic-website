"use client"

import React from "react"
import Image from "next/image"
import { useReveal } from "@/hooks/use-reveal"
import { useRef, useCallback, useState } from "react"
import { Linkedin, Mail } from "lucide-react"

type TeamMember = {
  name: string
  role: string
  photo: string
  photoPosition: string
  photoScale: number
  linkedin: string
  email: string
}

const leadership: TeamMember[] = [
  {
    name: "John Keisler",
    role: "CEO & Managing Partner",
    photo: "/images/team/john.jpeg",
    photoPosition: "center 15%",
    photoScale: 1.25,
    linkedin: "https://www.linkedin.com/in/jpkeisler/",
    email: "John.Keisler@SunstoneInvestment.com",
  },
  {
    name: "Jasmine Jiang",
    role: "Senior Vice President of Investment Operation",
    photo: "/images/team/jasmine_paint.png",
    photoPosition: "center 10%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/jasminejiangoc/",
    email: "Jasmine.Jiang@SunstoneInvestment.com",
  },
  {
    name: "Mike Stone, CFA",
    role: "Chief Investment Officer & Partner",
    photo: "/images/team/mike.jpeg",
    photoPosition: "center 15%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/mike-stone-cfa-463240/",
    email: "Mike.Stone@SunstoneInvestment.com",
  },
]

const svicTeam: TeamMember[] = [
  {
    name: "Angie Zuo",
    role: "Founder Community Manager",
    photo: "/images/team/angie-zuo.png",
    photoPosition: "center center",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/angie-zuo-53a099220/",
    email: "angie.zuo@sunstoneinvestment.com",
  },
  {
    name: "Potter Peng",
    role: "Founder Community Associate",
    photo: "/images/team/potter-peng.png",
    photoPosition: "center center",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/potter-peng-goat/",
    email: "potter.peng@sunstoneinvestment.com",
  },
]

const members: TeamMember[] = [
  {
    name: "Richard Jun",
    role: "Chief Strategy Advisor",
    photo: "/images/team/richard.jpeg",
    photoPosition: "center 15%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/richard-jun-04517954/",
    email: "rich.jun@SunstoneInvestment.com",
  },
  {
    name: "Sabrina Li",
    role: "Investment Associate",
    photo: "/images/team/sabrina_paint.png",
    photoPosition: "center 10%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/xinyili-sabrina/",
    email: "Sabrina.Li@SunstoneInvestment.com",
  },
  {
    name: "Steven Jiang",
    role: "Investment Analyst",
    photo: "/images/team/steven_paint.png",
    photoPosition: "center 10%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/kuilin-jiang-523096148/",
    email: "steven.jiang@SunstoneInvestment.com",
  },
  {
    name: "Cindy Lin",
    role: "Market Research Analyst",
    photo: "/images/team/cindy_paint.png",
    photoPosition: "center 15%",
    photoScale: 1.15,
    linkedin: "https://www.linkedin.com/in/cindyhylin/",
    email: "Cindy.Lin@SunstoneInvestment.com",
  },
  {
    name: "Clark Hsu",
    role: "Investor Relations Manager",
    photo: "/images/team/clark_paint.png",
    photoPosition: "center 2%",
    photoScale: 1.4,
    linkedin: "https://www.linkedin.com/in/clarkhshsu/",
    email: "Clark.Hsu@SunstoneInvestment.com",
  },
  {
    name: "Jennifer Huang",
    role: "Marketing & Communications Manager",
    photo: "/images/team/jennifer.jpeg",
    photoPosition: "center 15%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/jenniferehuang/",
    email: "Jennifer.Huang@SunstoneInvestment.com",
  },
  {
    name: "Julie Ta",
    role: "Marketing Associate",
    photo: "/images/team/julie.jpeg",
    photoPosition: "center 15%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/julieta02/",
    email: "Julie.Ta@SunstoneInvestment.com",
  },
  {
    name: "Michelle Cahill",
    role: "Senior Accounting Manager",
    photo: "/images/team/michelle.jpeg",
    photoPosition: "center 15%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/michelle-cahill5/",
    email: "Michelle.Cahill@SunstoneInvestment.com",
  },
  {
    name: "Justin Pham",
    role: "Staff Accountant",
    photo: "/images/team/justin.jpeg",
    photoPosition: "center 15%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/justin-pham330/",
    email: "justin.pham@SunstoneInvestment.com",
  },
  {
    name: "Jessica Dela Rosa",
    role: "Administrative & Finance Officer",
    photo: "/images/team/jessica.jpeg",
    photoPosition: "center 15%",
    photoScale: 1,
    linkedin: "https://www.linkedin.com/in/jessica-dela-rosa-5214161b4/",
    email: "Jessica.DelaRosa@SunstoneInvestment.com",
  },
]

/* ── Shared photo component ─────────────────────────────────────────── */
function MemberPhoto({
  member,
  size,
}: {
  member: TeamMember
  size: "lg" | "md" | "sm"
}) {
  const [imgError, setImgError] = useState(false)
  const px =
    size === "lg"
      ? "h-36 w-36 sm:h-44 sm:w-44"
      : size === "md"
        ? "h-28 w-28 sm:h-32 sm:w-32"
        : "h-20 w-20 sm:h-24 sm:w-24"
  const fallbackText = size === "lg" ? "text-4xl" : size === "md" ? "text-3xl" : "text-2xl"

  return (
    <div className={`relative ${px} overflow-hidden rounded-full ring-2 ring-border/60 shadow-md`}>
      {!imgError ? (
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          style={{
            objectPosition: member.photoPosition,
            transform: member.photoScale !== 1 ? `scale(${member.photoScale})` : undefined,
            transformOrigin: member.photoScale !== 1 ? "center top" : undefined,
          }}
          sizes={size === "lg" ? "176px" : size === "md" ? "128px" : "96px"}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-purple-600">
          <span className={`${fallbackText} font-bold text-white`}>
            {member.name.charAt(0)}
          </span>
        </div>
      )}
    </div>
  )
}

/* ── Leadership card (top tier) ──────────────────────────────────────── */
function LeaderCard({ member, index }: { member: TeamMember; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg) translateY(-4px)`
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
      <div className="flex flex-col items-center p-8 pt-10 text-center sm:p-10 sm:pt-12">
        <MemberPhoto member={member} size="lg" />

        <h3 className="tilt-card-inner mt-6 font-display text-xl font-bold text-foreground sm:text-2xl">
          {member.name}
        </h3>
        <p className="tilt-card-inner mt-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground/80">
          {member.role}
        </p>

        <div className="tilt-card-inner mt-5 flex items-center justify-center gap-2.5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-primary/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </div>
  )
}

/* ── Compact team member (bottom tier) ───────────────────────────────── */
function CompactMember({ member, index }: { member: TeamMember; index: number }) {
  return (
    <div className={`reveal reveal-delay-${(index % 6) + 1} group flex flex-col items-center text-center`}>
      <div className="relative mb-3 transition-transform duration-300 group-hover:scale-105">
        <MemberPhoto member={member} size="sm" />
      </div>
      <h4 className="font-display text-sm font-semibold text-foreground sm:text-[15px]">
        {member.name}
      </h4>
      <p className="mt-0.5 text-[10px] font-medium uppercase leading-snug tracking-wider text-muted-foreground/70 sm:text-[11px]">
        {member.role}
      </p>
      {/* Contact buttons - appear on hover */}
      <div className="mt-2.5 flex items-center justify-center gap-2 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin className="h-3 w-3" />
        </a>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white"
          aria-label={`Email ${member.name}`}
        >
          <Mail className="h-3 w-3" />
        </a>
      </div>
    </div>
  )
}

/* ── Medium team member (SVIC tier) ──────────────────────────────────── */
function MidMember({ member, index }: { member: TeamMember; index: number }) {
  return (
    <div className={`reveal reveal-delay-${(index % 6) + 1} group flex flex-col items-center text-center`}>
      <div className="relative mb-4 transition-transform duration-300 group-hover:scale-105">
        <MemberPhoto member={member} size="md" />
      </div>
      <h4 className="font-display text-base font-bold text-foreground sm:text-lg">
        {member.name}
      </h4>
      <p className="mt-1 text-[11px] font-medium uppercase leading-snug tracking-wider text-muted-foreground/70 sm:text-xs">
        {member.role}
      </p>
      {/* Contact buttons - appear on hover */}
      <div className="mt-3 flex items-center justify-center gap-2.5 translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white"
          aria-label={`${member.name}'s LinkedIn`}
        >
          <Linkedin className="h-3.5 w-3.5" />
        </a>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-sm transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-white"
          aria-label={`Email ${member.name}`}
        >
          <Mail className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}

/* ── Main section ────────────────────────────────────────────────────── */
export function Team() {
  const containerRef = useReveal()

  return (
    <section
      id="team"
      className="relative px-6 py-28 lg:py-36 pt-32 lg:pt-40"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="reveal mb-16 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Team
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Meet our <span className="italic text-primary">team.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg whitespace-nowrap">
            The people behind Sunstone Investment. Reach out anytime — we're here to help.
          </p>
        </div>

        {/* Leadership tier */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {leadership.map((member, i) => (
            <LeaderCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* SVIC Team Divider */}
        <div className="reveal mb-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
            SVIC Team
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* SVIC Team grid */}
        <div className="mb-16 grid grid-cols-2 gap-x-10 gap-y-10 lg:gap-x-16 max-w-lg mx-auto">
          {svicTeam.map((member, i) => (
            <MidMember key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Our Team Divider */}
        <div className="reveal mb-14 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
            Our Team
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Compact team grid */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 lg:gap-x-8">
          {members.map((member, i) => (
            <div key={member.name} className="w-[calc(33.333%-1rem)] sm:w-[calc(25%-1.125rem)] md:w-[calc(16.666%-1.25rem)]">
              <CompactMember member={member} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
