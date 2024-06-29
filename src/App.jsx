import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Projets from './Components/Projets';
import Competences from './Components/Competences';
import Footer from './Components/Footer';

function App() {
 

  return (
    <div>
    <Header />
    <main>
    <About />
    <Projets />
    <Competences />
    </main>
    <Footer />
  </div>
);
}


export default App;

