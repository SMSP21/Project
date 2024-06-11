import React from 'react';
import ClientNavbar from '@/components/clintnavbar';

const Navbar = () => {
  return (
    <>
      <ClientNavbar />
      
      <nav className="bg-white py-10 navbar sticky top-0 z-50 transition-all duration-500 ease-in-out">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center mb-4 transition-all duration-500 ease-in-out">
          <a href="/" className="text-black text-[35px] font-bold tracking-[8px] transition-transform transform hover:scale-105 ease-in-out duration-500">
            AMBIENCE LIFE STYLE
          </a>
        </div>

        <div className="flex pt-3  sm:flex-row items-center text-xs sm:text-sm md:text-lg lg:text-xl justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 lg:space-x-8">
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Collections</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Search products</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Contract</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Vidéos</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Inspiration</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">The brand</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
