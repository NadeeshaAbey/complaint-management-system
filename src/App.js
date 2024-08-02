import "./App.css";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
    
  );
}

export default App;
