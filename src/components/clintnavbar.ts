import { useEffect } from 'react';

const ClientNavbar: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      const nav = document.querySelector('.navbar');
      if (nav) {
        nav.className = `bg-white text-white navbar sticky top-0 z-50 transition-all duration-1500 ease-in-out ${
          isScrolled ? 'pt-4 py-0 md:py-4 ' : 'pt-4 py-4 md:py-10'
        }`;

        const brandLink = nav.querySelector('.brand-link');
        if (brandLink) {
          brandLink.className = `brand-link font-mulish font-bold tracking-wide ${
            isScrolled ? 'text-black text-[15px] tracking-[6px]' : 'text-black text-[16px] tracking-[7px]'
          } transition-all duration-1000 ease-in-out`;
        }

        const yo = nav.querySelector('a');
        if (yo) { 
          yo.className = `md:text-[28px] text-black font-mulish font-bold transition-all duration-1000 justify-center ${
            isScrolled ? 'md:text-[26px] tracking-[6px]' : 'md:text-[37px] tracking-[8px]'
          } ease-in-out`;
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
