import React from 'react';

const services = [
  {
    title: 'Haircut',
    image: '/haircut.jpg',
    description: 'A fresh, clean cut to give you the best look possible.',
  },
  {
    title: 'Shaving',
    image: '/shaving.jpeg',
    description: 'Traditional shaving experience with top-quality razors.',
  },
  {
    title: 'Beard Trim',
    image: '/trim.jpg',
    description: 'Shape and trim your beard for a sharp and clean look.',
  },
  {
    title: 'Facial',
    image: '/facial.jpeg',
    description: 'Relaxing facials for glowing and healthy skin.',
  },
  {
    title: 'Hair Wash',
    image: '/hairwash.jpeg',
    description: 'Deep clean hair wash with premium products.',
  },
  {
    title: 'Head Massage',
    image: '/massage.jpeg',
    description: 'Rejuvenating head massage to ease stress and improve circulation.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16  bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-black hover:border-black bg-gray-800 p-6 rounded-lg shadow-md transition duration-300"
            >
              <div className="overflow-hidden rounded-md mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-white-100">{service.description}</p>

              {/* Book Now Button */}
              <a
                href="#booknow" // Use the anchor tag to navigate to the Book Now section
                className="mt-4 inline-block bg-yellow-500 text-black py-2 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-yellow-400 hover:text-white"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
