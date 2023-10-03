import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Clients from "./components/Clients";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";
import Doppios from "./projects/Doppios";
import { useEffect } from "react";
import PacaCamp from "./projects/PacaCamp";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/doppios" element={<Doppios />} />
          <Route path="projects/paca-campeon" element={<PacaCamp />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
