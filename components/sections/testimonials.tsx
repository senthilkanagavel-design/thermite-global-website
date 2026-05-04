"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "Thermite Global Solutions transformed our revenue cycle completely. We saw a 35% increase in collections within the first quarter and reduced our days in AR from 45 to just 28 days.",
    author: "Dr. Sarah Johnson",
    title: "CEO, Midwest Cardiology Associates",
    image: "/images/testimonial-1.jpg",
    metrics: ["35% increase in collections", "28 days in AR"],
  },
  {
    quote: "Their coding accuracy is exceptional. We went from a 15% denial rate to less than 3%. The team is responsive, knowledgeable, and truly partners with us on our success.",
    author: "Michael Chen",
    title: "Practice Administrator, Pacific Orthopedics",
    image: "/images/testimonial-2.jpg",
    metrics: ["3% denial rate", "97% clean claims"],
  },
  {
    quote: "The real-time analytics dashboard gives us complete visibility into our financial performance. I can now make data-driven decisions that have significantly improved our bottom line.",
    author: "Dr. Emily Rodriguez",
    title: "Medical Director, Southwest Radiology Group",
    image: "/images/testimonial-3.jpg",
    metrics: ["40% productivity increase", "Real-time insights"],
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Healthcare providers across the nation trust us with their revenue cycle management.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-8 hover:shadow-xl transition-shadow"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                <Quote className="h-6 w-6 text-secondary" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6">
                {`"${testimonial.quote}"`}
              </p>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-6">
                {testimonial.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="bg-secondary/10 text-secondary text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
