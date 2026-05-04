import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Anesthesiology Billing Services | Thermite Global Solutions",
  description: "Specialised anesthesia billing with accurate base unit and time unit calculations, CRNA billing and medical direction coding.",
}

const serviceData = {
  iconName: "ShieldCheck",
  title: "Anesthesiology Billing",
  subtitle: "Anesthesia Billing Expertise",
  description: "Anesthesia billing is unique — base units, time units, qualifying circumstances and medical direction rules require specialists who know the nuances. We do.",
  image: "/images/specialty-anesthesiology.jpg",
  benefits: [
    { title: "Accurate Unit Calculation", description: "Precise base unit and time unit calculations for every anesthesia case, every time." },
    { title: "Medical Direction Coding", description: "Correct application of AA, QK, QX, QY and QZ modifiers for all supervision scenarios." },
    { title: "CRNA Billing Expertise", description: "Specialised billing for CRNAs under medical direction and independent practice." },
    { title: "Concurrent Case Management", description: "Proper handling of concurrent case rules to maximise reimbursement and stay compliant." },
  ],
  features: [
    "Base unit and time unit calculation",
    "Medical direction modifier coding",
    "CRNA and AA billing",
    "Qualifying circumstance coding",
    "Concurrent case management",
    "Pain management billing",
    "Obstetric anesthesia coding",
    "Paediatric anesthesia billing",
    "ASC and hospital billing",
    "Payer-specific anesthesia rules",
    "Pre-auth for pain procedures",
    "Anesthesia denial management",
  ],
  process: [
    { step: "1", title: "Case Documentation Review", description: "Anesthesia records reviewed for start/stop times, provider roles and qualifying circumstances." },
    { step: "2", title: "Unit Calculation & Coding", description: "Base units, time units and modifiers assigned with payer-specific rules applied." },
    { step: "3", title: "Claim Submission", description: "Claims submitted with complete anesthesia documentation and correct billing provider." },
    { step: "4", title: "Payment Reconciliation", description: "Anesthesia payments reconciled against contracted rates with underpayment follow-up." },
  ],
  stats: [
    { value: "99%", label: "Unit Calculation Accuracy" },
    { value: "25%", label: "Revenue Improvement" },
    { value: "98%", label: "Clean Claim Rate" },
    { value: "15+", label: "Years Anesthesia Billing" },
  ],
}

export default function AnesthesiologyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
