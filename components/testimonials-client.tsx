"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { ArrowUpRight, Bell, Lock } from "lucide-react"
import Image from "next/image"
import type { LumaEvent } from "@/lib/luma-events"

interface TestimonialsClientProps {
  events: LumaEvent[]
}

export function TestimonialsClient({ events }: TestimonialsClientProps) {
  const containerRef = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(
        "https://markjacoub.app.n8n.cloud/webhook-test/sunstone-innovation-subscribe-newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${btoa(`:3dqWk9xhBN16SOHghDhnmAZmkLXIgMxXYNbCQ`)}`,
          },
          body: JSON.stringify({ email }),
        }
      )

      if (!response.ok) {
        throw new Error("Failed to subscribe")
      }

      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="events" className="relative px-6 py-28 lg:py-36" ref={containerRef}>
      <div className="mx-auto max-w-3xl text-center">

        {/* Eyebrow */}
        <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5">
          <Bell className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Stay in the Loop
          </span>
        </div>

        <h2 className="reveal font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Events &amp; Updates,{" "}
          <span className="italic text-primary">delivered.</span>
        </h2>

        <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Be the first to hear about Sunstone events, founder spotlights, and DTC vertical news straight to your inbox.
        </p>

        {/* Upcoming Events Section */}
        {events.length > 0 && (
          <div className="reveal reveal-delay-1 mt-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Upcoming Events
              </h3>
              <a
                href="https://luma.com/sunstonestageconnects"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className={`mx-auto grid gap-6 ${events.length === 1 ? 'max-w-md grid-cols-1' :
                events.length === 2 ? 'max-w-2xl grid-cols-1 md:grid-cols-2' :
                  'max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
              {events.map((event, index) => (
                <a
                  key={index}
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Square image container */}
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    {event.imageUrl ? (
                      <Image
                        src={event.imageUrl}
                        alt={event.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20">
                        <Bell className="h-12 w-12 text-primary/40" />
                      </div>
                    )}
                  </div>

                  {/* Event details */}
                  <div className="p-5">
                    <h4 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {event.name}
                    </h4>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">{event.date}</p>
                      {event.time !== "TBA" && (
                        <p className="text-sm text-muted-foreground">{event.time}</p>
                      )}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Subscribe form */}
        <div className="reveal reveal-delay-2 mt-16">
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 rounded-full border border-border bg-card px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-200"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-foreground/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
                {!isLoading && (
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                )}
              </button>
            </form>
          ) : (
            <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-6 py-4">
              <Bell className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium text-foreground">
                You&apos;re subscribed! We&apos;ll keep you in the loop.
              </p>
            </div>
          )}

          {/* Error message */}
          {error && (
            <p className="mt-3 text-sm text-red-500">{error}</p>
          )}
        </div>

      </div>
    </section>
  )
}
