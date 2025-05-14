// src/components/Services.js
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
    <section id="services" className="py-16 bg-brown">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-4 border-black-400 hover:border-yellow-600 bg-gray-100 hover:bg-yellow-100 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
