import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Thermite Global Solutions",
  description: "Privacy Policy for Thermite Global Solutions LLC — how we collect, use, protect and handle Protected Health Information in compliance with HIPAA.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">Privacy Policy</h1>
          <p className="text-base text-primary-foreground/80">Effective Date: May 01, 2026 &nbsp;·&nbsp; Thermite Global Solutions LLC</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-5 text-foreground">

            {/* Intro */}
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thermite Global Solutions LLC ("TGS," "we," "us," or "our") is a healthcare revenue cycle management company providing outsourced billing, coding and administrative services to healthcare providers across the United States. This Privacy Policy describes how we collect, use, store, disclose and protect information — including Protected Health Information ("PHI") — in the course of providing our services.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                By engaging our services or using our website, you acknowledge that you have read and understood this Privacy Policy.
              </p>
            </div>

            

            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">1. Who We Are</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thermite Global Solutions LLC is a limited liability company organised under the laws of the United States. We operate as a Business Associate (as defined under HIPAA) to our healthcare provider clients. Our operational and processing teams are located in India, and all client engagements explicitly disclose this arrangement. Our cross-border data handling practices are governed by our Business Associate Agreements and applicable US law.
              </p>
            </div>

            

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">2. Information We Collect</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">We collect and process the following categories of information in connection with our services:</p>

              <h3 className="text-base font-semibold text-primary mb-1.5">2.1 Protected Health Information (PHI)</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-1.5">In performing revenue cycle management services, we may access, receive, transmit or process PHI including but not limited to:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Patient name, date of birth, address and contact information</li>
                <li>Social Security numbers and government-issued identifiers</li>
                <li>Insurance member IDs, group numbers and payer information</li>
                <li>Diagnosis codes, procedure codes and clinical documentation</li>
                <li>Dates of service, provider information and facility details</li>
                <li>Explanation of Benefits (EOB) and remittance data</li>
                <li>Prior authorisation records and eligibility verification data</li>
              </ul>

              <h3 className="text-base font-semibold text-primary mt-3 mb-1.5">2.2 Methods of Data Access and Transfer</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-1.5">We access and receive client data through all channels necessary to perform our services, including:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Direct access to client EHR and Practice Management systems via secure remote login</li>
                <li>Secure file transfers (SFTP, encrypted email) initiated by the client</li>
                <li>Payer portals and clearinghouse platforms accessed on behalf of the client</li>
                <li>Scanned documents and paper records provided by the client</li>
                <li>EDI transactions including 270/271, 837, 835 and 277 transaction sets</li>
              </ul>

              <h3 className="text-base font-semibold text-primary mt-3 mb-1.5">2.3 Website and Business Contact Information</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">We also collect non-PHI information from visitors to our website and from prospective clients, including names, email addresses, phone numbers and business information submitted through our contact forms. This information is used solely for business communication purposes.</p>
            </div>

            

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">3. How We Use Information</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-1.5">We use PHI and client data exclusively to perform contracted revenue cycle management services, including:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Medical coding and charge capture</li>
                <li>Claim preparation and electronic submission to payers</li>
                <li>Insurance eligibility verification and benefits analysis</li>
                <li>Prior authorisation submission and follow-up</li>
                <li>Payment posting and account reconciliation</li>
                <li>Denial management and appeal submission</li>
                <li>Accounts receivable follow-up and collections support</li>
                <li>Provider credentialing and enrollment</li>
                <li>Reporting and analytics provided to the client</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                We do not use PHI for any purpose beyond what is required to perform our contracted services. We do not sell, rent or trade PHI or any client data to third parties for marketing or any other purpose.
              </p>
            </div>

            

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">4. HIPAA Compliance and Business Associate Agreement</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                TGS operates as a Business Associate under the Health Insurance Portability and Accountability Act of 1996 (HIPAA) and its implementing regulations, including the HIPAA Privacy Rule (45 CFR Part 164) and the HIPAA Security Rule.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                A fully executed Business Associate Agreement (BAA) is required with every client prior to commencement of services. The BAA governs the terms under which TGS may access, use and disclose PHI, and sets out the obligations of both parties in accordance with HIPAA requirements.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our BAA explicitly discloses that processing and operational activities are performed by TGS staff located in India. Clients acknowledge and consent to this cross-border arrangement as part of the BAA execution process. All staff handling PHI, regardless of location, are trained on HIPAA requirements and bound by confidentiality obligations.
              </p>
            </div>

            

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">5. Cross-Border Data Processing</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                TGS's operational and processing teams are based in India. PHI and client data processed on behalf of US healthcare providers may be accessed and handled by our India-based team in the course of providing services.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                We maintain the following safeguards for cross-border data handling:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>All cross-border data access is explicitly disclosed in and governed by the executed BAA</li>
                <li>Data is accessed through encrypted, secure channels only — no PHI is stored on personal or unmanaged devices</li>
                <li>All India-based staff handling PHI undergo HIPAA training and sign confidentiality agreements</li>
                <li>Access to client systems is role-based, audited and limited to what is necessary for the assigned task</li>
                <li>No PHI is transferred to any sub-processor without client knowledge and BAA coverage</li>
              </ul>
            </div>

            

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">6. How We Protect Information</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">We implement administrative, physical and technical safeguards to protect PHI and all client data, including:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Encrypted data transmission using TLS/SSL protocols for all data in transit</li>
                <li>Role-based access controls limiting data access to authorised personnel only</li>
                <li>Multi-factor authentication for all systems accessing PHI</li>
                <li>Regular security training and HIPAA awareness programmes for all staff</li>
                <li>Audit logs and access monitoring for all PHI-related system activity</li>
                <li>Secure disposal of PHI in accordance with HIPAA requirements</li>
                <li>Incident response procedures for potential breaches or security events</li>
              </ul>
            </div>

            

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">7. Disclosure of Information</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">We disclose PHI only as permitted or required under HIPAA and as specified in the executed BAA. Permitted disclosures include:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>To payers, clearinghouses and other covered entities as required to process claims on behalf of the client</li>
                <li>To government agencies or regulators as required by law</li>
                <li>To the client (Covered Entity) upon request</li>
                <li>In response to a valid court order, subpoena or legal process</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                We do not disclose PHI to any third party for marketing, commercial or any other purpose not directly related to the performance of our contracted services.
              </p>
            </div>

            

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">8. Data Retention</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We retain PHI and client data for the duration of our service engagement and for such period thereafter as required by applicable law or as specified in the BAA. Upon termination of services, PHI is returned to the client or securely destroyed in accordance with HIPAA requirements and the terms of the BAA.
              </p>
            </div>

            

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">9. Your Rights</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                As a Business Associate, TGS supports the ability of Covered Entity clients to fulfil their obligations to patients regarding their HIPAA rights. Patient rights requests — including requests for access, amendment or accounting of disclosures — should be directed to the treating provider or healthcare organisation (the Covered Entity), not to TGS directly.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you are a business contact or website visitor, you may request access to, correction of, or deletion of your non-PHI personal information by contacting us at the address below.
              </p>
            </div>

            

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">10. Breach Notification</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In the event of a breach of unsecured PHI, TGS will notify the affected Covered Entity client without unreasonable delay and no later than 60 calendar days after discovery of the breach, in accordance with the HIPAA Breach Notification Rule (45 CFR Part 164, Subpart D) and the terms of the executed BAA.
              </p>
            </div>

            

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">11. Changes to This Policy</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements or service offerings. We will notify active clients of any material changes. The effective date at the top of this page reflects the date of the most recent revision. Continued engagement with our services following any update constitutes acceptance of the revised policy.
              </p>
            </div>

            

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">12. Contact Us</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                For privacy-related questions, concerns or requests, please contact our Privacy Officer:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 border border-border space-y-1 text-sm text-muted-foreground">
                <p><span className="font-semibold text-primary">Thermite Global Solutions LLC</span></p>
                <p>Privacy Officer</p>
                <p>Email: <a href="mailto:privacy@thermiteglobal.com" className="text-secondary hover:underline">privacy@thermiteglobal.com</a></p>
                <p>Website: <a href="https://thermiteglobal.com" className="text-secondary hover:underline">thermiteglobal.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
