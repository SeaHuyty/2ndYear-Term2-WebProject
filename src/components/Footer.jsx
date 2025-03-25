import { motion } from 'framer-motion';
import { socialLinks } from '../data';

export default function Footer() {
  return (
    <footer>
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          download={link.download || undefined}
        >
          {link.motion ? (
            <motion.img
              src={link.icon}
              alt={link.name}
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ) : (
            <img src={link.icon} alt={link.name} />
          )}
        </a>
      ))}
    </footer>
  );
}