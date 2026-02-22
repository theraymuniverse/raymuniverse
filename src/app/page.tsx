import Hero from './components/Hero'
import ProcessSection from './components/Process'
import ContactSection from './components/Contact'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import FAQ from './components/FAQ'
import Portfolio from './components/Portfolio'
import About from './components/About'


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <ServicesSection />
      <ProcessSection />
      <Portfolio />
      <ContactSection />
      <FAQ/>
    </main>
  )
}