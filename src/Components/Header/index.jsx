import React, { useState } from 'react';
import './header.css';
import Logo from '../../Assets/O.png'

const Header =() => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <nav className='header'>
      <img className='logo' src={Logo} alt='' />
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <a href="#section-about">Profil</a>
        <a href="#competences">Compétences</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}

export default Header;
  
