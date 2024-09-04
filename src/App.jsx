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

const App = () => {
  return (
    <>
      <Header />
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
    </>
  );
};

export default App;
