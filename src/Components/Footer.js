import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">PMC Barbershop</h2>
          <p className="text-sm mb-4">Classic cuts with modern style</p>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/pmcbarbershop/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-xl hover:text-yellow-500"></i>
            </a>
            <a href="https://www.instagram.com/pmcbarbershop/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-xl hover:text-yellow-500"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
            <li><a href="#gallery" className="hover:text-yellow-400">Gallery</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            <li><a href="#booknow" className="hover:text-yellow-400">Book Now</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-sm flex items-center mb-2">
            <i className="fas fa-map-marker-alt mr-2 text-yellow-500"></i>
            518 Acme St unit 101, Denton, TX 76205, United States
          </p>
          <p className="text-sm flex items-center">
            <i className="fas fa-phone-alt mr-2 text-yellow-500"></i>
            +1 940-808-1569
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter to receive updates and news.</p>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-3 py-2 mb-2 rounded text-black"
          />
          <button className="w-full bg-yellow-500 text-black py-2 rounded hover:bg-yellow-600 transition font-medium">
            Subscribe
          </button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        © 2025 PMC Barbershop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
