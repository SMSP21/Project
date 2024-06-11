// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container  justify-between items-center">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">About Us</a>
          <a href="#" className="text-white">Contact</a>
          <a href="#" className="text-white">Privacy Policy</a>
          <a href="#" className="text-white">Terms of Service</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white">Facebook</a>
          <a href="#" className="text-white">Twitter</a>
          <a href="#" className="text-white">Instagram</a>
          <a href="#" className="text-white">LinkedIn</a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-gray-400">© 2024 CASAMANCE. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
