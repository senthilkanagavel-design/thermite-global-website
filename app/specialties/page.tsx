import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Medical Specialties | Thermite Global Solutions",
  description: "Specialised RCM billing expertise across cardiology, orthopedics, radiology, behavioral health, hospital and physician group settings.",
}

const medicalSpecialties = [
  { title: "Cardiology", description: "Interventional, diagnostic and electrophysiology billing with device and implant expertise.", href: "/specialties/cardiology", image: "/images/specialty-cardiology.jpg" },
  { title: "Orthopedics", description: "Surgical procedure coding, implant billing and global period management.", href: "/specialties/orthopedics", image: "/images/specialty-orthopedics.jpg" },
  { title: "Radiology", description: "High-volume imaging billing with TC/PC component expertise across all modalities.", href: "/specialties/radiology", image: "/images/specialty-radiology.jpg" },
  { title: "Anesthesiology", description: "Base unit, time unit and medical direction billing with CRNA expertise.", href: "/specialties/anesthesiology", image: "/images/specialty-anesthesiology.jpg" },
]

const healthcareSettings = [
  { title: "Hospital Billing", description: "Inpatient DRG coding, outpatient APC billing and UB-04 claim management.", href: "/specialties/hospital", image: "/images/specialty-urgent-care.jpg" },
  { title: "Physician Groups", description: "Multi-specialty billing scaled across all providers and locations.", href: "/specialties/physician-groups", image: "/images/about-team.jpg" },
  { title: "Urgent Care", description: "Same-day charge entry and rapid claim submission for high-volume clinics.", href: "/specialties/urgent-care", image: "/images/specialty-urgent-care.jpg" },
  { title: "Behavioral Health", description: "Mental health, psychiatry and substance use disorder billing.", href: "/specialties/behavioral-health", image: "/images/specialty-behavioral.jpg" },
]

function SpecialtyCard({ title, description, href, image }: { title: string; description: string; href: string; image: string }) {
  return (
    <Link href={href} className="group block">
      <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-secondary/30 transition-all duration-300">
        <div className="relative h-40 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4">
          <h3 className="text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{description}</p>
          <div className="flex items-center gap-1.5 text-secondary text-sm font-medium">
            Learn More <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function SpecialtiesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-14">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Specialties</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Expertise Across Every Specialty
          </h1>
          <p className="text-base text-primary-foreground/80 leading-relaxed">
            Whether you're a solo cardiologist or a large multi-specialty group, we bring deep specialty-specific knowledge to every claim we touch.
          </p>
        </div>
      </section>

      {/* Medical Specialties */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Medical Specialties</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-1">Clinical Specialty Billing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {medicalSpecialties.map((s) => <SpecialtyCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* Healthcare Settings */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Healthcare Settings</span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mt-1">Setting-Specific Expertise</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {healthcareSettings.map((s) => <SpecialtyCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground mb-3">Don't See Your Specialty?</h2>
          <p className="text-base text-primary-foreground/80 mb-5">We work with virtually every medical specialty. Contact us to discuss your specific billing needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-3 rounded-lg transition-colors">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
