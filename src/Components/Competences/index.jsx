import React, { useState } from 'react';
import './competences.css';


const itemData = [
  { name: "HTML & CSS", columns: 2, rows: 1 },
  { name: "JavaScript", columns: 1, rows: 2 },
  { name: "React", columns: 1, rows: 1 },
  { name: "Node.js", columns: 2, rows: 2 },
  { name: "MongoDB", columns: 1, rows: 1 },
  { name: "Git & GitHub", columns: 2, rows: 1 },
  { name: "Optimisation & Debug", columns: 1, rows: 2 },
  { name: "API REST", columns: 1, rows: 2 },
  { name: "Responsive Design", columns: 3, rows: 1 },
  { name: "SEO", columns: 2, rows: 1 }
];


const Competences = () => {
 return (
      <section id="competences">
    <div className="competences-container">
      <div className="competences-title">
        <h2>COMPETENCES</h2>
        <p>Mes competences <br/>COMPETENCES</p>
      </div>
    </div>
    <div id="grid-container">
      {itemData.map((item, index) => (
        <div
          key={index}
          className="grid-item"
          style={{ gridColumn: `span ${item.columns}`, gridRow: `span ${item.rows}` }}
        >
          {item.name}
        </div>
      ))}
    </div>
    </section>
  );
};

export default Competences;
