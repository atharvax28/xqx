import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="hero-gradient text-white relative">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
          Dr. Vinayak Vitthal Tayade
        </h1>
        <p className="text-xl md:text-2xl mb-2 font-light">B.A.M.S. MD (Ayurveda), Ph.D (Ayurveda)</p>
        <p className="text-lg md:text-xl mb-8 font-light">Ex. Senate Member MUHS, Founder Member APGA</p>
        <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300">
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  )
}

