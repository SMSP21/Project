'use client';
import { useEffect } from 'react';

const ClientNavbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      const nav = document.querySelector('.navbar');
      if (nav) {
        nav.className = `bg-white navbar sticky top-0 z-50 transition-all duration-1000 ease-in-out ${isScrolled ? 'py-3' : 'py-10'}`;
        const brandLink = nav.querySelector('a');
        if (brandLink) {
          brandLink.classList.toggle('text-[30px]', isScrolled);
          brandLink.classList.toggle('text-[35px]', !isScrolled);
          brandLink.classList.toggle('tracking-[7px]', isScrolled);
          brandLink.classList.toggle('tracking-[8px]', !isScrolled);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ClientNavbar;
