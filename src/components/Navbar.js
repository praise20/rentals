import React from 'react';
import {  Link } from "react-router-dom";
import logo from "../images/logo.png"

const Navbar= () =>{
  return (
  <nav>
    {/* <p>Welcome</p>
    <img src={logo} style={{width:100}}/> */}
    <li>
      <Link to="/"><img src={logo} /></Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/rentals">Rental</Link>
    </li>
    <li>
      <Link to="/service s">Services</Link>
    </li>
  </nav>
  );
}
export default Navbar;
