import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Radiology Billing Services | Thermite Global Solutions",
  description: "Expert radiology billing for diagnostic imaging, interventional procedures and teleradiology groups.",
}

const serviceData = {
  iconName: "BarChart2",
  title: "Radiology Billing",
  subtitle: "Imaging & Diagnostic Billing",
  description: "High-volume radiology billing demands speed, accuracy and deep knowledge of technical and professional component billing. Our radiology team delivers both.",
  image: "/images/specialty-radiology.jpg",
  benefits: [
    { title: "TC & PC Component Billing", description: "Correct application of modifier 26 and TC for professional and technical component billing." },
    { title: "High-Volume Processing", description: "Built for radiology volume — thousands of claims processed daily with consistent accuracy." },
    { title: "Teleradiology Expertise", description: "Specialised billing for teleradiology groups including multi-state licensure and payer enrollment." },
    { title: "Modality-Specific Coding", description: "Expert coding across all imaging modalities — MRI, CT, PET, ultrasound, X-ray and fluoroscopy." },
  ],
  features: [
    "Diagnostic imaging coding",
    "Interventional radiology billing",
    "Modifier 26 and TC billing",
    "MRI and CT coding",
    "PET scan billing",
    "Ultrasound procedure coding",
    "Nuclear medicine billing",
    "Mammography billing",
    "Fluoroscopy coding",
    "Teleradiology billing",
    "PACS integration support",
    "Radiology-specific denial management",
  ],
  process: [
    { step: "1", title: "Image & Report Review", description: "Radiology reports reviewed for complete procedure and diagnosis documentation." },
    { step: "2", title: "Modality Coding", description: "CPT codes assigned by modality with correct component modifiers applied." },
    { step: "3", title: "Batch Claim Submission", description: "High-volume claims batched and submitted electronically with same-day turnaround." },
    { step: "4", title: "Payment & Denial Management", description: "ERA processing and denial follow-up handled for all payers and modalities." },
  ],
  stats: [
    { value: "99%", label: "Coding Accuracy" },
    { value: "24h", label: "Claim Turnaround" },
    { value: "5000+", label: "Claims/Day Capacity" },
    { value: "97%", label: "First-Pass Rate" },
  ],
}

export default function RadiologyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
