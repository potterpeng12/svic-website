"use client"

import React from "react"
import {
  ArrowUpRight,
  DollarSign,
  Users,
  Package,
  TrendingUp,
  Shirt,
  Heart,
  Smartphone,
  Coffee,
  ShoppingBag,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
  },
  {
    icon: Users,
    title: "Connection",
    description:
      "A curated network of operators, advisors, and partners who've built iconic consumer brands.",
  },
  {
    icon: Package,
    title: "Resource",
    description:
      "Go-to-market strategy, e-commerce tools, and hands-on growth support from day one.",
  },
  {
    icon: TrendingUp,
    title: "Focused Vertical",
    description:
      "Deep industry expertise where the next iconic consumer brands are being built.",
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

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen" ref={containerRef}>
        {/* ===== COMPACT PAGE HEADER ===== */}
        <header className="border-b border-border bg-card/50 px-6 pt-28 pb-12 lg:pt-32 lg:pb-16">
          <div className="mx-auto max-w-3xl">
            <a
              href="/"
              className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </a>

            <div className="reveal flex items-center gap-3 mb-4">
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                DTC Vertical
              </span>
              <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                Now Accepting Applications
              </span>
            </div>

            <h1 className="reveal font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Apply to the DTC Vertical
            </h1>
            <p className="reveal mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
              {"We're looking for ambitious consumer brand founders at pre-seed and seed. Learn what we offer, who we back, and how to apply."}
            </p>

            {/* Quick stats row */}
            <div className="reveal mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold text-foreground">$250K-$1M</span>
                <span>Capital Range</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold text-foreground">Pre-Seed/Seed</span>
                <span>Stage Focus</span>
              </div>
              <div className="h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold text-primary">{"< 5 Min"}</span>
                <span>To Apply</span>
              </div>
            </div>
          </div>
        </header>

        {/* ===== ARTICLE BODY ===== */}
        <div className="px-6 py-16 lg:py-24">
          <div className="mx-auto max-w-3xl">

            {/* --- WHAT WE PROVIDE --- */}
            <section className="reveal mb-20">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                What We Provide
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Our DTC Vertical offers comprehensive support across four key
                pillars, designed to give consumer founders an unfair advantage.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar, i) => (
                  <div
                    key={pillar.title}
                    className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/20`}
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <hr className="mb-20 border-border" />

            {/* --- FOCUS VERTICALS --- */}
            <section className="reveal mb-20">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Where We Invest
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                We back consumer brands across these categories, partnering
                with founders who are redefining how people shop, eat, and live.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {verticals.map((vertical, i) => (
                  <div
                    key={vertical.name}
                    className={`reveal reveal-delay-${(i % 3) + 1} flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors duration-300 hover:border-primary/20`}
                  >
                    <div
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${vertical.color} text-white`}
                    >
                      <vertical.icon className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {vertical.name}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Divider */}
            <hr className="mb-20 border-border" />

            {/* --- WHO WE'RE LOOKING FOR --- */}
            <section className="reveal mb-20">
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {"Who We're Looking For"}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {"We partner with ambitious founders building the next generation of consumer brands. Here's what the ideal candidate looks like."}
              </p>

              <ul className="mt-8 space-y-3">
                {founderTraits.map((trait, i) => (
                  <li
                    key={i}
                    className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-3 rounded-xl border border-border bg-card p-4 transition-colors duration-300 hover:border-primary/20`}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm font-medium leading-relaxed text-foreground">
                      {trait}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Divider */}
            <hr className="mb-20 border-border" />

            {/* --- APPLY CTA --- */}
            <section className="reveal mb-8">
              <div className="rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Ready to Apply?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                  We review all submissions and will reach out if there is a
                  potential fit. The application takes less than 5 minutes.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
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
                    href="mailto:community@sunstoneinvestment.com"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-foreground/10 bg-transparent px-8 py-4 text-base font-semibold text-foreground transition-all duration-300 hover:border-foreground/20 hover:bg-foreground/[0.02]"
                  >
                    Contact Us
                  </a>
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                  {"Questions? Reach us at "}
                  <a
                    href="mailto:community@sunstoneinvestment.com"
                    className="text-primary underline underline-offset-4 transition-colors hover:text-primary/80"
                  >
                    community@sunstoneinvestment.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
