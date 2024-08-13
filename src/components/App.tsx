import {Routes,Route } from "react-router-dom";
import React from 'react';
import './App.css';
import SplashScreen from './splashScreen';
import Home from "./Home";
import logo from "../assets/FTCPP1.jpg"


function App() {
  return (
    <div className="App">
<header className="container">
<img className="logo" src={logo} alt="FindTechComp logo" title="FindTechComp / Home" />

</header>
      
      {/* <SplashScreen /> */}
    <Routes>
      <Route path="/" element={<Home title="" />}/>
      
    </Routes>
       <footer className="container">
        &copy;2024 | <a href="https://www.linkedin.com/in/joseph-umba-75a9051b0/">@UmbaJ All rights reserved</a>
      </footer>
    </div>
  );
}

export default App;
