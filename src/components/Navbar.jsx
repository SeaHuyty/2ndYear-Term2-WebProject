import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="navBar">
      <motion.div
        className="name"
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        YOUR NAME
      </motion.div>
      <div className="navigation">
        <a href="#home">HOME</a>
        <a href="#education">EDUCATION</a>
        <a href="#experience">EXPERIENCE</a>
        <a href="#contact">CONTACT</a>
      </div>
    </nav>
  );
}