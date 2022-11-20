import { Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Header } from "./Components/Navigation/Header";
import { Auth } from "./Components/Auth";
import { Dashboard } from "./Components/Dashboard";

import { Mainlayout } from "./HOC/Mainlayout";


function App() {
  return (
    <>
      <Header />
      <Mainlayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/auth" element={<Auth />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Mainlayout>
    </>
  );
}

export default App;
