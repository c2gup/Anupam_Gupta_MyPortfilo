import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import About from './components/AboutSection/About'
import ContactPageOne from './components/Contacus/Contacts';
import Hero from './components/HeroSection/Hero';
import Education from './components/Education/Education';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import DiscussProject from './components/DiscusProject/DiscusProject';
import ContactWithus from './components/ContactWithUs/ContactWithus';
import Header from './components/Header/Header'

function App() {
 

  return (
    <>

    <Router>
   <div>
    <Header/>
    <Hero/>
   <About/>
   <Education/>
   <Skills/>
   <Projects/>
   <DiscussProject/>
   <ContactWithus/>
   <ContactPageOne/>

   </div>

   </Router>
    
    </>
  )
}

export default App
