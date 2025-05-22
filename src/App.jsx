import Home from "././components/home/Home"
import About from "././components/about/About"
import Skills from "././components/skills/Skills"
import Services from "././components/services/Services"
import Projects from "./components/projects/Projects"
import Contact from "././components/contact/Contact"
import Footer from "././components/footer/Footer"
import Nav from "././components/nav/Nav"
function App() {

  return (
    <div> 
      
      <Home/>
      <Nav/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
