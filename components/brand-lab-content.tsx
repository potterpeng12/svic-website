"use client"

import React, { useEffect, useState } from "react"
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  DollarSign,
  Package,
  Users,
  Utensils,
  HeartPulse,
  Shirt,
  Cpu,
  Handshake,
  Plus,
  Minus,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatYouGain } from "@/components/what-you-gain"
import { brandLabPeople, ecosystemLogos } from "@/data/partners"

const APPLY_URL = "https://airtable.com/appV77FGcaF0S6aPI/pagIWmNbVo1shEyuQ/form"

/* ─── Data ─── */

const heroStats = [
  { value: "12", label: "Weeks" },
  { value: "$0", label: "Cost & Equity" },
  { value: "4", label: "Sectors" },
  { value: "1:1", label: "Mentorship" },
]

const programAccess = [
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

const sectors = [
  { icon: Utensils, label: "Food & Beverage", img: "/images/sectors/food-beverage.png" },
  { icon: HeartPulse, label: "Wellness & Personal Care", img: "/images/sectors/wellness.png" },
  { icon: Shirt, label: "Apparel", img: "/images/sectors/apparel.png" },
  { icon: Cpu, label: "Consumer Electronics", img: "/images/sectors/electronics.png" },
]

const selection = [
  {
    label: "Now Open",
    accent: true,
    value: "accepting cohort applications",
    note: "Small by design — hands-on support for every founder.",
  },
  {
    label: "Stage",
    accent: false,
    value: "Ideation through market-ready product",
    note: "From first concept to shelf-ready — all early stages welcome.",
  },
  {
    label: "Traction",
    accent: false,
    value: "Under $200K GMV preferred",
    note: "Above that is still welcome to apply.",
  },
]

const faqs = [
  {
    q: "Is the Brand Lab really free?",
    a: "Yes. The Brand Lab is 100% free and we take no equity. Our goal is to strengthen Southern California's consumer ecosystem by helping founders build durable brands.",
  },
  {
    q: "How much time does it require?",
    a: "Plan for roughly 6–8 hours per week across live workshops, mentor sessions, and building time over the 12-week cohort.",
  },
  {
    q: "Do I need revenue or a product to apply?",
    a: "No. We accept founders from ideation through market-ready product. What matters most is commitment and a clear consumer focus.",
  },
  {
    q: "Will the program help me raise capital?",
    a: "The curriculum makes you investor-ready and, for the right brands, opens pathways to Sunstone's capital and partner network. Participation is not a guarantee of funding.",
  },
  {
    q: "Does it have to be in person?",
    a: "The Brand Lab is built for Southern California founders with a blend of in-person sessions and remote-friendly workshops.",
  },
]

/* ─── Photo assignments ─── */
const HERO_IMG = "/images/sunstone-collage-dtc.jpg"
const GALLERY_IMGS = [
  "/images/dtc_imgs/DSC08200.JPG",
  "/images/dtc_imgs/DSC08240.JPG",
  "/images/dtc_imgs/DSC08312.JPG",
]

/* ─── FAQ item ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors duration-300 hover:border-primary/20">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-foreground">{q}</span>
        <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-border text-foreground/60">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      {open && (
        <div className="animate-expand px-6 pb-5">
          <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      )}
    </div>
  )
}

/* ─── Component ─── */

export function BrandLabContent() {
  const containerRef = useReveal()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <>
      <Navbar darkHero />
      <main className="relative min-h-screen" ref={containerRef}>
        {/* ════════ 1. HERO ════════ */}
        <header className="relative flex min-h-[92vh] items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src={HERO_IMG || "/placeholder.svg"} alt="Sunstone DTC founders" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/70 to-[#0a0a1a]/30" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-14 pt-32 sm:px-10 lg:pb-20">
            <a
              href="/"
              className="reveal mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white/80"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to Home
            </a>

            <div className="reveal mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                <Sparkles className="h-3 w-3" />
                Free 12-Week Program
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Applications Open
              </span>
            </div>

            <h1
              className="reveal max-w-4xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded ? "translateY(0)" : "translateY(24px)",
                transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s",
              }}
            >
              {"The DTC "}
              <span className="text-shimmer">Brand Lab</span>
            </h1>

            <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg lg:text-xl">
              A free 12-week incubator for early-stage consumer founders. Real curriculum, expert
              partners, and a community built to help you launch and scale an iconic brand — at no
              cost and no equity.
            </p>

            <div className="reveal mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
              >
                Apply Now
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#program"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/20"
              >
                How It Works
              </a>
            </div>

            {/* Stat strip */}
            <div className="reveal mt-14 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="bg-[#0a0a1a]/40 px-5 py-6 backdrop-blur-sm">
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ════════ 2. THE PROGRAM (what Brand Lab is) ════════ */}
        <section id="program" className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal">
              <span className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                What Brand Lab Is
              </span>
              <h2 className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                The Program
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                A 12-week incubation program that equips global and domestic consumer brands to
                successfully launch, scale, and raise in the U.S.
              </p>
            </div>

            <div className="reveal reveal-delay-1 mt-16">
              <span className="mb-8 block text-xs font-semibold uppercase tracking-widest text-primary">
                You Will Get Access To
              </span>
              <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {programAccess.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════ 3. WHAT YOU GAIN — five-stage journey ════════ */}
        <WhatYouGain />

        {/* ════════ 4. PARTNERS ALREADY IN THE BRAND LAB ════════ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Handshake className="h-3.5 w-3.5" />
                Partners
              </span>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Partners Already in the Brand Lab
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                Confirmed partners contributing expertise, market access, and hands-on support to the
                Brand Lab cohort.
              </p>
            </div>

            {/* People grid */}
            <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-5">
              {brandLabPeople.map((person, i) => (
                <div
                  key={person.name}
                  className={`reveal reveal-delay-${(i % 4) + 1} flex flex-col items-center text-center`}
                >
                  <div className="h-24 w-24 overflow-hidden rounded-full shadow-lg shadow-primary/10 ring-1 ring-border">
                    <img
                      src={person.photo || "/placeholder.svg"}
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">
                    {person.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {person.role}
                  </p>
                </div>
              ))}
            </div>

            {/* Logo wall */}
            <div className="reveal mt-20 border-t border-border pt-14">
              <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {ecosystemLogos.map((logo) => (
                  <span
                    key={logo}
                    className="font-display text-lg font-semibold text-muted-foreground/70 transition-colors duration-300 hover:text-foreground sm:text-xl"
                  >
                    {logo}
                  </span>
                ))}
              </div>
              <p className="mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
                Logos indicate collaborators in the Sunstone ecosystem. Relationships are
                non-exclusive and do not imply endorsement of the Brand Lab.
              </p>
            </div>
          </div>
        </section>

        {/* ════════ 5. WHO WE SELECT (the cohort) ════════ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Users className="h-3.5 w-3.5" />
                The Cohort
              </span>
              <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Who We Select
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                A focused cohort of U.S.-based and international consumer brands ready to launch,
                scale, and raise capital in the U.S.
              </p>
            </div>

            <div className="reveal reveal-delay-1 mt-14">
              <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-primary">
                Four Consumer Sectors
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {sectors.map((sector) => (
                  <div
                    key={sector.label}
                    className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
                  >
                    <img
                      src={sector.img || "/placeholder.svg"}
                      alt={sector.label}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex items-center gap-2.5 p-5">
                      <sector.icon className="h-5 w-5 flex-shrink-0 text-white" />
                      <span className="font-display text-base font-bold leading-tight text-white text-balance">
                        {sector.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal reveal-delay-2 mt-14 grid gap-6 border-t border-border pt-12 text-center sm:grid-cols-3 sm:text-left">
              {selection.map((item) => (
                <div key={item.label}>
                  <div
                    className={`font-display text-3xl font-bold sm:text-4xl ${
                      item.accent ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label === "Now Open" ? (
                      "Now Open"
                    ) : (
                      <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                        {item.label}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 leading-snug text-foreground ${
                      item.accent ? "text-sm font-medium" : "text-lg font-semibold"
                    }`}
                  >
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>

            <p className="reveal reveal-delay-2 mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
              Every company is screened for program fit, market readiness, and growth potential.
            </p>
          </div>
        </section>

        {/* ════════ 6. COMMUNITY PHOTO BAND ════════ */}
        <section className="reveal overflow-hidden">
          <div className="grid grid-cols-3 gap-0.5">
            {GALLERY_IMGS.map((src, i) => (
              <div key={src} className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={src || "/placeholder.svg"}
                  alt={`Sunstone community event ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </section>

        {/* ════════ 6. CLOSING CTA ════════ */}
        <section className="reveal px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-3xl bg-[#0a0a1a] p-10 text-center sm:p-16 lg:p-20">
              <div className="absolute inset-0">
                <img
                  src="/images/dtc_imgs/DSC08209.JPG"
                  alt=""
                  className="h-full w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a1a]/90 via-[#0a0a1a]/80 to-[#0a0a1a]/90" />
              </div>
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-primary/15 blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-emerald-500/10 blur-[100px]" />
              </div>

              <div className="relative z-10">
                <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60">
                  <Sparkles className="h-3 w-3" />
                  Applications Open
                </span>
                <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {"Your Brand Starts "}
                  <span className="text-shimmer">Here</span>
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/50 lg:text-lg">
                  Join a free 12-week cohort built to help you launch, grow, and fund the next great
                  consumer brand. No cost. No equity. Just momentum.
                </p>
                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-white px-10 py-4 text-base font-semibold text-[#0a0a1a] transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10"
                  >
                    Apply to the Brand Lab
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="mailto:community@sunstoneinvestment.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-transparent px-10 py-4 text-base font-semibold text-white/80 transition-all duration-300 hover:border-white/30 hover:bg-white/5"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════ FAQ ════════ */}
        <section className="px-6 pb-24 sm:px-10 lg:pb-32">
          <div className="mx-auto max-w-3xl">
            <div className="reveal mb-10 text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                FAQ
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Questions, Answered
              </h2>
            </div>
            <div className="reveal space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
