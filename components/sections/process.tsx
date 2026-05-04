"use client"

import { motion } from "framer-motion"
import { ClipboardCheck, FileSearch, Send, DollarSign, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    step: "01",
    title: "Patient Registration",
    description: "Accurate capture of patient demographics, insurance details, and eligibility verification.",
  },
  {
    icon: FileSearch,
    step: "02",
    title: "Charge Capture & Coding",
    description: "Expert medical coding with ICD-10, CPT, and HCPCS codes ensuring maximum reimbursement.",
  },
  {
    icon: Send,
    step: "03",
    title: "Claim Submission",
    description: "Clean claim submission with automated scrubbing and real-time eligibility checks.",
  },
  {
    icon: DollarSign,
    step: "04",
    title: "Payment Posting",
    description: "Accurate payment reconciliation, ERA processing, and patient statement generation.",
  },
  {
    icon: BarChart3,
    step: "05",
    title: "AR & Denial Management",
    description: "Proactive follow-up on unpaid claims and aggressive denial appeals to maximize collections.",
  },
]

export function Process() {
  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Streamlined Revenue Cycle Process
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our proven methodology ensures efficient claims processing and maximum reimbursement at every step.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-accent to-secondary" />

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-card border-4 border-secondary flex items-center justify-center shadow-lg">
                      <step.icon className="h-8 w-8 text-secondary" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center shadow">
                      {step.step}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
