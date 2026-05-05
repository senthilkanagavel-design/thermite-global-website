"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BarChart3,
  Brain,
  Plug,
  Shield,
  Zap,
  RefreshCw,
  CheckCircle2,
  ArrowRight,
  Database,
  Lock,
  Clock,
  TrendingUp,
  Layers,
  Activity,
} from "lucide-react"

const platformFeatures = [
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Real-time visibility into your revenue cycle performance with customizable KPIs, denial trends, and cash flow projections.",
    href: "/technology/analytics",
    highlights: ["Real-time reporting", "Custom KPI tracking", "Predictive cash flow", "Denial trend analysis"],
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Machine learning models that predict claim denials before submission, auto-code encounters, and surface prioritization queues for your AR team.",
    href: "/technology/ai-solutions",
    highlights: ["Pre-submission denial prediction", "Automated coding suggestions", "Smart AR prioritization", "Anomaly detection"],
  },
  {
    icon: Plug,
    title: "Integration Hub",
    description:
      "Seamless, bi-directional connectivity with 100+ EHR, PM, and clearinghouse systems — no manual exports, no data silos.",
    href: "/technology/integrations",
    highlights: ["100+ EHR integrations", "Real-time data sync", "HL7 & FHIR compliant", "Zero manual exports"],
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
    description: "Our AI models retrain monthly on fresh claims data, keeping denial prediction accuracy above 94%.",
  },
  {
    icon: Database,
    title: "Unified Data Layer",
    description: "One single source of truth across all your locations, providers, and payers — always in sync.",
  },
  {
    icon: Lock,
    title: "SOC 2 Type II Certified",
    description: "Independently audited security controls you can present to your compliance and legal teams with confidence.",
  },
  {
    icon: Clock,
    title: "99.9% Uptime SLA",
    description: "Enterprise-grade infrastructure with automatic failover, so your operations never stop.",
  },
]

const stats = [
  { value: "94%", label: "Denial Prediction Accuracy" },
  { value: "100+", label: "EHR Integrations" },
  { value: "99.9%", label: "Platform Uptime" },
  { value: "48hr", label: "Average Go-Live Time" },
]

const workflow = [
  {
    step: "01",
    title: "Connect Your Systems",
    description: "Our integration team configures a secure, bi-directional connection with your EHR and PM system in as little as 48 hours.",
  },
  {
    step: "02",
    title: "Data Flows Automatically",
    description: "Patient demographics, encounter data, and charge information sync in real time — eliminating manual entry and data lag.",
  },
  {
    step: "03",
    title: "AI Flags Issues Pre-Submission",
    description: "Our models review every claim before it leaves, catching coding gaps, missing authorizations, and payer-specific edits.",
  },
  {
    step: "04",
    title: "Track Everything in One View",
    description: "Your dashboard gives you a single pane of glass across all payers, providers, and locations — updated continuously.",
  },
]

export function TechnologyPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-8 lg:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Platform</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Technology Built for Revenue Cycle
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              We built our platform from the ground up for healthcare RCM — not adapted from generic BI tools. Every feature exists to get claims paid faster, reduce denials, and give your team complete visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold px-8">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/technology/integrations">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8">
                  View Integrations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-1">{stat.value}</p>
                <p className="text-secondary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Platform Modules</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Three Modules. One Unified Platform.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each module is purpose-built and works together seamlessly — or can be deployed standalone alongside your existing tools.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all hover:border-secondary/30 group"
              >
                <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <feature.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-2 mb-8">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link href={feature.href}>
                  <Button variant="outline" className="w-full border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground group-hover:border-secondary transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              From Day One to Full Visibility
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most clients are live and processing claims through our platform within 48 hours of kickoff.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-secondary/15 mb-4 font-serif">{step.step}</div>
                <h3 className="text-lg font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 text-secondary/30">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Core Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Enterprise-Grade. Healthcare-Proven.
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Built on infrastructure that healthcare providers and their compliance teams can trust.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                  <cap.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">{cap.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              See the Platform in Action
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8">
              Book a 30-minute live demo with our team and we'll walk you through your specific workflows and integration requirements.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold px-8">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
