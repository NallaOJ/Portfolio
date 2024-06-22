import React from 'react'
import './card.css'

const Card = ({ title, content, image, url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <div onClick={handleClick} className='Card'>
      {image && <img src={image} alt={title} className='image-card' />}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};


export default Card;
