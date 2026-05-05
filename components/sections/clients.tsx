"use client"

import { motion } from "framer-motion"

const certifications = [
  { name: "HIPAA Compliant", abbr: "HIPAA" },
  { name: "HIPAA Compliant", abbr: "HIPAA" },
  { name: "AAPC Member", abbr: "AAPC" },
  { name: "AHIMA Member", abbr: "AHIMA" },
  { name: "HBMA Member", abbr: "HBMA" },
  { name: "ISO 27001", abbr: "ISO" },
]

export function Clients() {
  return (
    <section className="py-6 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <p className="text-muted-foreground text-sm font-medium">
            Certified & Trusted by Healthcare Organizations Nationwide
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center gap-1.5"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <span className="text-xs font-bold text-primary">{cert.abbr}</span>
              </div>
              <span className="text-xs text-muted-foreground font-medium">{cert.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
