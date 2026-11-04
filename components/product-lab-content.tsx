"use client"

import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, ChevronDown, ExternalLink } from "lucide-react"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils"

const applyUrl = "https://airtable.com/apphQqTcBjir4jFP5/pagDzyhsQUtfIGPCS/form"
const kitchensUrl = "https://partakecollective.com/commercial-kitchens/"

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`border border-dashed border-foreground/15 bg-muted/50 ${className}`} />
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title?: string }) {
  return (
    <div className="mb-12 flex flex-col gap-4 border-t border-border pt-5 md:mb-16 md:flex-row md:items-start md:justify-between">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">{eyebrow}</p>
      {title ? <h2 className="max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2> : null}
    </div>
  )
}

function ApplyButton() {
  return (
    <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02]">
      Apply to the Product Lab
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

const developmentCards = [
  ["01 — Develop", "Turn ideas into recipes, formulations, and physical prototypes. Explore ingredients, experiment with concepts, and create something new."],
  ["02 — Test & Refine", "Improve flavor, texture, consistency, and product quality through hands-on experimentation and testing."],
  ["03 — Prepare for Market", "Explore small-batch production, packaging workflows, and the next steps toward commercialization."],
]

const audienceCards = [
  ["Emerging Chefs", "Develop new recipes, menu concepts, and culinary products."],
  ["CPG Brands", "Test packaged food products, refine formulations, and prepare for future production."],
  ["Food Startups", "Turn early-stage concepts into tangible prototypes."],
  ["Product Innovators", "Experiment with ingredients, processes, and new food applications."],
]

const kitchenCards = [
  ["Hourly Kitchen", "Flexible access for recipe testing, experimentation, and short-term product development."],
  ["Commercial Kitchen", "Professional cooking environments for businesses with established production needs."],
  ["Chef's & Commissary Kitchen", "Shared commercial cooking facilities suited to caterers, mobile food businesses, and other food operators."],
  ["Prep Kitchen", "Spaces supporting food preparation, assembly, packaging, and fulfillment workflows."],
]

const resources = [
  ["Product Development", "Formulation, prototyping, and refinement."],
  ["Manufacturing", "Production planning and potential manufacturing connections."],
  ["Packaging & Supply Chain", "Packaging solutions and operational resources."],
  ["Distribution", "Potential market access and distribution relationships."],
  ["Strategic Partnerships", "Connections with food industry operators and partners."],
  ["Capital Connections", "Opportunities to engage with the broader innovation and investment ecosystem."],
]

const steps = [
  ["01 — Apply", "Tell us about your business, product, and development goals."],
  ["02 — Get Reviewed", "Our team reviews your application to understand your needs and assess program fit."],
  ["03 — Complete Onboarding", "Coordinate kitchen requirements, facility availability, applicable licenses, permits, and insurance documentation."],
  ["04 — Start Building", "Once approved and onboarded, access your scheduled kitchen space and begin developing or testing your product."],
]

const faqs = [
  ["Who can apply?", "Food entrepreneurs, emerging chefs, CPG brands, and consumer product companies interested in developing, testing, or refining food products are encouraged to apply."],
  ["Do I need an established business?", "Participants must have the applicable business licenses, permits, and insurance required for their kitchen activities. Applicants at different development stages may apply, subject to program review and eligibility requirements."],
  ["What documents are required?", "Participants must provide the required business licenses, applicable food-related permits, and proof of insurance before accessing kitchen facilities. Specific requirements will be confirmed during onboarding."],
  ["Where are the kitchens located?", "Partake Collective offers kitchen facilities in Long Beach and Glassell Park, Los Angeles."],
  ["Is the program free?", "Kitchen fees and any applicable credits or subsidies depend on program eligibility and available arrangements. Our team will provide additional details during the application process."],
  ["Can I use the kitchen for product R&D?", "Yes. Product development and R&D are among the intended uses of the Product Lab, subject to facility suitability, applicable requirements, and approval."],
  ["What happens after I apply?", "Our team will review your application and follow up regarding program fit, kitchen needs, availability, and onboarding requirements."],
]

export function ProductLabContent() {
  return (
    <main className="overflow-hidden">
      <Navbar ctaLabel="Apply to the Product Lab" ctaHref={applyUrl} ctaExternal />

      <section className="px-6 pb-20 pt-36 md:pb-32 md:pt-48">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-20">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-5">
              <h1 className="max-w-4xl text-balance bg-gradient-to-r from-primary via-warm to-accent bg-clip-text font-display text-5xl font-semibold leading-[0.94] tracking-[-0.05em] text-transparent md:text-7xl">Sunstone Product Lab</h1>
              <h2 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-foreground md:text-6xl">Partner with Partake Collective</h2>
              <p className="max-w-lg text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">Develop, test, and bring your product to life.</p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <ApplyButton />
              <p className="text-sm text-muted-foreground">For food innovators, emerging chefs, and CPG brands.</p>
            </div>
          </div>
          <ImagePlaceholder className="aspect-[4/3] w-full rounded-[2rem]" />
        </div>
      </section>

      <section className="bg-secondary/40 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The Program" />
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <ImagePlaceholder className="aspect-[4/3] rounded-[2rem]" />
            <div className="flex flex-col gap-8 text-lg leading-relaxed text-muted-foreground">
              <p>Every great food product begins with an idea. Turning that idea into something real requires the right environment, tools, and connections.</p>
              <p className="text-pretty"><strong className="bg-gradient-to-r from-primary to-warm-strong bg-clip-text font-bold text-transparent">The Sunstone Product Lab</strong>, powered by <strong className="bg-gradient-to-r from-warm-strong to-primary bg-clip-text font-bold text-transparent">Partake Collective</strong>, gives food innovators access to professional kitchen facilities for product development, testing, R&amp;D, and the path to commercialization.</p>
              <p>Beyond the kitchen, entrepreneurs may explore connections across the Sunstone and Partake ecosystem, including manufacturing, packaging, distribution, strategic partnerships, and capital.</p>
              <div className="border-l-2 border-primary pl-6 pt-2">
                <h2 className="mb-3 font-display text-2xl font-semibold text-foreground">Our Mission</h2>
                <p>To help food entrepreneurs bridge the gap between great ideas and market-ready products by connecting them with professional facilities, practical resources, and an innovation-driven community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="What You Can Do" />
          <div className="grid gap-4 md:grid-cols-3">
            {developmentCards.map(([title, text]) => <article key={title} className="rounded-[1.5rem] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 md:p-8"><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-5 text-base leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-foreground px-6 py-20 text-background md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Who It's For" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {audienceCards.map(([title, text]) => <article key={title} className="flex flex-col gap-6"><ImagePlaceholder className="aspect-[4/3] rounded-[1.5rem] border-background/20 bg-background/5" /><div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-background/65">{text}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="The Kitchens" />
          <div className="grid gap-4 md:grid-cols-2">
            {kitchenCards.map(([title, text]) => <article key={title} className="overflow-hidden rounded-[1.5rem] border border-border bg-card"><ImagePlaceholder className="aspect-[16/8]" /><div className="p-7 md:p-8"><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></div></article>)}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">Kitchen configurations, equipment, and availability vary by location.</p>
        </div>
      </section>

      <section className="bg-secondary/40 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Locations" />
          <p className="mb-12 max-w-xl text-2xl font-display leading-tight md:text-4xl">Explore professional kitchen facilities in Southern California.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {[ ["Long Beach", "Long Beach, California", "Professional kitchen facilities supporting food entrepreneurs, culinary development, and growing brands.", "/images/partake-long-beach.webp", "Partake Collective's white corner building with vertical Partake signage on Elm Avenue in Long Beach"], ["Glassell Park", "Los Angeles, California", "Available facilities and access arrangements are subject to confirmation.", "/images/partake-glassell-park.webp", "Partake Collective's red brick kitchen building with Partake signage in Glassell Park, Los Angeles"] ].map(([title, location, text, image, alt]) => <article key={title} className="overflow-hidden rounded-[1.5rem] border border-border bg-background"><div className="relative aspect-[16/9] overflow-hidden bg-muted"><Image src={image} alt={alt} fill sizes="(min-width: 768px) 50vw, 100vw" className={title === "Long Beach" ? "object-cover object-[center_22%]" : "object-cover"} /></div><div className="p-7 md:p-8"><h3 className="font-display text-3xl font-semibold">{title}</h3><p className="mt-2 text-sm font-medium text-muted-foreground">{location}</p><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{text}</p></div></article>)}
          </div>
          <a href={kitchensUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/70">Explore Partake Kitchens <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>

      <section className="px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="Beyond the Kitchen" />
          <div className="mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground"><p>Building a great food product takes more than the right equipment.</p><p className="mt-5">Through the broader Sunstone and Partake Collective ecosystem, participating entrepreneurs may explore connections and resources across:</p></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{resources.map(([title, text], index) => { const isWarm = index % 2 === 1; return <article key={title} className={cn("flex flex-col gap-3 rounded-[1.5rem] border-t-4 p-7 transition-transform duration-300 hover:-translate-y-1", isWarm ? "border-warm-strong bg-secondary" : "border-primary bg-accent")}><span aria-hidden="true" className={cn("size-2.5 rounded-full", isWarm ? "bg-warm-strong" : "bg-primary")} /><h3 className={cn("font-display text-xl font-semibold", isWarm ? "text-warm-foreground" : "text-accent-foreground")}>{title}</h3><p className="leading-relaxed text-foreground/75">{text}</p></article> })}</div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">Additional resources and introductions are subject to availability and are not guaranteed.</p>
        </div>
      </section>

      <section className="bg-secondary/40 px-6 py-20 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionIntro eyebrow="How It Works" title="Your Next Step Starts Here." />
          <div className="grid gap-8 md:grid-cols-4 md:gap-4">{steps.map(([title, text]) => <article key={title} className="relative border-l border-border pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-6"><span className="absolute -left-1.5 top-0 size-3 rounded-full bg-primary md:-top-1.5 md:left-0" /><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div>
          <div className="mt-12"><ApplyButton /></div>
        </div>
      </section>

      <FaqSection />

      <section className="px-6 py-24 md:py-36">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center"><a href={applyUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 font-display text-4xl font-semibold tracking-tight transition-colors hover:text-primary md:text-6xl">Apply to the Product Lab <ArrowUpRight className="h-8 w-8 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a><p className="text-sm text-muted-foreground">Business licenses, applicable permits, and insurance must be verified before kitchen access.</p><p className="text-sm text-muted-foreground">Applications are subject to eligibility review and facility availability.</p></div>
      </section>

      <Footer />
    </main>
  )
}

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null)
  return <section className="bg-foreground px-6 py-20 text-background md:py-32"><div className="mx-auto max-w-4xl"><SectionIntro eyebrow="FAQ" /><div className="border-t border-background/20">{faqs.map(([question, answer], index) => { const isOpen = open === index; return <div key={question} className="border-b border-background/20"><button type="button" onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl font-semibold"><span>{question}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} /></button><div className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}><div className="overflow-hidden"><p className="max-w-3xl pb-6 leading-relaxed text-background/65">{answer}</p></div></div></div> })}</div></div></section>
}
