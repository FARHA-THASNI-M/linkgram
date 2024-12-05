import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-4 py-5 bg-gray-200 text-black fixed bottom-0 left-0 w-full z-10">
      <div className="text-sm">
        © 2024 LINKGRAM INFORMATION TECHNOLOGY L.L.C. All rights reserved.
      </div>
      <div className="text-sm pr-4">
        <a href="mailto:info.LinkGram@gmail.com" className="text-yellow-700 hover:underline">
          info.LinkGram@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
