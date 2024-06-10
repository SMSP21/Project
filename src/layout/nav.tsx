import React from 'react';
import ClientNavbar from '@/components/clintnavbar';

const Navbar = () => {
  return (
    <>
      <ClientNavbar />
      
      <nav className="bg-white py-10 navbar sticky top-0 z-50 transition-all duration-500">
        
        <div className="flex items-start justify-center mb-10 transition-all duration-500">
          <a href="/" className="text-black text-[38px] font-bold tracking-[10px]">
            AMBIENCE LIFE STYLE
          </a>
        </div>

        <div className="flex items-center text-1xl justify-center space-x-14">
          <a href="#" className="text-black  duration-500">Collections</a>
          <a href="#" className="text-black  duration-500">Search products</a>
          <a href="#" className="text-black  duration-500">Contract</a>
          <a href="#" className="text-black  duration-500">Vidéos</a>
          <a href="#" className="text-black duration-500">Inspiration</a>
          <a href="#" className="text-black duration-500">The brand</a>
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
