import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"
import { FileCode2 } from "lucide-react"

export const metadata = {
  title: "Medical Coding Services | Thermite Global Solutions",
  description: "Expert ICD-10, CPT, and HCPCS coding services with 99% accuracy rate. Certified coders for all medical specialties.",
}

const serviceData = {
  icon: FileCode2,
  title: "Medical Coding",
  subtitle: "Expert Coding Services",
  description: "Our team of certified coders delivers accurate, compliant coding across all specialties. We maximize your reimbursement while ensuring full compliance with payer requirements and regulatory guidelines.",
  image: "/images/service-coding.jpg",
  benefits: [
    {
      title: "99% Coding Accuracy",
      description: "Our multi-level quality assurance process ensures the highest accuracy rates in the industry.",
    },
    {
      title: "Faster Turnaround",
      description: "24-48 hour turnaround times for most coding projects without sacrificing quality.",
    },
    {
      title: "Reduced Denials",
      description: "Proper code selection and documentation review significantly reduce coding-related denials.",
    },
    {
      title: "Certified Expertise",
      description: "All coders are CPC, CCS, or specialty-certified with ongoing education and training.",
    },
  ],
  features: [
    "ICD-10-CM diagnosis coding",
    "ICD-10-PCS procedure coding",
    "CPT procedure coding",
    "HCPCS Level II coding",
    "E/M level optimization",
    "Modifier selection and validation",
    "Specialty-specific coding expertise",
    "Coding compliance audits",
    "HCC and risk adjustment coding",
    "Documentation improvement feedback",
    "Coding education and training",
    "Retrospective chart review",
  ],
  process: [
    {
      step: "1",
      title: "Chart Review",
      description: "Complete review of medical documentation to capture all billable services and diagnoses.",
    },
    {
      step: "2",
      title: "Code Assignment",
      description: "Selection of appropriate ICD-10, CPT, and HCPCS codes based on documentation.",
    },
    {
      step: "3",
      title: "Quality Review",
      description: "Multi-level QA process to verify accuracy and compliance before submission.",
    },
    {
      step: "4",
      title: "Feedback Loop",
      description: "Documentation improvement recommendations to optimize future coding and reimbursement.",
    },
  ],
  stats: [
    { value: "99%", label: "Coding Accuracy" },
    { value: "24-48h", label: "Turnaround Time" },
    { value: "100%", label: "Certified Coders" },
    { value: "50+", label: "Specialties Covered" },
  ],
}

export default function CodingServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
