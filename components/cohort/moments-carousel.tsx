"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const moments = [
  {
    src: "/images/cohort-1/moments/shopline-nomadsfi.jpg",
    width: 1500,
    height: 1000,
    alt: "A founder laughing at a busy orange-draped table with Nomadsfi, Shopline and Trinet signs",
  },
  {
    src: "/images/cohort-1/moments/nalwaya-foods.jpg",
    width: 829,
    height: 1000,
    alt: "A Cohort 1 founder presenting cultured ghee jars to attendees at the Nalwaya Foods table",
  },
  {
    src: "/images/cohort-1/moments/dirty.jpg",
    width: 750,
    height: 1000,
    alt: "Three people holding up packaged greens behind the DIRTY table",
  },
  {
    src: "/images/cohort-1/moments/sunstone-presentation.jpg",
    width: 1500,
    height: 1000,
    alt: "A speaker with a microphone presenting in front of the Sunstone About slide while a crowd watches",
  },
  {
    src: "/images/cohort-1/moments/trutone-mighty-wallet.jpg",
    width: 1500,
    height: 1000,
    alt: "A founder talking with attendees at the Trutone and Mighty Wallet table",
  },
  {
    src: "/images/cohort-1/moments/korjin.jpg",
    width: 1500,
    height: 1000,
    alt: "The Korjin founder smiling beside his product display while guests look on",
  },
]

export function MomentsCarousel() {
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateEdges = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    updateEdges()
    window.addEventListener("resize", updateEdges)
    return () => window.removeEventListener("resize", updateEdges)
  }, [updateEdges])

  const scrollByPage = (direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" })
  }

  return (
    <section className="mt-20 lg:mt-28" aria-labelledby="moments-heading">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2
            id="moments-heading"
            className="bg-[linear-gradient(90deg,hsl(271,81%,70%),hsl(36,100%,70%),hsl(271,81%,70%))] bg-clip-text font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl"
          >
            Moments With Cohort 1
          </h2>
        </div>

        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByPage(-1)}
            disabled={!canScrollLeft}
            aria-label="Scroll photos left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByPage(1)}
            disabled={!canScrollRight}
            aria-label="Scroll photos right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <ul
        ref={scrollerRef}
        onScroll={updateEdges}
        className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [scrollbar-width:thin]"
        tabIndex={0}
        aria-label="Photo gallery, scroll horizontally"
      >
        {moments.map((moment) => (
          <li key={moment.src} className="shrink-0 snap-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={moment.src}
              alt={moment.alt}
              width={moment.width}
              height={moment.height}
              loading="lazy"
              draggable={false}
              className="h-72 w-auto rounded-2xl object-cover sm:h-96"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
