import { TextGenerateEffect } from "../../../components/text-generate-effect";

const Description = () => {
  const about =
    "I’m a Junior Data Software Engineer with a strong foundation in distributed systems, real-time data processing, and big data technologies. I specialize in building scalable data pipelines using Python, SQL, and PySpark, and have hands-on experience with Apache Spark, Kafka, and Elasticsearch. Proficient in both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, I’ve also worked with Azure and Databricks for cloud-native solutions. Passionate about AI, data science, and continuous learning, I strive to design efficient and scalable data workflows that drive impactful insights.";
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
