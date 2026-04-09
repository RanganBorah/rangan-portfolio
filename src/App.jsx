import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Resume from "./sections/Resume"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App