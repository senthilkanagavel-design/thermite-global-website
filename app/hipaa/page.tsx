import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ShieldCheck, Lock, Bell, Users, FileText, ArrowRight, CheckCircle } from "lucide-react"

export const metadata = {
  title: "HIPAA Compliance | Thermite Global Solutions",
  description: "Thermite Global Solutions is fully committed to HIPAA compliance in every aspect of our revenue cycle management services. Learn how we protect your patient data.",
}

const safeguards = [
  {
    category: "Administrative Safeguards",
    icon: FileText,
    items: [
      "Designated HIPAA Privacy and Security Officer",
      "Mandatory HIPAA training for all staff prior to PHI access",
      "Annual HIPAA refresher training and policy reviews",
      "Role-based access — staff access only what their role requires",
      "Workforce confidentiality agreements signed by all employees",
      "Documented incident response and breach notification procedures",
      "Regular internal HIPAA compliance audits",
    ],
  },
  {
    category: "Technical Safeguards",
    icon: Lock,
    items: [
      "TLS/SSL encryption for all data in transit",
      "Multi-factor authentication for all systems handling PHI",
      "Role-based access controls with least-privilege enforcement",
      "Audit logs and access monitoring on all PHI-related systems",
      "Automatic session timeouts on all workstations",
      "Secure disposal of electronic PHI per HIPAA requirements",
      "No PHI stored on personal or unmanaged devices",
    ],
  },
  {
    category: "Physical Safeguards",
    icon: ShieldCheck,
    items: [
      "Restricted access to workstations handling PHI",
      "Secure, access-controlled office facilities in Chennai, India",
      "Screen privacy filters on all workstations accessing client systems",
      "No printing or physical reproduction of PHI without authorisation",
      "Secure document destruction for any physical PHI materials",
      "CCTV monitoring in all operational areas",
    ],
  },
]

const rules = [
  {
    icon: ShieldCheck,
    title: "HIPAA Privacy Rule",
    subtitle: "45 CFR Part 164",
    description: "Governs how PHI may be used and disclosed. As a Business Associate, TGS uses PHI solely to perform contracted RCM services and never for any secondary purpose. All permitted uses and disclosures are defined in our executed BAA with each client.",
  },
  {
    icon: Lock,
    title: "HIPAA Security Rule",
    subtitle: "45 CFR Part 164",
    description: "Requires administrative, physical and technical safeguards to protect electronic PHI. TGS implements all required safeguards across our India-based operations, with encrypted access, MFA, audit logging and role-based controls applied consistently.",
  },
  {
    icon: Bell,
    title: "HIPAA Breach Notification Rule",
    subtitle: "45 CFR Part 164, Subpart D",
    description: "Requires timely notification of PHI breaches. TGS maintains documented incident response procedures and will notify affected Covered Entity clients without unreasonable delay and no later than 60 days following discovery of any breach.",
  },
]

export default function HipaaPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Compliance</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">
              HIPAA Compliance
            </h1>
            <p className="text-base text-primary-foreground/80 leading-relaxed max-w-2xl">
              Protecting your patients' health information is not a checkbox for us — it is a core operating principle embedded in every process, every system and every person at Thermite Global Solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Statement */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Commitment</span>
              <h2 className="text-3xl font-bold text-primary mt-2 mb-3">We Operate as Your Business Associate</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Under HIPAA, Thermite Global Solutions operates as a Business Associate to each of our healthcare provider clients. This means we are legally and contractually bound to protect every piece of Protected Health Information (PHI) we access, process or transmit on your behalf.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                A fully executed Business Associate Agreement (BAA) is mandatory before any services commence. The BAA defines exactly how we may use your patients' information — and what we are prohibited from doing with it.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                Our operational team is based in Chennai, India. This is explicitly disclosed in every BAA we execute. All India-based staff are HIPAA trained, bound by confidentiality agreements and access PHI only through secure, encrypted channels.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
                Request a BAA <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100%", label: "BAA Executed Before Any Service" },
                { value: "All Staff", label: "HIPAA Trained Prior to PHI Access" },
                { value: "60 Days", label: "Maximum Breach Notification Window" },
                { value: "Zero", label: "PHI Used for Non-Service Purposes" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Three HIPAA Rules */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">The Framework</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">Three Rules. Full Compliance.</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">HIPAA is built on three core rules. Here is how TGS meets each one in the context of our RCM services.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {rules.map((rule) => (
              <div key={rule.title} className="bg-card border border-border rounded-xl p-5 hover:border-secondary/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
                  <rule.icon className="h-5 w-5 text-secondary" />
                </div>
                <h3 className="text-base font-bold text-primary mb-0.5">{rule.title}</h3>
                <p className="text-xs text-secondary font-medium mb-2">{rule.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{rule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safeguards */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Safeguards</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">How We Protect Your Data</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive safeguards across three dimensions — administrative, technical and physical.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {safeguards.map((s) => (
              <div key={s.category} className="bg-card border border-border rounded-xl p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <s.icon className="h-4 w-4 text-secondary" />
                  </div>
                  <h3 className="text-sm font-bold text-primary">{s.category}</h3>
                </div>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-muted-foreground leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Border Transparency */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-5">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Transparency</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">India Operations — Fully Disclosed</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We believe in complete transparency. Our revenue cycle processing is performed by our team in Chennai, India. This is not hidden — it is explicitly stated in every BAA we execute with our clients.
            </p>
          </div>
          <div className="bg-card border border-border rounded-xl p-5">
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "India operations disclosed in every BAA before services begin",
                "All India-based staff HIPAA trained and certified",
                "PHI accessed only via encrypted, secure remote connections",
                "No PHI stored on personal or unmanaged devices",
                "Role-based access — each staff member sees only what their task requires",
                "Confidentiality agreements signed by every employee handling PHI",
                "Access logs maintained and available for client audit on request",
                "No sub-processors engaged without client knowledge and BAA coverage",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-muted-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BAA CTA */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="flex justify-center mb-3">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <Users className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">Ready to Get Started?</h2>
          <p className="text-sm text-primary-foreground/80 leading-relaxed mb-5">
            Every client engagement begins with a Business Associate Agreement. Contact us to receive our BAA, discuss your compliance requirements or ask any questions about how we protect your patients' data.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
              Request a BAA <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/privacy" className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-sm font-semibold px-6 py-2.5 rounded-lg transition-colors">
              Read Our Privacy Policy
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
