"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

// ─── Navigation Data ───────────────────────────────────────────────────────

const servicesNav = {
  name: "Services",
  href: "/services",
  groups: [
    {
      label: "Revenue Cycle Management",
      items: [
        { name: "Complete RCM", href: "/services/rcm" },
        { name: "Medical Coding", href: "/services/coding" },
        { name: "Medical Billing", href: "/services/billing" },
        { name: "AR Recovery", href: "/services/ar-recovery" },
        { name: "Denial Management", href: "/services/denial-management" },
        { name: "Payment Posting", href: "/services/payment-posting" },
        { name: "Credentialing", href: "/services/credentialing" },
      ],
    },
    {
      label: "Verification Services",
      items: [
        { name: "Insurance Verification", href: "/services/insurance-verification" },
        { name: "Prior Authorization", href: "/services/prior-authorization" },
        { name: "Benefits Verification", href: "/services/benefits-verification" },
      ],
    },
  ],
}

const simpleNavItems = [
  {
    name: "Specialties",
    href: "/specialties",
    items: [
      { name: "Cardiology", href: "/specialties/cardiology" },
      { name: "Orthopedics", href: "/specialties/orthopedics" },
      { name: "Radiology", href: "/specialties/radiology" },
      { name: "Anesthesiology", href: "/specialties/anesthesiology" },
      { name: "Hospital Billing", href: "/specialties/hospital" },
      { name: "Physician Groups", href: "/specialties/physician-groups" },
      { name: "Urgent Care", href: "/specialties/urgent-care" },
      { name: "Behavioral Health", href: "/specialties/behavioral-health" },
    ],
  },
  {
    name: "About",
    href: "/about",
    items: [
      { name: "Why TGS", href: "/about/why-tgs" },
      { name: "About Us", href: "/about" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Careers", href: "/about/careers" },
    ],
  },
  {
    name: "Resources",
    href: "/resources",
    items: [
      { name: "Blog", href: "/resources/blog" },
      { name: "Case Studies", href: "/resources/case-studies" },
    ],
  },
]

// ─── Dropdown link style ───────────────────────────────────────────────────
const dropLink = "block px-3 py-1.5 text-sm text-white/70 hover:text-amber-400 hover:bg-white/5 rounded transition-colors whitespace-nowrap"

// ─── Services Nested Dropdown ──────────────────────────────────────────────
function ServicesDropdown() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null)

  return (
    <div className="bg-[#0d1f3c] rounded-lg shadow-2xl border border-white/10 py-2 min-w-[280px]">
      {servicesNav.groups.map((group) => (
        <div
          key={group.label}
          className="relative"
          onMouseEnter={() => setActiveGroup(group.label)}
          onMouseLeave={() => setActiveGroup(null)}
        >
          <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-semibold text-amber-400 hover:bg-white/5 transition-colors gap-4 text-left">
            {group.label}
            <ChevronRight className="h-3.5 w-3.5 flex-shrink-0" />
          </button>

          <AnimatePresence>
            {activeGroup === group.label && (
              <motion.div
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute left-full top-0 pl-1"
              >
                <div className="bg-[#0d1f3c] rounded-lg shadow-2xl border border-white/10 py-2 min-w-[200px]">
                  {group.items.map((item) => (
                    <Link key={item.name} href={item.href} className={dropLink}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}

// ─── Simple Dropdown ───────────────────────────────────────────────────────
function SimpleDropdown({ items }: { items: { name: string; href: string }[] }) {
  return (
    <div className="bg-[#0d1f3c] rounded-lg shadow-2xl border border-white/10 py-2 min-w-[180px]">
      {items.map((item) => (
        <Link key={item.name} href={item.href} className={dropLink}>
          {item.name}
        </Link>
      ))}
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────
export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenMenu(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 100)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0a1628] border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/tgs-logo-transparent.png"
              alt="Thermite Global Solutions"
              width={100}
              height={100}
              className="h-16 w-auto object-contain"
              priority
            />
            <div className="hidden sm:flex flex-col leading-tight border-l border-white/20 pl-3">
              <span className="text-white font-semibold text-base tracking-wide">Thermite Global Solutions</span>
              <span className="text-amber-400 text-xs tracking-widest uppercase">Revenue Cycle. Reimagined.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Services — nested */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("Services")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={servicesNav.href} className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-amber-400 font-medium transition-colors text-sm">
                Services <ChevronDown className="h-3.5 w-3.5" />
              </Link>
              <AnimatePresence>
                {openMenu === "Services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => handleMouseEnter("Services")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ServicesDropdown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Simple dropdowns */}
            {simpleNavItems.map((nav) => (
              <div
                key={nav.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(nav.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link href={nav.href} className="flex items-center gap-1 px-4 py-2 text-white/80 hover:text-amber-400 font-medium transition-colors text-sm">
                  {nav.name} <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <AnimatePresence>
                  {openMenu === nav.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 pt-2"
                      onMouseEnter={() => handleMouseEnter(nav.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <SimpleDropdown items={nav.items} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="h-8 w-px bg-white/20" />
            <a href="tel:+10000000000" className="flex items-center gap-2 text-white/70 hover:text-amber-400 transition-colors text-sm">
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

          {/* Mobile button */}
          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
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
            className="lg:hidden border-t border-white/10 bg-[#0a1628] overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">

              {/* Services mobile */}
              <MobileSection label="Services" href="/services">
                {servicesNav.groups.map((group) => (
                  <div key={group.label} className="mb-3">
                    <p className="text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1.5">{group.label}</p>
                    {group.items.map((item) => (
                      <Link key={item.name} href={item.href} className="block py-1 text-sm text-white/60 hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </MobileSection>

              {/* Simple nav mobile */}
              {simpleNavItems.map((nav) => (
                <MobileSection key={nav.name} label={nav.name} href={nav.href}>
                  {nav.items.map((item) => (
                    <Link key={item.name} href={item.href} className="block py-1 text-sm text-white/60 hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      {item.name}
                    </Link>
                  ))}
                </MobileSection>
              ))}

              <div className="mt-4 pt-4 border-t border-white/10 space-y-3">
                <a href="tel:+10000000000" className="flex items-center gap-2 text-white/60 text-sm">
                  <Phone className="h-4 w-4" /><span>+1 (000) 000-0000</span>
                </a>
                <a href="mailto:test@thermiteglobal.com" className="flex items-center gap-2 text-white/60 text-sm">
                  <Mail className="h-4 w-4" /><span>test@thermiteglobal.com</span>
                </a>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold mt-2">Get Started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MobileSection({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button className="flex items-center justify-between w-full py-3 text-white font-medium text-sm" onClick={() => setIsOpen(!isOpen)}>
        {label}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-4 pl-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
