import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import { MotionConfig } from 'framer-motion';
import Service from './Components/Service';
import Gallery from './Components/Gallery';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Faq from './Components/Faq'
import Price from './Components/Price'
import BookNow from './Components/BookNow'

function App() {
  return (
    <div className='pt-16'>
      <MotionConfig reducedMotion="user">
      <Navbar />
      <Hero /> 
      <About />
      <Service />
      <Gallery />
      <Price />
      <BookNow />
      <Faq />
      <Contact /> 
      <Footer />
    </MotionConfig>
    </div>
    
  );
}

export default App;
