import Hero from "../sections/Hero"
import ShowcaseSection from "../sections/ShowcaseSection"
import LogoSection from "../sections/LogoSection"
import NavBar from "./components/NavBar"
import FeaturedCards from "../sections/FeaturedCards"
import ExperienceSection from "../sections/ExperienceSection"
import TechStack from "../sections/TechStack"

const App = () => {
  return (
    <>
      <NavBar/>
      <Hero/>
      <ShowcaseSection/>
      <LogoSection/>
      <FeaturedCards/>
      <ExperienceSection/>
      <TechStack/>
    </>
  )
}

export default App
