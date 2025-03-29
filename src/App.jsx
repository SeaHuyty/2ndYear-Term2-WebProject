import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: 'difference',
      backgroundColor: 'White',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <>
      <div className="container">
        <Navbar />
        <Footer />
        <Home textEnter={textEnter} textLeave={textLeave} />
        <Education textEnter={textEnter} textLeave={textLeave} />
        {/* <Experience textEnter={textEnter} textLeave={textLeave} /> */}
        <section id="experience" className="two">
          <p>Experience</p>
        </section>
        <Contact textEnter={textEnter} textLeave={textLeave} />
      </div>
      <motion.div className="cursor" variants={variants} animate={cursorVariant} />
    </>
  );
}

export default App;