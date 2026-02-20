import { fetchLumaEvents } from "@/lib/luma-events"
import { TestimonialsClient } from "./testimonials-client"

export async function Testimonials() {
  const events = await fetchLumaEvents()

  return <TestimonialsClient events={events} />
}
