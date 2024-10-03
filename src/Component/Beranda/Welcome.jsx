import bgwelcome from '../../assets/bgwelcome.png'; // Pastikan path ke gambar sesuai

const Welcome = () => {
  return (
    <section
      className="px-6 py-16 lg:py-24"
      style={{
        backgroundImage: `url(${bgwelcome})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-16">
        {/* Text Section */}
        <center>
          <div className="lg:w-1/2 lg:mt-0">
            <h1 className="text-xl lg:text-6xl font-bold mb-6 leading-tight">
              Desain Berkelas, Hasil Tuntas-{" "}
              <span className="text-[#38BDF8]">Hanya di Grafistix</span>
            </h1>
            <p className="text-slate-400 text-lg lg:text-1 mb-8 leading-relaxed text-justify">
              Platform desain grafis online yang mengutamakan kualitas dan
              kepuasan pelanggan. Kami menghadirkan solusi desain profesional,
              mulai dari logo hingga materi branding, yang dikerjakan dengan
              cepat, efisien, dan tanpa ribet.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-[#17A9E8] text-white px-6 py-3 font-semibold rounded-lg hover:bg-[#8CDDFF] hover:scale-105 hover:text-black transition text-align: center">
                Konsultasi Gratis
              </button>
              <button className="bg-transparent border border-[#38BDF8] text-[#38BDF8] px-6 py-3 rounded-md font-semibold hover:bg-[#8CDDFF] hover:text-black transition ">
                Selengkapnya
              </button>
            </div>
          </div>
        </center>
      </div>
    </section>
  );
};

export default Welcome;
