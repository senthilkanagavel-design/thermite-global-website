import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Benefits Verification Services | Thermite Global Solutions",
  description: "Comprehensive benefits verification to confirm coverage details, patient responsibility and authorisation requirements before every visit.",
}

const serviceData = {
  iconName: "ShieldCheck",
  title: "Benefits Verification",
  subtitle: "Complete Benefits Analysis",
  description: "We perform a thorough benefits analysis for every patient before their appointment — confirming coverage, co-pays, deductibles and authorisation requirements so your team is always prepared.",
  image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80",
  benefits: [
    { title: "No Coverage Surprises", description: "Every benefit detail confirmed before the visit — deductibles, co-insurance, exclusions and plan limits." },
    { title: "Improved Patient Experience", description: "Patients know their financial responsibility upfront, reducing billing disputes and improving satisfaction." },
    { title: "Fewer Claim Denials", description: "Identifying non-covered services before treatment prevents denials that are impossible to recover." },
    { title: "Streamlined Front Desk", description: "Verified benefits delivered to your team before the patient arrives, reducing check-in delays." },
  ],
  features: [
    "Detailed benefits breakdown",
    "Deductible and co-insurance verification",
    "Co-pay confirmation by service type",
    "Out-of-pocket maximum tracking",
    "Covered and non-covered service identification",
    "Plan limitation and exclusion review",
    "In-network vs out-of-network confirmation",
    "Secondary insurance coordination",
    "Medicare supplement verification",
    "Pre-authorisation requirement identification",
    "Referral requirement confirmation",
    "Patient responsibility estimation",
  ],
  process: [
    { step: "1", title: "Patient Scheduling", description: "Insurance and demographic information captured at time of scheduling." },
    { step: "2", title: "Benefits Verification", description: "Detailed benefits check performed with the payer via EDI or direct portal access." },
    { step: "3", title: "Analysis & Documentation", description: "Coverage details documented in a clear format for front desk and billing team." },
    { step: "4", title: "Patient Communication", description: "Patient notified of their estimated responsibility prior to the appointment." },
  ],
  stats: [
    { value: "100%", label: "Pre-Visit Verification" },
    { value: "60%", label: "Fewer Billing Disputes" },
    { value: "48h", label: "Advance Notice" },
    { value: "99%", label: "Accuracy Rate" },
  ],
}

export default function BenefitsVerificationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
