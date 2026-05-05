"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  Globe, 
  Users, 
  Target, 
  Heart,
  ArrowRight,
  CheckCircle2,
  Award,
  Clock,
  Shield
} from "lucide-react"

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
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Healthcare Providers" },
  { value: "500+", label: "Team Members" },
  { value: "3", label: "Global Locations" },
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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
              Revenue Cycle. Reimagined.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              For over 15 years, we have been empowering healthcare providers with innovative revenue cycle solutions that drive financial performance and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary py-12">
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
                <p className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-1">{stat.value}</p>
                <p className="text-secondary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Built on a Foundation of Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Thermite Global Solutions was founded with a simple mission: to help healthcare providers focus on patient care by taking the complexity out of revenue cycle management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                What started as a small team of passionate billing experts has grown into a global organization with operations in the United States, India, and the Philippines. Our growth has been driven by our unwavering commitment to client success and our ability to deliver measurable results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                Today, we serve over 500 healthcare providers across all specialties, managing billions of dollars in claims annually. Our team of 500+ certified professionals combines deep healthcare expertise with cutting-edge technology to deliver industry-leading outcomes.
              </p>

              <Link href="/contact">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-story.jpg"
                  alt="Thermite Global Solutions team"
                  fill
                  className="object-cover"
                />
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our core values guide everything we do, from how we serve our clients to how we develop our team.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-5 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-8 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Global Presence</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Delivering Excellence Worldwide
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed mb-5">
                Our global delivery model combines the best of both worlds: US-based client management with highly skilled offshore teams that provide 24/7 coverage and significant cost advantages.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dallas, Texas (HQ)</h3>
                    <p className="text-primary-foreground/70">Corporate headquarters and US client operations</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Chennai, India</h3>
                    <p className="text-primary-foreground/70">Coding, billing, and AR management center</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Manila, Philippines</h3>
                    <p className="text-primary-foreground/70">Patient engagement and support services</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/global-presence.jpg"
                  alt="Global operations"
                  fill
                  className="object-cover"
                />
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Certifications</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Trusted & Certified
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to quality and compliance is demonstrated through our industry certifications and memberships.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-4 bg-card rounded-xl border border-border p-5"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-secondary" />
                </div>
                <span className="font-semibold text-primary">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-5">
              Join the growing number of healthcare providers who trust Thermite Global Solutions with their revenue cycle.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold px-8">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
