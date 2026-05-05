"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Brain,
  AlertTriangle,
  Code2,
  ListOrdered,
  ScanSearch,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  TrendingDown,
  Clock,
  DollarSign,
} from "lucide-react"

const aiFeatures = [
  {
    icon: AlertTriangle,
    title: "Pre-Submission Denial Prediction",
    description:
      "Our model analyzes every claim against 200+ denial patterns learned from millions of historical claims. High-risk claims are flagged and routed for human review before they ever leave your system.",
  },
  {
    icon: Code2,
    title: "Automated Coding Suggestions",
    description:
      "Natural language processing reads clinical notes and suggests ICD-10 and CPT codes — accelerating coder workflows and reducing under-coding by an average of 12%.",
  },
  {
    icon: ListOrdered,
    title: "Smart AR Prioritization",
    description:
      "Our queue management AI ranks your accounts receivable by collectability and urgency — so your team works the claims most likely to pay first, every single day.",
  },
  {
    icon: ScanSearch,
    title: "Anomaly Detection",
    description:
      "Pattern recognition flags unusual billing activity, duplicate charges, and payer-specific outliers — protecting your organization from compliance risk and revenue leakage.",
  },
  {
    icon: RefreshCw,
    title: "Continuously Improving Models",
    description:
      "Every client outcome feeds back into our training pipeline. Models retrain monthly — meaning the longer you're on the platform, the smarter it gets for your specific payer mix.",
  },
  {
    icon: DollarSign,
    title: "Revenue Opportunity Identification",
    description:
      "AI surfaces underbilled encounters, missed modifiers, and missed secondary billing opportunities — recovering revenue that would otherwise be left on the table.",
  },
]

const outcomes = [
  { icon: TrendingDown, value: "43%", label: "Reduction in denial rate after 90 days" },
  { icon: Clock, value: "2.1 days", label: "Faster average days to payment" },
  { icon: DollarSign, value: "12%", label: "Average revenue uplift from coding AI" },
  { icon: CheckCircle2, value: "94%", label: "Pre-submission denial prediction accuracy" },
]

export function AISolutionsPageContent() {
  return (
    <>
      {/* Back Nav */}
      <div className="bg-primary border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <Link href="/technology" className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors text-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to Technology
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-8 lg:py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Brain className="h-5 w-5 text-accent" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">AI-Powered Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Stop Denials Before They Happen
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6 max-w-2xl">
              Our machine learning models don't just report on what went wrong — they intervene before a claim leaves your system, predict what payers will reject, and continuously learn from every outcome.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold px-8">
                See It in Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {outcomes.map((o, index) => (
              <motion.div
                key={o.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-1">{o.value}</p>
                <p className="text-secondary-foreground/80 text-sm">{o.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">AI Capabilities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Intelligence at Every Step of the Cycle
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From charge capture to final payment, our AI is embedded throughout — not bolted on as an afterthought.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Put AI to Work on Your Claims
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-6">
              Most clients see measurable denial reduction within the first 30 days. Let's show you what that looks like for your payer mix.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold px-8">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
