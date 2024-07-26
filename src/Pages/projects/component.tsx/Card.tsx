import React from "react";
import { BackgroundGradient } from "../../../components/background-gradient";
import GithubButton from "./GitHubButton";
import ProjectButton from "./ProjectButton";
import PreviewButton from "./PreviewButton";

interface CardProps {
  image: string;
  title: string;
  description: string;
  stack: string[];
  githublink:string;
  previewlink:string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="w-1/2 max-sm:w-full max-md:w-full group z-0">
      <div className="m-4 max-sm:mx-0">
        <BackgroundGradient className="z-10">
          <div className="card card-compact bg-base-100 shadow-xl m-[1px] max-sm:mx-0 z-0">
            <figure className="bg-slate-900 rounded-t-2xl overflow-hidden">
              <img
                className="rounded-2xl group-hover:scale-105 duration-300"
                src={props.image}
                alt="Tech Image"
              />
            </figure>
            <div className="card-body bg-slate-900 rounded-b-2xl pb-2">
              <h2 className="card-title font-bold pl-3 pb-1 text-yellow-500 pt-2">
                {props.title}
              </h2>
              <p className="text-gray-500 max-sm:text-[10px] px-3">
                {props.description}
              </p>
              <div className="card-actions justify-end rounded-b-3xl">
                <h2 className="card-title font-bold pl-3 pb-1 text-blue-800 pt-2 max-sm:pb-1 max-sm:pt-1">
                  Tech Stack
                </h2>
                {props.stack.map((val, idx) => {
                  return <ProjectButton key={idx}>{val}</ProjectButton>;
                })}
              </div>
              <div className="flex justify-center">
                <GithubButton githublink={props.githublink}/>
                
                {props.previewlink && <PreviewButton previewlink={props.previewlink} />}
    
              </div>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Card;
