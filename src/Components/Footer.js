import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 pt-12 px-6 pb-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start text-center lg:text-left gap-16 text-sm">

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#hero" className="hover:text-white transition-all duration-200">Home</a></li>
            <li><a href="#about" className="hover:text-white transition-all duration-200">About</a></li>
            <li><a href="#services" className="hover:text-white transition-all duration-200">Services</a></li>
            <li><a href="#gallery" className="hover:text-white transition-all duration-200">Gallery</a></li>
            <li><a href="#contact" className="hover:text-white transition-all duration-200">Contact</a></li>
            <li><a href="#booknow" className="hover:text-white transition-all duration-200">Book Now</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 flex flex-col items-center lg:items-center">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <div className="flex items-center justify-center text-white space-x-2">
            <FaMapMarkerAlt className="text-white" />
            <p className="text-yellow-400">518 Acme St unit 101</p>
          </div>
          <p className="text-yellow-400">Denton, TX 76205, United States</p>
          <p className="mt-2 text-yellow-400">📞 +1 940-808-1569</p>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Newsletter</h3>
          <p>Subscribe to our newsletter to receive updates and news.</p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 rounded-md font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-yellow-700 pt-4 text-center text-sm text-yellow-500">
        <p>© 2025 PMC Barbershop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
