import { Routes, Route } from "react-router-dom";
import "./App.css";
import Advisor from "./components/organism/Advisor";
import Brochure from "./components/organism/Brochure";
import Home from "./components/organism/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/brochure" element={<Brochure/>}/>
        <Route path="/advisor" element={<Advisor/>}/>
        </Routes>
    </div>
  );
}

export default App;
