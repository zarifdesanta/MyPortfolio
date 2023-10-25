import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyProjects from './pages/MyProjects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from 'tsparticles';
import particlesOptions from "./helper/particles.json";

function App() {

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit}/>
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/projects' element={<MyProjects></MyProjects>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
