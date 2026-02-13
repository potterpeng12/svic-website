"use client"

import React from "react"
import {
  ArrowUpRight,
  Sparkles,
  DollarSign,
  Users,
  Package,
  TrendingUp,
  Shirt,
  Heart,
  Smartphone,
  Coffee,
  ShoppingBag,
  ArrowDown,
  CheckCircle2,
  Zap,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useCallback, useRef, useState, useEffect } from "react"

const verticals = [
  { name: "Fashion", icon: Shirt, color: "from-pink-500 to-rose-500" },
  { name: "Beauty", icon: Heart, color: "from-violet-500 to-purple-500" },
  { name: "Consumer Electronics", icon: Smartphone, color: "from-blue-500 to-cyan-500" },
  { name: "Wellness", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
  { name: "Food & Beverage", icon: Coffee, color: "from-amber-500 to-orange-500" },
  { name: "Lifestyle", icon: ShoppingBag, color: "from-primary to-violet-600" },
]

const pillars = [
  {
    icon: DollarSign,
    title: "Capital",
    description:
      "Financial support to fuel your brand's next stage of growth with $250K-$1M at pre-seed and seed.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Connection",
    description:
      "A curated network of operators, advisors, and partners who've built iconic consumer brands.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Package,
    title: "Resource",
    description:
      "Go-to-market strategy, e-commerce tools, and hands-on growth support from day one.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Focused Vertical",
    description:
      "Deep industry expertise where the next iconic consumer brands are being built.",
    gradient: "from-blue-500 to-cyan-500",
  },
]

const founderTraits = [
  "Pre-seed or seed stage startups",
  "Looking for $250K - $1M in capital support",
  "Building in consumer verticals (Fashion, Beauty, Electronics, Wellness, F&B, etc.)",
  "Ambitious and mission-driven",
  "Strong understanding of DTC landscape",
  "Ready to scale and build an iconic brand",
]

export function DtcVerticalContent() {
  const containerRef = useReveal()
  const heroRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x: x * 30, y: y * 30 })
  }, [])

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden" ref={containerRef}>
        {/* ===== HERO SECTION ===== */}
        <section
          ref={heroRef}
          className="grain relative flex min-h-[100dvh] items-center justify-center overflow-hidden px-6 pt-28 pb-12"
          onMouseMove={handleMouseMove}
        >
          {/* Animated blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div
              className="animate-blob absolute top-[15%] right-[10%] h-[400px] w-[400px] bg-primary/[0.06] blur-3xl"
              style={{
                transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px)`,
              }}
            />
            <div
              className="animate-blob-delay absolute bottom-[15%] left-[5%] h-[500px] w-[500px] bg-[hsl(var(--warm))]/[0.06] blur-3xl"
              style={{
                transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`,
              }}
            />
            <div className="animate-blob-delay-2 absolute top-[40%] left-[40%] h-[300px] w-[300px] bg-primary/[0.03] blur-3xl" />
          </div>

          {/* Floating sticker badges */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <div
              className="sticker animate-float-slow absolute top-[18%] left-[6%] rounded-2xl border-2 border-primary/20 bg-background px-4 py-2 text-sm font-bold text-primary shadow-xl"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s 0.5s",
              }}
            >
              $250K - $1M
            </div>
            <div
              className="sticker animate-float-medium absolute top-[22%] right-[8%] rounded-2xl border-2 border-[hsl(var(--warm))]/30 bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-xl"
              style={{
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s 0.8s",
              }}
            >
              Pre-Seed & Seed
            </div>
            <div
              className="sticker animate-float-slow absolute bottom-[22%] right-[12%] rounded-2xl border-2 border-primary/20 bg-accent px-4 py-2 text-sm font-bold text-accent-foreground shadow-xl"
              style={{
                animationDelay: "1s",
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s 1.1s",
              }}
            >
              {"< 5 Min to Apply"}
            </div>
            <div
              className="sticker animate-float-medium absolute bottom-[28%] left-[8%] rounded-2xl border-2 border-[hsl(var(--warm))]/30 bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground shadow-xl"
              style={{
                animationDelay: "2s",
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s 1.4s",
              }}
            >
              DTC Vertical
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            {/* Badge */}
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Now Accepting Applications
              </span>
            </div>

            {/* Mega headline */}
            <h1
              className="font-display font-bold leading-[0.9] tracking-[-0.04em] text-foreground"
              style={{
                fontSize: "clamp(3rem, 9vw, 7.5rem)",
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s",
              }}
            >
              <span className="block">Apply to the</span>
              <span className="block text-shimmer">DTC Vertical</span>
            </h1>

            {/* Subtitle */}
            <p
              className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s",
              }}
            >
              {"We're looking for ambitious consumer brand founders at pre-seed and seed. Learn what we offer, who we back, and how to apply."}
            </p>

            {/* CTAs */}
            <div
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.6s",
              }}
            >
              <a
                href="https://airtable.com/appV77FGcaF0S6aPI/pag5RoCINuwgAN2w7/form"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-background transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-foreground/10"
              >
                Submit Application
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#learn-more"
                className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 bg-transparent px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.02]"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Bottom scroll indicator */}
          <div
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
            style={{
              opacity: loaded ? 1 : 0,
              transition: "opacity 1s 1.2s",
            }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
              Scroll
            </span>
            <a href="#learn-more" aria-label="Scroll down">
              <ArrowDown className="h-4 w-4 animate-bounce text-muted-foreground/40" />
            </a>
          </div>
        </section>

        {/* ===== KEY STATS STRIP ===== */}
        <section className="relative border-y border-border bg-card px-6 py-12">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-16">
            <div className="reveal text-center">
              <p className="font-display text-4xl font-bold text-foreground">
                $250K-$1M
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Capital Range</p>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="reveal reveal-delay-1 text-center">
              <p className="font-display text-4xl font-bold text-foreground">
                Pre-Seed/Seed
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Stage Focus</p>
            </div>
            <div className="hidden h-8 w-px bg-border sm:block" />
            <div className="reveal reveal-delay-2 text-center">
              <p className="font-display text-4xl font-bold text-primary">
                {"< 5 Min"}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">To Apply</p>
            </div>
          </div>
        </section>

        {/* ===== WHAT WE PROVIDE ===== */}
        <section id="learn-more" className="scroll-mt-20 px-6 py-28 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="reveal mb-20 max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                What We Provide
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Everything to build{" "}
                <span className="italic text-primary">iconic brands.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Our DTC Vertical offers comprehensive support across four key
                pillars, designed to give consumer founders an unfair advantage.
              </p>
            </div>

            {/* Bento Grid for pillars */}
            <div className="reveal reveal-delay-1 grid gap-4 md:grid-cols-2 lg:gap-5">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`reveal reveal-delay-${i + 1} group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.03] lg:p-10`}
                >
                  <div className="mb-5 flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white shadow-lg`}
                    >
                      <pillar.icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-primary/[0.04] transition-transform duration-700 group-hover:scale-[3]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FOCUS VERTICALS ===== */}
        <section className="relative px-6 py-28 lg:py-36">
          {/* Subtle background accent */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-blob absolute -top-40 right-[20%] h-[500px] w-[500px] bg-[hsl(var(--warm))]/[0.04] blur-3xl" />
            <div className="animate-blob-delay absolute -bottom-40 left-[15%] h-[400px] w-[400px] bg-primary/[0.03] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="reveal mb-20 max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                Focus Areas
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Where we{" "}
                <span className="italic text-primary">invest.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                We back consumer brands across these categories, partnering
                with founders who are redefining how people shop, eat, and live.
              </p>
            </div>

            <div className="reveal reveal-delay-2 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {verticals.map((vertical, i) => (
                <div
                  key={vertical.name}
                  className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.03] lg:p-8`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${vertical.color} text-white shadow-md`}
                    >
                      <vertical.icon className="h-6 w-6" />
                    </div>
                    <p className="font-display text-lg font-bold text-foreground">
                      {vertical.name}
                    </p>
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-primary/[0.04] transition-transform duration-700 group-hover:scale-[4]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHO WE'RE LOOKING FOR ===== */}
        <section className="px-6 py-28 lg:py-36">
          <div className="mx-auto max-w-7xl">
            <div className="reveal mb-20 max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                Ideal Candidates
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {"Who we're "}
                <span className="italic text-primary">looking for.</span>
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {"We partner with ambitious founders building the next generation of consumer brands. Here's what the ideal candidate looks like."}
              </p>
            </div>

            <div className="reveal reveal-delay-1 grid gap-4 md:grid-cols-2 lg:gap-5">
              {founderTraits.map((trait, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i % 3) + 1} group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.03] lg:p-8`}
                >
                  <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-foreground lg:text-lg">
                    {trait}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BOTTOM CTA ===== */}
        <section className="relative px-6 py-28 lg:py-36">
          <div className="reveal mx-auto max-w-5xl">
            <div
              className="relative overflow-hidden rounded-[2rem] bg-foreground p-10 text-center sm:p-16 lg:rounded-[2.5rem] lg:p-24"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]" />
              <div className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[hsl(var(--warm))]/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-background/10 bg-background/5 px-4 py-2">
                  <Zap className="h-3.5 w-3.5 text-background" />
                  <span className="text-sm font-medium text-background/80">
                    Takes less than 5 minutes
                  </span>
                </div>

                <h2 className="font-display text-4xl font-bold leading-[1] tracking-tight text-background sm:text-6xl lg:text-7xl">
                  Ready to build
                  <br />
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, hsl(271,81%,70%), hsl(36,100%,70%), hsl(271,81%,70%))",
                      backgroundSize: "200% auto",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      animation: "shimmer-move 4s linear infinite",
                    }}
                  >
                    the future?
                  </span>
                </h2>

                <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-background/50">
                  We review all submissions and will reach out if there is a
                  potential fit. Start your application today.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <a
                    href="https://airtable.com/appV77FGcaF0S6aPI/pag5RoCINuwgAN2w7/form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground shadow-2xl shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.03]"
                  >
                    Submit Application
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="mailto:community@sunstoneinvestment.com"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-background/15 bg-transparent px-10 py-5 text-lg font-semibold text-background transition-all duration-300 hover:border-background/30 hover:bg-background/5"
                  >
                    Contact Us
                  </a>
                </div>

                <p className="mt-10 text-sm text-background/30">
                  {"Questions? Reach us at "}
                  <a
                    href="mailto:community@sunstoneinvestment.com"
                    className="text-background/50 underline underline-offset-4 transition-colors hover:text-background/80"
                  >
                    community@sunstoneinvestment.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
