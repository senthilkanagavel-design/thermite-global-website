import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AnalyticsPageContent } from "@/components/pages/analytics-content"

export const metadata = {
  title: "Analytics Dashboard | Thermite Global Solutions",
  description:
    "Real-time revenue cycle analytics with customizable KPIs, denial trend reports, and predictive cash flow — all in one dashboard.",
}

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnalyticsPageContent />
      <Footer />
    </main>
  )
}
