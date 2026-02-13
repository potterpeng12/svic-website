"use client"

import { useReveal } from "@/hooks/use-reveal"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Gift } from "lucide-react"
import { useState } from "react"

const featuredPerks = [
  {
    name: "Twilio",
    logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/BkWMxp0K5ah_HT_thj8akpnWPjTs_LvQmETJQAZ0BsE-300x200.png",
    highlight: "$5,000 in credits",
  },
  {
    name: "Amazon Web Services",
    logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/V59pT1wneni_9Ut2_JO-AZL8SbLCLmUZYeqqYbiDsyE-300x183.png",
    highlight: "$25,000 AWS credits",
  },
  {
    name: "Google Cloud",
    logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/b5rdddNeMOb2Pzhua9JhTvnPYM5h8Ww8cWwtCAzE8Kw-300x188.png",
    highlight: "Up to $350K for AI startups",
  },
  {
    name: "IBM",
    logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/G0INrXzLhEp_Cs3KA8lPzX1TG1K3fGZtkSDlV3lwzBI-300x300.jpg",
    highlight: "Up to $120,000 in credits",
  },
  {
    name: "HubSpot",
    logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/ah62UbRkZMjgw4cTM5m2spRhTRyBSFJDKzxPLvSFcDE-300x300.png",
    highlight: "Up to 90% off",
  },
  {
    name: "NVIDIA Inception",
    logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/MEEr7_mlWfpeqdXYKjGu79R5V2-A1NeeQOzs4WKJOUY-300x200.png",
    highlight: "Credits + preferred pricing",
  },
]

function PerkCard({ name, logo, highlight }: { name: string; logo: string; highlight: string }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/15 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/[0.05]">
      {/* Company logo section - Fixed aspect ratio container */}
      <div className="flex items-center justify-center border-b border-border bg-background/50 p-6">
        <div className="relative aspect-[3/2] w-full">
          {!imgError ? (
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              unoptimized
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-base font-bold text-foreground">{name}</span>
            </div>
          )}
        </div>
      </div>

      {/* Perk highlight */}
      <div className="p-5">
        <div className="flex items-start gap-2">
          <Gift className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
          <p className="text-sm font-semibold text-foreground">{highlight}</p>
        </div>
      </div>

      {/* Hover bloom effect */}
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  )
}

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
            $500K+ in exclusive perks from top tech partners to accelerate your growth.
          </p>
        </div>

        {/* Featured partners grid */}
        <div className="reveal reveal-delay-1 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPerks.map((perk) => (
            <PerkCard key={perk.name} name={perk.name} logo={perk.logo} highlight={perk.highlight} />
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
