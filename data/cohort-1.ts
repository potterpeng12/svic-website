export interface Founder {
  name?: string
  title?: string
  image?: string
  bio?: string
  linkedin?: string
}

export interface CohortBrand {
  id: string
  name: string
  blurb: string
  /** Official website. Leave null when the brand has no site yet. */
  website: string | null
  /**
   * Path to the brand logo or product photo, e.g. "/images/cohort-1/caddix.png".
   * Leave undefined to show the "Brand Image Coming Soon" placeholder.
   */
  image?: string
  /** "contain" for logos, "cover" for product photography. */
  imageFit?: "contain" | "cover"
  /**
   * Fill this in to activate the "Meet the Founder" flip on the card.
   * The flip button stays hidden until `name` is set.
   */
  founder?: Founder
}

export function hasFounderInfo(founder?: Founder): founder is Founder & { name: string } {
  return Boolean(founder?.name && founder.name.trim().length > 0)
}

export const cohortOneBrands: CohortBrand[] = [
  {
    id: "caddix",
    name: "Caddix, Inc.",
    blurb:
      "An athletic footwear company developing innovative sports cleats featuring patented SmartStuds technology, designed to reduce rotational stress on knees and ankles during athletic activity.",
    website: "https://www.caddix.com",
  },
  {
    id: "clean-saint",
    name: "Clean Saint LLC",
    blurb:
      "An oral care brand offering Mouth OS, a waterless, fluoride-free dissolvable toothpaste film featuring hydroxyapatite and individually sealed doses, designed for convenient, portable, tube-free dental hygiene.",
    website: "https://cleansaint.com",
  },
  {
    id: "dulce-caramel",
    name: "Dulce Caramel Co.",
    blurb:
      "A Chicago-based artisanal confectionery specializing in handmade Argentine-inspired sweets, including alfajores, caramels, chocolate, and honeycomb treats, using traditional methods and natural ingredients.",
    website: "https://dulcecaramel.com",
  },
  {
    id: "dynomighty",
    name: "Dynomighty",
    blurb:
      "A creative accessories brand specializing in innovative, lightweight, and durable wallets made from recyclable Tyvek material. Known for its signature Mighty Wallet, the company combines minimalist construction with colorful, artist-designed patterns to offer functional and stylish alternatives to traditional leather wallets.",
    website: "https://mightywallet.shop",
  },
  {
    id: "eazwear",
    name: "EAZWEAR",
    blurb:
      "A hygiene-focused apparel brand offering individually packaged, sterilized disposable cotton underwear designed for convenience, comfort, travel, and everyday personal hygiene.",
    website: null,
  },
  {
    id: "giraf-sleeptech",
    name: "giraf SleepTech",
    blurb:
      "A Singapore-based sleep technology company developing innovative deep-pressure pillows designed to support relaxation and more restorative sleep through proprietary composite materials and sensory pressure technology.",
    website: "https://www.girafthepillow.com",
  },
  {
    id: "goode-bites",
    name: "Goode Bites",
    blurb:
      "A premium beef jerky brand specializing in small-batch, hand-cut brisket jerky made without seed oils, artificial preservatives, or added nitrates.",
    website: "https://www.goodbitesjerky.com",
  },
  {
    id: "kamuel",
    name: "Kamuel",
    blurb:
      "A Los Angeles-based premium footwear brand developing distinctive, high-end sneakers designed for ambitious, style-conscious consumers.",
    website: "https://www.kamuel.com",
  },
  {
    id: "karma-wellness-kitchen",
    name: "Karma Wellness Kitchen",
    blurb:
      "A wellness-focused food brand offering popped water lily seed snacks, herbal teas, and convenient meal kits inspired by Indian and South Asian flavors.",
    website: "https://www.karmawellnesskitchen.com",
  },
  {
    id: "lido-gear",
    name: "Lido Gear",
    blurb:
      "A marketing and branding services company providing brand development, strategic consulting, marketing planning, and business analysis for companies across industries including real estate, finance, hospitality, and professional services.",
    website: "https://lidogear.com",
  },
  {
    id: "linea",
    name: "LINEA",
    blurb:
      "An emerging functional hydration brand developing low-sugar and clean-ingredient electrolyte drink mixes featuring sodium, potassium, and chelated magnesium. Designed for convenient everyday hydration, LINEA combines balanced mineral formulations with approachable flavors and portable packaging.",
    website: "https://drinklinea.com",
  },
  {
    id: "montys",
    name: "Monty's Alhambra | Monty's Norwalk",
    blurb:
      "A Southern California quick-service restaurant brand serving comfort foods, including chopped cheese sandwiches, cheesesteaks, chicken and waffles, and breakfast burritos.",
    website: "https://montystakeout.com",
  },
  {
    id: "nad-and-me",
    name: "NAD&Me, Corp.",
    blurb:
      "A functional beverage company producing caffeine-free NAD+ drinks formulated with cellular nutrients and marketed to support everyday energy, vitality, and wellness through convenient ready-to-drink products.",
    website: "https://nadandme.com",
  },
  {
    id: "reset-foods",
    name: "RESET FOODS",
    blurb:
      "An emerging packaged food and beverage company developing consumer food products under the RESET FOODS brand. Specific product offerings are not yet confirmed.",
    website: null,
  },
  {
    id: "seaker-sun-co",
    name: "Seaker Sun Co",
    blurb:
      "A sustainable sun-care brand offering minimalist mineral sunscreen balms made with zinc oxide and packaged in recyclable metal tins. Its four-ingredient formula is designed for outdoor enthusiasts seeking simple, plastic-free sun protection.",
    website: "https://seakersunco.com",
  },
  {
    id: "oculora",
    name: "Oculora – Tacit Health LLC",
    blurb:
      "Oculora is an eye-wellness brand offering self-heating eye masks designed to promote relaxation and provide a restorative break from screen-heavy lifestyles. Combining gentle warmth with botanical aromas, its portable, single-use masks create a convenient 20-minute self-care ritual for home, travel, and everyday use.",
    website: "https://myoculora.com",
  },
  {
    id: "taply",
    name: "Taply",
    blurb:
      "A functional beverage brand producing lightly sparkling maple water made from organic maple sap, offering naturally occurring electrolytes, antioxidants, and minerals without added sugar.",
    website: "https://drinktaply.com",
  },
  {
    id: "zabaan",
    name: "Zabaan",
    blurb:
      "A Los Angeles-based specialty food brand developing small-batch Pakistani chutneys inspired by traditional family recipes. Featuring flavors such as mint and tamarind, Zabaan brings authentic South Asian condiments to everyday meals through fresh ingredients and handcrafted production.",
    website: "https://eatzabaan.com",
  },
]
