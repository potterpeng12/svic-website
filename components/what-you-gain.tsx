"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  Rocket,
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
  icon: React.ComponentType<{ className?: string }>
  label: string
}
interface Stage {
  num: string
  title: string
  items: StageItem[]
  accent: string
  Visual: React.ComponentType
}

const GRADIENT = "linear-gradient(180deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)"
const GRADIENT_H = "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)"

/* ─── Per-stage visuals (clean, themed compositions) ─── */

function VisualShell({
  accent,
  children,
}: {
  accent: string
  children: React.ReactNode
}) {
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl border border-border bg-card">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-[0.07] blur-2xl"
        style={{ background: accent }}
      />
      <div className="relative z-10 w-full px-8">{children}</div>
    </div>
  )
}

function SetupVisual() {
  const accent = "#3b82f6"
  return (
    <VisualShell accent={accent}>
      <div className="flex flex-col items-center">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-2xl text-white shadow-lg"
          style={{ background: accent }}
        >
          <Rocket className="h-9 w-9" />
        </div>
        <div className="mt-6 w-full space-y-2.5">
          {[90, 70, 50].map((w, i) => (
            <div key={i} className="mx-auto h-3 rounded-full bg-muted" style={{ width: `${w}%` }} />
          ))}
        </div>
        <p className="mt-5 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Built on a solid foundation
        </p>
      </div>
    </VisualShell>
  )
}

function LaunchVisual() {
  const accent = "#6366f1"
  const tiles = [ShoppingBag, Store, Share2, Megaphone]
  return (
    <VisualShell accent={accent}>
      <div className="grid grid-cols-2 gap-4">
        {tiles.map((Icon, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 rounded-2xl border border-border bg-background p-4"
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white"
              style={{ background: accent }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <div className="h-2 w-3/4 rounded-full bg-muted" />
            <div className="h-2 w-1/2 rounded-full bg-muted" />
          </div>
        ))}
      </div>
    </VisualShell>
  )
}

function GrowthVisual() {
  const accent = "#8b5cf6"
  const bars = [40, 58, 52, 74, 88, 100]
  return (
    <VisualShell accent={accent}>
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5" style={{ color: accent }} />
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Momentum
        </span>
      </div>
      <div className="mt-5 flex h-40 items-end justify-between gap-2.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-md"
            style={{
              height: `${h}%`,
              background: i === bars.length - 1 ? accent : "hsl(var(--muted))",
            }}
          />
        ))}
      </div>
    </VisualShell>
  )
}

function CapitalVisual() {
  const accent = "#c026d3"
  return (
    <VisualShell accent={accent}>
      <div className="flex flex-col items-center">
        <div className="flex items-end gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-4 rounded-t-sm bg-muted"
              style={{ height: 44 + i * 0 }}
            />
          ))}
          <div
            className="flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg"
            style={{ background: accent }}
          >
            <Landmark className="h-7 w-7" />
          </div>
          {[2, 1, 0].map((i) => (
            <div key={i} className="w-4 rounded-t-sm bg-muted" style={{ height: 44 }} />
          ))}
        </div>
        <div className="mt-6 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
          <LineChart className="h-4 w-4" style={{ color: accent }} />
          <span className="text-xs font-medium text-muted-foreground">Investor-ready</span>
        </div>
      </div>
    </VisualShell>
  )
}

function ShowcaseVisual() {
  const accent = "#ec4899"
  return (
    <VisualShell accent={accent}>
      <div className="flex flex-col items-center">
        <div
          className="flex h-20 w-20 items-center justify-center rounded-full text-white shadow-lg"
          style={{ background: accent }}
        >
          <Star className="h-9 w-9" />
        </div>
        {/* spotlight cone */}
        <div
          className="mt-2 h-0 w-0"
          style={{
            borderLeft: "44px solid transparent",
            borderRight: "44px solid transparent",
            borderTop: `72px solid ${accent}`,
            opacity: 0.12,
          }}
        />
        <div className="-mt-2 h-3 w-40 rounded-full bg-muted" />
        <p className="mt-4 text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Center stage
        </p>
      </div>
    </VisualShell>
  )
}

const stages: Stage[] = [
  {
    num: "01",
    title: "Set Up",
    accent: "#3b82f6",
    items: [
      { icon: Scale, label: "Legal & entity" },
      { icon: Landmark, label: "Banking & tax" },
      { icon: ClipboardCheck, label: "Market readiness" },
    ],
    Visual: SetupVisual,
  },
  {
    num: "02",
    title: "Launch Channels",
    accent: "#6366f1",
    items: [
      { icon: ShoppingBag, label: "DTC & marketplaces" },
      { icon: Share2, label: "Social commerce" },
      { icon: Store, label: "Retail entry" },
    ],
    Visual: LaunchVisual,
  },
  {
    num: "03",
    title: "Build Growth",
    accent: "#8b5cf6",
    items: [
      { icon: Megaphone, label: "Marketing & creators" },
      { icon: Users, label: "Community" },
      { icon: LineChart, label: "Performance" },
    ],
    Visual: GrowthVisual,
  },
  {
    num: "04",
    title: "Prepare Capital",
    accent: "#c026d3",
    items: [
      { icon: Wallet, label: "Financial setup" },
      { icon: Briefcase, label: "Investor prep" },
      { icon: TrendingUp, label: "Capital access" },
    ],
    Visual: CapitalVisual,
  },
  {
    num: "05",
    title: "Showcase",
    accent: "#ec4899",
    items: [
      { icon: Star, label: "Demo Day" },
      { icon: CalendarDays, label: "LA Tech Week" },
      { icon: Sparkles, label: "Ecosystem exposure" },
    ],
    Visual: ShowcaseVisual,
  },
]

/* ─── Component ─── */

export function WhatYouGain() {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRefs = useRef<(HTMLDivElement | null)[]>([])
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const el = sectionRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const vh = window.innerHeight
        const total = rect.height - vh * 0.5
        const scrolled = Math.min(Math.max(vh * 0.5 - rect.top, 0), total)
        setProgress(total > 0 ? (scrolled / total) * 100 : 0)
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index)
            setActive(idx)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )
    stageRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const scrollToStage = (i: number) => {
    stageRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" })
  }

  return (
    <section ref={sectionRef} id="what-you-gain" className="relative px-6 py-20 sm:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="reveal text-center">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            What You Gain
          </span>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
            Everything You Need to Move Your Brand Forward.
          </h2>
        </div>

        {/* Sticky stage nav (desktop) */}
        <div className="sticky top-16 z-20 -mx-6 mt-12 hidden bg-background/85 px-6 py-4 backdrop-blur-md lg:block">
          <div className="flex items-center justify-between gap-2">
            {stages.map((s, i) => (
              <button
                key={s.num}
                type="button"
                onClick={() => scrollToStage(i)}
                className="group flex items-center gap-2.5 transition-opacity"
                style={{ opacity: active === i ? 1 : 0.45 }}
              >
                <span
                  className="font-display text-sm font-bold tabular-nums transition-colors"
                  style={{ color: active === i ? s.accent : "hsl(var(--foreground))" }}
                >
                  {s.num}
                </span>
                <span className="font-display text-sm font-semibold text-foreground">
                  {s.title}
                </span>
              </button>
            ))}
          </div>
          <div className="relative mt-3 h-0.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-150 ease-out"
              style={{ width: `${progress}%`, background: GRADIENT_H }}
            />
          </div>
        </div>

        {/* Mobile progress */}
        <div className="mt-10 lg:hidden">
          <div className="relative h-0.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ width: `${progress}%`, background: GRADIENT_H }}
            />
          </div>
        </div>

        {/* Stages */}
        <div className="mt-16 space-y-24 lg:mt-24 lg:space-y-40">
          {stages.map((stage, i) => {
            const reversed = i % 2 === 1 // stages 02 & 04 => visual left / text right
            const { Visual } = stage
            return (
              <div
                key={stage.num}
                ref={(el) => {
                  stageRefs.current[i] = el
                }}
                data-index={i}
                className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                {/* Text */}
                <div className={reversed ? "lg:order-2" : ""}>
                  <div
                    className="font-display text-7xl font-bold leading-none tracking-tight sm:text-8xl"
                    style={{ color: stage.accent }}
                  >
                    {stage.num}
                  </div>
                  <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
                    {stage.title}
                  </h3>
                  <ul className="mt-8 space-y-4">
                    {stage.items.map((item) => (
                      <li key={item.label} className="flex items-center gap-4">
                        <span
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-border bg-card"
                          style={{ color: stage.accent }}
                        >
                          <item.icon className="h-5 w-5" />
                        </span>
                        <span className="text-lg font-medium text-foreground">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={reversed ? "lg:order-1" : ""}>
                  <Visual />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
