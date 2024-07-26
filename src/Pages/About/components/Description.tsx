import { TextGenerateEffect } from "../../../components/text-generate-effect";

const Description = () => {
  const about =
    "I am currently pursuing a B.Tech in Computer Science Engineering at Heritage Institute of Technology. I am passionate about leveraging technology to solve real-world problems and continuously learning new skills to enhance my expertise.";
  return (
    
    <div className="max-sm:mt-8 mt-12">
      <div className="text-center mb-6 max-sm:mb-2">
            <h1 className=" text-indigo-500 title-font  mb-0 text-3xl font-extrabold leading-10 tracking-tight max-lg:text-2xl max-md:text-xl max-sm:text-lg max-sm:leading-none">
              About
            </h1>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-300 inline-flex"></div>
            </div>
          </div>
      <TextGenerateEffect
        words={about}
        className="font-bold w-4/5 mx-auto text-justify"
      />
    </div>
  );
};

export default Description;
