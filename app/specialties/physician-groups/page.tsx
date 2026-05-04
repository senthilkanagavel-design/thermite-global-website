import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Physician Group Billing Services | Thermite Global Solutions",
  description: "Comprehensive billing solutions for multi-specialty physician groups — scalable, consistent and built for growth.",
}

const serviceData = {
  iconName: "Users",
  title: "Physician Group Billing",
  subtitle: "Multi-Specialty Practices",
  description: "Multi-specialty physician groups need a billing partner who can handle diverse specialties under one roof with consistent quality. That's exactly what we deliver.",
  image: "/images/about-team.jpg",
  benefits: [
    { title: "Multi-Specialty Expertise", description: "One team handling billing across all your specialties — primary care, surgery, diagnostics and more." },
    { title: "Scalable Operations", description: "Whether you have 5 providers or 500, our operations scale with your group seamlessly." },
    { title: "Standardised Processes", description: "Consistent billing workflows across all locations and specialties for predictable results." },
    { title: "Group-Level Reporting", description: "Practice-wide financial dashboards giving leadership visibility across every provider and location." },
  ],
  features: [
    "Multi-specialty billing",
    "Provider-level performance tracking",
    "Multi-location billing management",
    "Group NPI and individual NPI billing",
    "Incident-to billing compliance",
    "Shared visit and split billing",
    "Locum tenens billing",
    "Credentialing coordination",
    "Payer contract management",
    "Group-level denial analytics",
    "Physician productivity reporting",
    "Revenue cycle consulting",
  ],
  process: [
    { step: "1", title: "Group Assessment", description: "Comprehensive review of your group's current billing workflows, payer mix and denial patterns." },
    { step: "2", title: "Onboarding & Setup", description: "All providers enrolled, payer credentials verified and billing workflows configured." },
    { step: "3", title: "Billing Operations", description: "Day-to-day billing managed across all specialties with consistent quality standards." },
    { step: "4", title: "Reporting & Optimisation", description: "Monthly performance reviews with actionable insights to continually improve collections." },
  ],
  stats: [
    { value: "500+", label: "Physician Groups Served" },
    { value: "40%", label: "Revenue Improvement" },
    { value: "98%", label: "Clean Claim Rate" },
    { value: "30d", label: "Onboarding Time" },
  ],
}

export default function PhysicianGroupsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
