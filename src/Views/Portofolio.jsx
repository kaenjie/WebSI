import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Logo from "../Component/Portofolio/Logo";
import Banner from "../Component/Portofolio/Banner";
import Instagram from "../Component/Portofolio/Instagram";
import Merch from "../Component/Portofolio/Merch";
import bgwelcome from "../assets/bgwelcome.png"; // Mengimpor gambar

function Portofolio() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#0F172A] text-slate-200">
        {/* Navbar Section */}
        <Navbar />

        {/* Hero Section with Background Image */}
        <section
          className="items-center justify-center px-6 py-16 lg:py-24"
          style={{
            backgroundImage: `url(${bgwelcome})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "45vh", // Full screen height
          }}
        >
          <div className="text-center">
            <h1 className="font-bold text-5xl lg:text-6xl leading-tight mb-4 lg:mb-8 text-white">
              Portofolio Kami
            </h1>
            <p className="text-lg lg:text-xl mb-5 lg:mb-8 text-slate-300">
              Jelajahi karya terbaik kami dalam desain logo, banner, merchandise, dan banyak lagi.
            </p>
          </div>
        </section>

        {/* Other Portfolio Sections */}
        <Logo />
        <Banner />
        <Instagram />
        <Merch />

        {/* Footer Section */}
        <Footer />
      </div>
    </div>
  );
}

export default Portofolio;
