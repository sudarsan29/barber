import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = ({ onThemeChange, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold tracking-wide">Fama Barber Shop</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-yellow-400 hover:underline underline-offset-4 transition duration-300 font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Globe Icon */}
            <li>
              <i
                className="fas fa-globe cursor-pointer hover:text-yellow-400"
                onClick={onLanguageChange}
                title="Switch Language"
              ></i>
            </li>

            {/* Theme Icon */}
            <li>
              <i
                className="fas fa-circle-half-stroke cursor-pointer hover:text-yellow-400"
                onClick={onThemeChange}
                title="Switch Theme"
              ></i>
            </li>

            {/* Phone Icon and Number */}
            <li className="flex items-center space-x-2 ml-4">
              <i className="fas fa-phone-alt"></i>
              <span>+1 940-808-1569</span>
            </li>

            {/* Book Now Button */}
            <li>
              <a
                href="#booknow"
                className="bg-yellow-500 text-black px-4 py-1 rounded hover:bg-yellow-600 transition"
              >
                Book an Appointment
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none text-2xl"
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-white py-2 px-2 rounded hover:text-yellow-400 hover:underline underline-offset-4 transition"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
