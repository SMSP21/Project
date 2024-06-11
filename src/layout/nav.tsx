'use client';

import React, { useState } from 'react';
import ClientNavbar from '@/components/clintnavbar';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <ClientNavbar />
      
      <nav className="bg-black py-10 navbar sticky top-0 z-50 transition-all duration-500 ease-in-out">
        <div className="flex flex-row items-center justify-between mb-4 transition-all duration-500 ease-in-out relative">
          <button className="sm:hidden text-black pl-2" onClick={toggleSidebar}>
            ☰
          </button>
          <div className="flex-grow text-center pl-0 justify-center item-center">
            <a href="/" className="text-black md:text-[35px] tracking-[8px] font-bold transition-transform transform hover:scale-105 ease-in-out duration-500 brand-link">
              AMBIENCE LIFE STYLE
            </a>
          </div>
        </div>

        <div className="hidden sm:flex flex-row items-center text-xs sm:text-sm md:text-lg lg:text-xl justify-center space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 pt-3">
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Collections</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Search products</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Contract</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Vidéos</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Inspiration</a>
          <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">The brand</a>
        </div>

        <div className={`fixed inset-y-0 left-0 w-64 bg-white z-50 transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:hidden`}>
          <div className="flex justify-end p-4">
            <button className="text-black" onClick={toggleSidebar}>
              ✕
            </button>
          </div>
          <div className="flex flex-col items-start text-sm space-y-4 pt-3 pl-4">
            <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Collections</a>
            <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Search products</a>
            <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Contract</a>
            <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Vidéos</a>
            <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">Inspiration</a>
            <a href="#" className="text-black px-2 py-1 rounded duration-500 hover:text-gray-500 transition-colors ease-in-out hover:bg-gray-200">The brand</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
