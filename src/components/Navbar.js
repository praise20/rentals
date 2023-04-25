import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <nav>
    <li>
      <Link to="/">Home</Link>
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
    <li>
      <Link to="/signin">Sign in</Link>
    </li>
  </nav>
  );
}
export default Navbar;
