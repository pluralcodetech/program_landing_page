import { Routes, Route } from "react-router-dom";
import "./App.css";
import ScrolltoTop from "./components/molecules/ScrolltoTop";
import Home from "./components/organism/Home";

function App() {
  return (
    <div className="App">
      <ScrolltoTop>
      <Routes basename={"/programs"}>
        <Route path="/programs" element={<Home/>}/>
        {/* <Route path="/programs/brochure" element={<Brochure/>}/>
        <Route path="/book-session" element={<Advisor/>}/> */}
        </Routes>
        </ScrolltoTop>
    </div>
  );
}

export default App;
