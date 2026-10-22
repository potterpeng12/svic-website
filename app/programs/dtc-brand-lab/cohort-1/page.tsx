import type { Metadata } from "next"
import { CohortContent } from "@/components/cohort/cohort-content"

export const metadata: Metadata = {
  title: "Meet Cohort 1 - DTC Brand Lab - Sunstone Venture & Innovation Center",
  description:
    "Meet the 18 emerging consumer brands in the inaugural Sunstone DTC Brand Lab cohort.",
}

export default function CohortOnePage() {
  return <CohortContent />
}
