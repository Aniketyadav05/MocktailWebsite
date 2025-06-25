import gsap from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import CocktailsSection from "./Components/CocktailsSection"
import About from "./Components/About"
import ArtSection from "./Components/ArtSection"
import Menu from "./Components/Menu"
import Contact from "./Components/Contact"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <CocktailsSection/>
      <About/>
      <ArtSection/>
      <Menu/>
      <Contact/>
    </main>
  )
}

export default App