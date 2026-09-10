import About from "../Pages/About";
import Home from "../Pages/Home";
import Academics from "../Pages/Academics";
import Facilities from "../Pages/Facilities";
import Admissions from "../Pages/Admissions";
import Header from "../Components/NavBar/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "../Components/ScrollToTop";


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>


      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <br />
        <br />
        <br />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/admission" element={<Admissions />} />

        </Routes>
      </BrowserRouter>
    </>
  )
};
export default App;