import Gedung from "../assets/gedungTI.png";
import Pembatas from "../assets/pembatas.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center pt-[70px]">
        <div className="flex items-center flex-col lg:items-start">
          <h1 className="text-white text-[15px] md:text-[25px] lg:text-[30px]">
            Welcome To
          </h1>
          <div className="text-[#E88B23] text-[45px] font-bold flex flex-col items-center md:text-[65px] text-[#D98020] lg:text-[80px] lg:items-start">
            <span>HMP SI</span>
            <span className="-mt-5 lg:-mt-8">UNESA 2024</span>
          </div>
        </div>
        <img
          className="w-[350px] md:w-[650px] lg:w-[700px] pt-5 md:pt-10"
          src={Gedung}
          alt=""
        />
      </div>
      <div className="mt-10 w-full md:h-[300px] md:mt-[60px] lg:mt-18">
        <img
          className="md:h-[250px] lg:h-[300px] w-full"
          src={Pembatas}
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
