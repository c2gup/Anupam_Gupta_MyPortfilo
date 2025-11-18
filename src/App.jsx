import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import About from "./components/AboutSection/About";
import ContactPageOne from "./components/Contacus/Contacts";
import Hero from "./components/HeroSection/Hero";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import DiscussProject from "./components/DiscusProject/DiscusProject";
import ContactWithus from "./components/ContactWithUs/ContactWithus";
import Headernew from "./components/Header/Headernew";
import Footer from "./components/Footer/Footer";
import Projectsnew from "./components/Projects/Projectsnew";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Router>
        <div>
          <Headernew />

          <Hero />

          <About />
          <Experience />
          <Education />
          <Skills />
          <Projectsnew />
          {/* <Projects/> */}
          <DiscussProject />
          <ContactWithus />
          <ContactPageOne />
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
