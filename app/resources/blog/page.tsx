import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Blog | Thermite Global Solutions",
  description: "RCM insights, billing guidance and healthcare revenue cycle articles from the TGS team.",
}

const posts = [
  {
    category: "Denial Management",
    title: "The Top 5 Reasons Claims Get Denied — And How to Fix Them",
    excerpt: "Claim denials are the single biggest revenue leakage point for most practices. Here's how to identify the root causes and build a prevention strategy that actually works.",
    readTime: "5 min read",
  },
  {
    category: "Medical Coding",
    title: "ICD-10 Updates: What Every Billing Team Needs to Know",
    excerpt: "Annual ICD-10 code updates bring new codes, revised descriptions and deleted codes that directly affect claim acceptance. A practical guide to staying current.",
    readTime: "4 min read",
  },
  {
    category: "AR Management",
    title: "How to Reduce Days in AR Without Burning Out Your Team",
    excerpt: "High AR days signal a revenue cycle problem — but the solution isn't always more staff. Here's a process-first approach to getting paid faster.",
    readTime: "6 min read",
  },
  {
    category: "Prior Authorization",
    title: "Prior Auth Delays Are Costing Your Practice More Than You Think",
    excerpt: "Delayed authorisations don't just slow down care — they create billing gaps, rescheduling costs and denials that compound over time. Here's how to manage the process proactively.",
    readTime: "4 min read",
  },
  {
    category: "Compliance",
    title: "HIPAA Compliance in an Outsourced RCM Environment",
    excerpt: "Outsourcing your billing doesn't transfer your HIPAA obligations — it extends them. What every practice should verify before sharing patient data with a third party.",
    readTime: "5 min read",
  },
  {
    category: "Revenue Cycle",
    title: "The RCM KPIs Every Practice Manager Should Be Tracking",
    excerpt: "Clean claim rate, days in AR, denial rate, net collection ratio — these numbers tell the story of your revenue cycle. Here's what each one means and what to do when they're off.",
    readTime: "7 min read",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">RCM Insights</h1>
          <p className="text-base text-primary-foreground/80 leading-relaxed">
            Practical articles on medical billing, coding, AR management and revenue cycle best practices — written by our specialists.
          </p>
        </div>
      </section>

      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {posts.map((post) => (
              <div key={post.title} className="bg-card border border-border rounded-xl p-5 hover:border-secondary/30 hover:shadow-md transition-all flex flex-col">
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">{post.category}</span>
                <h2 className="text-sm font-bold text-primary mb-2 leading-snug">{post.title}</h2>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <div className="flex items-center gap-1 text-secondary text-xs font-medium">
                    Read More <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">More articles coming soon. <Link href="/contact" className="text-secondary hover:underline">Contact us</Link> with topics you'd like us to cover.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
