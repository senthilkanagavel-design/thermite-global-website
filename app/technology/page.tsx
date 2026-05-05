import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TechnologyPageContent } from "@/components/pages/technology-content"

export const metadata = {
  title: "Technology Platform | Thermite Global Solutions",
  description:
    "Purpose-built RCM technology: real-time analytics, AI-powered denial prevention, and 100+ EHR integrations — all in one unified platform.",
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <TechnologyPageContent />
      <Footer />
    </main>
  )
}
