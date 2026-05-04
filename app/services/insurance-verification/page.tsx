import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Insurance Verification Services | Thermite Global Solutions",
  description: "Real-time insurance eligibility verification and benefits analysis to prevent claim denials and ensure accurate patient responsibility estimates.",
}

const serviceData = {
  iconName: "ShieldCheck",
  title: "Insurance Verification",
  subtitle: "Real-Time Eligibility Checks",
  description: "We verify patient insurance coverage and benefits before the appointment, eliminating eligibility-related denials and ensuring your team has accurate information at the point of care.",
  image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80",
  benefits: [
    { title: "Eliminate Eligibility Denials", description: "Real-time verification before every encounter catches coverage issues before they become denials." },
    { title: "Accurate Patient Estimates", description: "Know patient responsibility upfront — deductibles, co-pays and out-of-pocket balances verified at the source." },
    { title: "Faster Collections", description: "Patients informed of their liability before the visit means faster payment and fewer surprises at billing." },
    { title: "Reduced Rework", description: "Preventing eligibility errors upstream eliminates downstream rework, resubmissions and write-offs." },
  ],
  features: [
    "Real-time eligibility verification",
    "Benefits breakdown by service type",
    "Deductible and co-pay confirmation",
    "Out-of-pocket maximum tracking",
    "Primary and secondary payer verification",
    "Medicare and Medicaid eligibility checks",
    "Pre-authorization requirement identification",
    "Coverage termination alerts",
    "Batch eligibility processing",
    "Patient responsibility estimation",
    "EDI 270/271 transaction handling",
    "Verification audit trail",
  ],
  process: [
    { step: "1", title: "Appointment Scheduling", description: "Patient demographics and insurance information collected at scheduling." },
    { step: "2", title: "Eligibility Check", description: "Real-time verification submitted to payer via EDI 270/271 transactions." },
    { step: "3", title: "Benefits Analysis", description: "Coverage details reviewed and documented including co-pays, deductibles and exclusions." },
    { step: "4", title: "Team Notification", description: "Verification results shared with front desk and clinical team before the appointment." },
  ],
  stats: [
    { value: "99%", label: "Verification Accuracy" },
    { value: "<2h", label: "Turnaround Time" },
    { value: "70%", label: "Denial Reduction" },
    { value: "24/7", label: "Real-Time Access" },
  ],
}

export default function InsuranceVerificationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
