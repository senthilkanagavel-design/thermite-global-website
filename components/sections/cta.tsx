"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone, Calendar } from "lucide-react"

export function CTA() {
  return (
    <section className="py-10 lg:py-14 bg-gradient-to-br from-secondary via-secondary/95 to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
            Ready to Transform Your Revenue Cycle?
          </h2>
          <p className="text-base md:text-lg text-secondary-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our RCM experts and discover how we can help maximize your collections and streamline your operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold px-8 gap-2">
                <Calendar className="h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
            <a href="tel:+1-800-555-0199">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 gap-2">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
            </a>
          </div>

          <p className="mt-8 text-secondary-foreground/60 text-sm">
            No commitment required. Free revenue analysis included.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
