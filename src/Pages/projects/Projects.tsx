import React, { useState, useEffect } from 'react';
import Card from './component.tsx/Card';
import educonnect from "../../assets/Images/educonnect.png";
import frontRow from "../../assets/Images/frontRow.png";
import chat from "../../assets/Images/chat.png";
import NLP from "../../assets/Images/NLP.png";
import dia from "../../assets/Images/dia.png";
import heart from "../../assets/Images/heart.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface Project {
  image: string;
  title: string;
  description: string;
  stack: string[];
  githublink: string;
  previewlink: string;
}

const projects: Project[] = [
  {
    title: "EduConnect",
    image: educonnect,
    description: "This is a project uploading website for student and the colleges can manage their students projects",
    stack: ["Node.js", "Express", "MongoDB", "Bcrypt", "Nodemailer", "React", "Tailwind", "CSS", "Redux"],
    githublink: "https://github.com/chandan789maity/EduConnect",
    previewlink: "https://edu-connect-jade.vercel.app/"
  },
  {
    title: "FrontRow",
    image: frontRow,
    description: "This is project of Movie Booing System. Where users can book their ticket seamlessly and also can share.",
    stack: ["Node.js", "Express", "MongoDB", "Bcrypt", "React", "Tailwind", "CSS"],
    githublink: "https://github.com/chandan789maity/FrontRow/tree/Chandan",
    previewlink: "https://buyfrontrow.netlify.app/"
  },
  {
    title: "OpenNLP",
    image: NLP,
    description: "This is a project on Java OpenNLP to recognize the sentence type and Tokenization.",
    stack: ["Java", "Spring boot", "Faker", "Opennlp", "React", "Tailwind", "CSS", "HTML"],
    githublink: "https://github.com/chandan789maity/JavaOpenNLP",
    previewlink: ""
  },
  {
    title: "ChatBot",
    image: chat,
    description: "This is a project on creating a simple chatbot also can convert output text to speech.",
    stack: ["JavaScript", "CSS", "HTML", "Tailwind", "React", "Acertinity Ui"],
    githublink: "https://github.com/chandan789maity/Chat-Bot",
    previewlink: ""
  },
  {
    title: "Diabetes Predictor",
    image: dia,
    description: "This is a Machine learning model to predict if the person has diabetes or not.",
    stack: ["Python","Numpy", "Pandas", "Naive Bayes", "K-NN", ],
    githublink: "https://github.com/chandan789maity/Diabetes-predictor",
    previewlink: ""
  },
  {
    title: "Heart Disease Predictor",
    image: heart,
    description: "This is a Machine learning model to predict if the person has Heart disease or not.",
    stack: ["Python", "Numpy", "Pandas","SVM","K-NN", "Decision Tree","Random Forest",],
    githublink: "https://github.com/chandan789maity/Heart-disease-Predictor",
    previewlink: ""
  },
  // Add more projects if needed
];

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(window.innerWidth < 640 ? 2 : 4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 640 ? 2 : 4);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <section id='Projects'>
        <div className="flex max-sm:justify-center flex-col-reverse sm:flex-row mx-auto bg-transparent justify-center h-auto mb-4">
          <div className="max-sm:mt-0 flex flex-col justify-center">
            <div className="text-center max-sm:mb-2">
              <h1 className="text-indigo-500 title-font pt-8 text-3xl font-extrabold leading-10 tracking-tight max-lg:text-2xl max-md:text-xl max-sm:text-lg max-sm:leading-none">
                Projects
              </h1>
              <div className="flex mt-2 justify-center">
                <div className="w-20 h-1 rounded-full bg-indigo-300 inline-flex"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-transparent flex justify-center">
          <div className="w-4/5 bg-transparent flex flex-wrap overflow-x-auto pt-9 max-sm:pt-1">
            {currentProjects.map((val, idx) => (
              <Card
                key={idx}
                image={val.image}
                title={val.title}
                description={val.description}
                stack={val.stack}
                githublink={val.githublink}
                previewlink={val.previewlink}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 space-x-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-400 transition duration-300 ease-in-out text-xs sm:text-sm md:text-base"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
        Previous
      </button>
      <span className="text-white text-xs sm:text-sm md:text-base">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center px-4 py-2 text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-gray-400 transition duration-300 ease-in-out text-xs sm:text-sm md:text-base"
      >
        Next
        <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
      </button>
    </div>
      </section>
    </>
  );
};

export default Projects;
