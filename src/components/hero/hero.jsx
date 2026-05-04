<<<<<<< HEAD
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
        style={{ backgroundImage: `url(${'src/assets/photos/hero_osio.png'})` }}
      ></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Katse<br />ylös
        </h1>
      </div>

      <div className="hero-logo-container">
        <div className="logo-placeholder"></div>
      </div>
    </section>
  );
};

export default Hero;
=======
import "./Hero.css";

export default function Hero() {
  return <section className="hero"></section>;
}
>>>>>>> 663d935087b54c966581c0be29dd5ddf67e1ed09
