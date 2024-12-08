import React from 'react';

const Footer = () => {
  return (
    <div className="bg-white w-full py-8 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
      <div className="flex flex-col sm:flex-row justify-between items-start space-y-8 sm:space-y-0 sm:space-x-8">
        <div className="flex flex-col w-full sm:w-1/4">
          <h2 className="text-xl sm:text-2xl font-bold">Funiro.</h2>
          <p className="text-sm sm:text-base text-[#9F9F9F] mt-4">
            400 University Drive Suite 200 Coral<br />
            Gables<br />
            FL 33134 USA
          </p>

          <div className="mt-auto">
            <p className="text-sm sm:text-base text-black mt-4 py-9">
              2023 Funiro. All rights reserved
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full sm:w-1/4">
          <p className="text-sm sm:text-base text-[#9F9F9F]">Links</p>
          <p className="text-sm sm:text-base text-black py-2 sm:py-4 mt-2">Home</p>
          <p className="text-sm sm:text-base text-black py-2 sm:py-4 mt-2">Shop</p>
          <p className="text-sm sm:text-base text-black py-2 sm:py-4 mt-2">Blog</p>
          <p className="text-sm sm:text-base text-black py-2 sm:py-4 mt-2">Contact</p>  
        </div>
        <div className="flex flex-col w-full sm:w-1/4">
          <p className="text-sm sm:text-base text-[#9F9F9F]">Help</p>
          <p className="text-sm sm:text-base text-black py-4 mt-2">Payment Options</p>
          <p className="text-sm sm:text-base text-black py-4 mt-2">Returns</p>
          <p className="text-sm sm:text-base text-black py-4 mt-2">Privacy Policies</p>
        </div>
        <div className="flex flex-col w-full sm:w-1/4">
          <p className="text-sm sm:text-base font-semibold">Newsletter</p>
          <div className="flex items-center mt-4">
            <input
              type="email"
              className="border-b-2 border-gray-400 py-1 px-2 text-lg sm:text-base outline-none"
              placeholder="Enter your email"
            />
            <span
              className="ml-4 text-lg sm:text-base font-semibold text-black cursor-pointer hover:underline border-b-2 sm:block hidden"
            >
              Subscribe
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
