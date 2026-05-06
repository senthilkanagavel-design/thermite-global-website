import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Case Studies | Thermite Global Solutions",
  description: "See how Thermite Global Solutions has helped healthcare practices improve collections, reduce denials and streamline their revenue cycle.",
}

const studies = [
  {
    specialty: "Cardiology Practice",
    challenge: "High denial rate and rising AR days",
    results: [
      "Denial rate reduced from 18% to under 4%",
      "Days in AR improved from 52 to 31",
      "Clean claim rate improved to 97%",
    ],
    summary: "A mid-sized cardiology group was struggling with high denial rates driven by coding errors and missing prior authorisations. TGS implemented a dedicated coding review process and proactive auth management, resulting in significant improvement across all key metrics within 90 days.",
  },
  {
    specialty: "Orthopedic Surgery Group",
    challenge: "Implant billing errors and global period mismanagement",
    results: [
      "Implant-related denials reduced by 60%",
      "Global period compliance reached 100%",
      "Net collections improved by 22%",
    ],
    summary: "An orthopedic surgical group was losing revenue on implant billing and failing to correctly manage global period follow-up visits. TGS assigned specialist ortho coders and implemented a global period tracking workflow, recovering significant revenue within the first quarter.",
  },
  {
    specialty: "Behavioral Health Practice",
    challenge: "Telehealth billing compliance and parity denials",
    results: [
      "Telehealth claim acceptance rate reached 96%",
      "Parity-related denials reduced by 70%",
      "Monthly collections increased by 28%",
    ],
    summary: "A growing behavioral health practice needed help navigating telehealth billing rules and fighting back against mental health parity denials. TGS built a telehealth-specific billing workflow and developed targeted appeal templates that significantly improved reversal rates.",
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">Results That Speak</h1>
          <p className="text-base text-primary-foreground/80 leading-relaxed">
            Real-world examples of how TGS has helped practices improve their revenue cycle performance.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-5">
            {studies.map((study) => (
              <div key={study.specialty} className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 hover:shadow-md transition-all">
                <div className="grid lg:grid-cols-3 gap-5">
                  <div className="lg:col-span-2">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{study.specialty}</span>
                    <h2 className="text-base font-bold text-primary mt-1 mb-2">Challenge: {study.challenge}</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.summary}</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">Key Results</p>
                    <ul className="space-y-2">
                      {study.results.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-xs text-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">Want to see results like these for your practice?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-8 py-3 rounded-lg transition-colors">
              Talk to Our Team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
