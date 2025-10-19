import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import DarkModeTest from '@/components/DarkModeTest'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navigation />
      <Hero />
      <DarkModeTest />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}