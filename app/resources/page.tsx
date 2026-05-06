import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText } from "lucide-react"

export const metadata = {
  title: "Resources | Thermite Global Solutions",
  description: "RCM insights, billing guides and healthcare revenue cycle resources from the team at Thermite Global Solutions.",
}

const sections = [
  {
    icon: BookOpen,
    title: "Blog",
    description: "Practical insights on medical billing, coding, denial management and revenue cycle best practices — written by our RCM specialists.",
    href: "/resources/blog",
    cta: "Read Articles",
  },
  {
    icon: FileText,
    title: "Case Studies",
    description: "Real-world examples of how TGS has helped healthcare practices improve collections, reduce denials and streamline their revenue cycle.",
    href: "/resources/case-studies",
    cta: "View Case Studies",
  },
]

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">RCM Knowledge Hub</h1>
          <p className="text-base text-primary-foreground/80 leading-relaxed">
            Practical insights, billing guidance and revenue cycle resources to help your practice stay informed and ahead.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {sections.map((s) => (
              <Link key={s.title} href={s.href} className="group block">
                <div className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 hover:shadow-md transition-all h-full flex flex-col">
                  <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <s.icon className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h2 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">{s.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">{s.description}</p>
                  <div className="flex items-center gap-1.5 text-secondary text-sm font-medium group-hover:gap-2.5 transition-all">
                    {s.cta} <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
