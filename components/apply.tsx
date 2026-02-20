"use client"

import React from "react"

import { useReveal } from "@/hooks/use-reveal"
import { ArrowUpRight, Sparkles } from "lucide-react"
import { useCallback, useRef, useState } from "react"

export function Apply() {
  const containerRef = useReveal()
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }, [])

  return (
    <section id="apply" className="relative px-6 py-28 lg:py-36" ref={containerRef}>
      <div className="reveal mx-auto max-w-5xl">
        <div
          ref={cardRef}
          className="relative overflow-hidden rounded-[2rem] bg-foreground p-10 text-center sm:p-16 lg:rounded-[2.5rem] lg:p-24"
          onMouseMove={handleMouseMove}
        >
          {/* Interactive glow that follows cursor */}
          <div
            className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px] transition-all duration-700 ease-out"
            style={{
              left: `${mousePos.x * 100}%`,
              top: `${mousePos.y * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[hsl(var(--warm))]/10 blur-3xl" />

          <div className="relative z-10">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-background/10 bg-background/5 px-4 py-2">
              <Sparkles className="h-3.5 w-3.5 text-background" />
              <span className="text-sm font-medium text-background/80">
                Now Accepting Applications
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold leading-[1] tracking-tight text-background sm:text-6xl lg:text-7xl">
              Next-Gen DTC Brands
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, hsl(271,81%,70%), hsl(36,100%,70%), hsl(271,81%,70%))",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  animation: "shimmer-move 4s linear infinite",
                }}
              >
                Start Here
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-background/50">
              SVIC's DTC track is designed to support consumer founders with early-stage capital, industry guidance, and a network of trusted connections — along with practical resources to help brands grow across Fashion, Beauty, Consumer Electronics, Food & Beverage, and related categories.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="/apply"
                className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-10 py-5 text-lg font-semibold text-primary-foreground shadow-2xl shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 hover:scale-[1.03]"
              >
                Start Application
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:community@sunstoneinvestment.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-background/15 bg-transparent px-10 py-5 text-lg font-semibold text-background transition-all duration-300 hover:border-background/30 hover:bg-background/5"
              >
                Say Hello
              </a>
            </div>

            <p className="mt-10 text-sm text-background/30">
              {"Questions? Reach us at "}
              <a
                href="mailto:community@sunstoneinvestment.com"
                className="text-background/50 underline underline-offset-4 transition-colors hover:text-background/80"
              >
                community@sunstoneinvestment.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
