import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Ready = () => {
  return (
    <div id="ready" className="bg-gray-900 text-white py-20 px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Ready for a Fresh Cut?</h2>
      <p className="text-lg mb-8 max-w-3xl mx-auto">
        Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="#booknow"
          className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition font-medium"
        >
          Book an Appointment
        </a>

        <a
          href="#services"
          className="bg-white text-black px-6 py-2 rounded hover:bg-gray-300 transition font-medium"
        >
          View Our Services
        </a>
      </div>
    </div>
  );
};

export default Ready;
