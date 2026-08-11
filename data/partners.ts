/**
 * Shared partner data for the Sunstone DTC Brand Lab.
 * The roster is still growing — update these arrays as new partners are confirmed.
 */

export type Partner = {
  name: string
  title: string
  /** Optional headshot path under /public. Falls back to initials when absent. */
  photo?: string
}

/** 14 confirmed partners contributing to the Brand Lab cohort. */
export const partners: Partner[] = [
  { name: "Dave De Csepel", title: "CEO at Alliance for SoCal" },
  { name: "Sophie Zhu", title: "Head of Partnership at SHOPLINE" },
  { name: "Disha Gulati", title: "CEO at Here Here Market" },
  { name: "Adam Carrillo", title: "CEO at Partake Collective" },
  { name: "Greg Manly", title: "HR Consultant at TriNet" },
  { name: "Gene Cao", title: "Director at Insta360" },
  { name: "Connie Shih", title: "VP, Startup Banking at J.P. Morgan" },
  { name: "Sarah Choi", title: "Attorney at Cooley" },
  { name: "Paul Shrater", title: "Founder of Minimus Brand" },
  { name: "Sylvia Wu", title: "Category Manager at TikTok Shop" },
  { name: "Ken Xu", title: "Senior Product Manager at Devz AI" },
  { name: "Dr. Cervantes Lee", title: "UNLV, Hospitality Business Professor" },
  { name: "Jenny Hsu", title: "Head of Day 2 Coaching" },
  { name: "Chris Sun", title: "CEO at BrandPal" },
]

/** Organizations collaborating across the Sunstone ecosystem. */
export const partnerLogos: string[] = [
  "Amazon",
  "Alibaba.com",
  "SHOPLINE",
  "Insta360",
  "TikTok",
  "LLAC",
  "Devz",
  "Minimus",
  "Mondelez International",
  "J.P. Morgan",
  "Cooley",
  "Here Here Market",
  "Day Two",
  "Pasadena Angels",
  "Placement",
  "Alliance for SoCal Innovation",
  "FastMoss",
  "BrandPal",
  "TriNet",
  "Partake Collective",
  "WSJ",
]
