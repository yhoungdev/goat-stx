import { useEffect } from "react";
import "./App.css";
import Homepage from "./page/homepage";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  });
  return <Homepage />;
}

export default App;
