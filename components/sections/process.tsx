"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    step: "01",
    emoji: "📋",
    title: "Patient Registration",
    description: "Eligibility & Demographic Entry",
  },
  {
    step: "02",
    emoji: "🔬",
    title: "Coding & Charge Capture",
    description: "CPT, ICD-10, Modifier & Linking",
  },
  {
    step: "03",
    emoji: "📤",
    title: "Claim Submission",
    description: "Clean Claim & Scrubbing",
  },
  {
    step: "04",
    emoji: "🏦",
    title: "Clearinghouse Accept / Reject",
    description: "Clean Claim to Payer & Rework",
  },
  {
    step: "05",
    emoji: "💳",
    title: "Payment & Denial Posting",
    description: "ERA / EOB / Reconciliation",
  },
  {
    step: "06",
    emoji: "🔄",
    title: "Denial Management",
    description: "Fix Issue & Resubmission",
  },
  {
    step: "07",
    emoji: "📞",
    title: "AR Follow-up",
    description: "NDNP & Aged Claims Action",
  },
  {
    step: "08",
    emoji: "🧾",
    title: "Patient Statement",
    description: "Outstanding Due & Collections",
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
            A complete 8-step process from patient registration through collections — every step connected, nothing falling through the cracks.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="flex items-stretch gap-0 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <div key={step.step} className="flex items-center flex-shrink-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex flex-col items-center text-center bg-card border border-border rounded-xl p-4 hover:border-secondary/50 hover:shadow-md transition-all duration-300 w-[118px]"
              >
                {/* Step number */}
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center mb-3 flex-shrink-0">
                  <span className="text-[10px] font-bold text-accent-foreground">{step.step}</span>
                </div>
                {/* Emoji icon */}
                <div className="text-2xl mb-3 leading-none">{step.emoji}</div>
                {/* Title */}
                <p className="text-xs font-semibold text-primary leading-snug mb-1.5">{step.title}</p>
                {/* Description */}
                <p className="text-[10px] text-muted-foreground leading-snug">{step.description}</p>
              </motion.div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center px-1 flex-shrink-0 pt-4">
                  <ArrowRight className="h-3.5 w-3.5 text-secondary/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cycle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-[11px] text-muted-foreground uppercase tracking-widest mt-5"
        >
          ↻ Continuous Revenue Cycle
        </motion.p>
      </div>
    </section>
  )
}
