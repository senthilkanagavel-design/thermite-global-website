import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "AR Recovery Services | Thermite Global Solutions",
  description: "Aggressive accounts receivable management to recover aged claims and improve your bottom line. Expert denial appeals and collection services.",
}

const serviceData = {
  iconName: "TrendingUp",
  title: "AR Recovery",
  subtitle: "Accounts Receivable Management",
  description: "Our aggressive AR recovery services maximize collections on aged claims and improve your overall financial performance. We specialize in recovering revenue that other billing companies leave on the table.",
  image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=800&q=80",
  benefits: [
    {
      title: "Recover Lost Revenue",
      description: "We specialize in collecting on aged claims that have been written off or abandoned, recovering significant revenue.",
    },
    {
      title: "Reduce Days in AR",
      description: "Proactive follow-up processes reduce your average days in AR by 30-40%.",
    },
    {
      title: "Expert Denial Appeals",
      description: "Our appeals specialists have a 70%+ success rate on overturned denials.",
    },
    {
      title: "Improved Cash Position",
      description: "Faster collections and recovered revenue improve your overall cash position and financial stability.",
    },
  ],
  features: [
    "Aged AR analysis and prioritization",
    "Insurance follow-up and collections",
    "Denial root cause analysis",
    "Appeal preparation and submission",
    "Underpayment identification",
    "Payer contract compliance review",
    "Patient collections",
    "Bad debt prevention strategies",
    "Payment plan management",
    "Collection agency coordination",
    "Weekly AR aging reports",
    "Performance trending analysis",
  ],
  process: [
    {
      step: "1",
      title: "AR Analysis",
      description: "Comprehensive analysis of your aged AR to identify recovery opportunities and prioritize efforts.",
    },
    {
      step: "2",
      title: "Recovery Strategy",
      description: "Customized recovery plan based on payer mix, denial patterns, and claim aging.",
    },
    {
      step: "3",
      title: "Aggressive Follow-up",
      description: "Systematic follow-up with payers and patients using proven collection techniques.",
    },
    {
      step: "4",
      title: "Continuous Improvement",
      description: "Feedback loop to prevent future AR issues and maintain healthy receivables.",
    },
  ],
  stats: [
    { value: "40%", label: "AR Reduction" },
    { value: "70%", label: "Appeal Success Rate" },
    { value: "28", label: "Avg Days in AR" },
    { value: "$2.5B+", label: "Revenue Collected" },
  ],
}

export default function ARRecoveryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
