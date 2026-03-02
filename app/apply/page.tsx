import { Metadata } from "next"
import { DtcVerticalContent } from "@/components/dtc-vertical-content"

export const metadata: Metadata = {
  title: "Apply - Sunstone Venture & Innovation Center",
  description:
    "SVIC's DTC Vertical brings together everything ambitious consumer founders need to build, scale, and lead: capital, connections, resources, and deep industry focus.",
}

export default function ApplyPage() {
  return <DtcVerticalContent />
}
