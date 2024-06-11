'use client';

import { useEffect } from 'react';

const ClientNavbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      const nav = document.querySelector('.navbar');
      if (nav) {
        nav.className = `bg-white navbar sticky top-0 z-50 transition-all duration-1000 ease-in-out ${isScrolled ? 'py-3' : 'py-5'}`;
        const brandLink = nav.querySelector('.brand-link');
        if (brandLink) {
          brandLink.classList.toggle('text-[15px]', isScrolled);
          brandLink.classList.toggle('text-[16px]', !isScrolled);
          brandLink.classList.toggle('tracking-[6px]', isScrolled);
          brandLink.classList.toggle('tracking-[7px]', !isScrolled);
          brandLink.classList.add('transition-all', 'duration-1000', 'ease-in-out'); // Added
        }
        const yo = nav.querySelector('a');
        if (yo) {
          // Apply transition properties
          yo.classList.add('transition-all', 'duration-800', 'ease-out-in');
        
          // Use requestAnimationFrame for smoother updates
          requestAnimationFrame(() => {
            yo.classList.toggle('md:text-[26px]', isScrolled);
            yo.classList.toggle('md:text-[35px]', !isScrolled);
            yo.classList.toggle('tracking-[6px]', isScrolled);
            yo.classList.toggle('tracking-[8px]', !isScrolled);
        
            // Create a new animation frame for a smoother transition
            requestAnimationFrame(() => {
              yo.offsetHeight; // Trigger a reflow to apply the new styles
            });
          });
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
