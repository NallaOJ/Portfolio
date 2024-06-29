import React from "react";
import './competences.css';


export default function Competences() {
return (
  <section id="competences">
   <svg width="100%" height="35px" viewBox="0 0 100 20" preserveAspectRatio="none" >
  <path d="M0 30 V12 Q30 17 55 12 T100 11 V30z" fill="#8E4EC6" />
</svg>
<h2 className="competences-texte">Compétences</h2>
<div className="container-card-competences">
<div className="card-competences">
<ul className="liste-competences">
  <li>HTML</li>
  <li>REACT</li>
  <li>JAVASCRIPT</li>
  <li>CSS</li>
</ul>
</div>
<div className="card-competences">
<ul className="liste-competences">
  <li>SEO</li>
  <li>MAINTENANCE WEB</li>
  <li>OPTIMISATION & DEBUG</li>
</ul>
</div>
<div className="card-competences">
<ul className="liste-competences">
  <li>SOLUTION TECHNIQUE</li>
  <li>DECOUPAGE DES TÄCHES</li>
  <li>INSTALLATION D'ENVIRONNEMENT FRONTEND</li>
</ul>
</div>
</div>
    </section>
 
)
}