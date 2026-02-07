import { Metadata } from "next"
import { PerksContent } from "@/components/perks-content"

export const metadata: Metadata = {
  title: "Startup Perks - Sunstone Venture & Innovation Center",
  description:
    "Exclusive startup perks and resources for Sunstone portfolio companies. $500K+ in credits and discounts from AWS, Google Cloud, Notion, HubSpot, and more.",
}

export default function PerksPage() {
  return <PerksContent />
}
