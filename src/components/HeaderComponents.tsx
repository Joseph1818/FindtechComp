import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/FTCPP1.jpg"

const HearderComponent: React.FC = () => {
  return (
    <header className="container">
<img className="logo" src={logo} alt="FindTechComp logo" title="FindTechComp / Home" />
<nav>
<Link to="/">Home</Link>
<Link to="/companies">Companies</Link>
<Link to="/carries">careers</Link>
</nav>
</header>
  )
}

export default HearderComponent