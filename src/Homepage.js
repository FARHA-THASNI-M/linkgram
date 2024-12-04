import React from 'react';
import './Homepage.css';

export const Homepage = () => {
  return (
    <div className="homepage">
      {/* Upper Portion */}
      <div className="upper-portion">
        {/* Typography Text 1 */}
        <div className="typography-text">
          Discover the World through <br /> LinkGram
        </div>

        {/* Typography Text 2 */}
        <div className="sub-text">
          Connect, Capture, and Share!
        </div>

        {/* Typography Text 3 */}
        <div className="description-text">
          LinkGram is a dynamic social media platform that allows users to connect, express, and share their lives with others. It provides a vibrant space for people to discover and engage with captivating visual content, from stunning photographs to creative videos. With LinkGram, users can explore an array of captivating stories, connect with friends and like-minded individuals, and showcase their own unique perspective through engaging posts. It's a place where creativity thrives, connections are made, and memorable moments are shared, all within a vibrant and supportive community.
        </div>
      </div>

      {/* Other portions (middle and bottom) */}
      <div className="middle-portion">
        <h2>Why Choose LinkGram?</h2>
        <p>Experience the most efficient way to stay connected.</p>
      </div>

      <div className="bottom-portion">
        <h3>Contact Us</h3>
        <p>We are here to assist you 24/7!</p>
      </div>
    </div>
  );
};

export default Homepage;
