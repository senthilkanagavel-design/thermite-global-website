"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const stats = [
  {
    value: 98,
    suffix: "%",
    label: "Clean Claims Rate",
    description: "First-pass acceptance rate",
  },
  {
    value: 40,
    suffix: "%",
    label: "AR Days Reduction",
    description: "Average improvement for clients",
  },
  {
    value: 500,
    suffix: "+",
    label: "Healthcare Providers",
    description: "Trust us with their RCM",
  },
  {
    value: 2.5,
    suffix: "B+",
    label: "Revenue Collected",
    description: "Annual collections managed",
    prefix: "$",
  },
]

function AnimatedCounter({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Number(latest.toFixed(1)))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Results That Matter</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2">
            Proven Performance Metrics
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-primary-foreground mb-1">
                {stat.label}
              </h3>
              <p className="text-primary-foreground/60 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
