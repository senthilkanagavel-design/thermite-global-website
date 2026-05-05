"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Cpu, 
  Shield, 
  Users, 
  BarChart3, 
  HeadphonesIcon, 
  Zap 
} from "lucide-react"

const reasons = [
  {
    icon: Cpu,
    title: "Advanced Technology",
    description: "AI-powered automation, real-time analytics, and seamless EHR integration to optimize every step of your revenue cycle.",
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Enterprise-grade security with full HIPAA compliance, ensuring your patient data is always protected.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "500+ certified coders and billing specialists with deep expertise across all medical specialties.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description: "Custom dashboards and real-time reporting give you complete visibility into your financial performance.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "24/7 customer support with dedicated account managers who understand your practice inside and out.",
  },
  {
    icon: Zap,
    title: "Fast Implementation",
    description: "Go live in as little as 30 days with our proven onboarding process and minimal disruption to your operations.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-6 lg:py-6 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              The Thermite Advantage
            </h2>
            <p className="text-base text-primary-foreground/80 leading-relaxed mb-5">
              We combine cutting-edge technology with deep healthcare expertise to deliver results that matter. Here&apos;s what sets us apart from other RCM providers.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                      <reason.icon className="h-6 w-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{reason.title}</h3>
                    <p className="text-sm text-primary-foreground/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/why-choose-us.jpg"
                alt="Advanced healthcare technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-2xl p-6 border border-border"
            >
              <div className="text-center">
                <p className="text-4xl font-bold text-secondary">15+</p>
                <p className="text-sm text-foreground/70">Years of Excellence</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
