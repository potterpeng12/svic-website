"use client"

import Image from "next/image"
import { useState } from "react"
import { partners, type Partner } from "@/data/partners"

function initials(name: string) {
  return name
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase()
}

function PartnerAvatar({ partner }: { partner: Partner }) {
  const [imgError, setImgError] = useState(false)
  const showImage = partner.photo && !imgError

  return (
    <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-border/60 shadow-md sm:h-28 sm:w-28">
      {showImage ? (
        <Image
          src={partner.photo as string}
          alt={partner.name}
          fill
          className="object-cover"
          sizes="112px"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary to-purple-600">
          <span className="text-2xl font-bold text-white">{initials(partner.name)}</span>
        </div>
      )}
    </div>
  )
}

export function PartnerPeopleGrid() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
      {partners.map((partner, i) => (
        <div
          key={partner.name}
          className={`reveal reveal-delay-${(i % 4) + 1} group flex flex-col items-center text-center`}
        >
          <div className="mb-4 transition-transform duration-300 group-hover:scale-105">
            <PartnerAvatar partner={partner} />
          </div>
          <h4 className="font-display text-sm font-bold leading-tight text-foreground sm:text-base">
            {partner.name}
          </h4>
          <p className="mt-1 text-[11px] font-medium uppercase leading-snug tracking-wider text-muted-foreground/70 sm:text-xs">
            {partner.title}
          </p>
        </div>
      ))}
    </div>
  )
}
