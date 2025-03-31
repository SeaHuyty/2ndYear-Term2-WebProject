import { motion } from 'framer-motion';

export default function Education({ textEnter, textLeave }) {
  return (
    <motion.section id="education" className="three"
      initial = {{ opacity: 0 }}
      whileInView = {{ 
        opacity: 1, 
        transition: {
          duration: 1
        }
       }}
    >
      <div className='header'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Education</p>
      </div>
      <br />
      <div className="grid">
        <div id="box" className="block">
          <h2>Bachelor Degree of Computer Science</h2>
          <small>June 2005 - June 2009</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius molestiae deserunt qui vitae nisi nobis natus ex. Laborum, maiores? Nemo placeat beatae qui dignissimos rerum ut sapiente sunt dolore maxime!</p>
        </div>
        <div id="box" className="block">
          <h2>Master Degree of Mechatronic Engineering</h2>
          <small>June 2011 - June 2013</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius molestiae deserunt qui vitae nisi nobis natus ex. Laborum, maiores? Nemo placeat beatae qui dignissimos rerum ut sapiente sunt dolore maxime!</p>
        </div>
      </div>
    </motion.section>
  );
}