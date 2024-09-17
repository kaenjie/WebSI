import Bg from "../../assets/BG 1.png";
import Sambutan from "../../assets/sambutan.png";
import kabinet from "../../assets/kabinet.png";
import kabinet1 from "../../assets/pecahan 1.png";
import kabinet2 from "../../assets/pecahan 2.png";
import kabinet3 from "../../assets/pecahan 3.png";
import kabinet4 from "../../assets/pecahan 4.png";
import pembatas from "../../assets/pembatas.png";

const Filosofi = () => {
  return (
    <>
      <div
        className="-mt-16"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="py-10 px-5 pb-24 md:pb-24 lg:pb-32 2xl:pb-36">
          <div>
            <img className="pt-8 mx-auto lg:w-[70%]" src={Sambutan} alt="" />
          </div>
          <div className=" md:pt-10 lg:pt-4 2xl:pt-16 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-0">
            <div className="flex flex-col items-center w-full 2xl:-mt-8">
              <img
                className="mx-auto w-[250px] md:w-[300px] lg:w-[275px] md:-mt-8 lg:mt-0 2xl:-mt-6"
                src={kabinet}
                alt=""
              />
              <div className="-mt-6 md:-mt-8 lg:-mt-7 flex flex-col text-center px-5">
              <p className="font-bold text-black text-lg">
                Logo Kabinet Surya Mandala
              </p>
              <p className="font-bold text-amber-800 text-sm">
                Arti lambang
              </p>
              <p className="text-xs text-black font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente eveniet accusamus alias veritatis a. Dolor officia
                accusamus ipsum ducimus numquam, consectetur recusandae fugit
                iste facere consequuntur quidem neque tempore architecto aut,
                natus quaerat atque.
              </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <img
                className="mx-auto w-[200px] md:w-[230px] lg:w-[210px] lg:mt-8 2xl:-mt-6"
                src={kabinet1}
                alt=""
              />
              <div className="mt-2 flex flex-col text-center px-5">
              <p className="font-bold text-black text-lg">
                Logo Pecahan 1
              </p>
              <p className="font-bold text-amber-800 text-sm">
                Arti lambang
              </p>
              <p className="text-xs text-black font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, pariatur.
              </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full">
              <img
                className="mx-auto w-[200px] md:w-[230px] lg:w-[210px] lg:mt-8 2xl:-mt-6"
                src={kabinet2}
                alt=""
              />
              <div className="mt-2 flex flex-col text-center px-5">
              <p className="font-bold text-black text-lg">
                Logo Pecahan 2
              </p>
              <p className="font-bold text-amber-800 text-sm">
                Arti lambang
              </p>
              <p className="text-xs text-black font-medium">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae non nesciunt labore tempora vel soluta libero veniam nobis ea eaque?
              </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full lg:col-span-1 lg:mx-48 2xl:mx-52 2xl:mt-20">
              <img
                className="mx-auto w-[200px] md:w-[230px] lg:w-[210px] lg:mt-8 2xl:-mt-6"
                src={kabinet3}
                alt=""
              />
              <div className="mt-2 flex flex-col text-center px-5">
              <p className="font-bold text-black text-lg">
                Logo Pecahan 3
              </p>
              <p className="font-bold text-amber-800 text-sm">
                Arti lambang
              </p>
              <p className="text-xs text-black font-medium">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, ipsum vero! Maxime enim tempore totam? Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full md:col-span-2 md:px-36 lg:col-span-2 lg:px-48 2xl:px-52 2xl:mt-20">
              <img
                className="mx-auto w-[200px] md:w-[230px] lg:w-[210px] lg:mt-8 2xl:-mt-6"
                src={kabinet4}
                alt=""
              />
              <div className="mt-2 flex flex-col text-center px-5">
              <span className="font-bold text-black text-lg">
                Logo Pecahan 4
              </span>
              <span className="font-bold text-amber-800 text-sm">
                Arti lambang
              </span>
              <span className="text-xs text-black font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae placeat quod modi a accusantium magni vero at deserunt sunt magnam!
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filosofi;
