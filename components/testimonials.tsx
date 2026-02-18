"use client"

import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { ArrowUpRight, Bell, Lock } from "lucide-react"

export function Testimonials() {
  const containerRef = useReveal()
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Not open yet — just show coming soon state
    setSubmitted(true)
  }

  return (
    <section className="relative px-6 py-28 lg:py-36" ref={containerRef}>
      <div className="mx-auto max-w-3xl text-center">

        {/* Eyebrow */}
        <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5">
          <Bell className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Stay in the Loop
          </span>
        </div>

        <h2 className="reveal font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Events &amp; Updates,{" "}
          <span className="italic text-primary">delivered.</span>
        </h2>

        <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Be the first to hear about Sunstone events, founder spotlights, and DTC vertical news — straight to your inbox.
        </p>

        {/* Subscribe form */}
        <div className="reveal reveal-delay-1 mt-10">
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
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-foreground/10"
              >
                Subscribe
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          ) : (
            <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-full border border-border bg-muted/50 px-6 py-4">
              <Lock className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">
                Coming soon — we&apos;ll notify you when subscriptions open.
              </p>
            </div>
          )}

          {/* Coming soon badge */}
          <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground/50">
            <Lock className="h-3 w-3" />
            Subscriptions not yet open — launching soon
          </p>
        </div>

      </div>
    </section>
  )
}
