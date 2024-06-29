import React, { useState } from 'react';
import './header.css';
import avatar from '../../Assets/avatar.jpg';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='header'>
      <img className='avatar' src={avatar} alt='' />
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <a href="#a-propos">À Propos</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#competences">Compétences</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
}
