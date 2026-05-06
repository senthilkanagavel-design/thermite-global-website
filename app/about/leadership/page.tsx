import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Users, Target, Shield, BarChart3 } from "lucide-react"

export const metadata = {
  title: "Leadership | Thermite Global Solutions",
  description: "Meet the leadership team behind Thermite Global Solutions — experienced RCM professionals driving excellence across every client engagement.",
}

const values = [
  { icon: Target, title: "Client-First", description: "Every decision starts with what's best for our clients' financial performance." },
  { icon: Users, title: "Team Accountability", description: "Our leaders are hands-on and accountable — not just to results but to the people delivering them." },
  { icon: Shield, title: "Compliance-Driven", description: "Leadership sets the tone for HIPAA compliance, ethical billing and data security across the organisation." },
  { icon: BarChart3, title: "Performance-Focused", description: "We measure what matters — clean claim rates, AR days, denial rates — and our leaders own those numbers." },
]

const functions = [
  { title: "Revenue Cycle Operations", description: "Overseeing end-to-end RCM delivery across all client engagements — coding, billing, AR, denials and collections." },
  { title: "Technology & Analytics", description: "Building and maintaining Thrive, our proprietary RCM platform, and delivering real-time analytics to clients." },
  { title: "Client Success", description: "Dedicated client management ensuring performance, communication and continuous improvement for every practice." },
  { title: "Compliance & Quality", description: "HIPAA compliance, coding quality audits and process governance across all operational teams." },
  { title: "Finance & Operations", description: "Financial management, workforce planning and operational infrastructure supporting our global delivery model." },
]

export default function LeadershipPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">
            Led by RCM Professionals
          </h1>
          <p className="text-base text-primary-foreground/80 leading-relaxed">
            Thermite Global Solutions is led by a team of experienced revenue cycle professionals who have spent their careers in healthcare billing, coding, operations and technology. We don't just manage RCM — we've lived it.
          </p>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Philosophy</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">How We Lead</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our leadership approach is built on accountability, transparency and a relentless focus on client outcomes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-5 hover:border-secondary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <v.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-sm font-bold text-primary mb-1.5">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Functional Areas */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Structure</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">How We're Organised</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each functional area is led by specialists with deep domain expertise — so the right people are making decisions at every level.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {functions.map((f, i) => (
              <div key={f.title} className="bg-card border border-border rounded-xl p-5 hover:border-secondary/30 hover:shadow-md transition-all">
                <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center mb-3">
                  <span className="text-xs font-bold text-accent-foreground">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-sm font-bold text-primary mb-1.5">{f.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">Join Our Team</h2>
          <p className="text-sm text-primary-foreground/80 leading-relaxed mb-5">
            We're building a team of RCM professionals who are serious about their craft. If that's you, we'd like to hear from you.
          </p>
          <Link href="/about/careers" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-8 py-3 rounded-lg transition-colors">
            View Open Positions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
