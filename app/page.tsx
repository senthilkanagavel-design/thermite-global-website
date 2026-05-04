import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { Clients } from "@/components/sections/clients"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { About } from "@/components/sections/about"
import { Specialties } from "@/components/sections/specialties"
import { Process } from "@/components/sections/process"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Stats />
      <About />
      <Specialties />
      <Process />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
