"use client"

import { motion } from "framer-motion"

const steps = [
  { step: "01", emoji: "📋", title: "Patient Registration", description: "Eligibility & Demographic Entry" },
  { step: "02", emoji: "🔬", title: "Coding & Charge Capture", description: "CPT, ICD-10, Modifier & Linking" },
  { step: "03", emoji: "📤", title: "Claim Submission", description: "Clean Claim & Scrubbing" },
  { step: "04", emoji: "🏦", title: "Clearinghouse Accept / Reject", description: "Clean Claim to Payer & Rework" },
  { step: "05", emoji: "💳", title: "Payment & Denial Posting", description: "ERA / EOB / Reconciliation" },
  { step: "06", emoji: "🔄", title: "Denial Management", description: "Fix Issue & Resubmission" },
  { step: "07", emoji: "📞", title: "AR Follow-up", description: "NDNP & Aged Claims Action" },
  { step: "08", emoji: "🧾", title: "Patient Statement & Collections", description: "Outstanding Due & Collections" },
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
          className="text-center max-w-3xl mx-auto mb-8"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">
            End-to-End Revenue Cycle Workflow
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            A complete 8-step process from patient registration through collections.
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="relative flex items-start justify-between overflow-x-auto pb-4">
          {/* Horizontal line */}
          <div className="absolute top-[28px] left-[calc(100%/16)] right-[calc(100%/16)] h-px bg-border z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="relative z-10 flex flex-col items-center gap-2 flex-1 min-w-[80px]"
            >
              {/* Circle */}
              <div className={`w-14 h-14 rounded-full flex items-center justify-center border-2 bg-card text-2xl transition-all duration-300
                ${index === 0
                  ? "border-secondary shadow-md shadow-secondary/20 ring-4 ring-secondary/10"
                  : "border-border hover:border-secondary/60 hover:shadow-sm"
                }`}
              >
                {step.emoji}
              </div>

              {/* Step number */}
              <span className="text-[10px] text-muted-foreground font-medium tracking-widest">
                {step.step}
              </span>

              {/* Title */}
              <p className={`text-[11px] font-semibold text-center leading-snug uppercase tracking-wide px-1
                ${index === 0 ? "text-secondary" : "text-primary"}`}
              >
                {step.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Cycle note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-[11px] text-muted-foreground uppercase tracking-widest mt-4"
        >
          ↻ Continuous Revenue Cycle
        </motion.p>
      </div>
    </section>
  )
}
