import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./Views/Beranda";
import Kabinet from "./Views/Kabinet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/kabinet" element={<Kabinet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
