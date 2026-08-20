/**
 * Confirmed partners contributing expertise, market access, and hands-on
 * support to the Sunstone DTC Brand Lab cohort.
 */
export interface BrandLabPerson {
  name: string
  role: string
  initials: string
  photo: string
}

export const brandLabPeople: BrandLabPerson[] = [
  { name: "Dave De Csepel", role: "CEO at Alliance for SoCal", initials: "DD", photo: "/images/partners/dave-de-csepel.jpg" },
  { name: "Sophie Zhu", role: "Head of Partnership at SHOPLINE", initials: "SZ", photo: "/images/partners/sophie-zhu.jpg" },
  { name: "Disha Gulati", role: "CEO at Here Here Market", initials: "DG", photo: "/images/partners/disha-gulati.jpg" },
  { name: "Sarah Choi", role: "Attorney at Cooley", initials: "SC", photo: "/images/partners/sarah-choi.jpg" },
  { name: "Paul Shrater", role: "Founder of Minimus Brand", initials: "PS", photo: "/images/partners/paul-shrater.jpg" },
  { name: "Sylvia Wu", role: "Category Manager at TikTok Shop", initials: "SW", photo: "/images/partners/sylvia-wu.jpg" },
  { name: "Connie Shih", role: "VP, Startup Banking at J.P. Morgan", initials: "CS", photo: "/images/partners/connie-shih.jpg" },
  { name: "Chris Sun", role: "CEO at BrandPal", initials: "CS", photo: "/images/partners/chris-sun.jpg" },
  { name: "Adam Carrillo", role: "CEO at Partake Collective", initials: "AC", photo: "/images/partners/adam-carrillo.jpg" },
  { name: "Greg Manly", role: "HR Consultant at TriNet", initials: "GM", photo: "/images/partners/greg-manly.jpg" },
  { name: "Gene Cao", role: "Director at Insta360", initials: "GC", photo: "/images/partners/gene-cao.jpg" },
  { name: "Alex Hejazi", role: "CEO at Placement", initials: "AH", photo: "/images/partners/alex-hejazi.jpg" },
  { name: "Jenny Hsu", role: "Founder of Day2 Studio", initials: "JH", photo: "/images/partners/jenny-hsu.jpg" },
  { name: "Ken Xu", role: "Senior Product Manager at Devz AI", initials: "KX", photo: "/images/partners/ken-xu.jpg" },
  { name: "Bianca Jeanty", role: "Client Partner at Snap Inc", initials: "BJ", photo: "/images/partners/bianca-jeanty.jpg" },
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
