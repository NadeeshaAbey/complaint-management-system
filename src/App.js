import "./App.css";
import Homepage from "./pages/Homepage";
import AboutUs from "./pages/AboutUs.js";
import ContactUs from "./pages/ContactUs";
import { Routes, Route } from "react-router-dom";
import AdminLoginPage from "./pages/AdminLoginPage.js";
import UserLoginPage from "./pages/UserLoginPage.js";
import ForgotPwdPage from "./pages/ForgotPwdPage.js";
import NewPwdPage from "./pages/NewPwdPage.js";
import ADashboard from "./pages/ADashboard.js";
import UDashboard from "./pages/UDashboard.js";
import Query from './pages/Query.js';
import UProfile from "./pages/UProfile.js";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin-login-page" element={<AdminLoginPage />} />
        <Route path="/admin-dashboard" element={<ADashboard />} />
        <Route path="/user-dashboard" element={<UDashboard />} />
        <Route path="/user-login-page" element={<UserLoginPage />} />
        <Route path="/admin-dashboard" element={<ADashboard />} />
        <Route path="/user-dashboard" element={<UDashboard />} />
        <Route path="/forgot-pwd-page" element={<ForgotPwdPage/>} />
        <Route path="/new-pwd-page" element={<NewPwdPage/>} />
        <Route path="/add-query" element={<Query />} />
      </Routes>
      
      
    </div>
    
  );
}

export default App;
