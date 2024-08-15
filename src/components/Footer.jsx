import Logo from "../assets/logo 2.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#B88333] pt-7 px-6 pb-8 font-semibold md:grid md:grid-cols-3 md:gap-0 md:px-20 lg:px-52">
        <div className="md:pt-12 lg:pt-8">
          <img
            className="w-[50%] md:w-[80%] lg:w-[70%] 2xl:w-[55%] lg:mx-auto"
            src={Logo}
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-1 md:gap-4">
          <div className="lg:text-center">
            <p className=" pt-4 font-bold text-lg">Contact Us</p>
            <p>hmpsi@unesa.ac.id</p>
            <p>+62 812 1234 5678</p>
            <p>(NONE)</p>
          </div>
          <div className="pt-4 md:pt-0 lg:text-center">
            <p className="font-bold text-lg">Media Partner</p>
            <p>+62 812 1234 5678</p>
            <p>(NONE)</p>
            <p>+62 812 1234 5678</p>
            <p>(NONE)</p>
          </div>
        </div>
        <div className="pt-4 lg:mx lg:pt-16">
          <div className="lg:text-end">
            <p className="font-bold text-lg">Sekretariat HMP SI UNESA</p>
            <p>
              Jl. Gedung A10 Teknik Informatika Unesa, Surabaya, Indonesia 60118
            </p>
          </div>
          <div className="pt-4">
            <p className="font-bold text-lg lg:text-end">Social Media</p>
            <div className="flex gap-2 text-sm lg:items-end lg:justify-end">
              <button className="bg-white px-1.5 py-0.5 text-[#B88333] font-bold rounded">
                IG
              </button>
              <button className="bg-white px-1.5 py-0.5 text-[#B88333] font-bold rounded">
                Tiktok
              </button>
              <button className="bg-white px-1.5 py-0.5 text-[#B88333] font-bold rounded">
                YT
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="md:col-span-3">
          <hr className="border-[1.5px]" />
          <p className="pt-6 text-center">
            Copyright © Departemen Penalaran Riset Dan Teknologi HMP TI UNESA
            2024
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
