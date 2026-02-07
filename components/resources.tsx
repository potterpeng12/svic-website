"use client"

import { useReveal } from "@/hooks/use-reveal"
import Link from "next/link"
import {
  Monitor,
  Cloud,
  BarChart3,
  Megaphone,
  Users,
  Code2,
  Shield,
  CreditCard,
  Headphones,
  ArrowUpRight,
} from "lucide-react"

const categories = [
  { icon: Monitor, label: "Workplace & Productivity", count: 5, names: "Notion, Twilio, Microsoft, Agora, SendGrid", accent: "bg-violet-500" },
  { icon: Cloud, label: "Cloud", count: 5, names: "AWS, Google Cloud, IBM, Scaleway, Cloudflare", accent: "bg-blue-500" },
  { icon: BarChart3, label: "Data & Analytics", count: 2, names: "Mixpanel, Segment", accent: "bg-emerald-500" },
  { icon: Megaphone, label: "Marketing", count: 2, names: "Customer.io, Intercom", accent: "bg-rose-500" },
  { icon: Users, label: "CRM", count: 2, names: "HubSpot, OpenPhone", accent: "bg-amber-500" },
  { icon: Code2, label: "Software & Dev", count: 5, names: "NVIDIA, Carta, UCI AI Club, bycoders_, and more", accent: "bg-cyan-500" },
  { icon: Shield, label: "Insurance", count: 1, names: "Vouch", accent: "bg-indigo-500" },
  { icon: CreditCard, label: "HR, Payroll & Support", count: 2, names: "Gusto, Zendesk", accent: "bg-pink-500" },
]

export function Resources() {
  const containerRef = useReveal()

  return (
    <section id="resources" className="relative px-6 py-28 lg:py-36" ref={containerRef}>
      <div className="pointer-events-none absolute inset-0 bg-muted/40" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="reveal mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">Resources & Perks</p>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              More than <span className="italic text-primary">a check.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground lg:text-right">
            {`$500K+ in exclusive startup perks from partners like AWS, Google Cloud, Notion, HubSpot, and more.`}
          </p>
        </div>

        {/* Category grid */}
        <div className="reveal reveal-delay-1 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/[0.04]"
            >
              <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-white ${cat.accent} transition-transform duration-500 group-hover:scale-110 group-hover:rounded-2xl`}>
                <cat.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground">{cat.label}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground line-clamp-2">{cat.names}</p>
              <p className="mt-3 text-xs font-semibold text-primary">
                {cat.count} {cat.count === 1 ? "perk" : "perks"}
              </p>

              {/* Expanding bg circle on hover */}
              <div className={`absolute -bottom-6 -right-6 h-16 w-16 rounded-full ${cat.accent} opacity-[0.04] transition-transform duration-700 group-hover:scale-[6]`} />
            </div>
          ))}
        </div>

        {/* CTA to full page */}
        <div className="reveal reveal-delay-2 mt-12 flex justify-center">
          <Link
            href="/perks"
            className="group inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card px-8 py-4 font-display text-base font-bold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/20"
          >
            View All Startup Perks
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
