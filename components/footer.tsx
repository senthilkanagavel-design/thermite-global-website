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
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <Image
                src="/tgs-logo-transparent.png"
                alt="Thermite Global Solutions"
                width={100}
                height={100}
                className="h-16 w-auto object-contain"
              />
              <div className="flex flex-col leading-tight border-l border-white/20 pl-3">
                <span className="text-white font-semibold text-base tracking-wide">Thermite Global Solutions</span>
                <span className="text-amber-400 text-xs tracking-widest uppercase">Revenue Cycle. Reimagined.</span>
              </div>
            </Link>
            <p className="text-white/60 mb-4 max-w-sm leading-relaxed text-sm">
              We empower healthcare providers with comprehensive RCM solutions that drive financial performance and operational excellence.
            </p>
            <div className="space-y-2">
              <a href="tel:+10000000000" className="flex items-center gap-3 text-white/60 hover:text-amber-400 transition-colors text-sm">
                <Phone className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>+1 (000) 000-0000</span>
              </a>
              <a href="mailto:test@thermiteglobal.com" className="flex items-center gap-3 text-white/60 hover:text-amber-400 transition-colors text-sm">
                <Mail className="h-4 w-4 text-amber-400 flex-shrink-0" />
                <span>test@thermiteglobal.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="h-4 w-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Dallas, TX | Chennai, India | Manila, Philippines</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-3 text-amber-400">Services</h3>
            <ul className="space-y-1.5">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-3 text-amber-400">Specialties</h3>
            <ul className="space-y-1.5">
              {footerLinks.specialties.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-widest mb-3 text-amber-400">Company</h3>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <div className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Thermite Global Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</Link>
              <Link href="/hipaa" className="text-white/40 hover:text-white text-xs transition-colors">HIPAA Compliance</Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-amber-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-amber-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-amber-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
