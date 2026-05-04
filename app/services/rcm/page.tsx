import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"
import { CreditCard } from "lucide-react"

export const metadata = {
  title: "Complete RCM Solutions | Thermite Global Solutions",
  description: "End-to-end revenue cycle management from patient scheduling to final payment collection. Maximize your collections with our comprehensive RCM services.",
}

const serviceData = {
  icon: CreditCard,
  title: "Complete RCM Solutions",
  subtitle: "End-to-End Revenue Cycle Management",
  description: "Our comprehensive revenue cycle management services handle every aspect of your billing operations, from patient registration to final payment collection. We integrate seamlessly with your practice to maximize collections and minimize administrative burden.",
  image: "/images/service-rcm.jpg",
  benefits: [
    {
      title: "Increased Collections",
      description: "Average 15-25% increase in net collections within the first year through optimized billing processes and aggressive AR follow-up.",
    },
    {
      title: "Reduced Days in AR",
      description: "Decrease your average days in AR by 30-40% with our efficient claims submission and payment posting processes.",
    },
    {
      title: "Lower Denial Rates",
      description: "Achieve clean claim rates of 98%+ through front-end eligibility verification and coding accuracy.",
    },
    {
      title: "Complete Transparency",
      description: "24/7 access to real-time dashboards and reports showing your financial performance and operational metrics.",
    },
  ],
  features: [
    "Patient registration and scheduling integration",
    "Real-time insurance eligibility verification",
    "Charge capture and review",
    "Expert medical coding (ICD-10, CPT, HCPCS)",
    "Clean claim submission with automated scrubbing",
    "Electronic and paper claim processing",
    "ERA/EOB processing and payment posting",
    "Patient statement generation and mailing",
    "Insurance and patient AR follow-up",
    "Denial management and appeals",
    "Credit balance identification and resolution",
    "Comprehensive financial reporting",
  ],
  process: [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your current revenue cycle to identify opportunities for improvement and create a customized implementation plan.",
    },
    {
      step: "2",
      title: "Implementation",
      description: "Our team integrates with your EHR/PM system and trains your staff on new workflows. Go-live typically within 30-45 days.",
    },
    {
      step: "3",
      title: "Optimization",
      description: "We continuously monitor performance and implement improvements to maximize your revenue and efficiency.",
    },
    {
      step: "4",
      title: "Ongoing Partnership",
      description: "Regular account reviews, performance reporting, and strategic recommendations to drive continuous improvement.",
    },
  ],
  stats: [
    { value: "98%", label: "Clean Claim Rate" },
    { value: "28", label: "Average Days in AR" },
    { value: "99.5%", label: "Coding Accuracy" },
    { value: "24/7", label: "Support Available" },
  ],
}

export default function RCMServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
