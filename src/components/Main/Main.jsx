import Hero from "../Hero/Hero"
import Projects from '../Projects/Projects'
import About from "../About/About"
import Contact from "../Contact/Contact"
import "./Main.css"

export default function Main(){
  return (
    <main className="main">
        <Hero />
        <div className="main__background">
          <About />
          <Projects />
          <Contact />
        </div>
    </main>
  )
}