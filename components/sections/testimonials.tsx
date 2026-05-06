"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Shield, BarChart3, Users } from "lucide-react"

const approaches = [
  {
    icon: Target,
    title: "Outcome-First Thinking",
    description: "Every decision we make starts with one question — does this improve collections, reduce denials or save your team time? If not, we don't do it.",
  },
  {
    icon: Eye,
    title: "Full Transparency",
    description: "You have complete visibility into every claim, every denial and every dollar. No black boxes, no surprises — just clear, real-time reporting.",
  },
  {
    icon: Heart,
    title: "Your Practice, Our Priority",
    description: "We don't manage accounts — we partner with practices. Your dedicated team learns your workflows, your payers and your goals.",
  },
  {
    icon: Shield,
    title: "Compliance at the Core",
    description: "HIPAA compliance isn't a feature — it's how we operate. Every process, every system and every staff member is held to the same standard.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven at Every Step",
    description: "We use performance data to continuously improve — denial trends, payer behaviour and coding patterns all feed back into how we work.",
  },
  {
    icon: Users,
    title: "People Who Know RCM",
    description: "Our team is made up of certified coders, experienced billers and RCM specialists — not generalists handed a billing manual.",
  },
]

export function Testimonials() {
  return (
    <section className="py-6 lg:py-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">
            How We Think About RCM
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            The principles that guide every engagement — from onboarding your first claim to recovering your oldest denial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {approaches.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-card border border-border rounded-xl p-5 hover:border-secondary/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                <item.icon className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-base font-bold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
