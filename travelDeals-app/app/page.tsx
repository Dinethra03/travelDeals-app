import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import DealsSection from "./components/DealsSection"
import Footer from "./components/Footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <DealsSection />
      <Footer />
    </main>
  )
}
