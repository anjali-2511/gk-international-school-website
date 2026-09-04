import About from "../Pages/About";
import Home from "../Pages/Home";
// import Academics from "../Pages/Academics";
// import Facilities from "../Pages/Facilities";
// import Admission from "../Pages/Admission";
import Header from "../Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 

function App() {
  return(
    <>
     
    
    <BrowserRouter>
    <Header/>
        <br />
        <br />
        <br />
        <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/academics" element={<Academics />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/admission" element={<Admission />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
};
export default App;