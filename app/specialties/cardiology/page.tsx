import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceDetailPage } from "@/components/pages/service-detail"

export const metadata = {
  title: "Cardiology Billing Services | Thermite Global Solutions",
  description: "Expert cardiology billing and coding services. We handle complex cardiovascular codes, device billing and payer contracts to maximise your reimbursement.",
}

const serviceData = {
  iconName: "TrendingUp",
  title: "Cardiology Billing",
  subtitle: "Heart & Cardiovascular Billing",
  description: "Cardiology billing is among the most complex in healthcare. Our certified coders specialise in cardiovascular procedures, device billing and payer-specific rules to ensure maximum reimbursement.",
  image: "/images/specialty-cardiology.jpg",
  benefits: [
    { title: "Specialised Cardiology Coders", description: "Certified coders with deep cardiology expertise — interventional, diagnostic and electrophysiology." },
    { title: "Device & Implant Billing", description: "Accurate billing for pacemakers, ICDs, stents and other high-value cardiac devices." },
    { title: "Reduced Cardiology Denials", description: "Payer-specific rules applied at point of coding to prevent the most common cardiology denials." },
    { title: "Procedure-Level Accuracy", description: "Every CPT, modifier and diagnosis linked correctly for complex multi-procedure cardiac cases." },
  ],
  features: [
    "Interventional cardiology coding",
    "Echocardiography billing",
    "Nuclear cardiology coding",
    "Electrophysiology procedures",
    "Cardiac device implant billing",
    "Stress testing and Holter billing",
    "Catheterisation lab billing",
    "Global period management",
    "Modifier 26 and TC billing",
    "Bundling and unbundling compliance",
    "Payer contract management",
    "Cardiology-specific denial management",
  ],
  process: [
    { step: "1", title: "Charge Review", description: "Clinical documentation reviewed for completeness before any codes are assigned." },
    { step: "2", title: "Specialised Coding", description: "Cardiology-certified coders assign CPT, ICD-10 and modifiers with procedure-level accuracy." },
    { step: "3", title: "Claim Submission", description: "Clean claims submitted with payer-specific edits applied to minimise rejections." },
    { step: "4", title: "AR & Denial Follow-up", description: "Proactive follow-up on all outstanding cardiology claims with targeted denial appeals." },
  ],
  stats: [
    { value: "99%", label: "Coding Accuracy" },
    { value: "35%", label: "Denial Reduction" },
    { value: "15+", label: "Years Cardiology Experience" },
    { value: "98%", label: "Clean Claim Rate" },
  ],
}

export default function CardiologyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetailPage {...serviceData} />
      <Footer />
    </main>
  )
}
