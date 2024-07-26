import img from "../../../assets/Images/inter.jpg";
const Globe = () => {
  return (
    <div className="w-3/5 max-sm:flex max-sm:justify-center max-sm:w-full flex justify-center max-sm:mb-6 max-sm:mt-0 ">
      <div
        className="w-56 h-56 max-sm:w-28 max-sm:h-28 max-xl:w-64 max-xl:h-64" // Added class for width and height
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "50%",
        }}
      >
      </div>
    </div>
  );
};

export default Globe;
