import React from 'react';
import './header.css'
import { useTranslation } from 'react-i18next';

export default function Header() {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div className='header'>
      <h1>OJ</h1>
      <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
      <nav className='nav-header'>
        <a href="#a-propos">À Propos</a>
        <a href="#mes-projets">Mes Projets</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
         
  );
}