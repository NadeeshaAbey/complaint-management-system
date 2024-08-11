import "./App.css";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage.js";
import UserLoginPage from "./pages/UserLoginPage.js";
import UDashboard from "./pages/UDashboard.js";
import ADashboard from "./pages/ADashboard.js";



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin-login-page" element={<AdminLoginPage />} />
        <Route path="/user-login-page" element={<UserLoginPage />} />
        <Route Path="/admin-dashboard" element={<ADashboard />} />
        <Route path="/user-dashboard" element={<UDashboard />} />
      </Routes>
      
      
    </div>
    
  );
}

export default App;
