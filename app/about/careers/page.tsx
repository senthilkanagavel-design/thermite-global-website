"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight, MapPin, Clock, Users, Briefcase, Mail } from "lucide-react"
import { useState } from "react"

const openings = [
  {
    department: "Demo & Charges",
    title: "Sr. Executive — Demo & Charges",
    vacancies: 3,
    experience: "2 – 3 years",
    location: "Chennai, India",
    shift: "General",
    jd: [
      "Review and process patient demographic information ensuring accuracy before charge entry",
      "Enter and validate charges from clinical documentation into the practice management system",
      "Verify insurance eligibility and ensure correct payer information is captured at the front end",
      "Coordinate with clinical teams to resolve charge discrepancies and missing documentation",
      "Maintain productivity and quality benchmarks in line with department SLAs",
    ],
  },
  {
    department: "Payment Posting",
    title: "Sr. Executive — Payment Posting",
    vacancies: 5,
    experience: "2 – 3 years",
    location: "Chennai, India",
    shift: "General",
    jd: [
      "Post insurance and patient payments accurately from ERA, EOB and manual remittances",
      "Reconcile daily payment batches against deposit records and resolve variances",
      "Identify underpayments and contractual discrepancies and flag for follow-up",
      "Process adjustments, write-offs and credit balances in line with payer contracts",
      "Maintain zero unposted backlog with high accuracy across multiple payer types",
    ],
  },
  {
    department: "AR",
    title: "Sr. Account Receivable Executive",
    vacancies: 7,
    experience: "3.5 – 4 years",
    location: "Chennai, India",
    shift: "Night Shift — CST Time Zone",
    note: "Travel allowance provided in addition to CTC.",
    jd: [
      "Work aged and NDNP claims proactively via payer portals and telephone follow-up",
      "Analyse denial reason codes and initiate appropriate appeal or corrective action",
      "Prioritise high-value accounts and ensure timely resolution within payer deadlines",
      "Document all account activity clearly in the practice management system",
      "Meet daily productivity targets and contribute to team denial reduction goals",
    ],
  },
  {
    department: "Technology",
    title: "L2 Programmer",
    vacancies: 2,
    experience: "2+ years",
    location: "Chennai, India",
    shift: "General",
    tags: ["AI Tools", "Python", "ASP.NET Core", "PostgreSQL"],
    jd: [
      "Develop and maintain modules within Thrive, our proprietary RCM platform, using ASP.NET Core and PostgreSQL",
      "Build and integrate AI-assisted workflows and automation bots to support RCM operations",
      "Write clean, maintainable Python scripts for data processing, reporting and workflow automation",
      "Troubleshoot and resolve L2 technical issues raised by the operations team with minimal downtime",
      "Collaborate with operations and product leads to translate RCM process requirements into technical solutions",
    ],
  },
  {
    department: "RCM Operations",
    title: "Operations Manager — RCM",
    vacancies: 1,
    experience: "7 – 8 years",
    location: "Chennai, India",
    shift: "Flexible shift",
    note: "Realistic performance-based bonus structure.",
    jd: [
      "Oversee end-to-end RCM operations across coding, billing, AR and payment posting teams",
      "Set and monitor team KPIs including clean claim rate, AR days, denial rate and collection performance",
      "Develop and implement process improvements that drive measurable gains in revenue cycle efficiency",
      "Manage team leads, conduct performance reviews and build a culture of accountability and continuous improvement",
      "Serve as the primary operational escalation point for client issues and liaise with client success managers",
    ],
  },
]

function ApplyModal({ role, onClose }: { role: string; onClose: () => void }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [experience, setExperience] = useState("")
  const [why, setWhy] = useState("")

  const handleApply = () => {
    const subject = encodeURIComponent(`Application — ${role}`)
    const body = encodeURIComponent(
`Role Applied For: ${role}

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Years of Experience: ${experience}

Why I'm a good fit:
${why}

---
Please find my resume attached to this email.`
    )
    window.location.href = `mailto:careers@thermiteglobal.com?subject=${subject}&body=${body}`
    onClose()
  }

  const isValid = name.trim() && email.trim() && phone.trim() && experience.trim()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-card border border-border rounded-2xl shadow-2xl w-full max-w-md p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Applying for</p>
          <h2 className="text-lg font-bold text-primary">{role}</h2>
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
            <Mail className="h-3 w-3" /> Your details will open in your email app. Attach your resume before sending.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Full Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Email Address *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Phone Number *</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 00000 00000"
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Years of Relevant Experience *</label>
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="e.g. 3 years"
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-secondary transition-colors"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-foreground mb-1 block">Why are you a good fit? <span className="text-muted-foreground">(optional)</span></label>
            <textarea
              value={why}
              onChange={(e) => setWhy(e.target.value)}
              placeholder="Briefly describe your relevant experience and why you're interested in this role..."
              rows={3}
              className="w-full px-3 py-2 text-sm border border-border rounded-lg bg-background focus:outline-none focus:border-secondary transition-colors resize-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2.5 text-sm font-medium border border-border rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            disabled={!isValid}
            className="flex-1 px-4 py-2.5 text-sm font-semibold bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            Open Email App <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <p className="text-[10px] text-muted-foreground text-center mt-3">
          This will open your email app pre-filled with your details. Please attach your resume (PDF) before sending.
        </p>
      </div>
    </div>
  )
}

export default function CareersPage() {
  const [activeRole, setActiveRole] = useState<string | null>(null)

  return (
    <main className="min-h-screen">
      <Header />

      {activeRole && (
        <ApplyModal role={activeRole} onClose={() => setActiveRole(null)} />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">We're Hiring</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">
            Build Your RCM Career with TGS
          </h1>
          <p className="text-base text-primary-foreground/80 leading-relaxed">
            We're looking for experienced RCM professionals who take pride in their work. If you're serious about revenue cycle management, we'd like to meet you.
          </p>
        </div>
      </section>

      {/* Why TGS */}
      <section className="py-6 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Users, title: "Team-First Culture", desc: "Collaborative environment where your work is seen and valued" },
              { icon: Briefcase, title: "Domain Expertise", desc: "Work on real RCM — coding, billing, AR, denials and technology" },
              { icon: Clock, title: "Growth Opportunities", desc: "Clear career paths with performance-based progression" },
              { icon: MapPin, title: "Chennai Based", desc: "Operations centre in Chennai with competitive compensation" },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="w-9 h-9 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="h-4 w-4 text-secondary" />
                </div>
                <h3 className="text-sm font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Open Positions</span>
            <h2 className="text-3xl font-bold text-primary mt-2 mb-2">Current Openings</h2>
            <p className="text-sm text-muted-foreground">
              {openings.reduce((a, b) => a + b.vacancies, 0)} positions across {openings.length} departments — Chennai, India
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openings.map((job) => (
              <div key={job.title} className="bg-card border border-border rounded-xl p-5 hover:border-secondary/30 hover:shadow-md transition-all">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{job.department}</span>
                    <h3 className="text-base font-bold text-primary mt-0.5">{job.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary/10 text-secondary text-xs font-medium px-2.5 py-1 rounded-full">
                      {job.vacancies} {job.vacancies === 1 ? "Opening" : "Openings"}
                    </span>
                    <span className="bg-muted text-muted-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                      {job.experience} exp.
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><MapPin className="h-3 w-3" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {job.shift}</span>
                </div>

                {/* Tags */}
                {job.tags && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {job.tags.map((tag) => (
                      <span key={tag} className="bg-accent/10 text-accent text-xs font-medium px-2 py-0.5 rounded">{tag}</span>
                    ))}
                  </div>
                )}

                {/* JD */}
                <ul className="space-y-1.5 mb-4">
                  {job.jd.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                {job.note && (
                  <p className="text-xs text-secondary font-medium mb-4">* {job.note}</p>
                )}

                {/* Apply Button */}
                <button
                  onClick={() => setActiveRole(job.title)}
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-8 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-primary-foreground mb-2">Don't See Your Role?</h2>
          <p className="text-sm text-primary-foreground/80 leading-relaxed mb-5">
            We're always looking for talented RCM professionals. Send us your profile and we'll be in touch when the right opportunity arises.
          </p>
          <button
            onClick={() => setActiveRole("General Application")}
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground text-sm font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Send Your Profile <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
