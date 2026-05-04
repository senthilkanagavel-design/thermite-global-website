import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Hospital Billing Services | Thermite Global Solutions",
  description: "Complete inpatient and outpatient hospital billing services including facility coding, DRG management and UB-04 claim submission.",
}

const serviceData = {
  iconName: "FileText",
  title: "Hospital Billing",
  subtitle: "Inpatient & Outpatient Billing",
  description: "Hospital billing spans inpatient DRG coding, outpatient APCs, facility fee billing and complex payer contracting. Our hospital billing specialists handle it all.",
  image: "/images/specialty-urgent-care.jpg",
  benefits: [
    { title: "DRG Optimisation", description: "Clinical documentation reviewed to ensure the most accurate and appropriate DRG assignment every case." },
    { title: "UB-04 Expertise", description: "Complete UB-04 claim preparation with correct revenue codes, condition codes and value codes." },
    { title: "Outpatient APC Billing", description: "Accurate APC grouping for all outpatient hospital services including ED, observation and surgery." },
    { title: "CDI Collaboration", description: "We work directly with your CDI team to close documentation gaps before coding is finalised." },
  ],
  features: [
    "Inpatient DRG coding",
    "Outpatient APC billing",
    "UB-04 claim preparation",
    "Revenue code assignment",
    "Condition and value code coding",
    "Emergency department billing",
    "Observation billing",
    "Outpatient surgery billing",
    "Chargemaster review support",
    "Medicare cost report support",
    "Hospital denial management",
    "RAC audit support",
  ],
  process: [
    { step: "1", title: "Clinical Doc Review", description: "Inpatient records reviewed for CC/MCC capture and DRG optimisation opportunities." },
    { step: "2", title: "Facility Coding", description: "ICD-10-PCS and CPT codes assigned for facility billing with correct revenue codes." },
    { step: "3", title: "UB-04 Submission", description: "Clean UB-04 claims submitted electronically with all required fields completed." },
    { step: "4", title: "AR & Appeals", description: "Hospital AR worked proactively with facility-specific denial appeal expertise." },
  ],
  stats: [
    { value: "97%", label: "DRG Accuracy" },
    { value: "45%", label: "Denial Reduction" },
    { value: "98%", label: "Clean Claim Rate" },
    { value: "25d", label: "AR Days Average" },
  ],
}

export default function HospitalPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
