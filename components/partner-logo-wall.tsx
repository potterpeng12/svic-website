"use client"

import { partnerLogos } from "@/data/partners"

export function PartnerLogoWall() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {partnerLogos.map((logo, i) => (
          <span
            key={logo}
            className={`reveal reveal-delay-${(i % 6) + 1} font-display text-base font-semibold text-foreground/50 transition-colors duration-300 hover:text-foreground`}
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
