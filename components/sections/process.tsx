"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, FileSearch, Send, DollarSign, FileText, Users, BarChart3, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Patient Registration",
    description: "Demographics, insurance capture and real-time eligibility verification.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Charge Capture & Coding",
    description: "ICD-10, CPT and HCPCS coding with 99% accuracy for maximum reimbursement.",
  },
  {
    icon: Send,
    step: "03",
    title: "Claim Submission",
    description: "Clean claims submitted electronically with automated scrubbing.",
  },
  {
    icon: DollarSign,
    step: "04",
    title: "Payment Posting",
    description: "ERA/EOB processing, payment reconciliation and variance identification.",
  },
  {
    icon: FileText,
    step: "05",
    title: "Patient Statements",
    description: "Accurate patient billing, statements and self-pay collections.",
  },
  {
    icon: Users,
    step: "06",
    title: "AR Follow-up",
    description: "Proactive payer follow-up on unpaid and underpaid claims.",
  },
  {
    icon: BarChart3,
    step: "07",
    title: "Denial Management",
    description: "Root cause analysis, appeals and denial prevention strategies.",
  },
]

export function Process() {
  return (
    <section className="py-6 lg:py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">
            End-to-End Revenue Cycle Workflow
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A complete, closed-loop process from patient registration through collections — every step connected, nothing falling through the cracks.
          </p>
        </motion.div>

        {/* Row 1: Steps 01–04 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.slice(0, 4).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-secondary/30 transition-all"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-secondary" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <div className="md:text-center md:mt-4">
                <h3 className="text-sm font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-card border border-secondary/40 rounded-full items-center justify-center shadow-sm">
                  <ArrowRight className="h-3 w-3 text-secondary" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Down arrow connector */}
        <div className="hidden md:flex justify-end pr-[12.5%] my-0">
          <div className="flex flex-col items-center">
            <div className="w-px h-4 bg-secondary/40" />
            <ArrowRight className="h-3 w-3 text-secondary/60 rotate-90" />
          </div>
        </div>

        {/* Row 2: Steps 05–07, right-aligned (reverse flow) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 md:mt-0">
          <div className="hidden md:block" />
          {steps.slice(4).map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 bg-card border border-border rounded-xl p-5 hover:shadow-md hover:border-secondary/30 transition-all"
            >
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center">
                  <step.icon className="h-5 w-5 text-secondary" />
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <div className="md:text-center md:mt-4">
                <h3 className="text-sm font-bold text-primary mb-1">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < 2 && (
                <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-card border border-secondary/40 rounded-full items-center justify-center shadow-sm">
                  <ArrowRight className="h-3 w-3 text-secondary rotate-180" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          Every step is monitored, measured and optimised for maximum collections.
        </motion.p>
      </div>
    </section>
  )
}
