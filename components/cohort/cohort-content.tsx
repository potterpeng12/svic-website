"use client"

import { useCallback, useEffect, useState } from "react"
import { useReducedMotion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CohortIntro } from "@/components/cohort/cohort-intro"
import { CohortCard } from "@/components/cohort/cohort-card"
import { cohortOneBrands } from "@/data/cohort-1"

export function CohortContent() {
  const reduceMotion = useReducedMotion() ?? false
  const [introDone, setIntroDone] = useState(false)
  const [gridVisible, setGridVisible] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setIntroDone(true)
      setGridVisible(true)
    }
  }, [reduceMotion])

  const revealGrid = useCallback(() => setGridVisible(true), [])
  const finishIntro = useCallback(() => setIntroDone(true), [])

  return (
    <>
      {!introDone && !reduceMotion && (
        <CohortIntro brands={cohortOneBrands} onRevealGrid={revealGrid} onDone={finishIntro} />
      )}

      <Navbar
        darkHero
        ctaLabel="Back to Brand Lab"
        ctaHref="/programs/dtc-brand-lab"
      />

      <main className="relative min-h-screen">
        {/* ════════ HERO ════════ */}
        <header className="relative flex min-h-[78vh] items-center justify-center overflow-hidden bg-[#0a0a1a]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/cohort-1-group-photo.jpg"
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${gridVisible ? "opacity-100" : "opacity-0"}`}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
            aria-hidden="true"
          />

          <div
            className={`relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-16 pt-32 text-center transition-opacity duration-300 ${gridVisible ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-white/70 sm:text-xs">
              Sunstone Innovation · DTC Brand Lab
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
              {"Meet "}
              <span className="text-shimmer">Cohort 1</span>
            </h1>
          </div>
        </header>

        {/* ════════ COHORT GRID ════════ */}
        <section id="cohort" className="px-6 py-16 sm:px-10 lg:py-24" aria-labelledby="cohort-heading">
          <div className="mx-auto max-w-6xl">
            <h2 id="cohort-heading" className="sr-only">
              The 18 companies in Cohort 1
            </h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {cohortOneBrands.map((brand) => (
                <CohortCard
                  key={brand.id}
                  brand={brand}
                  show={gridVisible}
                  reduceMotion={reduceMotion}
                />
              ))}
            </ul>

            <div className="mt-16 flex justify-center">
              <a
                href="/programs/dtc-brand-lab"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/20 hover:bg-accent"
              >
                <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-0.5" />
                Back to DTC Brand Lab
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
