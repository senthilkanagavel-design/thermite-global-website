import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AISolutionsPageContent } from "@/components/pages/ai-solutions-content"

export const metadata = {
  title: "AI-Powered Solutions | Thermite Global Solutions",
  description:
    "Machine learning that predicts claim denials before submission, auto-suggests codes, and prioritizes your AR queue for maximum collections.",
}

export default function AISolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AISolutionsPageContent />
      <Footer />
    </main>
  )
}
