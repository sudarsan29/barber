import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaDirections, FaClock } from 'react-icons/fa';

const Location = () => {
  return (
    <section id="location" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-20">
      <div className="max-w-3xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Visit Our Shop</h2>
        <p className="text-2xl font-semibold mb-10">Our Location</p>
        
        <div className="space-y-6 text-lg">
          {/* Address */}
          <div className="flex items-center justify-center space-x-3">
            <FaMapMarkerAlt className="text-yellow-400 text-xl" />
            <p>518 Acme St unit 101, Denton, TX 76205, United States</p>
          </div>

          {/* Phone */}
          <div className="flex items-center justify-center space-x-3">
            <FaPhoneAlt className="text-yellow-400 text-xl" />
            <p>+19408081569</p>
          </div>

          {/* Business Hours */}
          <div className="flex items-center justify-center space-x-3">
            <FaClock className="text-yellow-400 text-xl" />
            <p>Mon-Fri: 9:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM, Sun: Closed</p>
          </div>

          {/* Directions Button */}
          <div className="mt-8">
            <a
              href="https://www.google.com/maps/dir/13.0023424,77.5487488/518+Acme+St+unit+101,+Denton,+TX+76205,+USA/@1.6971083,-95.811818,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x864dca568f955555:0x9c6f219a185dbb42!2m2!1d-97.1392188!2d33.1952681?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-lg transition"
            >
              <FaDirections className="mr-2" />
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
