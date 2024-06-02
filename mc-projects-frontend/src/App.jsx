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
import Forobolso from "./projects/Forobolso";
import Portfolio from "./projects/Portfolio";
import { useEffect } from "react";
import PacaCamp from "./projects/PacaCamp";
import PosterJanine from "./projects/PosterJanine";
import PosterBailazo from "./projects/PosterBailazo1";
import LogoLdfs from "./projects/LogoLdfs";
import LogoBristol from "./projects/LogoBristol";
import Bailazo from "./projects/Bailazo";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <AnimatePresence>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="clients" element={<Clients />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/doppios" element={<Doppios />} />
          <Route path="projects/forobolso" element={<Forobolso />} />
          <Route path="projects/portfolio" element={<Portfolio />} />
          <Route path="projects/paca-campeon" element={<PacaCamp />} />
          <Route path="projects/poster-janine" element={<PosterJanine />} />
          <Route path="projects/poster-bailazo" element={<PosterBailazo />} />
          <Route path="projects/bailazo" element={<Bailazo />} />
          <Route path="projects/logo-ldfs" element={<LogoLdfs />} />
          <Route path="projects/logo-bristol" element={<LogoBristol />} />
        </Routes>
        <Footer />
      </AnimatePresence>
    </>
  );
}

export default App;
