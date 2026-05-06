import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Thermite Global Solutions",
  description: "Terms of Service for Thermite Global Solutions — governing the use of our website and engagement of our healthcare revenue cycle management services.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-primary py-10 lg:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Legal</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-3">Terms of Service</h1>
          <p className="text-base text-primary-foreground/80">Effective Date: May 01, 2026 &nbsp;·&nbsp; Thermite Global Solutions</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none space-y-5 text-foreground">

            {/* Intro */}
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the website located at thermiteglobal.com (the "Website") and the revenue cycle management services ("Services") provided by Thermite Global Solutions ("TGS," "we," "us," or "our"), a company registered and operating in Chennai, Tamil Nadu, India.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                By accessing our Website or engaging our Services, you ("Client" or "you") agree to be bound by these Terms. If you do not agree, please do not use our Website or engage our Services. For service-specific arrangements, a separate Service Agreement and Business Associate Agreement (BAA) will govern the terms of engagement and shall take precedence over these Terms in the event of any conflict.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">1. Acceptance of Terms</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                By using this Website or engaging TGS for services, you represent that you are authorised to enter into a binding agreement on behalf of your organisation, that your organisation is a legally operating healthcare provider or related entity in the United States, and that you have read, understood and agree to these Terms in their entirety.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">2. Description of Services</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                TGS provides outsourced healthcare revenue cycle management services to US-based healthcare providers. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Medical coding and charge capture</li>
                <li>Medical billing and claim submission</li>
                <li>Insurance eligibility and benefits verification</li>
                <li>Prior authorisation management</li>
                <li>Payment posting and reconciliation</li>
                <li>Denial management and appeals</li>
                <li>Accounts receivable follow-up</li>
                <li>Provider credentialing and enrollment</li>
                <li>Revenue cycle reporting and analytics</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                The specific scope of services for each client will be defined in a separate written Service Agreement executed between TGS and the Client. No services will commence prior to execution of both a Service Agreement and a Business Associate Agreement.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">3. Client Responsibilities</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">To enable TGS to perform services effectively, the Client agrees to:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Provide accurate, complete and timely patient demographic, clinical and insurance information</li>
                <li>Grant TGS the necessary access to EHR, practice management systems and payer portals required to perform the agreed services</li>
                <li>Ensure that all information provided to TGS is obtained and shared in compliance with applicable laws including HIPAA</li>
                <li>Designate a point of contact responsible for communication with TGS and timely responses to queries</li>
                <li>Promptly notify TGS of any changes to payer contracts, credentialing status, or billing requirements that may affect service delivery</li>
                <li>Maintain responsibility for all clinical decisions, medical necessity determinations and the accuracy of clinical documentation</li>
                <li>Ensure compliance with all applicable federal, state and local laws governing the Client's healthcare operations</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                TGS's ability to perform services is directly dependent on the accuracy and timeliness of information provided by the Client. TGS shall not be liable for outcomes resulting from incomplete, inaccurate or untimely information provided by the Client.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">4. Fees and Payment</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Fees for TGS services are agreed upon in the Service Agreement executed between the parties. General terms applicable to all engagements include:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Fees are invoiced in accordance with the billing schedule set out in the Service Agreement</li>
                <li>Payment is due within the timeframe specified in the Service Agreement from the date of invoice</li>
                <li>TGS reserves the right to suspend services in the event of non-payment following reasonable notice to the Client</li>
                <li>All fees are exclusive of applicable taxes, which shall be the responsibility of the Client where required by law</li>
                <li>Disputed invoices must be raised in writing within 14 days of receipt; undisputed amounts remain due and payable</li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">5. HIPAA Compliance and Business Associate Agreement</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                TGS performs services as a Business Associate as defined under the Health Insurance Portability and Accountability Act of 1996 (HIPAA). A fully executed Business Associate Agreement is a mandatory prerequisite to the commencement of any service that involves access to Protected Health Information (PHI).
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                The BAA sets out the terms governing TGS's access to, use of and disclosure of PHI, and supersedes these Terms with respect to all PHI-related matters. Key disclosures within the BAA include:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>TGS's operational and processing work is performed by staff based in India</li>
                <li>All India-based staff are trained on HIPAA requirements and bound by confidentiality agreements</li>
                <li>PHI is accessed and processed only through secure, encrypted channels</li>
                <li>No PHI is shared with any sub-processor not covered by a BAA or equivalent agreement</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                The Client, as the Covered Entity, remains ultimately responsible for ensuring compliance with HIPAA in connection with their healthcare operations. TGS supports this compliance in its role as Business Associate.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">6. Confidentiality</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                Each party agrees to maintain the confidentiality of the other party's non-public, proprietary or confidential information ("Confidential Information") disclosed in connection with the engagement. Confidential Information includes but is not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Patient data and PHI (governed separately under the BAA)</li>
                <li>Business processes, pricing and operational methodologies</li>
                <li>Software, systems and technology used to deliver services</li>
                <li>Client practice data, payer contracts and financial information</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Confidentiality obligations survive the termination of the engagement for a period of three (3) years, except with respect to PHI which is governed by the BAA and applicable law for the duration required.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">7. Intellectual Property</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                All intellectual property rights in TGS's methodologies, processes, templates, software, technology and reporting tools remain the sole and exclusive property of TGS. Nothing in these Terms or any Service Agreement transfers ownership of TGS intellectual property to the Client.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Reports, analytics and outputs generated by TGS specifically for the Client using the Client's data are provided to the Client for their internal business use. The Client retains ownership of their own data, including patient records and practice management data, at all times.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">8. Representations and Warranties</h2>
              <h3 className="text-base font-semibold text-primary mb-1.5">8.1 TGS Represents That:</h3>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>It has the authority to enter into and perform its obligations under these Terms and any Service Agreement</li>
                <li>Services will be performed by qualified personnel with relevant expertise in healthcare revenue cycle management</li>
                <li>It will comply with HIPAA obligations applicable to it as a Business Associate</li>
                <li>It will perform services with reasonable care and in accordance with generally accepted industry standards</li>
              </ul>
              <h3 className="text-base font-semibold text-primary mt-3 mb-1.5">8.2 The Client Represents That:</h3>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>It is a legally operating healthcare provider or related entity authorised to provide and share patient information for billing purposes</li>
                <li>It has the right to provide TGS with access to the systems, data and information necessary for TGS to perform services</li>
                <li>All clinical documentation and information provided to TGS is accurate to the best of the Client's knowledge</li>
                <li>It will comply with all applicable US federal and state laws governing its healthcare operations</li>
              </ul>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">9. Limitation of Liability</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                To the maximum extent permitted by applicable law:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>TGS's total liability to the Client for any claim arising out of or in connection with these Terms or any Service Agreement shall not exceed the total fees paid by the Client to TGS in the three (3) months immediately preceding the event giving rise to the claim</li>
                <li>TGS shall not be liable for any indirect, consequential, incidental or punitive damages, including loss of revenue, loss of profits or loss of data, even if advised of the possibility of such damages</li>
                <li>TGS shall not be liable for claim denials, payment delays or revenue shortfalls resulting from inaccurate or incomplete information provided by the Client, payer decisions, or factors outside TGS's reasonable control</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Nothing in these Terms limits liability for fraud, gross negligence, wilful misconduct or liability that cannot be excluded by law.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">10. Indemnification</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">Each party agrees to indemnify, defend and hold harmless the other party from and against any claims, losses, damages and expenses (including reasonable legal fees) arising from:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li><span className="font-medium text-foreground">Client indemnifies TGS</span> against claims arising from inaccurate or incomplete information provided by the Client, the Client's failure to comply with applicable laws, or the Client's clinical decisions and medical necessity determinations</li>
                <li><span className="font-medium text-foreground">TGS indemnifies the Client</span> against claims arising from TGS's gross negligence, wilful misconduct or material breach of its obligations under these Terms or the executed BAA</li>
              </ul>
            </div>

            {/* 11 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">11. Term and Termination</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                The term of service engagement is as set out in the applicable Service Agreement. Either party may terminate the engagement:
              </p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>For convenience, by providing written notice as specified in the Service Agreement</li>
                <li>Immediately, in the event of a material breach by the other party that is not remedied within thirty (30) days of written notice</li>
                <li>Immediately, in the event of the other party's insolvency, bankruptcy or cessation of business</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                Upon termination, TGS will cease all services and return or securely destroy all Client PHI and data in accordance with the BAA. Outstanding fees for services rendered up to the date of termination remain due and payable. Provisions relating to confidentiality, intellectual property, limitation of liability and governing law survive termination.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">12. Governing Law and Jurisdiction</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These Terms and any disputes arising out of or in connection with them shall be governed by and construed in accordance with the laws of India. The parties submit to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu, India for the resolution of any disputes, without prejudice to TGS's obligations as a Business Associate under US HIPAA law which shall remain applicable regardless of governing jurisdiction.
              </p>
            </div>

            {/* 13 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">13. Dispute Resolution</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                In the event of a dispute, the parties agree to first attempt resolution through good faith negotiation between senior representatives of each party for a period of thirty (30) days. If the dispute is not resolved through negotiation, either party may pursue resolution through the courts of Chennai, Tamil Nadu, India in accordance with Section 12 above.
              </p>
            </div>

            {/* 14 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">14. Website Use</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">With respect to your use of the TGS website, you agree not to:</p>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li>Use the website for any unlawful purpose or in violation of any applicable regulations</li>
                <li>Attempt to gain unauthorised access to any systems or data connected to the website</li>
                <li>Reproduce, distribute or exploit any content on the website without prior written consent from TGS</li>
                <li>Submit false, misleading or fraudulent information through any contact or inquiry form</li>
              </ul>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                TGS makes no warranty that the website will be available without interruption or that the information on the website is complete, accurate or current. Website content is provided for informational purposes only and does not constitute professional, legal or medical advice.
              </p>
            </div>

            {/* 15 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">15. Amendments</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                TGS reserves the right to update these Terms at any time. Material changes will be communicated to active clients in writing. The updated Terms will be effective from the date posted on the website. Continued use of the website or continued engagement of services following any update constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* 16 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">16. General</h2>
              <ul className="list-disc pl-5 space-y-0.5 text-muted-foreground text-sm">
                <li><span className="font-medium text-foreground">Entire Agreement:</span> These Terms, together with the executed Service Agreement and BAA, constitute the entire agreement between the parties and supersede all prior discussions, representations or agreements</li>
                <li><span className="font-medium text-foreground">Severability:</span> If any provision of these Terms is found to be unenforceable, the remaining provisions continue in full force and effect</li>
                <li><span className="font-medium text-foreground">Waiver:</span> Failure by either party to enforce any provision does not constitute a waiver of that provision</li>
                <li><span className="font-medium text-foreground">Force Majeure:</span> Neither party shall be liable for delays or failures in performance resulting from causes beyond their reasonable control</li>
                <li><span className="font-medium text-foreground">No Assignment:</span> Neither party may assign their rights or obligations under these Terms without prior written consent of the other party</li>
              </ul>
            </div>

            {/* 17 */}
            <div>
              <h2 className="text-xl font-bold text-primary mb-2">17. Contact Us</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                For questions regarding these Terms, please contact us at:
              </p>
              <div className="bg-muted/50 rounded-lg p-4 border border-border space-y-1 text-sm text-muted-foreground">
                <p><span className="font-semibold text-primary">Thermite Global Solutions</span></p>
                <p>Chennai, Tamil Nadu, India</p>
                <p>Email: <a href="mailto:legal@thermiteglobal.com" className="text-secondary hover:underline">legal@thermiteglobal.com</a></p>
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
