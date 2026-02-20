"use client"

import React from "react"
import Image from "next/image"
import {
  Monitor,
  Cloud,
  BarChart3,
  Megaphone,
  Users,
  Code2,
  Shield,
  CreditCard,
  Headphones,
  Gift,
} from "lucide-react"
import { useReveal } from "@/hooks/use-reveal"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

interface Perk {
  name: string
  logo: string
  highlight: string
  offers: string[]
  eligibility?: string[]
  note?: string
}

interface PerkCategory {
  title: string
  icon: React.ElementType
  accent: string
  accentLight: string
  perks: Perk[]
}

const perkCategories: PerkCategory[] = [
  {
    title: "Workplace and Productivity",
    icon: Monitor,
    accent: "bg-violet-500",
    accentLight: "bg-violet-50 text-violet-700 border-violet-200",
    perks: [
      {
        name: "Agora",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/VUNryd2FpK8Zklxpm4yp1yDfFjn9mHEm0WGOIpA9Otg-300x173.png",
        highlight: "~$3,500+ in free minutes",
        offers: [
          "1 million minutes per startup free of charge (~$3500 value).",
          "Ad-hoc tech support and human-led signpointing to spec information and white-papers.",
          "HIPAA for $200/month (less than 10% of the regular price).",
          "Agora Analytics FOR FREE ($1700/month regular price).",
          "Exclusive invites to Agora-hosted events and third-party joined events.",
          "Co-marketing opportunities including press releases, testimonials, use cases and blogs.",
        ],
      },
      {
        name: "Twilio",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/BkWMxp0K5ah_HT_thj8akpnWPjTs_LvQmETJQAZ0BsE-300x200.png",
        highlight: "$5,000 in credits",
        offers: [
          "Qualifying startups will receive US$5,000 in Twilio credits, education and support, plus access to the Twilio for Startups team.",
        ],
        eligibility: [
          "Were founded within the last 5 years.",
          "Raised less than $US 5 million.",
          "Other criteria.",
        ],
      },
      {
        name: "SendGrid",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/U1R-bPSGL0HpyzuDz8SVp8rSe3DPMPHnTB4jotjFnLw-300x169.jpg",
        highlight: "Free credits for startups",
        offers: [
          "To apply, have your active Twilio and/or SendGrid account details and head to the application link. To speed up the process, ensure you use the same company domain and email address so we can verify who you are. Please do not use Gmail etc. Your application will be processed within 5 business days.",
        ],
        eligibility: [
          "Were founded (or incorporated) within the last 5 years.",
          "Have raised less than $US 5 million.",
          "Are in a technology-based business.",
          "Have a working website and matching company email.",
          "Are Twilio and/or SendGrid account holders in good status.",
          "Have not previously received credits from Twilio or SendGrid.",
          "Must not be a consultancy or agency-based business.",
          "Have an average monthly spend of <$2k on Twilio or SendGrid and not have a pricing arrangement in place.",
        ],
      },
      {
        name: "Notion",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/xOL7C_yhPCN2i6BRI38OJHuAJ7k9WqWqSGk2o2C11bI-300x225.jpg",
        highlight: "Save up to $12,000",
        offers: [
          "For non-paying Notion customers with under 100 employees and are affiliated with one of our startup partners, you can get up to 6 months free on the Business plan with Notion AI included \u2013 save up to $12,000.",
          "Apply using Sunstone\u2019s unique link here: https://ntn.so/sunstonemanagementinc",
        ],
        note: "Please note: only applications submitted via this link will be processed.",
      },
      {
        name: "Microsoft For Startups",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/99CSb2cnh86AIsOXLcVUnoIpj7IEZpk2B-0iz7PLExc-300x127.png",
        highlight: "Up to $150K in Azure credits",
        offers: [
          "Infuse AI into your product with free OpenAI credits and up to $150k in Azure credits, GitHub, Microsoft 365, LinkedIn Premium, and more.",
          "Solve business and technical challenges quickly with unlimited 1:1 meetings with experts from Microsoft.",
        ],
      },
    ],
  },
  {
    title: "Cloud",
    icon: Cloud,
    accent: "bg-blue-500",
    accentLight: "bg-blue-50 text-blue-700 border-blue-200",
    perks: [
      {
        name: "Scaleway",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/IgDnAnTIhc5BhG8yRBRCnW-lkX0rieDwu-r8QCknV5w-300x151.png",
        highlight: "Up to \u20AC36K in credits",
        offers: [
          "Up to 36K\u20AC Cloud resource when admitted to the Startup Program \u2013 Dedicated Program Lead & experts.",
          "Visibility & awareness.",
          "Access to a global community & exclusive content.",
        ],
      },
      {
        name: "Cloudflare",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/6tZ6LSVM1TjMQtPO-4Gm2BXS-GB6GWj1akolwYKJE_w-300x200.png",
        highlight: "1 year free",
        offers: [
          "1 year of free Cloudflare included with various features.",
        ],
        eligibility: [
          "Not already on the startup plan.",
          "Raised less than $3M in venture capital.",
          "Currently in the accelerator program, or less than 1 year after graduation.",
        ],
      },
      {
        name: "IBM",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/G0INrXzLhEp_Cs3KA8lPzX1TG1K3fGZtkSDlV3lwzBI-300x300.jpg",
        highlight: "Up to $120,000 in credits",
        offers: [
          "Get up to $120,000 in IBM Cloud credits.",
        ],
        eligibility: [
          "Actively engaged in the development of a software-based product or service.",
          "Operate your own public website on your domain.",
        ],
      },
      {
        name: "Amazon Web Services",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/V59pT1wneni_9Ut2_JO-AZL8SbLCLmUZYeqqYbiDsyE-300x183.png",
        highlight: "$25,000 AWS credits",
        offers: [
          "$25,000 AWS credits for Sunstone startups.",
          "Organization ID (case-sensitive): Please reach out to our founder community team for the code.",
          "Startups can also check out this video that walks through how to apply for Activate and this video that outlines how to get the most out of the program.",
          "Application will be reviewed and approved by our staff.",
        ],
        note: "Activate FAQ: https://aws.amazon.com/activate/faq/ | Activate Contact form: https://aws.amazon.com/activate/contact-us/",
      },
      {
        name: "Google Cloud",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/b5rdddNeMOb2Pzhua9JhTvnPYM5h8Ww8cWwtCAzE8Kw-300x188.png",
        highlight: "Up to $350K for AI startups",
        offers: [
          "Get access to startup experts, your Google Cloud and Firebase costs covered up to $200,000 USD (up to $350,000 USD for AI startups) over 2 years, technical training, business support, and Google-wide offers.",
        ],
      },
    ],
  },
  {
    title: "Data",
    icon: BarChart3,
    accent: "bg-emerald-500",
    accentLight: "bg-emerald-50 text-emerald-700 border-emerald-200",
    perks: [
      {
        name: "Mixpanel",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/l2IvFr8X7sDfZbmAG6WeD9xLyB1K3Gnale0jq4nT0jw-300x113.png",
        highlight: "$50,000 in credits",
        offers: [
          "Eligible startups get $50,000 in credits towards the Mixpanel Growth plan for one year.",
        ],
        eligibility: [
          "Not currently a paying Mixpanel customer.",
          "Founded less than 5 years ago.",
          "Raised up to $8M in total funding.",
        ],
      },
      {
        name: "Segment",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/fIVUT1M6ZPaW3RubkJ7dJWlDzpbJbY757UGTeQPxg0k-300x225.jpg",
        highlight: "$50,000 in credits",
        offers: [
          "Qualifying companies $50,000 in Segment credits that last 1 year, an additional year of credits if you still qualify, then a year at a 50% discount, then 1 year at a 25% discount.",
          "Access to our dealbook of over $1M in other software deals.",
          "Expedited support, access to our webinars and content to help startups get analytics right.",
        ],
        eligibility: [
          "Raised less than $5M.",
          "Been founded less than 2 years ago. Companies that are outside of the US/CAN/UK are exempt from this as long as they have less than 20 employees and aren\u2019t on a sales contract already.",
        ],
      },
    ],
  },
  {
    title: "Marketing",
    icon: Megaphone,
    accent: "bg-rose-500",
    accentLight: "bg-rose-50 text-rose-700 border-rose-200",
    perks: [
      {
        name: "Customer.io",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/mhhZPpFNktouQvU2fFoqsOtGeQQZ7CauSraAkvzsQSI.png",
        highlight: "Free for 1 year",
        offers: [
          "Choose between Customer.io Startup Basic (Free for one year) or Customer.io Startup +Plus ($100 per month for one year).",
        ],
      },
      {
        name: "Intercom",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/Tfa9F33Gagg-YCLVMKEHeQkTOFLX2by8gagqElAC7eg-300x225.jpg",
        highlight: "95% off first year",
        offers: [
          "Receive a 95% discount on Intercom\u2019s AI-powered support platform for the 1st year, with subsequent discounts for the 2nd and 3rd years.",
        ],
        eligibility: [
          "Early stage (Up to $1M in funding and less than 2 years old).",
          "Small team (Fewer than 5 employees).",
          "New customer (Not currently an Intercom customer).",
        ],
      },
    ],
  },
  {
    title: "CRM",
    icon: Users,
    accent: "bg-amber-500",
    accentLight: "bg-amber-50 text-amber-700 border-amber-200",
    perks: [
      {
        name: "OpenPhone",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/5tntbh6c5OrkjNhdsARq9s3AckwrIi2OsgNOk9fKnSM-300x87.png",
        highlight: "20% off for 6 months",
        offers: [
          "20% off for the first 6 months of OpenPhone for Sunstone startups.",
        ],
      },
      {
        name: "HubSpot",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/ah62UbRkZMjgw4cTM5m2spRhTRyBSFJDKzxPLvSFcDE-300x300.png",
        highlight: "Up to 90% off",
        offers: [
          "Enjoy startup-friendly pricing up to 90% off.",
          "Startups using the HubSpot Growth Platform acquire and retain more customers with HubSpot\u2019s software, educational resources, and robust integrations.",
        ],
      },
    ],
  },
  {
    title: "Software",
    icon: Code2,
    accent: "bg-cyan-500",
    accentLight: "bg-cyan-50 text-cyan-700 border-cyan-200",
    perks: [
      {
        name: "NVIDIA Inception",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/MEEr7_mlWfpeqdXYKjGu79R5V2-A1NeeQOzs4WKJOUY-300x200.png",
        highlight: "Credits + preferred pricing",
        offers: [
          "Preferred pricing on select hardware and software products.",
          "Cloud credits through NVIDIA partners.",
          "Startup portal access for all members of your team.",
          "Free credits for self-paced courses through the NVIDIA Deep Learning Institute.",
          "Discounted technical workshops through the NVIDIA Deep Learning Institute.",
          "Unlimited access to the NVIDIA Developer Forums and more.",
        ],
      },
      {
        name: "Carta",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/pFfTe669KAcMxJ8y2P7yICOAW_rE83VcT6jXRrMlYJw-300x150.png",
        highlight: "Free Launch + 20% off",
        offers: [
          "All Sunstone Management founders can use the referral link to sign up for either free Carta Launch plan or one of paid plans with a 20% first year discount and 100% waived implementation fees.",
        ],
      },
      {
        name: "UCI AI Club",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2025/07/download-3.jpg",
        highlight: "Free AI/ML dev support",
        offers: [
          "Free AI/ML development support (no cost to startups).",
          "Project-based collaboration tailored to startups needs: Software development, Automation tools, Data analytics or intelligent systems.",
          "Flexible timelines based on scope: Small projects: 1 quarter (~10 weeks); Larger projects: 2\u20133 quarters (20\u201330 weeks).",
          "Mentorship and technical guidance from UCI\u2019s AI community.",
          "Opportunities to connect with emerging AI talent for future internships or hiring.",
        ],
        note: "How to Apply: Reach out with your project idea and goals. Email: aiclub@uci.edu",
      },
      {
        name: "bycoders_",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2025/07/images-2.png",
        highlight: "15\u201320% off dev services",
        offers: [
          "15\u201320% discount on development and design services for Sunstone startups.",
          "Exclusive MVP & Prototype Fast-Track Packages (includes AI-powered MVP generation and digital platform modeling).",
          "1 free UI/UX audit.",
          "1-hour free technical consultation.",
          "Access to on-demand experts and dedicated tech squads.",
        ],
      },
    ],
  },
  {
    title: "Insurance",
    icon: Shield,
    accent: "bg-indigo-500",
    accentLight: "bg-indigo-50 text-indigo-700 border-indigo-200",
    perks: [
      {
        name: "Vouch",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/mGrMrDI_KoUm-NaDDRksvHSRhnv9lZ7_roG0cPGc3pU-300x158.png",
        highlight: "Save 24% on average",
        offers: [
          "Vouch provides business insurance for startups where founders & finance teams can apply for 10+ lines of proprietary coverage, from General Liability, EPL, D&O, to Cyber policies, in under 10 minutes and save 24% on average on bundled coverages. Vouch has re-engineered insurance end-to-end to remove hidden fees and paperwork.",
        ],
      },
    ],
  },
  {
    title: "HR & Payroll",
    icon: CreditCard,
    accent: "bg-pink-500",
    accentLight: "bg-pink-50 text-pink-700 border-pink-200",
    perks: [
      {
        name: "Gusto",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/MrxdKpuI2mY2dEX6VdJ-14m-5kw1aY_v_Je_wc9W1WM-300x185.png",
        highlight: "6 months free",
        offers: [
          "6 months free Payroll Platform.",
        ],
      },
    ],
  },
  {
    title: "Customer Service",
    icon: Headphones,
    accent: "bg-teal-500",
    accentLight: "bg-teal-50 text-teal-700 border-teal-200",
    perks: [
      {
        name: "Zendesk",
        logo: "https://www.sunstoneinvestment.com/wp-content/uploads/2024/01/H-7Bt3wnjfp1TYwCJuzjHLlAcw142SmBrWEDsAKBK0g-300x142.png",
        highlight: "Free for 6 months",
        offers: [
          "Qualifying early-stage startups get Zendesk free for six months.",
        ],
      },
    ],
  },
]

function PerkCard({ perk, accentLight, accent }: { perk: Perk; accentLight: string; accent: string }) {
  const [imgError, setImgError] = React.useState(false)
  const perkId = perk.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")

  return (
    <div id={perkId} className="scroll-mt-24 group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/15 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/[0.03]">
      {/* Top accent stripe */}
      <div className={`h-1 w-full ${accent}`} />

      <div className="p-6">
        {/* Company header: logo + name + highlight badge */}
        <div className="mb-4 flex items-start gap-3">
          <div className="relative flex h-16 w-16 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-background">
            {!imgError ? (
              <Image
                src={perk.logo}
                alt={`${perk.name} logo`}
                width={56}
                height={56}
                className="object-contain"
                unoptimized
                onError={() => setImgError(true)}
              />
            ) : (
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg text-sm font-bold text-white ${accent}`}>
                {perk.name.charAt(0)}
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-bold text-foreground">
              {perk.name}
            </h3>
            {/* Deal highlight badge */}
            <div className={`mt-1 inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[11px] font-semibold ${accentLight}`}>
              <Gift className="h-3 w-3" />
              {perk.highlight}
            </div>
          </div>
        </div>

        {/* Offers */}
        <div className="mb-3">
          <p className={`mb-2 text-[10px] font-semibold uppercase tracking-wider ${accent.replace('bg-', 'text-')}`}>
            What you get
          </p>
          <ul className="space-y-1.5">
            {perk.offers.map((offer, i) => (
              <li key={i} className="flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${accent}`} />
                {offer}
              </li>
            ))}
          </ul>
        </div>

        {/* Eligibility */}
        {perk.eligibility && (
          <div className="mb-3 rounded-lg border border-border/60 bg-muted/40 px-3 py-2.5">
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Eligibility
            </p>
            <ul className="space-y-1">
              {perk.eligibility.map((req, i) => (
                <li key={i} className="flex items-start gap-2 text-[11px] leading-relaxed text-muted-foreground/80">
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground/30" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Note */}
        {perk.note && (
          <p className="mt-3 rounded-lg bg-secondary/60 px-3 py-2 text-[11px] leading-relaxed text-secondary-foreground/80 italic">
            {perk.note}
          </p>
        )}
      </div>

      {/* Hover accent bloom */}
      <div className={`absolute -bottom-4 -right-4 h-12 w-12 rounded-full ${accent} opacity-[0.04] transition-transform duration-700 group-hover:scale-[5]`} />
    </div>
  )
}

export function PerksContent() {
  const containerRef = useReveal()

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background" ref={containerRef}>
        {/* Header */}
        <header className="grain relative overflow-hidden px-6 pb-16 pt-32 sm:pt-36">
          <div className="relative mx-auto max-w-7xl">
            <p className="reveal mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
              Startup Perks
            </p>
            <h1 className="reveal font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Everything you need<br />
              <span className="italic text-primary">to build & scale.</span>
            </h1>
            <p className="reveal reveal-delay-1 mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {`$500K+ in exclusive perks from our partners. Cloud credits, dev tools, marketing platforms, and more \u2014 all free or heavily discounted for Sunstone portfolio companies.`}
            </p>

            {/* Quick jump nav */}
            <nav className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-2">
              {perkCategories.map((cat) => (
                <a
                  key={cat.title}
                  href={`#${cat.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:border-primary/30 hover:text-foreground hover:shadow-sm"
                >
                  <cat.icon className="h-3.5 w-3.5" />
                  {cat.title}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Perk categories */}
        <div className="px-6 pb-28">
          <div className="mx-auto max-w-7xl">
            {perkCategories.map((category) => (
              <section
                key={category.title}
                id={category.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="reveal mb-20 scroll-mt-8"
              >
                {/* Category header */}
                <div className="mb-8 flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg text-white ${category.accent}`}>
                    <category.icon className="h-4 w-4" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    {category.title}
                  </h2>
                  <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                    {category.perks.length} {category.perks.length === 1 ? "perk" : "perks"}
                  </span>
                </div>

                {/* Perk cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.perks.map((perk) => (
                    <PerkCard
                      key={perk.name}
                      perk={perk}
                      accentLight={category.accentLight}
                      accent={category.accent}
                    />
                  ))}
                </div>
              </section>
            ))}

            {/* Disclaimer */}
            <div className="reveal mt-8 rounded-2xl border border-border bg-muted/30 p-6 lg:p-8">
              <h3 className="font-display text-sm font-bold text-foreground mb-3">Disclaimer</h3>
              <ul className="space-y-2">
                <li className="text-xs leading-relaxed text-muted-foreground">
                  Sunstone Management and its affiliates do not receive any direct benefits, compensation, or soft dollar benefits from the entities listed on this page.
                </li>
                <li className="text-xs leading-relaxed text-muted-foreground">
                  The inclusion of resources is solely based on their merit and relevance to the business startup community. Prior to posting a resource, Sunstone employs a diligent evaluation process, considering factors such as relevance, credibility, and potential value to startups. Information related to value, price, rates and terms are subject to change. Although the information is periodically updated, Sunstone does not make any representation as to the information provided. Founders should verify the respective information directly with the resource firm.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
