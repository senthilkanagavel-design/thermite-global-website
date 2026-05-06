"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Globe, Users, Target, Heart, ArrowRight, Shield } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every claim we process, every code we assign, and every client interaction.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "We operate with complete transparency and honesty in all our business dealings and client relationships.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work as an extension of your team, partnering with you to achieve your financial goals.",
  },
  {
    icon: Globe,
    title: "Innovation",
    description: "We continuously invest in technology and processes to deliver better outcomes for our clients.",
  },
]

const stats = [
  { value: "Certified", label: "& Experienced Team" },
  { value: "All", label: "Major Specialties" },
  { value: "2", label: "Global Locations" },
  { value: "24/7", label: "Operations" },
]

const certifications = [
  "HIPAA Compliant",
  "AAPC Certified Coders",
  "AHIMA Certified Specialists",
  "HBMA Member",
]

export function AboutPageContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">
              Revenue Cycle. Reimagined.
            </h1>
            <p className="text-base text-primary-foreground/80 leading-relaxed">
              We help healthcare providers focus on patient care by taking the complexity out of revenue cycle management — with certified expertise, proprietary technology and a team that treats your practice as our own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-secondary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">
                Built on a Foundation of Excellence
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Thermite Global Solutions was founded with a simple mission — to help healthcare providers focus on patient care by taking the complexity out of revenue cycle management.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                We combine certified RCM expertise with Thrive, our proprietary workflow and analytics platform, to give clients complete visibility into their AR, denials and collection performance — in real time.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Our operations span the United States and Chennai, India — giving clients US-based account management with a highly skilled team providing round-the-clock processing and support.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/images/about-story.jpg" alt="Thermite Global Solutions team" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-2">What Drives Us</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our core values guide everything we do — from how we serve our clients to how we develop our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-5 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <value.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-primary mb-1.5">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Locations</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-3">
                Two Locations. One Standard.
              </h2>
              <p className="text-sm text-primary-foreground/80 leading-relaxed mb-5">
                Our delivery model combines US-based client management with a highly skilled team in Chennai, India — delivering 24/7 coverage and consistent quality across every engagement.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-0.5">United States</h3>
                    <p className="text-sm text-primary-foreground/70">Client management and US operations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-0.5">Chennai, India</h3>
                    <p className="text-sm text-primary-foreground/70">Coding, billing, AR and operations centre</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/images/global-presence.jpg" alt="Global operations" fill className="object-cover object-center" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-2">Trusted & Certified</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our commitment to quality and compliance is demonstrated through our industry certifications and memberships.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 bg-card rounded-xl border border-border px-5 py-3"
              >
                <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-4 w-4 text-secondary" />
                </div>
                <span className="font-semibold text-sm text-primary">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-secondary-foreground mb-2">Ready to Partner With Us?</h2>
            <p className="text-sm text-secondary-foreground/80 mb-5">
              Contact us to discuss how TGS can support your revenue cycle and help your practice collect every dollar it earns.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold px-8">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
