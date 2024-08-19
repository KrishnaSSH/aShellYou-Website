import React, { useState } from 'react';
import './css/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="logo">aShell You</div>
      <ul className="nav-links">
        <li><a href="#home" onClick={toggleNavbar}>Home</a></li>
        <li><a href="#features" onClick={toggleNavbar}>Features</a></li>
        <li><a href="https://github.com/DP-Hridayan/aShellYou/graphs/contributors" onClick={toggleNavbar}>Team</a></li>
        <li><a href="https://github.com/dp-hridayan/ashellyou/" onClick={toggleNavbar}>Github</a></li>
      </ul>
      <div className="burger" onClick={toggleNavbar}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
};

export default Navbar;
