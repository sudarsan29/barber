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
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className={`flex-1 transition-all duration-1000 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About PMC Barbershop</h2>
          <p className="text-lg text-gray-700 mb-4">
            Established in 2018, PMC Barbershop has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We take pride in our attention to detail and personalized service, ensuring each client leaves looking and feeling their best. Our skilled barbers combine traditional techniques with modern trends to create custom styles that suit each individual's personality and lifestyle.
          </p>
        </div>

        {/* Image Section */}
        <div className={`flex-1 transition-all duration-1000 ease-in-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
          <img src="/barber-shop.jpeg" alt="Barbershop" className="rounded-xl shadow-lg w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default About;
