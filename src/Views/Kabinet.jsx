import Navbar from "../components/Navbar";
import Home from "../components/kabinet/Home";
import Bg from "../assets/background.png";
import Footer from "../components/Footer";
import Filosofi from "../components/kabinet/Filosofi";

function Beranda() {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="absolute top-0 -z-10 inset-0 lg:h-full w-full 2xl:h-[110%]">
        <div className="absolute top-0 z-[-1] w-full h-full [background:radial-gradient(120%_127%_at_50%_10%,#10100F_55%,#3A240C_70%)]">
          <div
            className="absolute top-0 z-[-2] w-full h-full bg-cover"
            style={{ backgroundImage: `url(${Bg})` }}
          ></div>
        </div>
      </div>
      <div className="mx-auto">
        <Navbar />
        <Home />
        <Filosofi />
        <Footer />
      </div>
    </div>
  );
}

export default Beranda;
