import Skills from "./components/Skills";
import SkillTitle from "./components/SkillTitle";
import { Slider } from "./components/Slider";

const Skill = () => {
  return (
   
      <div>
         <section id="Skills">
        <SkillTitle />
        
        <Skills />
       
        {/* {This is slider section} */}
        
        <Slider />
        </section>
      </div>
    
  );
};

export default Skill;
