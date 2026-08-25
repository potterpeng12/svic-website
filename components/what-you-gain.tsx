"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  Scale,
  Landmark,
  ClipboardCheck,
  ShoppingBag,
  Share2,
  Store,
  Megaphone,
  Users,
  LineChart,
  Wallet,
  Briefcase,
  TrendingUp,
  Star,
  CalendarDays,
  Sparkles,
} from "lucide-react"

/* ─── Stage data ─── */

interface StageItem {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  label: string
}
interface Stage {
  num: string
  title: string
  blurb: string
  items: StageItem[]
  accent: string
}

const stages: Stage[] = [
  {
    num: "01",
    title: "Set Up",
    blurb: "Get the foundation right: entity, banking, and a market-ready product.",
    accent: "#3b82f6",
    items: [
      { icon: Scale, label: "Legal & entity" },
      { icon: Landmark, label: "Banking & tax" },
      { icon: ClipboardCheck, label: "Market readiness" },
    ],
  },
  {
    num: "02",
    title: "Launch Channels",
    blurb: "Open the right doors to customers across every consumer channel.",
    accent: "#6366f1",
    items: [
      { icon: ShoppingBag, label: "DTC & marketplaces" },
      { icon: Share2, label: "Social commerce" },
      { icon: Store, label: "Retail entry" },
    ],
  },
  {
    num: "03",
    title: "Build Growth",
    blurb: "Turn early traction into repeatable, measurable momentum.",
    accent: "#8b5cf6",
    items: [
      { icon: Megaphone, label: "Marketing & creators" },
      { icon: Users, label: "Community" },
      { icon: LineChart, label: "Performance" },
    ],
  },
  {
    num: "04",
    title: "Capital Readiness",
    blurb: "Become investor-ready and unlock pathways to funding.",
    accent: "#c026d3",
    items: [
      { icon: Wallet, label: "Financial setup" },
      { icon: Briefcase, label: "Investor prep" },
      { icon: TrendingUp, label: "Capital access" },
    ],
  },
  {
    num: "05",
    title: "Showcase",
    blurb: "Step into the spotlight in front of the wider ecosystem.",
    accent: "#ec4899",
    items: [
      { icon: Star, label: "Demo Day" },
      { icon: CalendarDays, label: "LA Tech Week" },
      { icon: Sparkles, label: "Ecosystem exposure" },
    ],
  },
]

/* ─── Component ─── */

export function WhatYouGain() {
  const stageRefs = useRef<(HTMLDivElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(Number((e.target as HTMLElement).dataset.index))
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    )
    stageRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollToStage = (i: number) => {
    stageRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  const fill = stages.length > 1 ? (active / (stages.length - 1)) * 100 : 0

  return (
    <section id="what-you-gain" className="border-y border-border bg-background px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="reveal text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            What You Gain
          </span>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            Everything You Need to Move Your Brand Forward
          </h2>
        </div>

        {/* Progression stepper */}
        <div className="reveal sticky top-16 z-20 mx-auto mt-12 max-w-3xl rounded-xl border border-border bg-background/85 px-4 py-3.5 backdrop-blur-md sm:px-6">
          <div className="flex items-center">
            {stages.map((s, i) => (
              <React.Fragment key={s.num}>
                <button
                  type="button"
                  onClick={() => scrollToStage(i)}
                  className="group flex flex-col items-center gap-1.5"
                  aria-label={`${s.num} ${s.title}`}
                >
                  <span
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-display text-sm font-bold tabular-nums transition-all duration-300"
                    style={
                      i <= active
                        ? { background: s.accent, color: "#fff", transform: i === active ? "scale(1.12)" : "scale(1)" }
                        : { background: "hsl(var(--muted))", color: "hsl(var(--muted-foreground))" }
                    }
                  >
                    {s.num}
                  </span>
                  <span
                    className="hidden text-sm font-semibold transition-colors duration-300 sm:block"
                    style={{ color: i === active ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                  >
                    {s.title}
                  </span>
                </button>
                {i < stages.length - 1 && (
                  <div className="relative mx-1.5 h-0.5 flex-1 self-start rounded-full bg-border sm:mt-3.5">
                    <div
                      className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-500 ease-out"
                      style={{ width: i < active ? "100%" : "0%", background: stages[i].accent }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Stage cards */}
        <div className="mt-10 space-y-4">
          {stages.map((stage, i) => {
            const isActive = active === i
            return (
              <div
                key={stage.num}
                ref={(el) => {
                  stageRefs.current[i] = el
                }}
                data-index={i}
                className="reveal rounded-xl border bg-card p-5 transition-all duration-300 sm:p-6"
                style={{
                  borderColor: isActive ? stage.accent : "hsl(var(--border))",
                  boxShadow: isActive ? `0 8px 30px -16px ${stage.accent}` : "none",
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
                  {/* Number + title */}
                  <div className="flex items-center gap-3.5 sm:w-64 sm:flex-shrink-0">
                    <span
                      className="font-display text-4xl font-bold leading-none tracking-tight transition-colors duration-300 sm:text-5xl"
                      style={{ color: isActive ? stage.accent : "hsl(var(--muted-foreground) / 0.35)" }}
                    >
                      {stage.num}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground sm:text-xl">
                        {stage.title}
                      </h3>
                      <p className="mt-1 text-sm leading-snug text-muted-foreground">{stage.blurb}</p>
                    </div>
                  </div>

                  {/* Item chips */}
                  <div className="flex flex-wrap gap-2.5 sm:flex-1">
                    {stage.items.map((item) => (
                      <span
                        key={item.label}
                        className="inline-flex items-center gap-2 py-2 pr-3 text-sm font-medium text-foreground"
                      >
                        <item.icon className="h-4 w-4" style={{ color: stage.accent }} />
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
