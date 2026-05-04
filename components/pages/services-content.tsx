"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  FileCode2, 
  Receipt, 
  TrendingUp, 
  Shield, 
  ClipboardCheck, 
  CreditCard,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "Complete RCM Solutions",
    description: "End-to-end revenue cycle management from patient scheduling to final payment collection. We handle every aspect of your billing operations.",
    href: "/services/rcm",
    image: "/images/service-rcm.jpg",
    features: [
      "Patient registration and scheduling",
      "Insurance eligibility verification",
      "Charge capture and coding",
      "Claim submission and scrubbing",
      "Payment posting and reconciliation",
      "Denial management and appeals",
      "Patient billing and collections",
      "Financial reporting and analytics",
    ],
  },
  {
    icon: FileCode2,
    title: "Medical Coding",
    description: "Expert ICD-10, CPT, and HCPCS coding services with 99% accuracy rate. Our certified coders ensure proper code selection for maximum reimbursement.",
    href: "/services/coding",
    image: "/images/service-coding.jpg",
    features: [
      "ICD-10-CM/PCS coding",
      "CPT and HCPCS coding",
      "E/M coding optimization",
      "Modifier selection and validation",
      "Coding audits and compliance",
      "HCC and risk adjustment coding",
      "Specialty-specific coding expertise",
      "Ongoing coder education and training",
    ],
  },
  {
    icon: Receipt,
    title: "Medical Billing",
    description: "Comprehensive billing solutions that accelerate cash flow and reduce days in AR. We handle claims submission, follow-up, and appeals.",
    href: "/services/billing",
    image: "/images/service-billing.jpg",
    features: [
      "Clean claim submission",
      "Electronic and paper claims",
      "Claim status tracking",
      "Payment posting automation",
      "Patient statement generation",
      "Secondary billing",
      "Self-pay management",
      "Credit balance resolution",
    ],
  },
  {
    icon: TrendingUp,
    title: "AR Recovery",
    description: "Aggressive accounts receivable management to recover aged claims and improve your bottom line with proven collection strategies.",
    href: "/services/ar-recovery",
    image: "/images/service-ar.jpg",
    features: [
      "Aged AR analysis and prioritization",
      "Insurance follow-up",
      "Denial appeals management",
      "Underpayment identification",
      "Payer contract compliance",
      "Patient collections",
      "Bad debt prevention",
      "Collection reporting",
    ],
  },
  {
    icon: Shield,
    title: "Insurance Verification",
    description: "Real-time eligibility verification and benefits analysis to prevent claim denials and ensure accurate patient responsibility estimates.",
    href: "/services/insurance-verification",
    image: "/images/service-verification.jpg",
    features: [
      "Real-time eligibility checks",
      "Benefits verification",
      "Coverage determination",
      "Deductible and copay calculation",
      "Out-of-pocket maximum tracking",
      "Network status verification",
      "Authorization requirements check",
      "Patient financial counseling support",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Prior Authorization",
    description: "Streamlined prior authorization process to reduce delays and improve approval rates for procedures and medications.",
    href: "/services/prior-authorization",
    image: "/images/service-auth.jpg",
    features: [
      "Authorization submission",
      "Medical necessity documentation",
      "Peer-to-peer coordination",
      "Appeal management",
      "Authorization tracking",
      "Expiration monitoring",
      "Retro-authorization support",
      "Denial prevention strategies",
    ],
  },
]

export function ServicesPageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-6">
              Comprehensive RCM Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              From coding to collections, we provide end-to-end revenue cycle management services that maximize your reimbursement and minimize administrative burden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-secondary flex items-center justify-center shadow-lg">
                    <service.icon className="h-10 w-10 text-secondary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.href}>
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Ready to Optimize Your Revenue Cycle?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a free consultation to discuss your specific needs and discover how we can help improve your financial performance.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
