import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactPageContent } from "@/components/pages/contact-content"

export const metadata = {
  title: "Contact Us | Thermite Global Solutions",
  description: "Get in touch with our RCM experts. Schedule a free consultation to discuss your healthcare revenue cycle management needs.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactPageContent />
      <Footer />
    </main>
  )
}
