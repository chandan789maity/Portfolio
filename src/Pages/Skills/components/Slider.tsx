import React from 'react';
import Logo from './Logo';

import reactLogo from "../../../assets/Images/logos/reactLogo.png";
import javaScriptLogo from "../../../assets/Images/logos/JavaScript-logo.png";
import node from "../../../assets/Images/logos/node.png";
import types from "../../../assets/Images/logos/typescript.png";
import tailwind from "../../../assets/Images/logos/tailwind.png";
import css from "../../../assets/Images/logos/css.png";
import c from "../../../assets/Images/logos/c.png";
import cpp from "../../../assets/Images/logos/cpp.png";
import java from "../../../assets/Images/logos/java.png";
import mongo from "../../../assets/Images/logos/mongo.png";
import git from "../../../assets/Images/logos/git.png";
import python from "../../../assets/Images/logos/python.png";
import boot from "../../../assets/Images/logos/boot.png";

const logos = [
  { src: reactLogo, alt: 'React Logo', width: 40, height: 40 },
  { src: types, alt: 'TypeScript Logo', width: 40, height: 40 },
  { src: javaScriptLogo, alt: 'JavaScript Logo', width: 40, height: 40 },
  { src: python, alt: 'Python Logo', width: 40, height: 40 },
  { src: tailwind, alt: 'Tailwind Logo', width: 40, height: 40 },
  { src: boot, alt: 'Bootstrap Logo', width: 50, height: 50 },
  { src: node, alt: 'Node.js Logo', width: 40, height: 40 },
  { src: mongo, alt: 'MongoDB Logo', width: 40, height: 40 },
  { src: git, alt: 'Git Logo', width: 40, height: 40 },
  { src: c, alt: 'C Logo', width: 40, height: 40 },
  { src: cpp, alt: 'C++ Logo', width: 40, height: 40 },
  { src: java, alt: 'Java Logo', width: 50, height: 40 },
  { src: css, alt: 'CSS Logo', width: 40, height: 40 },
];

export const Slider: React.FC = () => {
  return (
    <div className="relative mx-auto w-4/5 overflow-hidden bg-transparent mt-6">
      <div className="animate-infinite-slider flex w-[calc(250px*12)]">
        {[...logos, ...logos].map((logo, index) => (
          <div
            className="slide flex max-sm:w-16 w-32 items-center justify-center"
            key={index}
          >
            <Logo {...logo} />
          </div>
        ))}
      </div>
    </div>
  );
};
