"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ArrowRight, Globe, Users, Clock, Award } from "lucide-react"

const highlights = [
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Operations in US, India, and Philippines",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "500+ certified billing professionals",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock support and processing",
  },
  {
    icon: Award,
    title: "HIPAA Compliant",
    description: "Fully certified and secure operations",
  },
]

const benefits = [
  "Customized solutions for your specialty",
  "Dedicated account management team",
  "Real-time analytics and reporting",
  "Seamless EHR/PM integration",
  "Transparent pricing with no hidden fees",
  "HIPAA compliant processes",
]

export function About() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-team.jpg"
                alt="Thermite Global Solutions team"
                fill
                className="object-cover"
              />
            </div>

            {/* Highlight Cards */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-xl shadow-xl p-6 border border-border max-w-xs hidden lg:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <p className="font-bold text-primary">15+ Years</p>
                  <p className="text-sm text-muted-foreground">Industry Experience</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by healthcare providers across the nation
              </p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-6">
              Your Partner for Healthcare Revenue Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Thermite Global Solutions, we combine cutting-edge technology with deep healthcare expertise to transform your revenue cycle. Our global team of certified professionals works tirelessly to maximize your collections and minimize denials.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/about">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-primary mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
