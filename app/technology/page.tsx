import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight, BarChart3, Brain, Shield, RefreshCw, Eye, Zap } from "lucide-react"

export const metadata = {
  title: "Technology Platform | Thermite Global Solutions",
  description: "Purpose-built RCM technology — real-time analytics, AI-powered denial prevention, and intelligent workflows built for healthcare revenue cycle management.",
}

const modules = [
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time visibility into your revenue cycle performance with customizable KPIs, denial trends, and cash flow projections.",
    features: ["Real-time reporting", "Custom KPI tracking", "Predictive cash flow", "Denial trend analysis"],
  },
  {
    icon: Brain,
    title: "AI-Powered Workflows",
    description: "Intelligent models that flag claim issues before submission, surface denial patterns, and prioritize your AR team's workload automatically.",
    features: ["Pre-submission claim review", "Denial pattern detection", "Smart AR prioritization", "Anomaly identification"],
  },
]

const capabilities = [
  {
    icon: Shield,
    title: "HIPAA-Grade Security",
    description: "End-to-end encryption, role-based access controls, and full audit trails on every data interaction.",
  },
  {
    icon: Zap,
    title: "Near-Zero Latency",
    description: "Claims processed and status updated in real time — no overnight batches, no delayed visibility.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description: "Our AI models improve continuously on fresh claims data, keeping denial prediction accuracy high.",
  },
  {
    icon: Eye,
    title: "Unified Data View",
    description: "One single source of truth across all your locations, providers, and payers — always current.",
  },
]

const steps = [
  {
    step: "01",
    title: "We Review Your Current State",
    description: "Before anything else, we do a thorough review of your existing billing workflows, denial patterns, payer mix and coding practices to understand exactly where revenue is being lost.",
  },
  {
    step: "02",
    title: "We Configure Our Workflows to You",
    description: "Our platform is configured around your specialty, your payers and your team's processes — not the other way around. Nothing goes live until it fits your practice.",
  },
  {
    step: "03",
    title: "Our Tools Flag Issues Before They Cost You",
    description: "Every claim is reviewed by our AI layer before submission — catching coding gaps, missing authorisations and payer-specific edits before they become denials.",
  },
  {
    step: "04",
    title: "You See Everything, in Real Time",
    description: "Your dashboard gives you a single view across all payers, providers and locations — claims status, denial rates, AR aging and collection performance, updated continuously.",
  },
]

export default function TechnologyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Platform</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">
              Technology Built for Revenue Cycle
            </h1>
            <p className="text-base text-primary-foreground/80 leading-relaxed mb-6 max-w-2xl">
              We built our platform from the ground up for healthcare RCM — not adapted from generic BI tools. Every feature exists to get claims paid faster, reduce denials, and give your team complete visibility.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 max-w-2xl">
            {[
              { value: "94%", label: "Denial Prediction Accuracy" },
              { value: "99.9%", label: "Platform Uptime" },
              { value: "Real-Time", label: "Claims Processing" },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-secondary mb-1">{s.value}</div>
                <div className="text-xs text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Modules */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Platform Modules</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">Two Modules. One Unified Platform.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">Purpose-built and working together seamlessly to give you complete control over your revenue cycle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {modules.map((mod) => (
              <div key={mod.title} className="bg-card border border-border rounded-xl p-6 hover:border-secondary/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <mod.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{mod.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{mod.description}</p>
                <ul className="space-y-1.5">
                  {mod.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - rewritten */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">From Assessment to Full Visibility</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">We don't hand you a platform and walk away. We configure everything to your practice and make sure it works before we call it live.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => (
              <div key={step.step} className="bg-card border border-border rounded-xl p-5 relative">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center mb-3">
                  <span className="text-xs font-bold text-accent-foreground">{step.step}</span>
                </div>
                <h3 className="text-sm font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <ArrowRight className="h-4 w-4 text-secondary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Core Capabilities</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">Enterprise-Grade. Healthcare-Proven.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">Built on infrastructure that healthcare providers and their compliance teams can trust.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-card border border-border rounded-xl p-5 hover:border-secondary/30 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <cap.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-sm font-bold text-primary mb-2">{cap.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">Want to Learn More?</h2>
          <p className="text-sm text-primary-foreground/80 leading-relaxed mb-5">
            Reach out to our team and we'll walk you through how our platform works for your specific specialty and workflows.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-8 py-3 rounded-lg transition-colors">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
