import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Denial Management Services | Thermite Global Solutions",
  description: "Expert denial management and appeals to recover lost revenue, reduce denial rates and prevent future claim rejections.",
}

const serviceData = {
  iconName: "BarChart2",
  title: "Denial Management",
  subtitle: "Recover Every Dollar You've Earned",
  description: "We identify, appeal and resolve denied claims while addressing the root causes that created them — stopping the same denials from recurring month after month.",
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
  benefits: [
    { title: "Higher Recovery Rate", description: "Experienced appeal specialists recover revenue from denials that most practices write off as lost." },
    { title: "Root Cause Resolution", description: "We don't just fix denials — we identify why they happened and fix the upstream process." },
    { title: "Reduced Denial Volume", description: "Ongoing denial trending and payer-specific analysis drives a measurable reduction in denial rates over time." },
    { title: "Faster Appeal Turnaround", description: "Appeals submitted promptly and with the right clinical documentation maximise reversal rates." },
  ],
  features: [
    "Denial categorisation and trending",
    "Payer-specific appeal preparation",
    "Clinical documentation appeals",
    "Timely filing appeals",
    "Medical necessity reviews",
    "Coordination of benefits resolution",
    "Duplicate claim resolution",
    "Peer-to-peer review coordination",
    "External appeal submissions",
    "Denial root cause analysis",
    "Payer contract dispute support",
    "Monthly denial performance reporting",
  ],
  process: [
    { step: "1", title: "Denial Identification", description: "All denied claims captured, categorised by reason code and prioritised by dollar value." },
    { step: "2", title: "Root Cause Analysis", description: "Each denial type analysed to identify whether the issue is clinical, administrative or payer-side." },
    { step: "3", title: "Appeal Preparation", description: "Targeted appeals built with correct documentation, medical records and supporting evidence." },
    { step: "4", title: "Resolution & Prevention", description: "Appeals submitted, outcomes tracked and upstream process fixes implemented to prevent recurrence." },
  ],
  stats: [
    { value: "85%", label: "Appeal Success Rate" },
    { value: "40%", label: "Denial Rate Reduction" },
    { value: "30d", label: "Average Resolution" },
    { value: "$2M+", label: "Revenue Recovered" },
  ],
}

export default function DenialManagementPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
