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
  BarChart2,
  DollarSign,
  Users,
  CheckCircle,
  ArrowRight
} from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "Complete RCM",
    description: "End-to-end revenue cycle management from patient registration to final payment.",
    href: "/services/rcm",
  },
  {
    icon: FileCode2,
    title: "Medical Coding",
    description: "ICD-10, CPT and HCPCS coding with 99% accuracy across all specialties.",
    href: "/services/coding",
  },
  {
    icon: Receipt,
    title: "Medical Billing",
    description: "Clean claim submission, follow-up and appeals to accelerate cash flow.",
    href: "/services/billing",
  },
  {
    icon: TrendingUp,
    title: "AR Recovery",
    description: "Aged claim recovery and payer follow-up to maximise collections.",
    href: "/services/ar-recovery",
  },
  {
    icon: BarChart2,
    title: "Denial Management",
    description: "Root cause analysis, appeals and denial prevention strategies.",
    href: "/services/denial-management",
  },
  {
    icon: Shield,
    title: "Insurance Verification",
    description: "Real-time eligibility and benefits verification before every visit.",
    href: "/services/insurance-verification",
  },
  {
    icon: ClipboardCheck,
    title: "Prior Authorization",
    description: "Auth submission, tracking and follow-up to reduce treatment delays.",
    href: "/services/prior-authorization",
  },
  {
    icon: DollarSign,
    title: "Payment Posting",
    description: "Same-day ERA/EOB posting, reconciliation and variance identification.",
    href: "/services/payment-posting",
  },
  {
    icon: Users,
    title: "Credentialing",
    description: "Provider enrollment and re-credentialing across all payers.",
    href: "/services/credentialing",
  },
  {
    icon: CheckCircle,
    title: "Benefits Verification",
    description: "Coverage, co-pay and deductible confirmation before every encounter.",
    href: "/services/benefits-verification",
  },
]

export function Services() {
  return (
    <section className="py-6 lg:py-10 bg-background">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">
            Comprehensive RCM Solutions
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            From coding to collections — end-to-end revenue cycle management tailored to your practice.
          </p>
        </motion.div>

        {/* 5-column 2-row grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link href={service.href} className="group block h-full">
                <div className="h-full bg-card rounded-xl border border-border p-4 hover:shadow-md hover:border-secondary/40 transition-all duration-300 flex flex-col">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary transition-all duration-300 flex-shrink-0">
                    <service.icon className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-primary mb-1.5 group-hover:text-secondary transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {service.description}
                  </p>

                  {/* Learn More */}
                  <div className="flex items-center gap-1 text-secondary text-xs font-medium mt-3 group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="h-3 w-3" />
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
          className="text-center mt-6"
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
