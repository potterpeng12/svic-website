"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState, useEffect } from "react"

const testimonials = [
  {
    quote: "Sunstone bet on us when no one else would. Their support was instrumental in our journey from garage to IPO.",
    name: "Wei Liu",
    title: "Co-Founder & CEO, NovaTech AI",
  },
  {
    quote: "Through the Sunstone network we found our CTO, our first 10 customers, and our Series A lead. This is so much more than a check.",
    name: "Amara Osei",
    title: "Co-Founder, GreenLeaf Bio",
  },
  {
    quote: "The Sunstone community made us feel like we were never alone. The mentorship and resources were absolute game-changers.",
    name: "Raj Patel",
    title: "Co-Founder & CEO, PayForge",
  },
]

export function Testimonials() {
  const containerRef = useReveal()
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative px-6 py-28 lg:py-36" ref={containerRef}>
      <div className="mx-auto max-w-5xl">
        <div className="reveal text-center">
          <p className="mb-16 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
            What Founders Say
          </p>
        </div>

        {/* Quote area */}
        <div className="reveal reveal-delay-1 relative min-h-[300px] flex items-center justify-center">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              style={{
                opacity: i === active ? 1 : 0,
                transform: i === active ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
                filter: i === active ? "blur(0)" : "blur(4px)",
                transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                pointerEvents: i === active ? "auto" : "none",
              }}
            >
              <blockquote className="font-display text-2xl font-bold leading-[1.2] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {`"${t.quote}"`}
              </blockquote>
              <div className="mt-8">
                <p className="text-base font-semibold text-foreground">{t.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="reveal reveal-delay-2 mt-12 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              type="button"
              key={`td-${i}`}
              onClick={() => setActive(i)}
              className="relative h-1.5 overflow-hidden rounded-full bg-border transition-all duration-500"
              style={{ width: i === active ? 48 : 12 }}
              aria-label={`Go to testimonial ${i + 1}`}
            >
              {i === active && (
                <div
                  className="absolute inset-0 rounded-full bg-primary"
                  style={{
                    animation: "5s linear forwards",
                    width: "100%",
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
