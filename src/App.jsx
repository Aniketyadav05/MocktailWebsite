import gsap from "gsap"
import {ScrollTrigger, SplitText} from "gsap/all"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import CocktailsSection from "./Components/CocktailsSection"
import About from "./Components/About"

gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Hero/>
      <CocktailsSection/>
      <About/>
    </main>
  )
}

export default App