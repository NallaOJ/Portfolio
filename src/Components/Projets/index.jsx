import React, { useState } from 'react';
import './projets.css';
import Card from '../../Components/Card';
import Kasa from '../../Assets/kasa.webp';
import booki from '../../Assets/booki-home.webp';
import Nina from '../../Assets/Nina.webp'

const Projets = () => {
  const [clickedImage, setClickedImage] = useState(null);

  const handleCardClick = (cardTitle, image) => {
    setClickedImage(image);
  };

  return (
    <div className="projet-container">
      <a href="#mesprojets" className='texte-projet'>Mes Projets</a>
      
      <div className='card-list'>
        <Card
          title="Card 1"
          content="This is the content of Card 1."
          image={Kasa}
          onClick={() => handleCardClick('Card 1', Kasa)}
        />
        <Card
          title="Card 2"
          content="This is the content of Card 2."
          image={booki}
          onClick={() => handleCardClick('Card 2', booki)}
        />
        <Card
          title="Card 3"
          content="This is the content of Card 3."
          image={Nina}
          url="https://nina-carducci-oc-oj.netlify.app"
        />
      </div>
    </div>
  );
};

/*const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
};*/

export default Projets;
