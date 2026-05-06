"use client"

import { motion, animate } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

type StatItem =
  | { isText: true; textValue: string; label: string; description: string; value?: never; suffix?: never; prefix?: never }
  | { isText?: false; value: number; suffix: string; label: string; description: string; prefix?: string; textValue?: never }

const stats: StatItem[] = [
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
    isText: true,
    textValue: "All Specialties",
    label: "Coverage",
    description: "Across all major specialties",
  },
  {
    isText: true,
    textValue: "Full-Cycle",
    label: "RCM Service",
    description: "End-to-end revenue management",
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
      {prefix}{displayValue}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-6 bg-primary relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Results That Matter</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
            Proven Performance Metrics
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10 items-start">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.isText === true ? (
                  <span className="text-3xl md:text-4xl">{stat.textValue}</span>
                ) : (
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                )}
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
