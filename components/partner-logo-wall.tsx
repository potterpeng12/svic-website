"use client"

import { partnerLogos } from "@/data/partners"

export function PartnerLogoWall() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {partnerLogos.map((logo, i) => (
          <span
            key={logo}
            className={`reveal reveal-delay-${(i % 6) + 1} inline-flex items-center rounded-full border border-border bg-card px-5 py-2.5 font-display text-sm font-semibold text-foreground/80 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-foreground hover:shadow-md`}
          >
            {logo}
          </span>
        ))}
      </div>
      <p className="reveal mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground/70">
        Logos indicate collaborators in the Sunstone ecosystem. Relationships are non-exclusive and
        do not imply endorsement of the Brand Lab.
      </p>
    </div>
  )
}
