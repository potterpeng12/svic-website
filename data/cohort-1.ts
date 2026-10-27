export interface Founder {
  name?: string
  title?: string
  /** Headshot path. Leave undefined to show the initials placeholder. */
  image?: string
  /** CSS object-position for the headshot crop, e.g. "50% 25%". */
  imagePosition?: string
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
  /** CSS object-position for "cover" images, e.g. "50% 0%" keeps the top of the photo visible. */
  imagePosition?: string
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
    image: "/images/cohort-1/caddix.png",
    imageFit: "cover",
    founder: {
      name: "Kevin Sheppard",
      title: "COO",
      image: "/images/cohort-1/founders/kevin-sheppard.webp",
      imagePosition: "50% 30%",
      linkedin: "https://www.linkedin.com/in/kevin-sheppard-7a779ab6/",
    },
  },
  {
    id: "clean-saint",
    name: "Clean Saint LLC",
    blurb:
      "An oral care brand offering Mouth OS, a waterless, fluoride-free dissolvable toothpaste film featuring hydroxyapatite and individually sealed doses, designed for convenient, portable, tube-free dental hygiene.",
    website: "https://cleansaint.com",
    image: "/images/cohort-1/clean-saint.png",
    imageFit: "cover",
    founder: {
      name: "Joshua Stancle",
      title: "Founder & CEO",
      image: "/images/cohort-1/founders/joshua-stancle.png",
      imagePosition: "50% 35%",
      linkedin: "https://www.linkedin.com/in/joshua-stancle-29097515/",
    },
  },
  {
    id: "dynomighty",
    name: "Dynomighty",
    blurb:
      "A creative accessories brand specializing in innovative, lightweight, and durable wallets made from recyclable Tyvek material. Known for its signature Mighty Wallet, the company combines minimalist construction with colorful, artist-designed patterns to offer functional and stylish alternatives to traditional leather wallets.",
    website: "https://mightywallet.shop",
    image: "/images/cohort-1/dynomighty.webp",
    imageFit: "cover",
    founder: {
      name: "Terrence Kelleman",
      title: "Founder",
      image: "/images/cohort-1/founders/terrence-kelleman.jpg",
      imagePosition: "50% 30%",
      linkedin: "https://www.linkedin.com/in/bemighty/",
    },
  },
  {
    id: "eazwear",
    name: "EAZWEAR",
    blurb:
      "A hygiene-focused apparel brand offering individually packaged, sterilized disposable cotton underwear designed for convenience, comfort, travel, and everyday personal hygiene.",
    website: null,
    image: "/images/cohort-1/eazwear.png",
    imageFit: "cover",
    founder: {
      name: "Eric Zhuang",
      title: "Founder",
      image: "/images/cohort-1/founders/eric-zhuang.jpg",
      imagePosition: "50% 35%",
      linkedin: "https://www.linkedin.com/in/eric-zhuang-2b1841417/",
    },
  },
  {
    id: "giraf-sleeptech",
    name: "giraf SleepTech",
    blurb:
      "A Singapore-based sleep technology company developing innovative deep-pressure pillows designed to support relaxation and more restorative sleep through proprietary composite materials and sensory pressure technology.",
    website: "https://www.girafthepillow.com",
    image: "/images/cohort-1/giraf-sleeptech.png",
    imageFit: "cover",
    founder: {
      name: "Ken Leong",
      title: "Founder & CEO",
      image: "/images/cohort-1/founders/ken-leong.png",
      imagePosition: "50% 15%",
      linkedin: "https://www.linkedin.com/in/kencleong?originalSubdomain=sg",
    },
  },
  {
    id: "goode-bites",
    name: "Goode Bites",
    blurb:
      "A premium beef jerky brand specializing in small-batch, hand-cut brisket jerky made without seed oils, artificial preservatives, or added nitrates.",
    website: "https://www.goodbitesjerky.com",
    image: "/images/cohort-1/goode-bites.png",
    imageFit: "cover",
    founder: {
      name: "Andre Goode",
      title: "Co-Founder & CEO",
      image: "/images/cohort-1/founders/andre-goode.jpg",
      imagePosition: "50% 30%",
      linkedin: "https://www.linkedin.com/in/andre-goode/",
    },
  },
  {
    id: "kamuel",
    name: "Kamuel",
    blurb:
      "A Los Angeles-based premium footwear brand developing distinctive, high-end sneakers designed for ambitious, style-conscious consumers.",
    website: "https://www.kamuel.com",
    image: "/images/cohort-1/kamuel.png",
    imageFit: "cover",
    founder: {
      name: "Kam Black",
      title: "Founder",
      image: "/images/cohort-1/founders/kam-black.jpg",
      imagePosition: "50% 30%",
      linkedin: "https://www.linkedin.com/in/kamblack/",
    },
  },
  {
    id: "karma-wellness-kitchen",
    name: "Karma Wellness Kitchen",
    blurb:
      "A wellness-focused food brand offering popped water lily seed snacks, herbal teas, and convenient meal kits inspired by Indian and South Asian flavors.",
    website: "https://www.karmawellnesskitchen.com",
    image: "/images/cohort-1/karma-wellness-kitchen.png",
    imageFit: "cover",
    founder: {
      name: "Vinita Parekh",
      title: "Founder & CEO",
      image: "/images/cohort-1/founders/vinita-parekh.jpg",
      imagePosition: "50% 30%",
      linkedin: "https://www.linkedin.com/in/vinita-parekh-karma/",
    },
  },
  {
    id: "lido-gear",
    name: "Lido Gear",
    blurb:
      "A marketing and branding services company providing brand development, strategic consulting, marketing planning, and business analysis for companies across industries including real estate, finance, hospitality, and professional services.",
    website: "https://lidogear.com",
    image: "/images/cohort-1/lido-gear.png",
    imageFit: "cover",
    founder: {
  name: "Alan Sather",
  title: "CEO",
  image: "/images/cohort-1/founders/lido-gears-founder.jpg",
  imagePosition: "50% 30%",
  },
  },
  {
    id: "linea",
    name: "LINEA",
    blurb:
      "An emerging functional hydration brand developing low-sugar and clean-ingredient electrolyte drink mixes featuring sodium, potassium, and chelated magnesium. Designed for convenient everyday hydration, LINEA combines balanced mineral formulations with approachable flavors and portable packaging.",
    website: "https://drinklinea.com",
    image: "/images/cohort-1/linea.png",
    imageFit: "cover",
    imagePosition: "50% 0%",
    founder: {
      name: "Ryan Newhard",
      title: "Founder & CEO",
      image: "/images/cohort-1/founders/ryan-newhard.jpg",
      imagePosition: "50% 40%",
      linkedin: "https://www.linkedin.com/in/ryan-newhard-19970",
    },
  },
  {
    id: "montys",
    name: "Monty's Alhambra | Monty's Norwalk",
    blurb:
      "A Southern California quick-service restaurant brand serving comfort foods, including chopped cheese sandwiches, cheesesteaks, chicken and waffles, and breakfast burritos.",
    website: "https://montystakeout.com",
    image: "/images/cohort-1/montys-sandwich.jpg",
    imageFit: "cover",
    founder: {
      name: "Henry Arayasirikul",
      title: "Founder & CEO",
    },
  },
  {
    id: "nad-and-me",
    name: "NAD&Me, Corp.",
    blurb:
      "A functional beverage company producing caffeine-free NAD+ drinks formulated with cellular nutrients and marketed to support everyday energy, vitality, and wellness through convenient ready-to-drink products.",
    website: "https://nadandme.com",
    image: "/images/cohort-1/nad-and-me.png",
    imageFit: "cover",
    founder: {
      name: "Alex Tsepko",
      title: "Co-Founder",
      image: "/images/cohort-1/founders/alex-tsepko.png",
      imagePosition: "50% 25%",
      linkedin: "https://www.linkedin.com/in/alextsepko/",
    },
  },
  {
    id: "reset-foods",
    name: "RESET FOODS",
    blurb:
      "An emerging packaged food and beverage company developing consumer food products under the RESET FOODS brand. Specific product offerings are not yet confirmed.",
    website: null,
    founder: {
      name: "Anqi Li",
      title: "CEO",
    },
  },
  {
    id: "seaker-sun-co",
    name: "Seaker Sun Co",
    blurb:
      "A sustainable sun-care brand offering minimalist mineral sunscreen balms made with zinc oxide and packaged in recyclable metal tins. Its four-ingredient formula is designed for outdoor enthusiasts seeking simple, plastic-free sun protection.",
    website: "https://seakersunco.com",
    image: "/images/cohort-1/seaker-sun-co.png",
    imageFit: "cover",
    founder: {
      name: "Euan Latimer",
      title: "Founder",
      image: "/images/cohort-1/founders/euan-latimer.png",
      imagePosition: "50% 30%",
      linkedin: "https://www.linkedin.com/in/euanklatimer/",
    },
  },
  {
    id: "oculora",
    name: "Oculora – Tacit Health LLC",
    blurb:
      "Oculora is an eye-wellness brand offering self-heating eye masks designed to promote relaxation and provide a restorative break from screen-heavy lifestyles. Combining gentle warmth with botanical aromas, its portable, single-use masks create a convenient 20-minute self-care ritual for home, travel, and everyday use.",
    website: "https://myoculora.com",
    image: "/images/cohort-1/oculora.png",
    imageFit: "cover",
    founder: {
      name: "Aaron Ma",
      title: "Founder",
      image: "/images/cohort-1/founders/aaron-ma.png",
      imagePosition: "50% 35%",
      linkedin: "https://www.linkedin.com/in/aaron-ma-ba93373b2/",
    },
  },
  {
    id: "taply",
    name: "Taply",
    blurb:
      "A functional beverage brand producing lightly sparkling maple water made from organic maple sap, offering naturally occurring electrolytes, antioxidants, and minerals without added sugar.",
    website: "https://drinktaply.com",
    image: "/images/cohort-1/taply.png",
    imageFit: "cover",
    imagePosition: "50% 90%",
    founder: {
      name: "Ashley Bowser",
      title: "Founder",
    },
  },
  {
    id: "zabaan",
    name: "Zabaan",
    blurb:
      "A Los Angeles-based specialty food brand developing small-batch Pakistani chutneys inspired by traditional family recipes. Featuring flavors such as mint and tamarind, Zabaan brings authentic South Asian condiments to everyday meals through fresh ingredients and handcrafted production.",
    website: "https://eatzabaan.com",
    image: "/images/cohort-1/zabaan.png",
    imageFit: "cover",
    founder: {
      name: "Musmin Zar",
      title: "Founder",
    },
  },
]
