import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { Portfolio } from './components/Portfolio'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Certifications />
        <Portfolio />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
