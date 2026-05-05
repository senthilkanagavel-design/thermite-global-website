"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Plug,
  RefreshCw,
  Shield,
  Zap,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  FileJson,
  Network,
} from "lucide-react"

const ehrSystems = [
  "Epic", "Cerner", "Athenahealth", "eClinicalWorks", "NextGen",
  "Meditech", "Allscripts", "Practice Fusion", "Kareo", "DrChrono",
  "AdvancedMD", "Greenway Health", "ModMed", "Veradigm", "Netsmart",
]

const clearinghouses = [
  "Change Healthcare", "Availity", "Waystar", "Office Ally", "Claim.MD",
  "Emdeon", "RelayHealth", "Optum", "Trizetto",
]

const integrationFeatures = [
  {
    icon: RefreshCw,
    title: "Bi-Directional Sync",
    description:
      "Data flows both ways — patient demographics, charge data, and payment EOBs are exchanged in real time with zero manual intervention.",
  },
  {
    icon: FileJson,
    title: "HL7 & FHIR Compliant",
    description:
      "We speak every major healthcare data standard: HL7 v2, FHIR R4, X12 EDI 837/835 — whatever your system requires.",
  },
  {
    icon: Shield,
    title: "Encrypted in Transit & at Rest",
    description:
      "All data exchanged through our integration layer is encrypted with AES-256 and TLS 1.3, fully HIPAA compliant.",
  },
  {
    icon: Zap,
    title: "Real-Time, Not Batch",
    description:
      "No overnight file drops. Claims, eligibility responses, and payment posts are processed and reflected within minutes.",
  },
  {
    icon: Clock,
    title: "48-Hour Go-Live",
    description:
      "Our integration team handles the full technical setup. Most clients are live and processing claims within 48 hours of kickoff.",
  },
  {
    icon: Network,
    title: "No Middleware Required",
    description:
      "We connect directly to your EHR's API or SFTP endpoint — no third-party middleware licenses or additional IT overhead.",
  },
]

export function IntegrationsPageContent() {
  return (
    <>
      {/* Back Nav */}
      <div className="bg-primary border-b border-white/10">
        <div className="container mx-auto px-4 py-3">
          <Link href="/technology" className="flex items-center gap-2 text-white/60 hover:text-amber-400 transition-colors text-sm">
            <ArrowLeft className="h-4 w-4" />
            Back to Technology
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-8 lg:py-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                <Plug className="h-5 w-5 text-accent" />
              </div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Integration Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Your EHR. Our Platform. Zero Friction.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-6 max-w-2xl">
              We integrate with 100+ EHR, PM, and clearinghouse systems — and our team handles the entire setup. No IT projects, no manual exports, no data silos.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold px-8">
                Check Your EHR
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            {[
              { value: "100+", label: "EHR & PM Systems" },
              { value: "48hr", label: "Average Go-Live" },
              { value: "99.9%", label: "Integration Uptime" },
              { value: "0", label: "Manual Exports Needed" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-1">{s.value}</p>
                <p className="text-secondary-foreground/80">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Features */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Enterprise Connectivity Without the IT Project
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our integration team has connected hundreds of systems. We know your EHR's quirks better than most of your own IT staff.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* EHR List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-muted/40 rounded-2xl border border-border p-8"
          >
            <div className="text-center mb-6">
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Supported EHR & PM Systems</span>
              <h3 className="text-2xl font-bold text-primary mt-2">We Connect With Your System</h3>
            </div>
            <div className="flex flex-wrap gap-3 justify-center mb-6">
              {ehrSystems.map((ehr) => (
                <span key={ehr} className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-medium text-primary">
                  {ehr}
                </span>
              ))}
            </div>

            <div className="border-t border-border pt-8">
              <div className="text-center mb-4">
                <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Clearinghouses</span>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                {clearinghouses.map((ch) => (
                  <span key={ch} className="bg-card border border-border rounded-lg px-4 py-2 text-sm font-medium text-primary">
                    {ch}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-6">
              Don't see your system? <Link href="/contact" className="text-secondary hover:underline font-medium">Contact us</Link> — we build custom integrations on request.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Ready to Connect?
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-6">
              Tell us your EHR and we'll confirm compatibility and scope your integration in one call — usually under 30 minutes.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-secondary hover:bg-white/90 font-semibold px-8">
                Talk to an Integration Specialist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
