import logo from './logo.svg';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skill from './components/Skill';
import { useEffect, useState } from 'react';
import Contact from './components/Contact';






function App() {
  return (
    <>
    <div>
  <Home/>
  <About/>
  <Skill></Skill>
  <Work></Work>
  <Contact></Contact>
    </div>
  
    
    </>
  );
}

export default App;
