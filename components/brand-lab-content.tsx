"use client"

import React, { useEffect, useState } from "react"
import {
  ArrowUpRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Briefcase,
  DollarSign,
  Users,
  Package,
  Rocket,
  ChevronDown,
  Gift,
  PiggyBank,
  Video,
  Handshake,
  CalendarClock,
  Building2,
  TrendingUp,
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
  { value: "6–10", label: "brands per cohort" },
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
  { icon: UtensilsCrossed, label: "Food & Beverage" },
  { icon: HeartPulse, label: "Wellness & Personal Care" },
  { icon: Shirt, label: "Apparel" },
  { icon: Cpu, label: "Consumer Electronics" },
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

const formatItems = [
  { icon: Video, title: "Online classes", description: "Core modules delivered live, one focused module per week." },
  { icon: Briefcase, title: "Workshops", description: "Working sessions with partner operators on specific problems in your business." },
  { icon: Users, title: "Weekly 1:1 office hours", description: "Every week, every founder. Dedicated time with a partner or mentor matched to your category." },
  { icon: Building2, title: "In-person programming", description: "Cohort events, Southern California tech weeks, and the investor showcase. Attending in person is strongly encouraged." },
  { icon: TrendingUp, title: "Investor readiness preparation", description: "Direct coaching from leading VCs and investment firms ahead of the December showcase." },
  { icon: Handshake, title: "Partner network access", description: "Introductions across 30+ partners spanning legal, supply chain, platform, marketing, retail, and capital." },
]

const timelineNodes = [
  { number: "01", timing: "Now", milestone: "Applications open", detail: "Rolling review through the summer" },
  { number: "02", timing: "September", milestone: "Cohort kickoff", detail: "6–10 brands begin the 12 weeks in Los Angeles" },
  {
    number: "03",
    timing: "October",
    milestone: "Southern California Tech Weeks",
    detail: "LA Tech Week (Oct 12–18), OC Tech Week, Glendale Tech Week, and more — cohort and partners visible citywide",
  },
  { number: "04", timing: "December", milestone: "Investor Showcase", detail: "Public finale with investor judging" },
]

const fundingTracks = [
  {
    icon: TrendingUp,
    title: "Equity Program",
    description: "Direct investment opportunities for brands ready to raise capital.",
  },
  {
    icon: Gift,
    title: "Grant Program",
    description: "Non-dilutive funding support for eligible cohort brands.",
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
            {/* Purple film — lighter, keeps the photo visible while text stays readable */}
            <div className="absolute inset-0 bg-[#0a0a1a]/30" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/55 via-primary/25 to-[#0a0a1a]/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a]/85 via-[#0a0a1a]/10 to-transparent" />
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
                className="mt-8 max-w-xl border-l-2 border-white/40 pl-5"
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
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
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
                  href="#curriculum"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-9 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  Explore the Program
                </a>
              </div>

              {/* Free badge */}
              <div
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-5 py-2 text-sm font-semibold text-emerald-200 backdrop-blur-sm"
                style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.9s 0.55s" }}
              >
                <CheckCircle2 className="h-4 w-4" />
                No Program Fee · Optional Equity Program
              </div>
            </div>

            {/* Stat strip */}
            <div
              className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
              style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s 0.6s" }}
            >
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-md"
                >
                  <div className="font-display text-3xl font-bold text-white">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* ══ 2. THE PROGRAM ══ */}
        <section className="px-6 py-24 sm:px-10 lg:py-36">
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
            <div className="mt-8 divide-y divide-border border-t border-border">
              {accessItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${i + 1} flex flex-col gap-3 py-8 sm:flex-row sm:items-baseline sm:gap-10`}
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
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
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
                A focused cohort of 6–10 U.S.-based and international consumer brands ready to launch,
                scale, and raise capital in the U.S.
              </p>
            </div>

            {/* Four sectors — emphasized */}
            <div className="mt-14">
              <p className="reveal text-center text-xs font-semibold uppercase tracking-widest text-primary">
                Four consumer sectors
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {focusCategories.map((cat, i) => (
                  <div
                    key={cat.label}
                    className={`reveal reveal-delay-${i + 1} group flex flex-col items-center justify-center gap-4 rounded-3xl border border-primary/15 bg-gradient-to-b from-primary/[0.07] to-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <cat.icon className="h-7 w-7" />
                    </div>
                    <span className="font-display text-base font-bold leading-tight text-foreground">
                      {cat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Clean cohort facts band */}
            <div className="reveal mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-3">
              <div className="bg-card p-8 text-center">
                <div className="font-display text-4xl font-bold tracking-tight text-primary">6–10</div>
                <p className="mt-2 text-sm font-medium text-foreground">brands per cohort</p>
                <p className="mt-1 text-xs text-muted-foreground">Small by design — hands-on support for every founder.</p>
              </div>
              <div className="bg-card p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Stage</p>
                <p className="mt-2 font-display text-lg font-bold text-foreground">
                  Ideation through market-ready product
                </p>
              </div>
              <div className="bg-card p-8 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">Traction</p>
                <p className="mt-2 font-display text-lg font-bold text-foreground">Under $200K GMV preferred</p>
                <p className="mt-1 text-xs text-muted-foreground">Above that is still welcome to apply.</p>
              </div>
            </div>

            {/* Selection criteria — four blocks, emphasized */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {selectionCriteria.map((c, i) => (
                <div
                  key={c.number}
                  className={`reveal reveal-delay-${i + 1} rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5`}
                >
                  <span className="font-display text-2xl font-bold tabular-nums text-primary/50">
                    {c.number}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-foreground">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
              ))}
            </div>

            <p className="reveal mt-8 text-center text-sm text-muted-foreground">
              Every company is screened for program fit, market readiness, and growth potential.
            </p>
          </div>
        </section>

        {/* ══ 4. CURRICULUM ══ */}
        <section id="curriculum" className="scroll-mt-24 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="reveal mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <BookOpen className="h-3.5 w-3.5" />
              The Curriculum
            </span>
            <h2 className="reveal font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              9 Modules. One Complete Brand-Building System.
            </h2>
            <p className="reveal mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
              A sequential curriculum covering everything from U.S. legal setup and supply chain to sales
              channels, marketing, AI, retail, and capital readiness — one focused module each week, taught
              and mentored by experts from the Sunstone network.
            </p>
          </div>
        </section>

        {/* ══ 5. FORMAT ══ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <CalendarClock className="h-3.5 w-3.5" />
                Format
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Join the Program with Hybrid Flexibility
              </h2>
              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary">
                Online instruction, in-person moments in Los Angeles
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {formatItems.map((item, i) => (
                <div
                  key={item.title}
                  className={`reveal reveal-delay-${(i % 3) + 1} flex items-start gap-4 rounded-2xl border border-border bg-card p-6`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Free callout with Apply Now */}
            <div className="reveal mt-10 overflow-hidden rounded-3xl border border-emerald-500/20 bg-emerald-500/[0.06] p-8 text-center sm:p-12">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                The Brand Lab is free to join.
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                No program fee. No required equity. We measure ourselves on whether your brand grows —
                that&apos;s the entire model.
              </p>
              <div className="mt-7 flex justify-center">
                <a
                  href={APPLICATION_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-9 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/25"
                >
                  Apply Now
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ 6. TIMELINE ══ */}
        <section className="px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <CalendarClock className="h-3.5 w-3.5" />
                Timeline
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Inaugural Cohort: September to December 2026
              </h2>
            </div>

            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {timelineNodes.map((node, i) => (
                <div key={node.number} className={`reveal reveal-delay-${i + 1} relative`}>
                  {i < timelineNodes.length - 1 && (
                    <div className="absolute left-[calc(2rem)] top-4 hidden h-px w-[calc(100%-1rem)] border-t border-dashed border-border lg:block" />
                  )}
                  <div className="relative">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 font-display text-xs font-bold tabular-nums text-primary">
                      {node.number}
                    </span>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                      {node.timing}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold text-foreground">{node.milestone}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{node.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 7. FUNDING OPTIONS ══ */}
        <section className="relative overflow-hidden bg-[#0a0a1a] px-6 py-24 sm:px-10 lg:py-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-[hsl(36,100%,60%)]/10 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[hsl(36,100%,65%)]">
                <PiggyBank className="h-3.5 w-3.5" />
                Funding
              </span>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Two Ways to Fund Your Growth
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60 lg:text-lg">
                Brand Lab founders have access to up to $100K in funding opportunities through two
                separate tracks.
              </p>
            </div>

            {/* Optional statement — moved up and enlarged */}
            <p className="reveal mx-auto mt-10 max-w-4xl text-center font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              Participation in either funding program is entirely optional. Choosing not to apply to either
              has <span className="text-[hsl(36,100%,70%)]">no effect</span> on your selection into the
              Brand Lab.
            </p>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {fundingTracks.map((card) => (
                <div
                  key={card.title}
                  className="reveal group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-10"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ 8. PARTNERS ══ */}
        <section className="border-y border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
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

            <div className="reveal mt-10 text-center">
              <a
                href="/#team"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                Interested in partnering?
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* ══ 9. APPLY ══ */}
        <section className="px-6 py-24 sm:px-10 lg:py-32">
          <div className="reveal mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
              <Rocket className="h-3.5 w-3.5" />
              Apply
            </span>
            <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Apply to the Inaugural Cohort
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground lg:text-lg">
              Applications for the September 2026 cohort are open. The program is free to join and reviewed
              on a rolling basis.
            </p>
            <div className="mt-9 flex justify-center">
              <a
                href={APPLICATION_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-primary/25"
              >
                Start Your Application
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Questions? Contact{" "}
              <a href="mailto:potter.peng@sunstoneinvestment.com" className="font-medium text-primary hover:underline">
                potter.peng@sunstoneinvestment.com
              </a>{" "}
              or{" "}
              <a href="mailto:angie.zuo@sunstoneinvestment.com" className="font-medium text-primary hover:underline">
                angie.zuo@sunstoneinvestment.com
              </a>
            </p>
          </div>
        </section>

        {/* ══ 10. FAQ ══ */}
        <section className="border-t border-border bg-muted/30 px-6 py-20 sm:px-10 lg:py-28">
          <div className="mx-auto max-w-3xl">
            <div className="reveal mb-10 text-center">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i
                return (
                  <div
                    key={i}
                    className="reveal overflow-hidden rounded-2xl border border-border bg-card"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-base font-semibold text-foreground">{faq.q}</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className="grid transition-all duration-300"
                      style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
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
