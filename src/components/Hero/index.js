import React from 'react';
import hero from './crcomp.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-tile">
      <img
        className="hero-image"
        src={hero}
        alt="hero"
      />
      <h1 className="hero-title">
        Crunch Ratings
      </h1>
    </section>
  );
}

export default Hero;
