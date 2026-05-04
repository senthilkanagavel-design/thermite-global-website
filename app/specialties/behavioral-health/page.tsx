import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Behavioral Health Billing Services | Thermite Global Solutions",
  description: "Sensitive, accurate billing for mental health and substance use disorder services — therapy, psychiatry, medication management and telehealth.",
}

const serviceData = {
  iconName: "Users",
  title: "Behavioral Health Billing",
  subtitle: "Mental Health Services",
  description: "Behavioral health billing requires sensitivity, accuracy and deep knowledge of mental health parity laws, telehealth rules and substance use disorder billing requirements.",
  image: "/images/specialty-behavioral.jpg",
  benefits: [
    { title: "Mental Health Parity Compliance", description: "Billing practices aligned with mental health parity laws to protect your patients and your practice." },
    { title: "Telehealth Billing Expertise", description: "Up-to-date telehealth billing for therapy and psychiatry across all payers and platforms." },
    { title: "SUD Billing Specialisation", description: "Substance use disorder billing including ASAM levels, MAT and residential treatment." },
    { title: "Credentialing Support", description: "Provider credentialing for therapists, psychologists, psychiatrists and counsellors." },
  ],
  features: [
    "Psychotherapy billing (90837, 90834)",
    "Psychiatric evaluation coding",
    "Medication management billing",
    "Telehealth therapy billing",
    "Group therapy billing",
    "Substance use disorder coding",
    "ASAM level of care billing",
    "MAT and detox billing",
    "Residential treatment billing",
    "Mental health parity compliance",
    "HIPAA-compliant processes",
    "Behavioural health denial management",
  ],
  process: [
    { step: "1", title: "Provider Credentialing", description: "All behavioural health providers enrolled with payers and credentials verified." },
    { step: "2", title: "Session Documentation Review", description: "Clinical notes reviewed for correct service level, duration and diagnosis coding." },
    { step: "3", title: "Claim Submission", description: "Claims submitted with correct place of service and telehealth modifiers as required." },
    { step: "4", title: "Parity & Denial Management", description: "Denials appealed with mental health parity arguments when payers apply discriminatory limits." },
  ],
  stats: [
    { value: "99%", label: "HIPAA Compliance" },
    { value: "95%", label: "Telehealth Approval Rate" },
    { value: "40%", label: "Denial Reduction" },
    { value: "98%", label: "Clean Claim Rate" },
  ],
}

export default function BehavioralHealthPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
