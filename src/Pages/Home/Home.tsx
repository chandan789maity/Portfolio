import Description from "../About/components/Description"
import { ContactUs } from "../Contact/components/Contact"
import Header from "../Header/Header"
import Projects from "../projects/Projects"
import Skill from "../Skills/Skill"

const Home = () => {
  return (
    <div>
      <section id="About">
        <Header/>
        <Description/>
        </section>
        <Skill/>
        <Projects/>
        <ContactUs/>
        
    </div>
  )
}

export default Home

