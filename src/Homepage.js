import React from 'react';
import './Homepage.css';
import image1 from './image1.png';
import image2 from './image2.png';
import logo from './logo.png';
import homeIcon from './Home.png'; // Updated icon file names
import reelsIcon from './Reel.png';
import exploreIcon from './Explore.png';
import profileIcon from './Profile.png';

export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="upper-portion">
        <div className="typography-text">
          Discover the World through <br /> LinkGram
        </div>
        <div className="sub-text">Connect, Capture, and Share!</div>
        <div className="description-text">
          LinkGram is a dynamic social media platform that allows users to connect, express, and share their lives with others. It provides a vibrant space for people to discover and engage with captivating visual content, from stunning photographs to creative videos. With LinkGram, users can explore an array of captivating stories, connect with friends and like-minded individuals, and showcase their own unique perspective through engaging posts. It's a place where creativity thrives, connections are made, and memorable moments are shared, all within a vibrant and supportive community.
        </div>
        <div className="image-container">
          <img src={image1} alt="LinkGram" className="image1" />
        </div>
      </div>

      <div className="middle-portion">
        <h1 className="middle-heading">LinkGram</h1>
        <p className="middle-subtext">
          Connect. Create. Explore. LinkGram redefines social interaction with seamless sharing, engaging reels, and endless inspiration.
        </p>
        <div className="middle-layout">
          <div className="middle-left">
            <div className="middle-item">
              <img src={homeIcon} alt="Home Icon" className="icon" />
              <p className="icon-text">Home</p>
              <p className="icon-description">
                Stay updated with your friends and the latest trends!
              </p>
            </div>
            <div className="middle-item">
              <img src={exploreIcon} alt="Explore Icon" className="icon" />
              <p className="icon-text">Explore</p>
              <p className="icon-description">
                Discover new creators, trending topics, and exciting content from around the world.
              </p>
            </div>
          </div>
          <img src={image2} alt="LinkGram Feature" className="image2" />
          <div className="middle-right">
            <div className="middle-item">
              <img src={reelsIcon} alt="Reels Icon" className="icon" />
              <p className="icon-text">Reels</p>
              <p className="icon-description">
                Express yourself through short, engaging videos.
              </p>
            </div>
            <div className="middle-item">
              <img src={profileIcon} alt="Profile Icon" className="icon" />
              <p className="icon-text">Profile</p>
              <p className="icon-description">
                Showcase your favorite moments, track your posts, and customize your profile to reflect your unique style.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-portion">
        <div className="bottom-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <p>Connect, Capture and Share!</p>
      </div>
    </div>
  );
};

export default Homepage;
