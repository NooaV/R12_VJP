import React from 'react';
import './hero.css';


const Hero = () => {
  return (
    <section className="hero-container">
      <div className="static-underlay-container">
        <div className="static-noise"></div>
      </div>

      <div 
        className="hero-foreground"
        style={{ backgroundImage: "url('/images/hero_osio.png')" }}
      ></div>

      <div className="hero-content">
        <h2 className="hero-message">Puhelin alas;</h2>
        <h1 className="hero-title">Katse ylös</h1>
      </div>

    </section>
  );
};


export default Hero;
