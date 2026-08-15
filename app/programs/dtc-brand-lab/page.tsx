import type { Metadata } from "next"
import { BrandLabContent } from "@/components/brand-lab-content"

export const metadata: Metadata = {
  title: "DTC Brand Lab - Sunstone Venture & Innovation Center",
  description:
    "A free 12-week consumer brand incubator for early-stage DTC founders. Get hands-on curriculum, expert partners, funding pathways, and a founder community — at no cost and no equity.",
}

export default function DtcBrandLabPage() {
  return <BrandLabContent />
}
