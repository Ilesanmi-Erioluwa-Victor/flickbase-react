import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Navigation/Header";
import { Auth } from "./Components/Auth";

import { Mainlayout } from "./HOC/Mainlayout";


function App() {
  return (
    <>
      <Header />
      <Mainlayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Mainlayout>
    </>
  );
}

export default App;
