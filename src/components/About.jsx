import Bg from "../assets/BG 1.png";
import Tentang from "../assets/tentang.png";
import LogoSI from "../assets/logo 2.png";

const About = () => {
  return (
    <>
      <div
        className="-mt-5 md:-mt-14 lg:-mt-24"
        style={{ backgroundImage: `url(${Bg})` }}
      >
        <div className="py-8 px-5">
          <div>
            <img className="mx-auto md:mt-10 lg:mt-20" src={Tentang} alt="" />
          </div>
          <div className="pt-4 lg:grid lg:grid-cols-2">
            <img
              className="w-[230px] mx-auto md:w-[310px] lg:order-last lg:w-[520px] lg:mt-20"
              src={LogoSI}
              alt=""
            />
            <div className="flex flex-col text-justify mx-4 lg:mx-8">
              <h3 className="font-bold text-lg text-black mt-8 mb-4 lg:text-4xl">
                Pengertian HMP SI UNESA
              </h3>
              <p className="text-sm text-neutral-800 lg:text-2xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
                quis nostrum! Recusandae pariatur repellendus perferendis
                tempora fuga quidem autem reiciendis fugiat consectetur nulla,
                nobis quos illo iusto dignissimos libero sequi? Repellat sequi
                numquam obcaecati, rerum iure, necessitatibus sed rem distinctio
                voluptates, hic nobis libero minima aspernatur. Animi excepturi
                optio in? Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Optio expedita, ipsum voluptatum tempora velit porro
                ducimus ad? Eaque, voluptates dolores! Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Nam, provident consectetur
                animi nulla veniam consequuntur tempora eum quidem adipisci?
                Reprehenderit iusto ex iure a consectetur doloremque, impedit
                animi quaerat ad.
              </p>
              <button className="w-max px-6 py-2 mt-4 ring-1 ring-[#D98020] text-[#D98020] rounded-full hover:bg-[#D98020] hover:text-white lg:text-2xl lg:mt-8">
                Lihat Selengkapnya
                <svg
                  aria-hidden="true"
                  width={20}
                  height={20}
                  focusable="false"
                  style={{ display: "inline-block", marginLeft: "5px" }}
                  data-prefix="fas"
                  data-icon="arrow-right-long"
                  className="svg-inline--fa fa-arrow-right-long relative"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
