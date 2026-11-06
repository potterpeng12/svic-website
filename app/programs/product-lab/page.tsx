import type { Metadata } from "next"
import { ProductLabContent } from "@/components/product-lab-content"

export const metadata: Metadata = {
  title: "Sunstone Product Lab",
  description: "Sunstone Product Lab",
}

export default function ProductLabPage() {
  return <ProductLabContent />
}
