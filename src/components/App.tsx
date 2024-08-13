import {Routes,Route,Link } from "react-router-dom";
import React from 'react';
import './App.css';
import SplashScreen from './splashScreen';
import Home from "./Home";
import logo from "../assets/FTCPP1.jpg"
import Compagnies from "./Companies";


function App() {
  return (
    <div className="App">
<header className="container">
<img className="logo" src={logo} alt="FindTechComp logo" title="FindTechComp / Home" />
<nav>
<Link to="/">Home</Link>
<Link to="/companies">Companies</Link>
<Link to="/Carries">Carries</Link>
</nav>
</header>


      <SplashScreen />
    <Routes>
      <Route path="/" element={<Home title="" />}/>
      <Route path="Companies" element={<Compagnies/>} />
    </Routes>
       <footer className="container">
        &copy;2024 | <a href="https://www.linkedin.com/in/joseph-umba-75a9051b0/">@UmbaJ All rights reserved</a>
      </footer>
    </div>
  );
}

export default App;
