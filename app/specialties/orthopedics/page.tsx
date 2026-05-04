import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Orthopedics Billing Services | Thermite Global Solutions",
  description: "Specialised orthopedic billing and coding for surgical and non-surgical musculoskeletal services, implants and global periods.",
}

const serviceData = {
  iconName: "Settings",
  title: "Orthopedics Billing",
  subtitle: "Musculoskeletal Services",
  description: "Orthopedic billing requires precise knowledge of surgical procedures, implant billing and global periods. Our specialists ensure every procedure is coded and billed correctly the first time.",
  image: "/images/specialty-orthopedics.jpg",
  benefits: [
    { title: "Surgical Procedure Expertise", description: "Complex ortho procedures — joint replacements, arthroscopies, fracture care — coded with precision." },
    { title: "Implant & Hardware Billing", description: "Accurate billing for implants, plates, screws and ortho hardware with proper cost pass-through." },
    { title: "Global Period Management", description: "All post-operative visits tracked and correctly coded within global periods to prevent denials." },
    { title: "Workers Comp Expertise", description: "Specialised handling of workers compensation claims common in orthopedic practices." },
  ],
  features: [
    "Joint replacement billing",
    "Arthroscopy procedure coding",
    "Fracture and trauma coding",
    "Spinal surgery billing",
    "Implant and hardware billing",
    "Global period tracking",
    "Workers compensation billing",
    "Physical therapy integration",
    "ASC and hospital billing",
    "Modifier usage and management",
    "Pre-auth management for surgeries",
    "Ortho-specific denial appeals",
  ],
  process: [
    { step: "1", title: "Operative Report Review", description: "Surgical notes reviewed in detail to capture every billable procedure and supply." },
    { step: "2", title: "Procedure Coding", description: "CPT and ICD-10 codes assigned with correct modifiers and implant charges." },
    { step: "3", title: "Claim Submission", description: "Claims submitted with payer-specific requirements and implant documentation attached." },
    { step: "4", title: "Global Period Tracking", description: "Post-op follow-up visits monitored and correctly billed throughout the global period." },
  ],
  stats: [
    { value: "98%", label: "Coding Accuracy" },
    { value: "40%", label: "Fewer Implant Denials" },
    { value: "100%", label: "Global Period Tracked" },
    { value: "30d", label: "AR Days Average" },
  ],
}

export default function OrthopedicsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
