// src/components/Gallery.js
import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Gallery</h2>

        {/* Salon Description */}
        <p className="text-xl text-gray-600 mb-10">
          At PMC Barbershop, we provide a premium grooming experience in a welcoming and stylish environment. Our skilled barbers work with the latest trends and techniques to ensure that every client leaves looking and feeling their best. Browse through our gallery to get a glimpse of the quality service we provide!
        </p>

        {/* Image Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Image Card 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              src="/haircut-progress.jpeg"
              alt="Client haircut in progress"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image Card 2 */}
          <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              src="/interiors.jpg"
              alt="Barbershop interior design"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Image Card 3 */}
          <div className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
            <img
              src="/happy.jpeg"
              alt="Happy customer after haircut"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
