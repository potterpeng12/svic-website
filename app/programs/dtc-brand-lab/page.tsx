import type { Metadata } from "next"
import { BrandLabContent } from "@/components/brand-lab-content"

export const metadata: Metadata = {
  title: "Sunstone DTC Brand Lab | Sunstone Venture & Innovation Center",
  description:
    "A 12-week, no-fee incubator that equips global consumer brands to launch, scale, and raise in the U.S. Inaugural cohort begins September 2026.",
  openGraph: {
    title: "Sunstone DTC Brand Lab | Sunstone Venture & Innovation Center",
    description:
      "A 12-week, no-fee incubator that equips global consumer brands to launch, scale, and raise in the U.S. Inaugural cohort begins September 2026.",
    images: ["/images/sunstone-collage-dtc.jpg"],
  },
}

export default function DtcBrandLabPage() {
  return <BrandLabContent />
}
