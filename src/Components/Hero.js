import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300); // Reset bounce after animation
  };

  return (
    <section
      id="hero"
      className="h-screen bg-center bg-cover relative text-white"
      style={{
        backgroundImage: `url('/barber-img.jpg')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 md:px-8">
        <div
          className={`transition-all duration-1000 ease-in-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
            Welcome to BarberShop
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-xl mx-auto">
            Fresh cuts. Clean fades. Good vibes.
          </p>

          <a
            href="#contact"
            onClick={handleClick}
            className={`bg-yellow-500 text-black px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-semibold shadow-md transition duration-300 transform hover:scale-110 hover:bg-yellow-400 hover:text-white ${clicked ? 'animate-bounce' : ''}`}
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
