import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutCoach from "./components/home/AboutCoach.";
import Services from "./components/home/Services";
import Gallery from "./components/home/Gallery";
import Contact from "./components/home/Contact";
import Login from "./components/home/Login";
import Signup from "./components/home/Signup";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<AboutCoach />}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/gallery" element={<Gallery />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
    </Routes>
  )
}
