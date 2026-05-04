import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from "lucide-react"

const footerLinks = {
  services: [
    { name: "Complete RCM", href: "/services/rcm" },
    { name: "Medical Coding", href: "/services/coding" },
    { name: "Medical Billing", href: "/services/billing" },
    { name: "AR Recovery", href: "/services/ar-recovery" },
    { name: "Insurance Verification", href: "/services/insurance-verification" },
    { name: "Prior Authorization", href: "/services/prior-authorization" },
  ],
  specialties: [
    { name: "Cardiology", href: "/specialties/cardiology" },
    { name: "Orthopedics", href: "/specialties/orthopedics" },
    { name: "Radiology", href: "/specialties/radiology" },
    { name: "Hospital Billing", href: "/specialties/hospital" },
    { name: "Physician Groups", href: "/specialties/physician-groups" },
    { name: "Behavioral Health", href: "/specialties/behavioral-health" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/about/leadership" },
    { name: "Careers", href: "/about/careers" },
    { name: "Blog", href: "/resources/blog" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-c9i00mdtTZXex11Hq9i7jhqyhaEu3D.jpg"
                alt="Thermite Global Solutions"
                width={200}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm leading-relaxed">
              Revenue Cycle. Reimagined. We empower healthcare providers with comprehensive RCM solutions that drive financial performance and operational excellence.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+1-800-555-0199"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="h-5 w-5 text-accent" />
                <span>+1 (800) 555-0199</span>
              </a>
              <a
                href="mailto:info@thermiteglobal.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span>info@thermiteglobal.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Dallas, TX | Chennai, India | Manila, Philippines</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Specialties</h3>
            <ul className="space-y-2">
              {footerLinks.specialties.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-primary-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Thermite Global Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/hipaa"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                HIPAA Compliance
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
