import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import { MotionConfig } from 'framer-motion';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Client from './Components/Clients';
import Location from './Components/Location';
import Footer from './Components/Footer';
import Faq from './Components/Faq';
import Ready from './Components/Ready'
import Price from './Components/Price';
import BookNow from './Components/BookNow';
import Empty from './Components/empty';

function App() {
  const [language, setLanguage] = useState('english');
  const [theme, setTheme] = useState('black'); // black, white, blue

  const handleThemeChange = () => {
    setTheme(prev =>
      prev === 'black' ? 'white' : prev === 'white' ? 'blue' : 'black'
    );
  };

  const handleLanguageChange = () => {
    setLanguage(prev => (prev === 'english' ? 'hindi' : 'english'));
  };

  // Map theme to Tailwind class
  const getThemeClass = () => {
    if (theme === 'black') return 'dark bg-black text-white';
    if (theme === 'white') return 'bg-white text-black';
    if (theme === 'blue') return 'bg-blue-800 text-white';
  };

  return (
    <div className={`pt-16 min-h-screen transition-all duration-500 ${getThemeClass()}`}>
      <MotionConfig reducedMotion="user">
        <Navbar onThemeChange={handleThemeChange} onLanguageChange={handleLanguageChange} />
        <Empty />
        <Hero />
        <About />
        <Service />
        <Gallery />
        <Client />
        <Price />
        <Location />
        <BookNow />
        <Faq />
        <Contact />
        <Ready />
        <Footer />
      </MotionConfig>
    </div>
  );
}

export default App;
