"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const features = [
  "98% Clean Claims Rate",
  "40% Reduction in AR Days",
  "24/7 Global Operations",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-accent/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Trusted by 500+ Healthcare Providers
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-5">
              Revenue Cycle.{" "}
              <span className="text-secondary">Reimagined.</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
              Comprehensive healthcare revenue cycle management solutions that maximize collections, reduce denials, and streamline your financial operations.
            </p>

            {/* Feature List */}
            <div className="flex flex-wrap gap-3 mb-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 text-foreground/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 gap-2">
                  Get Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 gap-2">
                  <Play className="h-5 w-5" />
                  Watch How It Works
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-healthcare.jpg"
                alt="Healthcare professionals using modern RCM technology"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-xl p-6 border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-secondary">$</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">$2.5B+</p>
                  <p className="text-sm text-muted-foreground">Revenue Collected</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-card rounded-xl shadow-xl p-4 border border-border"
            >
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">98%</p>
                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  )
}
