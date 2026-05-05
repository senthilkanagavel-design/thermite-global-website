import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { IntegrationsPageContent } from "@/components/pages/integrations-content"

export const metadata = {
  title: "Integration Hub | Thermite Global Solutions",
  description:
    "Seamless bi-directional connectivity with 100+ EHR, PM, and clearinghouse systems. HL7 and FHIR compliant. Live in 48 hours.",
}

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <IntegrationsPageContent />
      <Footer />
    </main>
  )
}
