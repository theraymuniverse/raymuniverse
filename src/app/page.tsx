import Hero from './components/Hero'
import ProcessSection from './components/Process'
import ContactSection from './components/Contact'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Pricing from './components/Pricing'


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
      {/* <Pricing /> */}
      <FAQ/>
    </main>
  )
}