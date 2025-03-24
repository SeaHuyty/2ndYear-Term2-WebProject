import { motion } from 'framer-motion';
import resume from '/Mr.pdf';

export default function Footer() {
  return (
    <footer>
      <a href="https://www.linkedin.com" target="_blank" rel="">
        <motion.img
          src="linkedIn.png"
          alt="LinkedIn"
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </a>
      <a href="https://github.com" target="_blank" rel="">
        <img src="github.png" alt="" />
      </a>
      <a href="https://telegram.org" target="_blank" rel="">
        <img src="telegram.png" alt="" />
      </a>
      <a href="mailto:youremail@gmail.com" target="_blank" rel="">
        <img src="gmail.png" alt="" />
      </a>
      <a href={resume} download="resume">
        <img src="download.png" alt="" />
      </a>
    </footer>
  );
}