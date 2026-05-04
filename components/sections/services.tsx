"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  FileCode2, 
  Receipt, 
  TrendingUp, 
  Shield, 
  ClipboardCheck, 
  CreditCard,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: FileCode2,
    title: "Medical Coding",
    description: "Expert ICD-10, CPT, and HCPCS coding services with 99% accuracy rate. Our certified coders ensure proper code selection for maximum reimbursement.",
    href: "/services/coding",
    features: ["ICD-10 Coding", "CPT Coding", "HCPCS Coding", "Code Auditing"],
  },
  {
    icon: Receipt,
    title: "Medical Billing",
    description: "End-to-end billing solutions that accelerate cash flow and reduce days in AR. We handle claims submission, follow-up, and appeals.",
    href: "/services/billing",
    features: ["Claim Submission", "Payment Posting", "Patient Billing", "Statement Generation"],
  },
  {
    icon: TrendingUp,
    title: "AR Recovery",
    description: "Aggressive accounts receivable management to recover aged claims and improve your bottom line with proven collection strategies.",
    href: "/services/ar-recovery",
    features: ["Aged AR Analysis", "Denial Appeals", "Collections", "Payer Follow-up"],
  },
  {
    icon: Shield,
    title: "Insurance Verification",
    description: "Real-time eligibility verification and benefits analysis to prevent claim denials and ensure accurate patient responsibility estimates.",
    href: "/services/insurance-verification",
    features: ["Eligibility Checks", "Benefits Verification", "Coverage Analysis", "Real-time Updates"],
  },
  {
    icon: ClipboardCheck,
    title: "Prior Authorization",
    description: "Streamlined prior authorization process to reduce delays and improve approval rates for procedures and medications.",
    href: "/services/prior-authorization",
    features: ["Auth Submission", "Status Tracking", "Appeal Management", "Denial Prevention"],
  },
  {
    icon: CreditCard,
    title: "Complete RCM",
    description: "Full-service revenue cycle management from patient scheduling to final payment. One partner for your entire revenue cycle needs.",
    href: "/services/rcm",
    features: ["End-to-End RCM", "Analytics Dashboard", "Performance Reports", "Dedicated Support"],
  },
]

export function Services() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Comprehensive RCM Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From coding to collections, we provide end-to-end revenue cycle management services tailored to your practice needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full bg-card rounded-xl border border-border p-8 hover:shadow-xl hover:border-secondary/30 transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Explore All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
