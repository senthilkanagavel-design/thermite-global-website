import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Payment Posting Services | Thermite Global Solutions",
  description: "Accurate and timely payment posting services including ERA/EOB processing, reconciliation and variance identification.",
}

const serviceData = {
  iconName: "CreditCard",
  title: "Payment Posting",
  subtitle: "Accurate Payment Reconciliation",
  description: "We post all insurance and patient payments accurately and on time, reconcile ERAs and EOBs, and flag every variance so your AR picture is always clean and current.",
  image: "/images/service-billing.jpg",
  benefits: [
    { title: "Same-Day Posting", description: "Payments posted the same day they are received, keeping your AR current and your reporting accurate." },
    { title: "99.9% Posting Accuracy", description: "Multi-step verification process eliminates posting errors that create patient complaints and rework." },
    { title: "Variance Identification", description: "Every underpayment and contractual discrepancy flagged for follow-up and recovery." },
    { title: "Clean AR Picture", description: "Accurate posting means your AR aging and collections reports reflect true outstanding balances." },
  ],
  features: [
    "ERA automated payment posting",
    "Manual EOB posting",
    "Insurance payment reconciliation",
    "Patient payment posting",
    "Contractual adjustment posting",
    "Underpayment identification",
    "Overpayment and credit balance management",
    "Secondary claim generation",
    "Patient balance transfer",
    "Daily deposit reconciliation",
    "Lockbox processing",
    "Month-end reconciliation reporting",
  ],
  process: [
    { step: "1", title: "Payment Receipt", description: "ERAs received electronically and paper EOBs scanned for processing." },
    { step: "2", title: "Payment Posting", description: "All payments posted line by line to the correct claim with contractual adjustments applied." },
    { step: "3", title: "Reconciliation", description: "Posted amounts reconciled against deposit records to ensure every dollar is accounted for." },
    { step: "4", title: "Variance Follow-up", description: "Underpayments, contractual discrepancies and credit balances flagged and actioned." },
  ],
  stats: [
    { value: "99.9%", label: "Posting Accuracy" },
    { value: "Same Day", label: "Posting Turnaround" },
    { value: "100%", label: "ERA Automation" },
    { value: "0%", label: "Unposted Backlog" },
  ],
}

export default function PaymentPostingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
