import React, { useEffect, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-16 b bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-10">
          About PMC Barbershop
        </h2>

        {/* Content: Flex Layout */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div
            className={`flex-1 transition-all duration-1000 ease-in-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}
          >
            <p className="text-base sm:text-lg text-gray-400 mb-4 text-center md:text-left">
              Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX.
              Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center md:text-left">
              We take pride in our attention to detail and personalized service, ensuring each client leaves looking and
              feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom
              styles that suit each individual's personality and lifestyle.
            </p>
          </div>

          <div
            className={`flex-1 transition-all duration-1000 ease-in-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
            }`}>
            <img src="/barber-shop.jpeg" alt="Barbershop"
              className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
