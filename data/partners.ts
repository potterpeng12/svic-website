/**
 * Confirmed partners contributing expertise, market access, and hands-on
 * support to the Sunstone DTC Brand Lab cohort.
 */
export interface BrandLabPerson {
  name: string
  role: string
  initials: string
}

export const brandLabPeople: BrandLabPerson[] = [
  { name: "Dave De Csepel", role: "Alliance for SoCal Innovation", initials: "DD" },
  { name: "Sophie Zhu", role: "Head of Partnership at Shopline", initials: "SZ" },
  { name: "Disha Gulati", role: "CEO at Here Here Market", initials: "DG" },
  { name: "Adam Carrillo", role: "CEO at Partake Collective", initials: "AC" },
  { name: "Greg Manly", role: "Consultant at TriNet", initials: "GM" },
  { name: "Gene Cao", role: "Director at Insta360", initials: "GC" },
  { name: "Connie Shih", role: "VP, Startup Banking at J.P. Morgan", initials: "CS" },
  { name: "Sarah Choi", role: "Attorney at Cooley", initials: "SC" },
  { name: "Jenny Hsu", role: "Head of Day 2 Coaching", initials: "JH" },
  { name: "Chris Sun", role: "CEO at BrandPal", initials: "CS" },
]

/**
 * Collaborators across the Sunstone ecosystem, shown as a text logo wall.
 * Relationships are non-exclusive and do not imply endorsement of the Brand Lab.
 */
export const ecosystemLogos: string[] = [
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
