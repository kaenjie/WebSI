import bg from "../../assets/BG 1.png";

const Visi = () => {
  return (
    <div
      className="-mt-16 w-full h-full"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="pt-20 pb-24 text-black flex flex-col text-center lg:pt-28 lg:pb-28 2xl:pt-36 2xl:pb-40">
        <div className="lg:grid lg:grid-cols-3">
          <p className="text-[#E88B23] text-4xl font-extrabold lg:text-[60px] lg:mx-20 mx-auto col-span-1 my-auto">
            VISI
          </p>
          <div className="bg-[#C8974E] rounded-3xl text-xs font-semibold mx-12 px-8 py-6 mt-3 md:mx-20 md:mt-5 lg:col-span-2 lg:mr-20 lg:-ml-20 lg:p-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              similique illo ducimus? Voluptas cupiditate modi ratione ullam
              aliquam sint, quibusdam mollitia veritatis? Harum impedit illum
              rem. Eveniet voluptatibus maiores necessitatibus. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Illo reiciendis
              itaque voluptate tempore maxime magnam!
            </p>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-3 lg:mt-16 2xl:mt-20">
          <p className="text-[#E88B23] text-4xl font-extrabold lg:text-[60px] lg:mx-20 mx-auto col-span-1 my-auto lg:order-last">
            MISI
          </p>
          <ol className="list-decimal text-justify bg-[#C8974E] rounded-3xl text-xs font-semibold mx-12 px-8 py-6 mt-3 md:mx-20 md:mt-5 lg:col-span-2 lg:-mr-20 lg:mx-32 lg:px-12 lg:p-8">
            <li className="pb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
              quo, velit ratione nobis ipsam sapiente. Velit fugit dolorum culpa
              ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aut, eius!
            </li>
            <li className="pb-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </li>
            <li className="pb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              aperiam exercitationem deleniti aliquam ad provident, quam
              doloremque officia ipsam ducimus temporibus.
            </li>
            <li className="pb-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
              rerum iure debitis. Sint corrupti iste maxime possimus soluta!
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Visi;
