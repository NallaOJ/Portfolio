import React from "react";
import './portfolio.css';
import Booki from '../../Assets/booki-home.webp';
import Kasa from '../../Assets/kasa.webp';
import Nina from '../../Assets/Nina.webp';

const Data = [
  {
    title: "Mission",
    content: "Création d'environnement Front-End responsive.",
    image: Booki,
    link: "https://site-booki-oc-oj.netlify.app",
  },
  {
    title: "Mission",
    content: "Optimisation, Débug et référencement SEO.",
    image: Nina,
    link: "https://nina-carducci-oc-oj.netlify.app",
  },
  {
    title: "Mission",
    content: "Optimisation, Débug et référencement SEO.",
    image: Kasa,
    link: "https://site-kasa-oc-oj.netlify.app/",
  },
];


const Portfolio = () => {
  return (
    <section id="portfolio">
    <div className="portfolio-container">
      <div className="portfolio-title">
        <h2>PORTFOLIO</h2>
        <p>Mes projets <br/>PORTFOLIO</p>
      </div>
      <div className="projets">
      {Data.map((comp, index) => (
        <a key={index} className="card" href={comp.link} target="_blank" rel="noopener noreferrer">
          <img src={comp.image} alt={comp.title} heigh="auto" width="100%" />
          <h2>{comp.title}</h2>
          <p>{comp.content}</p>
        </a>
      ))}
      </div>
    </div>
    </section>
  );
};

export default Portfolio;