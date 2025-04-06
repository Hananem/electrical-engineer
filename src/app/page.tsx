import Hero from "@/components/hero"
import About from "@/components/about"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Timeline from "@/components/timeline"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
