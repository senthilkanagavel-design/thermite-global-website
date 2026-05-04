import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutPageContent } from "@/components/pages/about-content"

export const metadata = {
  title: "About Us | Thermite Global Solutions",
  description: "Learn about Thermite Global Solutions - your trusted partner for healthcare revenue cycle management with global operations and 15+ years of expertise.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutPageContent />
      <Footer />
    </main>
  )
}
