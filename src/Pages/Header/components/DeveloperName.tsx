import { TextFlip } from "../../../components/TextFlip";

const DeveloperName = () => {
  const words = ["FullStack", "AI/ML"];

  return (
    <div className="w-3/5 flex max-sm:w-full max-sm:px-6 max-sm:justify-center max-sm:mx-0 justify-center">
      <div className="flex max-sm:justify-center flex-col max-sm:w-full">
        <h1 className=" text-slate-300 lg:text-6xl md:text-5xl sm:text-3xl font-bold max-sm:mx-auto text-wrap">
          Hi, I am Chandan Maity a
          <TextFlip
            words={words}
            duration={1500}
            className="lg:text-6xl md:text-5xl sm:text-3xl font-bold text-blue-700"
          />
          Developer
        </h1>
      </div>
    </div>
  );
};

export default DeveloperName;
