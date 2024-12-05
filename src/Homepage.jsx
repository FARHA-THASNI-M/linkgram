import React from 'react';
import image1 from './image1.png';
import image2 from './image2.png';
import logo from './logo.png';
import homeIcon from './Home.png';
import reelsIcon from './Reel.png';
import exploreIcon from './Explore.png';
import profileIcon from './Profile.png';

export const Homepage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Upper Portion */}
      <div className="w-full h-[838px] bg-gradient-to-b from-[#f6f6f6] to-white flex flex-col justify-start items-start text-left relative px-4 sm:px-8 md:px-20">
        <div className="font-poppins font-bold text-[32px] sm:text-[48px] md:text-[64px] leading-[60px] tracking-[0.02em] text-[#201d1d] absolute top-[150px] left-[10%] sm:left-[20%] md:left-[30%] w-[80%] sm:w-[50%]">
          Discover the World through <br /> LinkGram
        </div>
        <div className="font-poppins font-bold text-[20px] sm:text-[24px] md:text-[30px] leading-[28px] text-[#201d1d] absolute top-[400px] left-[10%] sm:left-[20%] md:left-[30%] w-[80%] sm:w-[50%]">
          Connect, Capture, and Share!
        </div>
        <div className="font-poppins font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] text-[#201d1d] absolute top-[480px] left-[10%] sm:left-[20%] md:left-[30%] w-[80%] sm:w-[50%]">
          LinkGram is a dynamic social media platform that allows users to connect, express, and share their lives with others. It provides a vibrant space for people to discover and engage with captivating visual content, from stunning photographs to creative videos. With LinkGram, users can explore an array of captivating stories, connect with friends and like-minded individuals, and showcase their own unique perspective through engaging posts. It's a place where creativity thrives, connections are made, and memorable moments are shared, all within a vibrant and supportive community.
        </div>
        <div className="w-full sm:w-[800px] h-[auto] absolute top-[120px] left-[50%] transform -translate-x-1/2 z-0">
          <img src={image1} alt="LinkGram" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Middle Portion */}
      <div className="w-full bg-gradient-to-br from-[#FDC71A] to-[#EC7B09] flex flex-col justify-center items-center text-center py-[50px] px-[20px] text-black">
        <h1 className="font-poppins font-bold text-[32px] sm:text-[42px] md:text-[54px] mb-[10px]">LinkGram</h1>
        <p className="font-poppins font-normal text-[14px] sm:text-[16px] md:text-[18px] mb-[30px] max-w-[900px]">
          Connect. Create. Explore. LinkGram redefines social interaction with seamless sharing, engaging reels, and endless inspiration.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-[20px] w-full">
          {/* Left Section (Home and Explore Icons) */}
          <div className="flex flex-col items-center text-center max-w-[200px] sm:max-w-[220px]">
            <img src={homeIcon} alt="Home Icon" className="w-[50px] h-[50px] mb-[10px]" />
            <p className="font-poppins font-bold text-[16px] sm:text-[18px] mb-[5px]">Home</p>
            <p className="font-poppins font-normal text-[12px] sm:text-[14px]">
              Stay updated with your friends and the latest trends!
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[200px] sm:max-w-[220px]">
            <img src={exploreIcon} alt="Explore Icon" className="w-[50px] h-[50px] mb-[10px]" />
            <p className="font-poppins font-bold text-[16px] sm:text-[18px] mb-[5px]">Explore</p>
            <p className="font-poppins font-normal text-[12px] sm:text-[14px]">
              Discover new creators, trending topics, and exciting content from around the world.
            </p>
          </div>

          {/* Center Image (Image2) */}
          <div className="w-[300px] sm:w-[500px] md:w-[700px] h-auto mb-8 mt-[20px]">
            <img src={image2} alt="LinkGram Feature" className="w-full h-auto object-cover" />
          </div>

          {/* Right Section (Reels and Profile Icons) */}
          <div className="flex flex-col items-center text-center max-w-[200px] sm:max-w-[220px]">
            <img src={reelsIcon} alt="Reels Icon" className="w-[50px] h-[50px] mb-[10px]" />
            <p className="font-poppins font-bold text-[16px] sm:text-[18px] mb-[5px]">Reels</p>
            <p className="font-poppins font-normal text-[12px] sm:text-[14px]">
              Express yourself through short, engaging videos.
            </p>
          </div>
          <div className="flex flex-col items-center text-center max-w-[200px] sm:max-w-[220px]">
            <img src={profileIcon} alt="Profile Icon" className="w-[50px] h-[50px] mb-[10px]" />
            <p className="font-poppins font-bold text-[16px] sm:text-[18px] mb-[5px]">Profile</p>
            <p className="font-poppins font-normal text-[12px] sm:text-[14px]">
              Showcase your favorite moments, track your posts, and customize your profile to reflect your unique style.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Portion */}
      <div className="w-full h-[251px] bg-white border-t border-[#dcdcdc] flex flex-col justify-center items-start text-left text-[#333] px-[20px] sm:px-[40px]">
        <div className="w-[150px] ml-[10px]">
          <img src={logo} alt="Logo" className="w-full" />
        </div>
        <p className="font-poppins font-normal text-[14px] sm:text-[16px]">
          Connect, Capture and Share!
        </p>
      </div>
    </div>
  );
};

export default Homepage;
