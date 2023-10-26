import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MyProjects from './pages/MyProjects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from 'tsparticles';
import particlesOptions from "./helper/particles.json";

import { AnimatePresence } from 'framer-motion';

function App() {

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  const location = useLocation();

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit}/>
   
        <Navbar></Navbar>
        <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projects' element={<MyProjects></MyProjects>}></Route>
        </Routes>
        </AnimatePresence>
        <Footer></Footer>
     
    </div>
  );
}

export default App;
