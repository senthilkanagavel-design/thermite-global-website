import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesPageContent } from "@/components/pages/services-content"

export const metadata = {
  title: "Our Services | Thermite Global Solutions",
  description: "Comprehensive healthcare RCM services including medical coding, billing, AR recovery, insurance verification, and complete revenue cycle management.",
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesPageContent />
      <Footer />
    </main>
  )
}
