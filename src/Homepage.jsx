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
      <div className="w-full min-h-[838px] bg-white flex flex-col lg:flex-row justify-center items-center pt-[80px] relative px-6 lg:px-[170px]">
        {/* Text Section */}
        <div className="text-section max-w-[600px] text-center lg:text-left mb-10 lg:mb-0 relative z-10 px-6">
          <h1 className="font-poppins font-bold text-[48px] lg:text-[64px] leading-[56px] lg:leading-[72px] text-[#201d1d] mb-[20px]">
            Discover the <br /> World through <br /> LinkGram
          </h1>
          <h2 className="font-poppins font-semibold text-[24px] lg:text-[30px] leading-[32px] lg:leading-[36px] text-[#201d1d] mb-[30px]">
            Connect, Capture, and Share!
          </h2>
          <p className="font-poppins font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#201d1d] mb-[10px]">
            LinkGram is a dynamic social media platform that allows users to connect, express, and share their lives with others. It provides a vibrant space for people to discover and engage with captivating visual content, from stunning photographs to creative videos.
          </p>
          <p className="font-poppins font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] text-[#201d1d]">
            With LinkGram, users can explore captivating stories, connect with like-minded individuals, and showcase their unique perspectives through engaging posts.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-auto flex justify-center items-center lg:absolute lg:right-0 mt-6 lg:mt-0">
          <img
            src={image1}
            alt="LinkGram App"
            className="max-w-full h-auto lg:max-w-[550px] lg:h-auto object-cover"
            style={{ maxHeight: '500px' }}
          />
        </div>
      </div>

      {/* Middle Portion */}
      <div className="w-full bg-gradient-to-r from-[#FDC71A] to-[#EC7B09] flex flex-col justify-center items-center py-[50px] px-[20px] text-black">
        <h1 className="font-poppins font-bold text-[48px] lg:text-[54px] text-center mb-[10px]">
          LinkGram
        </h1>
        <p className="font-poppins font-normal text-[16px] lg:text-[18px] text-center mb-[30px] max-w-[900px]">
          Connect. Create. Explore. LinkGram redefines social interaction with seamless sharing, engaging reels, and endless inspiration.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-[30px] w-full max-w-[1200px]">
          {/* Left Column */}
          <div className="flex flex-col gap-[40px] items-center lg:items-end text-center lg:text-right">
            {/* Home Icon */}
            <div className="flex flex-col items-center text-center">
              <img src={homeIcon} alt="Home Icon" className="w-[60px] h-[60px] mb-[10px]" />
              <p className="font-poppins font-bold text-[20px] mb-[5px]">Home</p>
              <p className="font-poppins font-normal text-[14px] max-w-[180px]">
                Stay updated with your friends and the latest trends!
              </p>
            </div>

            {/* Explore Icon */}
            <div className="flex flex-col items-center text-center">
              <img src={exploreIcon} alt="Explore Icon" className="w-[60px] h-[60px] mb-[10px]" />
              <p className="font-poppins font-bold text-[20px] mb-[5px]">Explore</p>
              <p className="font-poppins font-normal text-[14px] max-w-[180px]">
                Discover new creators, trending topics, and exciting content from around the world.
              </p>
            </div>
          </div>

          {/* Center Image */}
          <div className="w-[330px] h-auto mx-4">
            <img src={image2} alt="LinkGram Feature" className="w-full h-auto object-contain rounded-sm" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[40px] items-center lg:items-start text-center lg:text-left">
            {/* Reels Icon */}
            <div className="flex flex-col items-center text-center">
              <img src={reelsIcon} alt="Reels Icon" className="w-[60px] h-[60px] mb-[10px]" />
              <p className="font-poppins font-bold text-[20px] mb-[5px]">Reels</p>
              <p className="font-poppins font-normal text-[14px] max-w-[180px]">
                Express yourself through short, engaging videos.
              </p>
            </div>

            {/* Profile Icon */}
            <div className="flex flex-col items-center text-center">
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
