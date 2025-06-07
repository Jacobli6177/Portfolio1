import Hero from "../sections/Hero"
import ShowcaseSection from "../sections/ShowcaseSection"
import LogoSection from "../sections/LogoSection"
import NavBar from "./components/NavBar"
import FeaturedCards from "../sections/FeaturedCards"
import ExperienceSection from "../sections/ExperienceSection"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeaturedCards/>
      <ExperienceSection/>
    </>
  )
}

export default App
