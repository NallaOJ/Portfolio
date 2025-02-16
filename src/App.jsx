import React from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Competences from './Components/Competences';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
 

  return (
    <div className="App">
    <Header />
    <main>
    <About />
    <Competences />
    <Portfolio />
    <Contact />
    </main>
    <Footer />
  </div>
);
}


export default App;

