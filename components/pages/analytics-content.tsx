"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Bell,
  Download,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  Eye,
  Filter,
  Calendar,
} from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Customizable KPI Dashboards",
    description:
      "Build role-specific views for your billing director, AR team, and C-suite. Every metric arranged exactly how your team works.",
  },
  {
    icon: TrendingUp,
    title: "Denial Trend Analysis",
    description:
      "Identify denial patterns by payer, CPT code, provider, and facility. Drill down to the root cause in two clicks.",
  },
  {
    icon: PieChart,
    title: "Predictive Cash Flow",
    description:
      "Our ML model forecasts expected collections 30, 60, and 90 days out — so your CFO is never caught off guard.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get notified when a payer's denial rate spikes, an aging bucket crosses a threshold, or a high-value claim goes untouched.",
  },
  {
    icon: Download,
    title: "One-Click Reporting",
    description:
      "Export any view to PDF, Excel, or CSV on demand — or schedule automated reports to land in your inbox every Monday morning.",
  },
  {
    icon: RefreshCw,
    title: "Live Data Refresh",
    description:
      "No overnight batches. Every claim status update, payment post, and denial is reflected in your dashboard within minutes.",
  },
]

const metrics = [
  { label: "First-Pass Resolution Rate", value: "97.3%" },
  { label: "Days in AR", value: "< 28" },
  { label: "Net Collection Rate", value: "99.1%" },
  { label: "Denial Rate", value: "< 3%" },
]

export function AnalyticsPageContent() {
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
                <BarChart3 className="h-5 w-5 text-accent" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Analytics Dashboard</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              See Everything. Miss Nothing.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6 max-w-2xl">
              Your revenue cycle generates thousands of data points every day. Our analytics dashboard turns that noise into a clear, actionable picture — updated in real time, accessible from anywhere.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold px-8">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((m, index) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-1">{m.value}</p>
                <p className="text-secondary-foreground/80 text-sm">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Features</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Built for Billing Teams, Loved by CFOs
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every feature was shaped by feedback from the revenue cycle professionals who use it daily.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow"
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
              Ready for Full Visibility?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-6">
              Schedule a live walkthrough of the analytics dashboard with your actual metrics and workflows in mind.
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
