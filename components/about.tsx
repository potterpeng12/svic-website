"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useEffect, useRef, useState } from "react"

function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animated.current) {
          animated.current = true
          const start = performance.now()
          const dur = 1800
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1)
            const eased = 1 - Math.pow(1 - p, 4)
            setCount(Math.floor(eased * target))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export function About() {
  const containerRef = useReveal()

  return (
    <section id="about" className="relative px-6 py-28 lg:py-36" ref={containerRef}>
      <div className="mx-auto max-w-7xl">
        {/* Big editorial header */}
        <div className="reveal mb-20 max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            Why Sunstone
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            A platform for{" "}
            <span className="italic text-primary">ecosystem building.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {"We bring together capital, resources, and opportunity in Southern California's innovation ecosystem. From capital access to public-private partnerships, we're here to help founders build scalable, durable companies."}
          </p>
        </div>

        {/* Bento Grid - asymmetric, mixed content */}
        <div className="reveal reveal-delay-1 grid gap-4 md:grid-cols-3 md:grid-rows-2 lg:gap-5">
          {/* Big stat card */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.03] md:row-span-2 lg:p-10">
            <p className="font-display text-7xl font-bold text-foreground lg:text-8xl">
              <Counter target={50} prefix="$" suffix="M" />
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Capital Deployed</p>
            <div className="mt-8 h-px w-12 bg-primary/20" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Supporting pre-seed and seed founders across Physical AI, healthcare & MedTech,
              mobility, and next-generation commerce with $250K-$1M in capital.
            </p>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/[0.04] transition-transform duration-700 group-hover:scale-[3]" />
          </div>

          {/* Stat card */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-[hsl(var(--warm))]/30 hover:shadow-xl lg:p-10">
            <p className="font-display text-5xl font-bold text-foreground lg:text-6xl">
              <Counter target={120} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Companies Backed</p>
            <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[hsl(var(--warm))]/[0.06] transition-transform duration-700 group-hover:scale-[4]" />
          </div>

          {/* Quote card - warm accent */}
          <div className="group relative overflow-hidden rounded-3xl bg-foreground p-8 text-background transition-all duration-500 hover:shadow-xl lg:p-10">
            <p className="text-lg font-medium leading-snug italic">
              {'"We don\'t just write checks. We roll up our sleeves."'}
            </p>
            <p className="mt-4 text-sm text-background/50">-- Sunstone Team</p>
            <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/20 transition-transform duration-700 group-hover:scale-[3]" />
          </div>

          {/* Events stat */}
          <div className="group relative overflow-hidden rounded-3xl border border-border bg-secondary p-8 transition-all duration-500 hover:shadow-xl lg:p-10">
            <p className="font-display text-5xl font-bold text-foreground lg:text-6xl">
              <Counter target={80} suffix="+" />
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">Events / Year</p>
            <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-[hsl(var(--warm))]/[0.08] transition-transform duration-700 group-hover:scale-[4]" />
          </div>

          {/* Community Members */}
          <div className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-accent p-8 transition-all duration-500 hover:shadow-xl lg:p-10">
            <p className="font-display text-5xl font-bold text-primary lg:text-6xl">
              <Counter target={40} suffix="K+" />
            </p>
            <p className="mt-2 text-sm font-medium text-accent-foreground/60">Community Members</p>
            <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-primary/[0.08] transition-transform duration-700 group-hover:scale-[4]" />
          </div>
        </div>


      </div>
    </section>
  )
}
