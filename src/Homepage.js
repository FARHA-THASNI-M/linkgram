import React from 'react';
import './Homepage.css';

export const Homepage = () => {
  return (
    <div className="homepage">
      {/* Upper Portion */}
      <div className="homepage">
      {/* Upper Portion */}
      <div className="upper-portion">
        <h1>Welcome to LinkGram!</h1>
        <p>Explore the best features for your needs!</p>
        <div className="typography-text">
          Discover the World through <br /> LinkGram
        </div>
      </div>
    </div>

      {/* Middle Portion */}
      <div className="middle-portion">
        <h2>Why Choose LinkGram?</h2>
        <p>Experience the most efficient way to stay connected.</p>
      </div>

      {/* Bottom Portion */}
      <div className="bottom-portion">
        <h3>Contact Us</h3>
        <p>We are here to assist you 24/7!</p>
      </div>
    </div>
  );
};

export default Homepage;
