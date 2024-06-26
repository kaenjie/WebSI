import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300">
      <div className="fixed top-0 h-full w-full -z-10 absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(120%_125%_at_50%_10%,#000_40%,#241906_70%)]"></div>
      <div className="mx-auto">
        <Navbar/>
      </div>
    </div>
  );
};

export default App;
