import { useState, useEffect } from "react";

import Contacts from "./components/Contacts/Contacts";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Languages from "./components/Languages/Languages";
import MiniWorks from "./components/MiniWorks/MiniWorks";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import About from "./components/About/About";

import "./App.css";
import MobileModal from "./components/MobileModal/MobileModal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMobileMenu = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle("no-scroll", isOpen);
  }, [isOpen]);

  return (
    <>
      <Header openMenuFu={openMobileMenu} />
      <Hero />
      <div className="container">
        <Contacts />
        <Skills />
        <Projects />
        <MiniWorks />
        <About />
        <Languages />
        <Education />
      </div>
      <Footer />
      <MobileModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default App;
