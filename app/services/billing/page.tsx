import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Medical Billing Services | Thermite Global Solutions",
  description: "Comprehensive medical billing solutions that accelerate cash flow and reduce days in AR. Expert claim submission and follow-up services.",
}

const serviceData = {
  iconName: "Receipt",
  title: "Medical Billing",
  subtitle: "Comprehensive Billing Solutions",
  description: "Our end-to-end billing services streamline your revenue cycle from claim creation to payment posting. We handle the complexities of medical billing so you can focus on patient care.",
  image: "/images/service-billing.jpg",
  benefits: [
    {
      title: "Accelerated Cash Flow",
      description: "Clean claims submitted within 24-48 hours of charge entry, maximizing your cash flow velocity.",
    },
    {
      title: "98% First-Pass Rate",
      description: "Automated claim scrubbing and expert review ensure the highest possible first-pass acceptance rate.",
    },
    {
      title: "Reduced Administrative Burden",
      description: "We handle all billing tasks, freeing your staff to focus on patient care and practice growth.",
    },
    {
      title: "Complete Visibility",
      description: "Real-time access to claims status, payment posting, and financial performance metrics.",
    },
  ],
  features: [
    "Electronic claim submission to all payers",
    "Paper claim processing when required",
    "Claim status tracking and follow-up",
    "ERA/EOB processing",
    "Automated payment posting",
    "Patient statement generation",
    "Secondary and tertiary billing",
    "Self-pay management",
    "Credit balance resolution",
    "Refund processing",
    "Payer contract compliance",
    "Real-time billing dashboards",
  ],
  process: [
    {
      step: "1",
      title: "Charge Review",
      description: "Review of all charges for accuracy and completeness before claim creation.",
    },
    {
      step: "2",
      title: "Claim Submission",
      description: "Clean claims submitted electronically with automated scrubbing and validation.",
    },
    {
      step: "3",
      title: "Payment Posting",
      description: "Accurate posting of all payments with variance identification and follow-up.",
    },
    {
      step: "4",
      title: "AR Management",
      description: "Proactive follow-up on unpaid claims and denial resolution to maximize collections.",
    },
  ],
  stats: [
    { value: "98%", label: "Clean Claim Rate" },
    { value: "24h", label: "Claim Submission" },
    { value: "99.9%", label: "Posting Accuracy" },
    { value: "5%", label: "Denial Rate" },
  ],
}

export default function BillingServicePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
