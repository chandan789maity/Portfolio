"use client";
import { BackgroundGradient } from "../../../components/background-gradient"; 
import ButtonSkill from "./ButtonSkill";

const frontend = ["React Js", "TypeScript", "JavaScript", "Tailwindcss", "CSS", "Material Ui", "HTML", "Majic Ui", "Redux"];
const backend = ["Node.js", "Express", "MongoDB", "Springboot", "MySQL", "JPA", "Postgresql", "Firebase"];
const others = ["Python", "Java", "C++", "Pandas", "ML", "Go", "Git", "Vercel", "Postman", "bcrypt", "cloudinary"];

interface SectionProps {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

const SkillsSection: React.FC<SectionProps> = ({ title, icon, skills }) => (
  <div className="w-1/3 px-4 max-sm:w-full max-sm:px-0 z-0 max-md:w-full max-lg:w-full mb-4">
    <BackgroundGradient className="rounded-[22px] px-4 pb-4 pt-3 sm:p-10 bg-slate-900 dark:bg-transparent z-10 w-full">
      <div className="flex items-center mx-4 px-2 pb-4 rounded-full flex-shrink">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-900 flex-shrink-0 mr-6">
          {icon}
        </div>
        <p className="max-sm:text-base text-white font-bold text-xl">{title}</p>
      </div>
      <div className="flex flex-wrap justify-evenly h-auto">
        {skills.map((val, idx) => (
          <ButtonSkill key={idx}>
            {val}
          </ButtonSkill>
        ))}
      </div>
    </BackgroundGradient>
  </div>
);

const Skills: React.FC = () => {
  return (
    <div className="flex max-sm:justify-center flex-col sm:flex-row w-4/5 mx-auto max-sm:pt-3 flex-wrap z-0">
      <SkillsSection
        title="Front End"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>
        }
        skills={frontend}
      />
      <SkillsSection
        title="Back End"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            ></path>
          </svg>
        }
        skills={backend}
      />
      <SkillsSection
        title="Others"
        icon={
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            ></path>
          </svg>
        }
        skills={others}
      />
    </div>
  );
};

export default Skills;
