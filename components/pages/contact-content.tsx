"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (800) 555-0199", "+1 (800) 555-0200"],
    description: "Mon-Fri from 8am to 6pm EST",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@thermiteglobal.com", "support@thermiteglobal.com"],
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Offices",
    details: ["Dallas, TX (HQ)", "Chennai, India", "Manila, Philippines"],
    description: "Global delivery centers",
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["24/7 Operations"],
    description: "Round-the-clock support available",
  },
]

const specialties = [
  "Cardiology",
  "Orthopedics",
  "Radiology",
  "Anesthesiology",
  "Behavioral Health",
  "Urgent Care",
  "Primary Care",
  "Multi-Specialty",
  "Hospital",
  "Other",
]

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    specialty: "",
    providers: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-6">
              {"Let's Start a Conversation"}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Ready to transform your revenue cycle? Schedule a free consultation with our RCM experts and discover how we can help maximize your collections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions about our services? Our team is here to help. Reach out through any of the channels below or fill out the form.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-foreground">{detail}</p>
                      ))}
                      <p className="text-sm text-muted-foreground mt-1">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-2xl border border-border p-8 shadow-lg">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been received. One of our RCM specialists will contact you within 24 hours.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary mb-2">Request a Consultation</h2>
                    <p className="text-muted-foreground mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                          Organization Name *
                        </label>
                        <Input
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="specialty" className="block text-sm font-medium text-foreground mb-2">
                            Medical Specialty
                          </label>
                          <select
                            id="specialty"
                            name="specialty"
                            value={formData.specialty}
                            onChange={handleChange}
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                          >
                            <option value="">Select specialty</option>
                            {specialties.map((specialty) => (
                              <option key={specialty} value={specialty}>{specialty}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="providers" className="block text-sm font-medium text-foreground mb-2">
                            Number of Providers
                          </label>
                          <select
                            id="providers"
                            name="providers"
                            value={formData.providers}
                            onChange={handleChange}
                            className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                          >
                            <option value="">Select range</option>
                            <option value="1-5">1-5 providers</option>
                            <option value="6-15">6-15 providers</option>
                            <option value="16-50">16-50 providers</option>
                            <option value="51-100">51-100 providers</option>
                            <option value="100+">100+ providers</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-md border border-input bg-background text-foreground resize-none"
                          placeholder="Tell us about your current challenges and goals..."
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        By submitting this form, you agree to our Privacy Policy and consent to be contacted by our team.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
