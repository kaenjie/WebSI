import bg from "../../assets/BG 23.png";
import sambutan from "../../assets/sambutan.png";
import pembatas from "../../assets/pembatas.png";

const Warna = () => {
  return (
    <>
      <div
        className="w-full h-full lg:bg-cover md:bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="py-10 px-5 pb-20 md:pb-24 lg:pb-32 2xl:pb-36">
          <div>
            <img className="md:pt-6 mx-auto lg:w-[70%]" src={sambutan} alt="" />
          </div>
          <div className="flex flex-col text-center px-5 pt-8">
            <p className="font-bold text-black text-sm">KOSONG DULU YA SEMENTARA HEHEH</p>
          </div>
        </div>
      </div>
      <div className="-mt-10 w-full md:-mt-14 lg:-mt-20">
        <img
          className="md:h-[200px] lg:h-[230px] w-full"
          src={pembatas}
          alt=""
        />
      </div>
    </>
  );
};

export default Warna;
