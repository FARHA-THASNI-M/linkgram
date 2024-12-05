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
      <div className="w-full min-h-[838px] bg-white flex flex-col justify-center items-start pl-[170px] pt-[80px] relative">
        {/* Text Section */}
        <div className="text-section">
          <h1 className="font-poppins font-bold text-[64px] leading-[72px] text-[#201d1d] mb-[20px]">
            Discover the <br /> World through <br /> YangoSocial
          </h1>
          <h2 className="font-poppins font-semibold text-[30px] leading-[36px] text-[#201d1d] mb-[30px]">
            Connect, Capture, and Share!
          </h2>
          <p className="font-poppins font-normal text-[18px] leading-[28px] text-[#201d1d] mb-[10px] max-w-[600px]">
            YangoSocial is a dynamic social media platform that allows users to connect, express, and share their lives with others. It provides a vibrant space for people to discover and engage with captivating visual content, from stunning photographs to creative videos.
          </p>
          <p className="font-poppins font-normal text-[18px] leading-[28px] text-[#201d1d] max-w-[600px]">
            With YangoSocial, users can explore captivating stories, connect with like-minded individuals, and showcase their unique perspectives through engaging posts.
          </p>
        </div>

        {/* Image Section */}
        <div className="absolute top-[100px] left-[800px] w-[545px] h-[847px]"> {/* Increased size by 10% */}
          <img
            src={image1}
            alt="YangoSocial App"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Middle Portion */}
      <div className="w-full bg-gradient-to-r from-[#FDC71A] to-[#EC7B09] flex flex-col justify-center items-center py-[50px] px-[20px] text-black">
        <h1 className="font-poppins font-bold text-[54px] text-center mb-[10px]">
          LinkGram
        </h1>
        <p className="font-poppins font-normal text-[18px] text-center mb-[30px] max-w-[900px]">
          Connect. Create. Explore. LinkGram redefines social interaction with seamless sharing, engaging reels, and endless inspiration.
        </p>

        <div className="flex flex-row justify-center items-center gap-[30px] w-full max-w-[1200px]"> {/* Reduced gap by 20px */}
          {/* Left Column */}
          <div className="flex flex-col gap-[40px] items-end text-right">
            {/* Home Icon */}
            <div className="flex flex-col items-center">
              <img src={homeIcon} alt="Home Icon" className="w-[60px] h-[60px] mb-[10px]" />
              <p className="font-poppins font-bold text-[20px] mb-[5px]">Home</p>
              <p className="font-poppins font-normal text-[14px] max-w-[180px]">
                Stay updated with your friends and the latest trends!
              </p>
            </div>

            {/* Explore Icon */}
            <div className="flex flex-col items-center">
              <img src={exploreIcon} alt="Explore Icon" className="w-[60px] h-[60px] mb-[10px]" />
              <p className="font-poppins font-bold text-[20px] mb-[5px]">Explore</p>
              <p className="font-poppins font-normal text-[14px] max-w-[180px]">
                Discover new creators, trending topics, and exciting content from around the world.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-[900px] h-auto"> 
            <img src={image2} alt="LinkGram Feature" className="w-full h-auto object-cover rounded-sm" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[40px] items-start text-left">
            {/* Reels Icon */}
            <div className="flex flex-col items-center">
              <img src={reelsIcon} alt="Reels Icon" className="w-[60px] h-[60px] mb-[10px]" />
              <p className="font-poppins font-bold text-[20px] mb-[5px]">Reels</p>
              <p className="font-poppins font-normal text-[14px] max-w-[180px]">
                Express yourself through short, engaging videos.
              </p>
            </div>

            {/* Profile Icon */}
            <div className="flex flex-col items-center">
              <img src={profileIcon} alt="Profile Icon" className="w-[60px] h-[60px] mb-[10px]" />
              <p className="font-poppins font-bold text-[20px] mb-[5px]">Profile</p>
              <p className="font-poppins font-normal text-[14px] max-w-[180px]">
                Showcase your favorite moments, track your posts, and customize your profile to reflect your unique style.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Portion */}
      <div className="w-full h-[251px] bg-white border-t border-[#dcdcdc] flex flex-col justify-center items-start text-left text-[#333] pl-[100px]">
        <div className="w-[150px] ml-[10px]">
          <img src={logo} alt="Logo" className="w-full" />
        </div>
        <p className="font-poppins font-normal text-[16px] mt-[10px]">Connect, Capture and Share!</p>
      </div>
    </div>
  );
};

export default Homepage;
