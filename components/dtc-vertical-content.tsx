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
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useCallback, useRef, useState } from "react"

const verticals = [
  { name: "Fashion", icon: Shirt },
  { name: "Beauty", icon: Heart },
  { name: "Consumer Electronics", icon: Smartphone },
  { name: "Wellness", icon: TrendingUp },
  { name: "Food & Beverage", icon: Coffee },
  { name: "Lifestyle", icon: ShoppingBag },
]

const pillars = [
  {
    icon: DollarSign,
    title: "Capital",
    description: "Financial support to fuel your brand's next stage of growth.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Connection",
    description: "A curated network of operators, advisors, and partners.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Package,
    title: "Resource",
    description: "Go-to-market strategy, e-commerce tools, and hands-on growth support.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: TrendingUp,
    title: "Focused Vertical",
    description: "Deep industry expertise where the next iconic brands are being built.",
    gradient: "from-blue-500 to-cyan-500",
  },
]

export function DtcVerticalContent() {
  const containerRef = useReveal()
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-indigo-50" ref={containerRef}>
        {/* Hero Section - More Informational */}
        <section className="relative overflow-hidden px-6 pb-16 pt-28">
          <div className="relative mx-auto max-w-4xl">
            <div className="reveal mb-6 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">
                Application Information
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Apply to Sunstone's
              <br />
              <span className="text-primary">DTC Vertical</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
              We're looking for ambitious consumer brand founders at the pre-seed and seed stage. Learn what we offer, who we're looking for, and how to apply.
            </p>

            {/* Key Info Cards - Right Below Headline */}
            <div className="reveal reveal-delay-3 mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <DollarSign className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <div className="text-lg font-bold text-foreground">$250K - $1M</div>
                  <div className="text-xs text-muted-foreground">Capital Range</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <TrendingUp className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <div className="text-lg font-bold text-foreground">Pre-Seed/Seed</div>
                  <div className="text-xs text-muted-foreground">Stage</div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <Sparkles className="h-8 w-8 flex-shrink-0 text-primary" />
                <div>
                  <div className="text-lg font-bold text-foreground">&lt;5 Minutes</div>
                  <div className="text-xs text-muted-foreground">To Apply</div>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="reveal reveal-delay-4 mt-10">
              <a
                href="https://airtable.com/appV77FGcaF0S6aPI/pag5RoCINuwgAN2w7/form"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]"
              >
                Submit Your Application
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* What We Provide Section */}
        <section id="learn-more" className="scroll-mt-20 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <h2 className="reveal font-display text-3xl font-bold text-foreground sm:text-4xl">
                What We Provide
              </h2>
              <p className="reveal reveal-delay-1 mt-3 text-base text-muted-foreground sm:text-lg">
                Our DTC Vertical offers comprehensive support across four key areas:
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.title}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border border-slate-200 bg-white p-6 shadow-sm`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${pillar.gradient} text-white`}>
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verticals */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <h2 className="reveal font-display text-3xl font-bold text-foreground sm:text-4xl">
                Focus Verticals
              </h2>
              <p className="reveal reveal-delay-1 mt-3 text-base text-muted-foreground sm:text-lg">
                We invest in consumer brands across these categories:
              </p>
            </div>
            <div className="reveal reveal-delay-2 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {verticals.map((vertical) => (
                <div
                  key={vertical.name}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <vertical.icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold text-foreground">
                    {vertical.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12">
              <h2 className="reveal font-display text-3xl font-bold text-foreground sm:text-4xl">
                Who We're Looking For
              </h2>
              <p className="reveal reveal-delay-1 mt-3 text-base text-muted-foreground sm:text-lg">
                The ideal candidates for our DTC Vertical:
              </p>
            </div>
            <div className="reveal reveal-delay-2 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-foreground">Stage & Vertical</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Pre-seed or seed stage startups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Looking for $250K - $1M in capital support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Building in consumer verticals (Fashion, Beauty, Electronics, Wellness, F&B, etc.)</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-foreground">Founder Profile</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Ambitious and mission-driven</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Strong understanding of DTC landscape</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>Ready to scale and build an iconic brand</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="px-6 py-20 pb-28">
          <div className="reveal mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              Ready to Apply?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The application takes less than 5 minutes. We review all submissions and will reach out if there's a potential fit.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://airtable.com/appV77FGcaF0S6aPI/pag5RoCINuwgAN2w7/form"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.02]"
              >
                Submit Application
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:community@sunstoneinvestment.com"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-border bg-card px-10 py-5 text-lg font-semibold text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                Contact Us
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Questions about the application?{" "}
              <a
                href="mailto:community@sunstoneinvestment.com"
                className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
              >
                community@sunstoneinvestment.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
