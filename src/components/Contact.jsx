import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

export default function Contact({ textEnter, textLeave }) {
  return (
    <motion.section id="contact" className="four"
      initial = {{ opacity: 0 }}
        whileInView = {{ 
          opacity: 1, 
          transition: {
            duration: 1
          }
        }}
    >
      <div className='header'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">Contact</p>
        <small>If you have any questions or would like to discuss a potential project, don't hesitate to get in touch.</small>
        <motion.div className="box"
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView={"show"}>
          <img src="gmail.png" alt="gmail" />
          <div className="detail">
            <h4>Gmail</h4>
            <a href="mailto:presidentdonaldtrump@gmail.whitehouse">yournamedavid@gmail.com</a>
          </div>
        </motion.div>
        <motion.div className="box"
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView={"show"}>
          <img src="telegram.png" alt="telegram" />
          <div className="detail">
            <h4>Telegram</h4>
            <a>@JohnCena</a>
          </div>
        </motion.div>
        <small style={{marginTop: '6%' }}>You can also connect with me on: </small>
        <motion.div className="box"
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView={"show"}>
          <img src="github.png" alt="github" />
          <div className="detail">
            <h4>Github</h4>
            <a>@JohnCena</a>
          </div>
        </motion.div>
        <motion.div className="box"
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView={"show"}>
          <img src="linkedIn.png" alt="github" />
          <div className="detail">
            <h4>LinkedIn</h4>
            <a>@JohnCena</a>
          </div>
        </motion.div>
      </div>
      <div className="send-message">
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">Send me a message</p>
      </div>
    </motion.section>
  );
}