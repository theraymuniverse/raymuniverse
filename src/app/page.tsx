import dynamic from 'next/dynamic'
import Hero from './components/Hero'

// Dynamically import below-the-fold components for better initial load
const About = dynamic(() => import('./components/About'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true,
})

const ServicesSection = dynamic(() => import('./components/ServicesSection'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true,
})

const ProcessSection = dynamic(() => import('./components/Process'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true,
})

const Portfolio = dynamic(() => import('./components/Portfolio'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true,
})

const ContactSection = dynamic(() => import('./components/Contact'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true,
})

const FAQ = dynamic(() => import('./components/FAQ'), {
  loading: () => <div className="h-96 bg-black" />,
  ssr: true,
})

export default function Home() {
  return (
    <main className="min-h-screen text-foreground">
      {/* Hero is loaded immediately since it's above the fold */}
      <Hero />

      {/* Below-the-fold components are code-split */}
      <About />
      <ServicesSection />
      <ProcessSection />
      <Portfolio />
      <ContactSection />
      <FAQ />
    </main>
  )
}