import Kabinet from "../../assets/kabinet.png";
import Pembatas from "../../assets/pembatas.png";

const Home = () => {
  return (
    <>
      <div
        className="-mt-6 md:-mt-5 lg:-mt-20 2xl:-mt-28 pb-4 2xl:pb-8"
      >
          <div className="pt-4 lg:grid lg:grid-cols-2 2xl:gap-0 2xl:w-[100%]">
            <img
              className="w-[300px] mx-auto md:w-[350px] lg:w-[550px] 2xl:w-[550px] lg:mx-20 lg:mt-16 2xl:mt-24 2xl:mx-32"
              src={Kabinet}
              alt=""
            />
            <div className="flex flex-col text-justify text-white px-8 lg:pt-32 2xl:pt-48 lg:gap-6 lg:pr-24 2xl:pr-32">
              <h3 className="font-bold text-xl mb-4 lg:text-4xl">
                Pengertian Kabinet
              </h3>
              <p className="text-sm lg:text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                quis nostrum! Recusandae pariatur repellendus perferendis
                tempora fuga quidem autem reiciendis fugiat consectetur nulla,
                nobis quos illo iusto dignissimos libero sequi? Repellat sequi
                numquam obcaecati, rerum iure, necessitatibus sed rem distinctio
                voluptates, hic nobis libero minima aspernatur. Animi excepturi
                optio in? Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </div>
          </div>
      </div>
      <div className="mt-4 w-full md:h-[300px] md:mt-[20px] lg:-mt-3">
        <img
          className="md:h-[200px] lg:h-[250px] w-full"
          src={Pembatas}
          alt=""
        />
      </div>
    </>
  );
};

export default Home;
