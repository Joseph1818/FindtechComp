import {Routes,Route,Link } from "react-router-dom";
import React from 'react';
import './App.css';
import SplashScreen from './splashScreen';
import Home from "./Home";
import Compagnies from "./Companies";
import HearderComponent from "./HeaderComponents";
import Carries from "./Carries";



function App() {
  return (
    <div className="App">

      <SplashScreen />
    <HearderComponent/>
    <Routes>
      <Route path="/" element={<Home title="" />}/>
      <Route path="Companies" element={<Compagnies/>} />
      <Route path="carries" element={<Carries/>} />
    </Routes>
       <footer className="container">
        &copy;2024 | <a href="https://www.linkedin.com/in/joseph-umba-75a9051b0/">@UmbaJ All rights reserved</a>
      </footer>
    </div>
  );
}

export default App;
