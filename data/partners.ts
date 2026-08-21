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
 * Collaborators across the Sunstone ecosystem, shown as a logo wall.
 * `image` renders the brand's real logo; entries without one fall back to text.
 * Relationships are non-exclusive and do not imply endorsement of the Brand Lab.
 */
export interface EcosystemLogo {
  name: string
  image?: string
}

export const ecosystemLogos: EcosystemLogo[] = [
  { name: "Amazon", image: "/images/logos/amazon.png" },
  { name: "Alibaba.com", image: "/images/logos/alibaba.png" },
  { name: "SHOPLINE", image: "/images/logos/shopline.png" },
  { name: "Insta360", image: "/images/logos/insta360.webp" },
  { name: "TikTok", image: "/images/logos/tiktok.webp" },
  { name: "LLAC", image: "/images/logos/llac.webp" },
  { name: "Devz", image: "/images/logos/devz.jpg" },
  { name: "Minimus", image: "/images/logos/minimus.webp" },
  { name: "Mondelez International", image: "/images/logos/mondelez.webp" },
  { name: "J.P. Morgan", image: "/images/logos/jpmorgan.webp" },
  { name: "Cooley", image: "/images/logos/cooley.png" },
  { name: "Here Here Market", image: "/images/logos/here-here-market.png" },
  { name: "Day Two", image: "/images/logos/day-two.webp" },
  { name: "Pasadena Angels", image: "/images/logos/pasadena-angels.avif" },
  { name: "Placement", image: "/images/logos/placement.webp" },
  { name: "Alliance for SoCal Innovation", image: "/images/logos/alliance-socal.webp" },
  { name: "FastMoss", image: "/images/logos/fastmoss.webp" },
  { name: "BrandPal" },
  { name: "TriNet" },
  { name: "Partake Collective" },
  { name: "WSJ" },
]
