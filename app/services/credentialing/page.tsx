import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Provider Credentialing Services | Thermite Global Solutions",
  description: "Complete provider enrollment and credentialing services to get your providers in-network faster and keep their credentials current.",
}

const serviceData = {
  iconName: "Users",
  title: "Provider Credentialing",
  subtitle: "Provider Enrollment Services",
  description: "We manage the complete credentialing and enrollment process for your providers — from initial applications to re-credentialing — so they can start billing without delays.",
  image: "/images/service-billing.jpg",
  benefits: [
    { title: "Faster Enrollment", description: "Dedicated credentialing specialists who know payer requirements get providers enrolled faster." },
    { title: "No Revenue Gaps", description: "Proactive re-credentialing management ensures providers never lapse, eliminating billing gaps." },
    { title: "Reduced Administrative Load", description: "We handle the paperwork, follow-up and payer communication so your team doesn't have to." },
    { title: "Multi-Payer Expertise", description: "From Medicare and Medicaid to commercial payers, we manage credentials across all plan types." },
  ],
  features: [
    "Initial provider enrollment",
    "Medicare and Medicaid enrollment",
    "Commercial payer credentialing",
    "CAQH profile setup and maintenance",
    "Group and individual enrollment",
    "Re-credentialing management",
    "Credentialing status tracking",
    "NPI registration and maintenance",
    "Hospital privileges coordination",
    "Payer contract review",
    "Effective date follow-up",
    "Credentialing database management",
  ],
  process: [
    { step: "1", title: "Provider Intake", description: "Collect all provider documents, licenses, certifications and work history." },
    { step: "2", title: "Application Submission", description: "Complete and submit enrollment applications to all required payers simultaneously." },
    { step: "3", title: "Follow-up & Tracking", description: "Regular payer follow-up to track status and respond to any additional information requests." },
    { step: "4", title: "Approval & Maintenance", description: "Confirm effective dates, update billing systems and schedule proactive re-credentialing." },
  ],
  stats: [
    { value: "90d", label: "Avg Enrollment Time" },
    { value: "100+", label: "Payer Relationships" },
    { value: "98%", label: "Approval Rate" },
    { value: "0", label: "Lapsed Credentials" },
  ],
}

export default function CredentialingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
