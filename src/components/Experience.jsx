import { experienceItems } from '../data';
import { motion } from 'framer-motion';

export default function Experience({ textEnter, textLeave }) {
  return (
    <motion.section id="experience" className="two"
      initial = {{ opacity: 0 }}
        whileInView = {{ 
          opacity: 1, 
          transition: {
            duration: 1
          }
        }}
      >
      <div className='header'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Experience</p>
      </div>
      <div className='item'>
        <img src="R.png" alt="cloud" className='cloud1' />
        <img src="R.png" alt="cloud" className='cloud2' />
        <img src="R.png" alt="cloud" className='cloud3' />
        <img src="R.png" alt="cloud" className='cloud4' />
        <img src="ufo.png" alt="ufo" className='ufo' />
        <img src="floatingAstro.png" alt="floating Astro" className='floatingAstro' />
        <div className="container first-container block">
          <h2>Amazon</h2>
          <small>May 2014 - May 2015</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iste non natus quas impedit error similique sint aliquid perferendis distinctio?</p>
        </div>
        <div className="container second-container block">
          <h2>Amazon</h2>
          <small>May 2014 - May 2015</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iste non natus quas impedit error similique sint aliquid perferendis distinctio?</p>
        </div>
        <div className="container third-container block">
          <h2>Amazon</h2>
          <small>May 2014 - May 2015</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iste non natus quas impedit error similique sint aliquid perferendis distinctio?</p>
        </div>
      </div>
    </motion.section>
  );
}