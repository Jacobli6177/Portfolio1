import Hero from "../sections/Hero"
import ShowcaseSection from "../sections/ShowcaseSection"
import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
    </>
  )
}

export default App
