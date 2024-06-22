import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projets from './Components/Projets';
import Competences from './Components/Competences';
import Contact from './Components/Contact';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
    <Header />
    <main>
    <About />
    <Projets />
    <Competences />
    <Contact />
    </main>
  </div>
);
}


export default App;

/*<nav>
<button onClick={() => changeLanguage('fr')}>Français</button>
<button onClick={() => changeLanguage('en')}>English</button>
</nav>*/