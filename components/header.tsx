"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigationItems = [
  {
    name: "Services",
    href: "/services",
    submenu: [
      {
        category: "Revenue Cycle Management",
        items: [
          { name: "Complete RCM Solutions", href: "/services/rcm", description: "End-to-end revenue cycle management" },
          { name: "Medical Coding", href: "/services/coding", description: "ICD-10, CPT, and HCPCS coding services" },
          { name: "Medical Billing", href: "/services/billing", description: "Comprehensive billing solutions" },
          { name: "AR Recovery", href: "/services/ar-recovery", description: "Accounts receivable management" },
        ],
      },
      {
        category: "Verification Services",
        items: [
          { name: "Insurance Verification", href: "/services/insurance-verification", description: "Real-time eligibility checks" },
          { name: "Prior Authorization", href: "/services/prior-authorization", description: "Streamlined authorization process" },
          { name: "Benefits Verification", href: "/services/benefits-verification", description: "Complete benefits analysis" },
        ],
      },
      {
        category: "Specialty Services",
        items: [
          { name: "Denial Management", href: "/services/denial-management", description: "Reduce and prevent claim denials" },
          { name: "Payment Posting", href: "/services/payment-posting", description: "Accurate payment reconciliation" },
          { name: "Credentialing", href: "/services/credentialing", description: "Provider enrollment services" },
        ],
      },
    ],
  },
  {
    name: "Specialties",
    href: "/specialties",
    submenu: [
      {
        category: "Medical Specialties",
        items: [
          { name: "Cardiology", href: "/specialties/cardiology", description: "Heart and cardiovascular billing" },
          { name: "Orthopedics", href: "/specialties/orthopedics", description: "Musculoskeletal services" },
          { name: "Radiology", href: "/specialties/radiology", description: "Imaging and diagnostic billing" },
          { name: "Anesthesiology", href: "/specialties/anesthesiology", description: "Anesthesia billing expertise" },
        ],
      },
      {
        category: "Healthcare Settings",
        items: [
          { name: "Hospital Billing", href: "/specialties/hospital", description: "Inpatient and outpatient billing" },
          { name: "Physician Groups", href: "/specialties/physician-groups", description: "Multi-specialty practices" },
          { name: "Urgent Care", href: "/specialties/urgent-care", description: "Fast-paced clinic billing" },
          { name: "Behavioral Health", href: "/specialties/behavioral-health", description: "Mental health services" },
        ],
      },
    ],
  },
  {
    name: "Technology",
    href: "/technology",
    submenu: [
      {
        category: "Our Platform",
        items: [
          { name: "Analytics Dashboard", href: "/technology/analytics", description: "Real-time performance insights" },
          { name: "AI-Powered Solutions", href: "/technology/ai-solutions", description: "Machine learning optimization" },
          { name: "Integration Hub", href: "/technology/integrations", description: "EHR and PM system connectivity" },
        ],
      },
    ],
  },
  {
    name: "About",
    href: "/about",
    submenu: [
      {
        category: "Our Company",
        items: [
          { name: "About Us", href: "/about", description: "Our mission and values" },
          { name: "Leadership Team", href: "/about/leadership", description: "Meet our executives" },
          { name: "Careers", href: "/about/careers", description: "Join our growing team" },
          { name: "Global Presence", href: "/about/global", description: "Our worldwide operations" },
        ],
      },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    submenu: [
      {
        category: "Learn More",
        items: [
          { name: "Blog", href: "/resources/blog", description: "Industry insights and updates" },
          { name: "Case Studies", href: "/resources/case-studies", description: "Client success stories" },
          { name: "Whitepapers", href: "/resources/whitepapers", description: "In-depth research reports" },
          { name: "FAQ", href: "/resources/faq", description: "Common questions answered" },
        ],
      },
    ],
  },
]

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-[#0a1628] border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Thermite Global Solutions"
              width={200}
              height={70}
              className="h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.name)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-amber-400 font-medium transition-colors text-sm"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>

                <AnimatePresence>
                  {openMenu === item.name && item.submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="bg-[#0d1f3c] rounded-lg shadow-2xl border border-white/10 p-6 min-w-[600px]">
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                          {item.submenu.map((category) => (
                            <div key={category.category}>
                              <h3 className="font-semibold text-amber-400 mb-3 text-xs uppercase tracking-widest">
                                {category.category}
                              </h3>
                              <ul className="space-y-2">
                                {category.items.map((subItem) => (
                                  <li key={subItem.name}>
                                    <Link
                                      href={subItem.href}
                                      className="group block p-2 rounded-md hover:bg-white/5 transition-colors"
                                    >
                                      <span className="font-medium text-white group-hover:text-amber-400 transition-colors text-sm">
                                        {subItem.name}
                                      </span>
                                      <p className="text-xs text-white/50 mt-0.5">
                                        {subItem.description}
                                      </p>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side — phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="h-8 w-px bg-white/20" />
            <a
              href="tel:+10000000000"
              className="flex items-center gap-2 text-white/70 hover:text-amber-400 transition-colors text-sm"
            >
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span>+1 (000) 000-0000</span>
            </a>
            <div className="h-8 w-px bg-white/20" />
            <Link href="/contact">
              <Button className="bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold px-6">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-[#0a1628]"
          >
            <div className="container mx-auto px-4 py-4">
              {navigationItems.map((item) => (
                <MobileMenuItem key={item.name} item={item} />
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                <a href="tel:+10000000000" className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+1 (000) 000-0000</span>
                </a>
                <a href="mailto:test@thermiteglobal.com" className="flex items-center gap-2 text-white/60 text-sm">
                  <Mail className="h-4 w-4" />
                  <span>test@thermiteglobal.com</span>
                </a>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold mt-2">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileMenuItem({ item }: { item: typeof navigationItems[0] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-3 text-white font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.name}
        {item.submenu && (
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        )}
      </button>
      <AnimatePresence>
        {isOpen && item.submenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-4">
              {item.submenu.map((category) => (
                <div key={category.category} className="mb-4">
                  <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-2">
                    {category.category}
                  </h4>
                  <ul className="space-y-2">
                    {category.items.map((subItem) => (
                      <li key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className="block text-white/60 hover:text-amber-400 transition-colors text-sm"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
