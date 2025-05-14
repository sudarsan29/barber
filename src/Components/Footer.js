// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-400 pt-12 px-6 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition-all duration-200">Home</a></li>
            <li><a href="/about" className="hover:text-white transition-all duration-200">About</a></li>
            <li><a href="/services" className="hover:text-white transition-all duration-200">Services</a></li>
            <li><a href="/gallery" className="hover:text-white transition-all duration-200">Gallery</a></li>
            <li><a href="/contact" className="hover:text-white transition-all duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <p>518 Acme St unit 101,</p>
          <p>Denton, TX 76205, United States</p>
          <p className="mt-2">📞 +1 940-808-1569</p>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to our newsletter to receive updates and news.</p>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full sm:w-auto px-4 py-2 rounded-md text-black"
            />
            <button
              type="submit"
              className=" hover:bg-white hover:text-black transition-all duration-300 px-4 py-2 rounded-md font-semibold"
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
