"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const specialties = [
  {
    name: "Cardiology",
    description: "Expert billing for cardiovascular procedures and diagnostics",
    image: "/images/specialty-cardiology.jpg",
    href: "/specialties/cardiology",
  },
  {
    name: "Orthopedics",
    description: "Specialized coding for musculoskeletal services",
    image: "/images/specialty-orthopedics.jpg",
    href: "/specialties/orthopedics",
  },
  {
    name: "Radiology",
    description: "Comprehensive imaging and diagnostic billing",
    image: "/images/specialty-radiology.jpg",
    href: "/specialties/radiology",
  },
  {
    name: "Anesthesiology",
    description: "Complex time-based and modifier billing expertise",
    image: "/images/specialty-anesthesiology.jpg",
    href: "/specialties/anesthesiology",
  },
  {
    name: "Behavioral Health",
    description: "Mental health and substance abuse billing",
    image: "/images/specialty-behavioral.jpg",
    href: "/specialties/behavioral-health",
  },
  {
    name: "Urgent Care",
    description: "Fast-paced clinic billing and coding",
    image: "/images/specialty-urgent-care.jpg",
    href: "/specialties/urgent-care",
  },
]

export function Specialties() {
  return (
    <section className="py-12 lg:py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Specialties</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Expertise Across Medical Specialties
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our certified coders and billers have deep expertise in specialty-specific requirements, payer nuances, and compliance regulations.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={specialty.href} className="group block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={specialty.image}
                    alt={specialty.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{specialty.name}</h3>
                    <p className="text-white/80 text-sm">{specialty.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-secondary font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground mb-4">
            {"Don't see your specialty? We work with all medical specialties."}
          </p>
          <Link href="/contact" className="text-secondary font-semibold hover:underline inline-flex items-center gap-2">
            Contact us to discuss your needs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
