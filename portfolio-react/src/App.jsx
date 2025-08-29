import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Formations from './components/Formations.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Socials from './components/Socials.jsx'

export default function App(){
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <Hero />
        <About />
        <Skills />
        <Formations />
        <Contact />
      </main>
      <Footer />
      <Socials />
    </>
  )
}