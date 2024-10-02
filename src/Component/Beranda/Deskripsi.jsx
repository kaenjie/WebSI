import foto4 from "../../assets/gimage.jpeg";
import corel from "../../assets/corel.png";
import ilustrator from "../../assets/ilustrator.png";
import indesign from "../../assets/indesign.png";
import netflixLogo from "../../assets/photoshop.png";
import Inkscape from "../../assets/Inkscape.png";
import affinity from "../../assets/affinity.png";
import poster from "../../assets/poster bawah.png";
import kualitas from "../../assets/iquliaty.png";
import profesional from "../../assets/iprofesional.png";
import kreatif from "../../assets/ikreatif.png";
import totalitas from "../../assets/itotality.png";
import ontime from "../../assets/iontime.png";
import fastrespon from "../../assets/iresponse.png";

const Deskripsi = () => {
  return (
    <div className="bg-gradient-to-tr from-[#FFFFFF] from-60% via-[#BDE2FF] via-80% to-[#FFFFFF] to-90% text-black py-16 px-8 lg:px-16">
      {/* Header Section */}
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Teks di sebelah kiri */}
          <div>
            <h1 className="font-bold text-5xl lg:text-6xl leading-tight mb-4 lg:mb-8 text-[#0D255E]">
              Jasa Desain Grafis & Manipulasi Foto
            </h1>
            <p className="text-lg lg:text-xl mb-5 lg:mb-8 text-justify">
              Jasa Desain Grafis berpengalaman yang menangani klien dari berbagai daerah. Kami melayani secara online dan tatap muka langsung.
            </p>
            <button className="bg-[#151F38] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 hover:bg-[#18334F] hover:text-[#0089C4] transition text-align: center">
              Selengkapnya
            </button>
          </div>

          {/* Gambar di sebelah kanan */}
          <div className="lg:w-[480px]">
            <img src={foto4} alt="Grafistix Hero" className="w-full h-auto rounded-lg shadow-xl hover:scale-105 transition-transform" />
          </div>
        </div>
      </div>

      {/* Logo Section */}
      <div className="max-w-screen-xl mx-auto py-12">
        <div className="place-items-center items-center grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 justify-center">
          <img src={corel} alt="CorelDraw" className="w-24 h-auto transform transition duration-300 hover:scale-110" />
          <img src={ilustrator} alt="Ilustrator" className="w-24 h-auto transform transition duration-300 hover:scale-110" />
          <img src={indesign} alt="Indesign" className="w-24 h-auto transform transition duration-300 hover:scale-110" />
          <img src={netflixLogo} alt="Photoshop" className="w-24 h-auto transform transition duration-300 hover:scale-110" />
          <img src={Inkscape} alt="Inkscape" className="w-24 h-auto transform transition duration-300 hover:scale-110" />
          <img src={affinity} alt="Affinity Designer" className="w-24 h-auto transform transition duration-300 hover:scale-110" />
        </div>
        <p className="border border-[#38BDF8] bg-[#E5F6FF] text-[#1D2B50] p-6 rounded-lg flex flex-col items-center justify-center h-24 font-sans text-center text-lg lg:text-xl mt-11 text-[#03346E]">
          Software terbaik yang membantu Grafistix untuk menciptakan Desain dan berinovasi
        </p>
      </div>

      {/* Why Grafistix Section */}
      <div className="mt-0 text-center">
        <h2 className="font-bold text-3xl lg:text-5xl mb-5 lg:mb-8 text-[#03346E]">
          Kenapa harus Grafistix?
        </h2>
        <p className="text-lg lg:text-xl mb-8 lg:mb-12 max-w-2xl mx-auto">
          Kami adalah pilihan tepat untuk Anda yang membutuhkan desain grafis profesional, kreatif, dan berkualitas. Dengan layanan cepat dan hasil yang memuaskan.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Berkualitas",
              description: "Grafistix menyediakan layanan desain grafis berkualitas tinggi dengan fokus pada kreativitas, keahlian, dan kepuasan klien.",
              icon: kualitas,
            },
            {
              title: "Profesional",
              description: "Di Grafistix, kami menjamin layanan desain grafis yang profesional, didukung oleh tim ahli yang berkomitmen untuk memenuhi kebutuhan klien dengan tepat dan efisien.",
              icon: profesional,
            },
            {
              title: "Kreatif",
              description: "Grafistix mengedepankan kekreatifan dalam setiap proyek desain grafis, menciptakan solusi unik yang memperkuat identitas dan visi merek klien.",
              icon: kreatif,
            },
            {
              title: "Totalitas",
              description: "Di Grafistix, kami berkomitmen pada totalitas layanan desain grafis, memastikan setiap detail dikerjakan dengan dedikasi penuh untuk mencapai hasil terbaik bagi klien.",
              icon: totalitas,
            },
            {
              title: "On Time",
              description: "Grafistix selalu mengutamakan penyelesaian proyek desain grafis tepat waktu, memastikan kepuasan klien tanpa mengorbankan kualitas.",
              icon: ontime,
            },
            {
              title: "Fast Response",
              description: "Grafistix memberikan layanan desain grafis dengan fast response, siap merespon kebutuhan klien dengan cepat dan efisien.",
              icon: fastrespon,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-[#38BDF8] bg-[#E5F6FF] text-[#1D2B50] hover:bg-[#D6F1FF] hover:text-black p-6 rounded-lg flex flex-col items-lg items-center justify-center h-58 shadow-lg transition-transform hover:scale-105"
            >
              <img src={item.icon} alt={item.title} className="w-12 h-auto mb-4" />
              <h3 className="font-bold text-xl lg:text-2xl mb-2">{item.title}</h3>
              <p className="text-sm lg:text-base text-center text-black">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-14 md:mt-13 text-center">
        <div className="mt-5 flex justify-center mx-auto text-[#021526] text-xs md:text-xl">
          <div className="text-center">
            <img
              className="h-[150px] md:h-[100px] lg:h-[398px] w-30 mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform"
              src={poster}
              alt="Refa Setyagama Abdillah"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deskripsi;
