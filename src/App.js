import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrolltoTop from "./components/molecules/ScrolltoTop";
import Advisor from "./components/organism/Advisor";
import Brochure from "./components/organism/Brochure";
import Home from "./components/organism/Home";

function App() {
  return (
    <div className="App">
      <ScrolltoTop>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/brochure" element={<Brochure/>}/>
        <Route path="/book-session" element={<Advisor/>}/>
        </Routes>
        </ScrolltoTop>
    </div>
  );
}

export default App;
