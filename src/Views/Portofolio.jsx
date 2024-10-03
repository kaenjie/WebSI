import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Welcome from "../Component/Portofolio/Welcome"
import Logo from "../Component/Portofolio/Logo";
import Banner from "../Component/Portofolio/Banner";
import Instagram from "../Component/Portofolio/Instagram";
import Merch from "../Component/Portofolio/Merch";

function Portofolio() {
  return (
    <div className="min-h-screen">
      <div className="bg-[#0F172A] text-slate-200">
        <Navbar />
        <Welcome />
        <Logo />
        <Banner />
        <Instagram />
        <Merch />
        <Footer />
      </div>
    </div>
  );
}

export default Portofolio;
