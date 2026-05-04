import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Prior Authorization Services | Thermite Global Solutions",
  description: "Streamlined prior authorization management to reduce delays, improve approval rates and keep your clinical operations moving.",
}

const serviceData = {
  iconName: "FileText",
  title: "Prior Authorization",
  subtitle: "Streamlined Authorization Management",
  description: "We manage the entire prior authorization process on your behalf — from submission to approval — so your clinicians spend time on patients, not paperwork.",
  image: "/images/service-billing.jpg",
  benefits: [
    { title: "Faster Approvals", description: "Dedicated auth specialists who know payer requirements get approvals faster with fewer follow-up calls." },
    { title: "Reduced Treatment Delays", description: "Timely authorizations mean patients receive care on schedule without unnecessary delays." },
    { title: "Higher Approval Rates", description: "Correct clinical documentation submitted the first time drives significantly higher approval rates." },
    { title: "Full Audit Trail", description: "Every auth request, status update and approval is documented and accessible in real time." },
  ],
  features: [
    "Initial authorization submission",
    "Urgent and expedited auth handling",
    "Clinical documentation preparation",
    "Payer portal submission and tracking",
    "Status follow-up and escalation",
    "Peer-to-peer review coordination",
    "Authorization extension requests",
    "Denial and appeal management",
    "Auth-to-claim matching",
    "Retroactive authorization requests",
    "Multi-payer expertise",
    "Reporting and turnaround tracking",
  ],
  process: [
    { step: "1", title: "Auth Requirement Check", description: "Verify whether the procedure or service requires prior authorization for the specific payer and plan." },
    { step: "2", title: "Clinical Doc Prep", description: "Compile all required clinical documentation, diagnosis codes and supporting notes." },
    { step: "3", title: "Submission & Tracking", description: "Submit authorization request via payer portal or phone and track status through to decision." },
    { step: "4", title: "Approval & Notification", description: "Communicate approval details to the clinical team and attach auth number to the claim." },
  ],
  stats: [
    { value: "95%", label: "Approval Rate" },
    { value: "48h", label: "Average Turnaround" },
    { value: "80%", label: "Fewer Delays" },
    { value: "100%", label: "Auth Tracked" },
  ],
}

export default function PriorAuthorizationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
