import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero_container">
        <img className="hero_image" src="/img/hero_img.png" alt="The man in the jacket" />
        <h1 className="hero_title">
          <span className="hero_title-bold">THE BRAND</span>
          OF&nbsp;LUXERIOUS <span className="hero_title-pink">FASHION</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;