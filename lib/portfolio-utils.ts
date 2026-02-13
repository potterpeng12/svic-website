import portfolioData from "@/data/portfolio-data.json"

export interface PortfolioCompany {
  company_name: string
  logo: string | null
  website: string | null
  primary_industry_sector: string | null
}

export interface DisplayCompany {
  name: string
  abbr: string
  category: string
  logo: string | null
  website: string | null
  color: string
}

// Color palette for gradient backgrounds
const colorPalette = [
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-blue-500 to-indigo-600",
  "from-amber-500 to-orange-600",
  "from-rose-500 to-pink-600",
  "from-cyan-500 to-blue-600",
  "from-violet-500 to-indigo-600",
  "from-slate-500 to-gray-700",
  "from-red-500 to-rose-600",
  "from-teal-500 to-emerald-600",
  "from-lime-500 to-green-600",
  "from-purple-500 to-violet-600",
  "from-yellow-500 to-amber-600",
  "from-indigo-500 to-blue-600",
  "from-pink-500 to-rose-600",
  "from-sky-500 to-cyan-600",
]

// Generate abbreviation from company name
function generateAbbr(name: string): string {
  // Remove common company suffixes
  const cleanName = name
    .replace(/,?\s+(Inc\.?|LLC|Corp\.?|Corporation|Ltd\.?|Limited|Technologies|Technology|Tech)$/gi, "")
    .trim()

  // Try to get initials from words
  const words = cleanName.split(/\s+/)
  if (words.length >= 2) {
    return words
      .slice(0, 3)
      .map(w => w[0])
      .join("")
      .toUpperCase()
  }

  // If single word, take first 2-3 letters
  return cleanName.substring(0, Math.min(3, cleanName.length)).toUpperCase()
}

// Simplify category names
function simplifyCategory(category: string | null): string {
  if (!category) return "Technology"

  const categoryMap: Record<string, string> = {
    "Information Technology": "Tech",
    "Consumer Products and Services (B2C)": "Consumer",
    "Business Products and Services (B2B)": "B2B",
    "Financial Services": "Fintech",
    "Healthcare": "HealthTech",
    "Energy": "CleanTech",
  }

  return categoryMap[category] || category
}

// Transform raw portfolio data to display format
export function transformPortfolioData(data: PortfolioCompany[]): DisplayCompany[] {
  // Filter out invalid entries
  const validCompanies = data.filter(
    company =>
      company.company_name &&
      company.company_name.trim() !== "" &&
      !company.company_name.match(/^\d+\s+(companies|company)$/i) && // Filter out entries like "70 companies"
      company.company_name !== "Privacy Policy"
  )

  return validCompanies.map((company, index) => ({
    name: company.company_name,
    abbr: generateAbbr(company.company_name),
    category: simplifyCategory(company.primary_industry_sector),
    logo: company.logo,
    website: company.website,
    color: colorPalette[index % colorPalette.length],
  }))
}

// Get all portfolio companies
export function getPortfolioCompanies(): DisplayCompany[] {
  return transformPortfolioData(portfolioData as PortfolioCompany[])
}

// Get count of valid companies
export function getCompanyCount(): number {
  return getPortfolioCompanies().length
}
