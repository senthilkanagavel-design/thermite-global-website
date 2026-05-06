import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, CheckCircle, DollarSign, Eye, Users, Shield, Clock, BarChart3, HeadphonesIcon, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Why TGS | Thermite Global Solutions",
  description: "Why healthcare providers choose Thermite Global Solutions — cost-effective billing, transparent operations and real-time visibility into your revenue cycle.",
}

const reasons = [
  {
    icon: DollarSign,
    title: "Cost-Effective Billing",
    description: "Outsourcing your RCM to TGS costs significantly less than maintaining an in-house billing team — without sacrificing quality, accuracy or control. No recruitment, no training, no overhead.",
    points: [
      "No full-time billing staff salary and benefits",
      "No investment in billing software licences",
      "No disruption when staff leave or are absent",
      "Pay for performance, not headcount",
    ],
  },
  {
    icon: Eye,
    title: "Transparent Operations",
    description: "You always know what's happening with your revenue cycle. We don't operate as a black box — you have a dedicated account manager, regular reporting and direct visibility into your claims.",
    points: [
      "Weekly performance reports covering key RCM metrics",
      "Real-time AR and denial visibility via Thrive",
      "Dedicated account manager — one point of contact",
      "No surprises — issues flagged and resolved proactively",
    ],
  },
  {
    icon: Users,
    title: "Dedicated Account Management",
    description: "You're not passed around a call centre. Every TGS client has a named account manager who knows your practice, your payers and your billing history.",
    points: [
      "Single point of contact for all queries and escalations",
      "Regular performance review calls",
      "Proactive communication on payer changes and billing updates",
      "Direct line — not a ticket system",
    ],
  },
  {
    icon: Shield,
    title: "HIPAA Compliant — Always",
    description: "Every client engagement begins with a signed Business Associate Agreement. Our India-based operations are fully disclosed and all staff are HIPAA trained before touching any patient data.",
    points: [
      "BAA executed before services commence",
      "All staff HIPAA trained and bound by confidentiality agreements",
      "Encrypted, role-based access to all client systems",
      "Breach notification procedures in place per HIPAA requirements",
    ],
  },
  {
    icon: TrendingUp,
    title: "Specialty-Specific Expertise",
    description: "We don't apply a one-size-fits-all approach. Our coders and billers are assigned based on specialty — cardiology, orthopedics, behavioral health, radiology and more.",
    points: [
      "Specialty-trained certified coders",
      "Payer-specific billing knowledge across all major plans",
      "Prior auth expertise by specialty",
      "Denial patterns understood at the specialty level",
    ],
  },
  {
    icon: BarChart3,
    title: "Performance Accountability",
    description: "We measure our success by your results. Clean claim rate, AR days, denial rate, net collection ratio — these numbers are tracked, reported and owned by us.",
    points: [
      "Monthly KPI reporting with benchmarks",
      "Denial rate tracked and actioned continuously",
      "AR aging monitored and worked proactively",
      "Transparent outcome reporting — good and bad",
    ],
  },
]

const thriveRows = [
  {
    input: "Access to your Practice Management system",
    process: "Tracks every claim from submission through payment or denial",
    output: "Real-time claim status — no chasing for updates",
  },
  {
    input: "Your billing and AR data",
    process: "Surfaces aging claims, denial patterns and priority work queues",
    output: "Your AR team works the right accounts, in the right order",
  },
  {
    input: "Payer EOBs and ERA files",
    process: "Reconciles payments, identifies variances and flags underpayments",
    output: "Every payment accounted for, every underpayment actioned",
  },
  {
    input: "Denial and rejection data",
    process: "Categorises denials by reason, payer and department",
    output: "Root cause reports and prevention strategies for your practice",
  },
]

export default function WhyTGSPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">
            Why TGS?
          </h1>
          <p className="text-base text-primary-foreground/80 leading-relaxed">
            There are many RCM companies. Here's why healthcare providers choose Thermite Global Solutions — and stay.
          </p>
        </div>
      </section>

      {/* Reasons */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((reason, index) => (
              <div key={reason.title} className="bg-card border border-border rounded-xl p-5 hover:border-secondary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <reason.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-primary mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{reason.description}</p>
                <ul className="space-y-1.5">
                  {reason.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Thrive — Plain English */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Technology</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">What is Thrive?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thrive is the internal platform our team uses to manage your revenue cycle. It's not a product we sell — it's the engine behind how we work. Here's what it does for you in plain terms.
            </p>
          </div>

          {/* 3-column table visual */}
          <div className="max-w-5xl mx-auto">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-3 mb-3">
              {["What you give us", "What Thrive does with it", "What you get back"].map((h) => (
                <div key={h} className="bg-secondary text-secondary-foreground rounded-lg px-4 py-2.5 text-center">
                  <p className="text-xs font-bold uppercase tracking-wider">{h}</p>
                </div>
              ))}
            </div>

            {/* Data rows */}
            <div className="space-y-2">
              {thriveRows.map((row, index) => (
                <div key={index} className="grid grid-cols-3 gap-3">
                  <div className="bg-card border border-border rounded-lg px-4 py-3 flex items-center">
                    <p className="text-xs text-muted-foreground leading-snug">{row.input}</p>
                  </div>
                  <div className="bg-primary/5 border border-secondary/20 rounded-lg px-4 py-3 flex items-center">
                    <p className="text-xs text-foreground/80 leading-snug">{row.process}</p>
                  </div>
                  <div className="bg-secondary/10 border border-secondary/20 rounded-lg px-4 py-3 flex items-center">
                    <p className="text-xs font-medium text-primary leading-snug">{row.output}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="mt-4 bg-card border border-border rounded-xl p-4 text-center">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-primary">In short:</span> Thrive sits behind everything our team does. It keeps nothing hidden — your account manager uses it to run your reviews, answer your questions and show you exactly where your revenue stands at any point in time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-house vs TGS comparison */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">The Numbers</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">In-House Billing vs TGS</h2>
            <p className="text-sm text-muted-foreground">A straightforward comparison of what you're actually paying for.</p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1" />
            <div className="bg-muted rounded-lg py-2 text-center">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">In-House</p>
            </div>
            <div className="bg-secondary rounded-lg py-2 text-center">
              <p className="text-xs font-bold text-secondary-foreground uppercase tracking-wider">TGS</p>
            </div>

            {[
              ["Staff salary & benefits", "High fixed cost", "Included in service"],
              ["Billing software", "Additional licence cost", "Included"],
              ["Staff training", "Time & cost", "Handled by us"],
              ["Staff turnover risk", "High disruption", "Zero impact on you"],
              ["Coding expertise", "Limited by hire", "Specialty-certified team"],
              ["Scalability", "Hire more staff", "Immediate, no cost"],
              ["Performance visibility", "Internal only", "Real-time via Thrive"],
              ["HIPAA compliance", "Your responsibility", "Jointly managed with BAA"],
            ].map(([feature, inhouse, tgs]) => (
              <div key={feature} className="contents">
                <div className="bg-card border border-border rounded-lg px-3 py-2.5 flex items-center">
                  <p className="text-xs font-medium text-foreground">{feature}</p>
                </div>
                <div className="bg-muted/50 border border-border rounded-lg px-3 py-2.5 flex items-center justify-center text-center">
                  <p className="text-xs text-muted-foreground">{inhouse}</p>
                </div>
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg px-3 py-2.5 flex items-center justify-center text-center">
                  <p className="text-xs font-medium text-secondary">{tgs}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">Ready to Make the Switch?</h2>
          <p className="text-sm text-primary-foreground/80 leading-relaxed mb-5">
            Talk to our team about your practice. We'll show you exactly what TGS can do for your revenue cycle — no pressure, no jargon.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-8 py-3 rounded-lg transition-colors">
              Get Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/services" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-sm font-semibold px-8 py-3 rounded-lg transition-colors">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
