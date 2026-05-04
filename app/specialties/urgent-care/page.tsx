import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Urgent Care Billing Services | Thermite Global Solutions",
  description: "Fast, accurate urgent care billing built for high-volume walk-in clinics — same-day charge entry, rapid claim submission and strong AR management.",
}

const serviceData = {
  iconName: "TrendingUp",
  title: "Urgent Care Billing",
  subtitle: "Fast-Paced Clinic Billing",
  description: "Urgent care billing demands speed and accuracy. Same-day charge entry, rapid claim submission and aggressive AR follow-up keep your cash flow strong.",
  image: "/images/specialty-urgent-care.jpg",
  benefits: [
    { title: "Same-Day Charge Entry", description: "Charges entered and claims submitted the same day as the visit to accelerate cash flow." },
    { title: "Level of Service Expertise", description: "Correct E&M level assignment for urgent care visits to prevent undercoding and overcoding." },
    { title: "High-Volume Capability", description: "Built for urgent care volume — hundreds of visits per day processed accurately and on time." },
    { title: "Occupational Health Billing", description: "Workers comp and occupational health billing handled alongside standard urgent care claims." },
  ],
  features: [
    "Same-day charge entry",
    "E&M level of service coding",
    "Urgent care facility fee billing",
    "Workers compensation billing",
    "Occupational health billing",
    "Drug screen and lab billing",
    "X-ray and imaging billing",
    "Procedure and supply billing",
    "Multi-location billing",
    "Real-time eligibility verification",
    "Patient responsibility collection",
    "Urgent care denial management",
  ],
  process: [
    { step: "1", title: "Same-Day Charge Entry", description: "Visit documentation reviewed and charges entered the same day to avoid delays." },
    { step: "2", title: "E&M Coding", description: "Level of service assigned based on medical decision making and clinical documentation." },
    { step: "3", title: "Rapid Claim Submission", description: "Clean claims submitted electronically within 24 hours of the visit." },
    { step: "4", title: "Collections & AR", description: "Patient balances collected and insurance AR worked proactively to minimise aging." },
  ],
  stats: [
    { value: "Same Day", label: "Charge Entry" },
    { value: "24h", label: "Claim Submission" },
    { value: "97%", label: "Clean Claim Rate" },
    { value: "20d", label: "AR Days Average" },
  ],
}

export default function UrgentCarePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
