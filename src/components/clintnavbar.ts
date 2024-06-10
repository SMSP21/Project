'use client'
import { useEffect } from 'react';

const ClientNavbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      const nav = document.querySelector('.navbar'); // Replace .nav with .navbar for Tailwind
      if (nav) {
        // Replace classes directly
        nav.className = `bg-white  navbar sticky top-0 z-50 duration-500  ${isScrolled ? 'text-sm py-5' : 'py-10'}`;
        nav.querySelector('a')?.classList.toggle('text-[25px]', isScrolled); // Toggle text-lg class based on isScrolled
        nav.querySelector('a')?.classList.toggle('text-[38px]', !isScrolled); // Toggle text-4xl class based on isScrolled
        nav.classList.toggle('p-1', !isScrolled); // Add or remove padding class based on isScrolled

   
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ClientNavbar;
