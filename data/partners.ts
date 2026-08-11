// Shared partner data for the Sunstone DTC Brand Lab.
// Update these arrays to change the mentor grid and logo wall wherever they are used.

export type PartnerPerson = {
  name: string
  role: string
  company: string
}

export type PartnerLogo = {
  name: string
}

/* Mentors and advisors from the Sunstone network */
export const partnerPeople: PartnerPerson[] = [
  { name: "Disha Gulati", role: "CEO", company: "Here Here Market" },
  { name: "Greg Manly", role: "HR Consultant", company: "TriNet" },
  { name: "Jenny Hsu", role: "Head of Day 2 Coaching", company: "Day 2 Coaching" },
  { name: "Gene Cao", role: "Director", company: "Insta360" },
  { name: "Dave De Csepel", role: "CEO", company: "Alliance for SoCal" },
  { name: "Sophie Zhu", role: "Head of Partnership", company: "SHOPLINE" },
  { name: "Paul Shrater", role: "Founder", company: "Minimus Brand" },
  { name: "Sarah Choi", role: "Attorney", company: "Cooley" },
  { name: "Sylvia Wu", role: "Category Manager", company: "TikTok Shop" },
  { name: "Ken Xu", role: "Senior Product Manager", company: "Devz AI" },
  { name: "Adam Carrillo", role: "CEO", company: "Partake Collective" },
  { name: "Dr. Cervantes Lee", role: "Hospitality Business Professor", company: "UNLV" },
  { name: "Chris Sun", role: "CEO", company: "BrandPal" },
  { name: "Connie Shih", role: "VP, Startup Banking", company: "J.P. Morgan" },
]

/* Partner organizations for the logo wall */
export const partnerLogos: PartnerLogo[] = [
  { name: "Here Here Market" },
  { name: "TriNet" },
  { name: "Insta360" },
  { name: "Alliance for SoCal" },
  { name: "SHOPLINE" },
  { name: "Minimus" },
  { name: "Cooley" },
  { name: "TikTok Shop" },
  { name: "Devz AI" },
  { name: "Partake Collective" },
  { name: "UNLV" },
  { name: "BrandPal" },
  { name: "J.P. Morgan" },
  { name: "Day 2 Coaching" },
]
