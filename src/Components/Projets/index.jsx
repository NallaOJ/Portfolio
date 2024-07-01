import React from 'react';
import './projets.css';
import Card from '../../Components/Card';
import Kasa from '../../Assets/kasa.webp';
import booki from '../../Assets/booki-home.webp';
import Nina from '../../Assets/Nina.webp'

const Projets = () => {

  return (
    <div id='portfolio'>
      <h2  className='texte-projet'>Portfolio</h2>
      
      <div className='card-list'>
        <Card
          title="Mission"
          content="Création d'un environement Frontend responsive."
          image={booki}
          url="https://site-booki-oc-oj.netlify.app/"
        />
        <Card
          title="Mission"
          content="Optimisation, Débug et référencement SEO."
          image={Nina}
          url="https://nina-carducci-oc-oj.netlify.app"
          
        />
      </div>
    </div>
  );
};


export default Projets;
