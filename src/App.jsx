import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Bg from "./assets/background.png";
import About from "./components/About";
import Documentations from "./components/Documentation";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="absolute top-0 -z-10 inset-0 h-[90%] lg:h-full w-full">
        <div className="absolute top-0 z-[-1] w-full h-full [background:radial-gradient(120%_127%_at_50%_10%,#10100F_55%,#3A240C_70%)]">
          <div
            className="absolute top-0 z-[-2] w-screen h-full bg-cover"
            style={{ backgroundImage: `url(${Bg})` }}
          ></div>
        </div>
      </div>
      <div className="mx-auto">
        <Navbar />
        <Home />
        <Welcome />
        <About />
        <Documentations />
      </div>
    </div>
  );
}

export default App;
