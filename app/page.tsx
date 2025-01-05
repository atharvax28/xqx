import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Awards from './components/Awards'
import Publications from './components/Publications'
import SocialWork from './components/SocialWork'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Experience />
        <Awards />
        <Publications />
        <SocialWork />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

