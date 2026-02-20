import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Events } from "@/components/events"
import { Testimonials } from "@/components/testimonials-wrapper"
import { Team } from "@/components/team"
import { Resources } from "@/components/resources"
import { Apply } from "@/components/apply"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Apply />
      <Resources />
      <Testimonials />
      <Events />
      <Team />
      <Footer />
    </main>
  )
}
