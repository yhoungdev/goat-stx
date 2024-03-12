import { useEffect } from "react";
import "./App.css";
import Homepage from "./page/homepage";
import AOS from "aos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Roadmap from "./page/roadmap";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Routes>
    </Router>
  );
}

export default App;
