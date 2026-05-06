"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const faqs = [
  {
    question: "What is Revenue Cycle Management (RCM)?",
    answer: "Revenue Cycle Management encompasses all administrative and clinical functions that contribute to the capture, management, and collection of patient service revenue. It includes patient registration, insurance verification, coding, claim submission, payment posting, denial management, and collections.",
  },
  {
    question: "How quickly can you implement your RCM services?",
    answer: "Our typical implementation timeline is 30-45 days from contract signing to go-live. This includes staff onboarding, workflow setup, process configuration, and a parallel billing period to ensure a smooth transition with minimal disruption to your operations.",
  },
  {
    question: "What specialties do you support?",
    answer: "We support all medical specialties including cardiology, orthopedics, radiology, anesthesiology, behavioral health, urgent care, primary care, and more. Our certified coders have specialty-specific training and stay current with the latest coding guidelines and payer requirements.",
  },
  {
    question: "How do you ensure HIPAA compliance?",
    answer: "We maintain strict HIPAA compliance through comprehensive security measures including encrypted data transmission, secure facilities, regular security audits, employee training, and business associate agreements. ",
  },
  {
    question: "How do you handle claim denials?",
    answer: "Our denial management team analyzes each denial to identify root causes, corrects issues, and resubmits claims promptly. We also implement proactive denial prevention strategies by identifying patterns and addressing issues before they result in denials.",
  },
  {
    question: "What reporting and analytics do you provide?",
    answer: "We provide real-time dashboards and comprehensive reports through Thrive — our proprietary RCM platform — covering key metrics like clean claim rates, days in AR, denial rates, collection rates and payer performance. Your dedicated account manager reviews these with you regularly.",
  },
  {
    question: "What are your pricing models?",
    answer: "We offer flexible pricing models including percentage of collections, fixed monthly fees, per-claim pricing, or hybrid models. Our pricing is transparent with no hidden fees, and we tailor our approach based on your practice size and needs.",
  },
]

export function FAQ() {
  return (
    <section className="py-6 lg:py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Get answers to common questions about our revenue cycle management services. Have more questions? Our team is here to help.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-primary hover:text-secondary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
