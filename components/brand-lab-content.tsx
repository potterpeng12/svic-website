"use client"

import React, { useEffect, useState } from "react"
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  DollarSign,
  Users,
  Package,
  Rocket,
  ChevronDown,
  Handshake,
  UtensilsCrossed,
  HeartPulse,
  Shirt,
  Cpu,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PartnerPeopleGrid } from "@/components/partner-people-grid"
import { PartnerLogoWall } from "@/components/partner-logo-wall"

/* ───────────────────────── Data (edit here to update the page) ───────────────────────── */

// Placeholder — replace with the live cohort application URL.
const APPLICATION_LINK = "https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"

const heroStats = [
  { value: "12", label: "weeks" },
  { value: "Now Open", label: "accepting cohort applications" },
  { value: "Sept 2026", label: "inaugural cohort" },
]

const accessItems = [
  {
    icon: DollarSign,
    title: "Funding & capital readiness",
    description: "We offer up to $100K in funding opportunities.",
  },
  {
    icon: Package,
    title: "Resources",
    description: "Access to 30+ partners and world-class tools.",
  },
  {
    icon: Users,
    title: "Community",
    description: "A thriving network of founders, operators, and experts.",
  },
]

const focusCategories = [
  { icon: UtensilsCrossed, label: "Food & Beverage", image: "/images/sector-food-beverage.png" },
  { icon: HeartPulse, label: "Wellness & Personal Care", image: "/images/sector-wellness.png" },
  { icon: Shirt, label: "Apparel", image: "/images/sector-apparel.png" },
  { icon: Cpu, label: "Consumer Electronics", image: "/images/sector-electronics.png" },
]

const selectionCriteria = [
  {
    number: "01",
    title: "Consumer Focus",
    description: "Differentiated products with a clear customer and strong brand potential.",
  },
  {
    number: "02",
    title: "Market Signal",
    description: "Existing sales, customer traction, retail validation, or credible demand.",
  },
  {
    number: "03",
    title: "U.S. Readiness",
    description: "A defined goal to launch, expand, or accelerate growth in the U.S.",
  },
  {
    number: "04",
    title: "Founder Commitment",
    description: "Leadership ready to participate actively throughout the 12-week program.",
  },
]

const faqs = [
  { q: "Is there really no cost?", a: "Yes. There is no program fee and no required equity." },
  { q: "Do I have to take investment?", a: "No, and it does not affect selection." },
  {
    q: "Can I apply if I'm above $200K GMV?",
    a: "Yes. Under $200K is preferred, but stronger brands are welcome to apply.",
  },
  {
    q: "What if my brand is pre-revenue?",
    a: "Ideation-stage brands are eligible. Criterion 02 (Market Signal) can be met by credible demand, not only sales.",
  },
  {
    q: "Can international founders apply?",
    a: "Yes — the cohort is U.S.-based and international.",
  },
]

/* ───────────────────────── Component ───────────────────────── */

export function BrandLabContent() {
  const containerRef = useReveal()
  const [loaded, setLoaded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar darkHero />
      <main className="relative min-h-screen" ref={containerRef}>
        {/* ══ 1. HERO ══ */}
        <header className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
          {/* Background photo with purple film */}
          <div className="absolute inset-0">
            <img
              src="/images/brand-lab-hero.jpg"
              alt="Founders and partners networking at a Sunstone community event"
              className="h-full w-full object-cover object-center"
            />
            {/* Purple film — 45% flat overlay so the photo stays visible */}
            <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" />
            {/* Bottom fade for text legibility — extended higher toward the stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/95 from-10% via-[#0a0a1a]/55 via-55% to-transparent" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <a
                href="/"
                className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s" }}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </a>

              <p
                className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(36,100%,72%)]"
                style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s 0.1s" }}
              >
                Inaugural Cohort · September–December 2026
              </p>

              <h1
                className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(24px)",
                  transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
                }}
              >
                Sunstone DTC Brand Lab
              </h1>

              <div
                className="mt-8 max-w-xl"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.3s",
                }}
              >
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[hsl(36,100%,72%)]">
                  Mission
                </p>
                <p className="mt-3 font-display text-xl font-medium leading-snug text-white sm:text-2xl">
                  To empower the next generation of consumer brands with the knowledge, resources, and
                  ecosystem they need to build, scale, and last.
                </p>
              </div>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center"
                style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.9s 0.45s" }}
              >
                <a
                  href={APPLICATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
                >
                  Apply Now
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#program"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-white/80 transition-colors hover:text-white"
                >
                  Explore the Program
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
              </div>

              {/* Free note — plain text, no box */}
              <div
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200"
                style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.9s 0.55s" }}
              >
                <CheckCircle2 className="h-4 w-4" />
                No Program Fee · Optional Equity Program
              </div>
            </div>

            {/* Stat strip — open, no boxes */}
            <div
              className="flex flex-wrap gap-x-12 gap-y-8 lg:flex-col lg:gap-9 lg:border-none lg:pl-4"
              style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s 0.6s" }}
            >
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-4xl font-bold text-white sm:text-5xl">{stat.value}</div>
                  <div className="mt-1.5 text-xs font-medium uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ══ 2. THE PROGRAM ══ */}
        <section id="program" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:py-36">
          <div className="mx-auto max-w-5xl">
            <span className="reveal mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              What Brand Lab Is
            </span>

            {/* Oversized title */}
            <h2 className="reveal font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
              The Program
            </h2>

            {/* Overview */}
            <p className="reveal mt-8 max-w-3xl text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              A 12-week incubation program that equips global and domestic consumer brands to successfully
              launch, scale, and raise in the U.S.
            </p>

            {/* You will get access to */}
            <p className="reveal mt-16 font-display text-sm font-semibold uppercase tracking-widest text-primary">
              You will get access to
            </p>
            <div className="mt-8 flex flex-col gap-10">
              {accessItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${i + 1} flex flex-col gap-3 sm:flex-row sm:items-baseline sm:gap-10`}
                >
                  <div className="flex items-center gap-4 sm:w-72 sm:flex-shrink-0">
                    <item.icon className="h-6 w-6 flex-shrink-0 text-primary" />
                    <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="reveal mt-16 font-display text-2xl font-medium text-foreground sm:text-3xl">
              Vetted brands. Expert partners. Proven process.
            </p>
          </div>
        </section>

        {/* ══ 3. WHO WE SELECT ══ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Users className="h-3.5 w-3.5" />
                The Cohort
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Who We Select
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                A focused cohort of U.S.-based and international consumer brands ready to launch,
                scale, and raise capital in the U.S.
              </p>
            </div>

            {/* Four sectors — Verticals-style image tiles */}
            <div className="mt-16">
              <p className="reveal text-center text-xs font-semibold uppercase tracking-widest text-primary">
                Four consumer sectors
              </p>
              <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {focusCategories.map((cat, i) => (
                  <div
                    key={cat.label}
                    className={`reveal reveal-delay-${i + 1} group relative aspect-[4/5] overflow-hidden rounded-3xl`}
                  >
                    <img
                      src={cat.image || "/placeholder.svg"}
                      alt={cat.label}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/85 via-[#0a0a1a]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-5">
                      <cat.icon className="h-6 w-6 flex-shrink-0 text-white" />
                      <span className="font-display text-lg font-bold leading-tight text-white text-balance">
                        {cat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cohort facts — open three-up */}
            <div className="reveal mt-20 grid gap-10 text-center sm:grid-cols-3">
              <div>
                <div className="font-display text-5xl font-bold tracking-tight text-primary">Now Open</div>
                <p className="mt-3 font-display text-base font-bold text-foreground">accepting cohort applications</p>
                <p className="mt-1 text-sm text-muted-foreground">Small by design — hands-on support for every founder.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Stage</p>
                <p className="mt-3 font-display text-xl font-bold text-foreground">
                  Ideation through market-ready product
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Traction</p>
                <p className="mt-3 font-display text-xl font-bold text-foreground">Under $200K GMV preferred</p>
                <p className="mt-1 text-sm text-muted-foreground">Above that is still welcome to apply.</p>
              </div>
            </div>

            {/* Selection criteria — open blocks */}
            <div className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {selectionCriteria.map((c, i) => (
                <div key={c.number} className={`reveal reveal-delay-${i + 1}`}>
                  <span className="font-display text-3xl font-bold tabular-nums text-primary/40">
                    {c.number}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>

            <p className="reveal mt-16 text-center text-sm text-muted-foreground">
              Every company is screened for program fit, market readiness, and growth potential.
            </p>
          </div>
        </section>

        {/* ══ 4. PARTNERS ══ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Handshake className="h-3.5 w-3.5" />
                Partners
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Partners Already in the Brand Lab
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
                Confirmed partners contributing expertise, market access, and hands-on support to the
                Brand Lab cohort.
              </p>
            </div>

            <div className="mt-14">
              <PartnerPeopleGrid />
            </div>

            <div className="mt-16">
              <PartnerLogoWall />
            </div>

            <div className="reveal mt-12 text-center">
              <a
                href="/#team"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Interested in partnering?
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ══ 5. READY TO APPLY ══ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/brand-lab-hero.jpg"
              alt="Founders and partners at a Sunstone community event"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-primary/50 mix-blend-multiply" />
            <div className="absolute inset-0 bg-[#0a0a1a]/70" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl px-6 py-28 text-center sm:px-10 lg:py-40">
            <span className="reveal mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[hsl(36,100%,72%)]">
              <Rocket className="h-3.5 w-3.5" />
              Apply
            </span>
            <h2 className="reveal font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl text-balance">
              Ready to Apply to the Brand Lab?
            </h2>
            <p className="reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Applications for the September 2026 inaugural cohort are open and reviewed on a rolling basis.
              The Brand Lab is free to join — no program fee, no required equity.
            </p>

            <div className="reveal mt-10 flex justify-center">
              <a
                href={APPLICATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
              >
                Start Your Application
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <p className="reveal mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/55">
              Participation in any funding program is entirely optional and has no effect on your selection
              into the Brand Lab.
            </p>

            <p className="reveal mt-6 text-sm text-white/70">
              Questions? Contact{" "}
              <a href="mailto:potter.peng@sunstoneinvestment.com" className="font-medium text-white hover:underline">
                potter.peng@sunstoneinvestment.com
              </a>{" "}
              or{" "}
              <a href="mailto:angie.zuo@sunstoneinvestment.com" className="font-medium text-white hover:underline">
                angie.zuo@sunstoneinvestment.com
              </a>
            </p>
          </div>
        </section>

        {/* ══ 6. FAQ ══ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="reveal mb-12 text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div key={i} className="reveal">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-lg font-semibold text-foreground">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-300"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-6 pr-9 text-base leading-relaxed text-muted-foreground">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
