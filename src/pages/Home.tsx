import React from 'react';

import './home.css'; 
import HomeSpecials from '../component/HomeSpecials/HomeSpecials';

const Home: React.FC = () => {
  return (
    <div className="home">

<main className="home__content">
        <section className="home__hero">
          <h1>Welcome to WittyCorp!</h1>
          <p>
            Where ideas spark brighter than your morning coffee and innovation runs wild. Ready to dive in?
          </p>
          <button className="home__cta">Start the Adventure</button>
        </section>
        <section className="home__features">
          <h2>Why We’re Awesome</h2>
          <div className="features__list">
            <div className="feature">
              <h3>Feature 1: Jaw-Dropping Simplicity</h3>
              <p>
                It's so simple, even your pet goldfish could navigate it.
              </p>
            </div>
            <div className="feature">
              <h3>Feature 2: Lightning Fast</h3>
              <p>
                Blink, and you might miss it. Yep, it’s *that* fast.
              </p>
            </div>
            <div className="feature">
              <h3>Feature 3: Unrivaled Support</h3>
              <p>
                We’re here 24/7, fueled by coffee and good vibes.
              </p>
            </div>
          </div>
        </section>
        <HomeSpecials/>
      </main>
   
    </div>
  );
};

export default Home;