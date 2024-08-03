import Gedung from "../assets/gedungTI.png";
import Pembatas from "../assets/pembatas.png";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row lg:justify-center pt-20">
        <div className="flex items-center flex-col lg:items-start">
          <h1 className="text-white text-[30px] md:text-[50px] lg:text-[60px]">
            Welcome To
          </h1>
          <div className="text-white text-[45px] font-bold flex flex-col items-center md:text-[65px] text-[#d89715] lg:text-[80px] lg:items-start">
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
      <div className="mt-20 w-full md:h-[300px] md:mt-32 lg:mt-12">
        <img className="lg:h-[300px] w-full" src={Pembatas} alt="" />
      </div>
    </>
  );
};

export default Home;
