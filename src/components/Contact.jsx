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
        <small style={{marginTop: '6%' }}>Download my resume: </small>
        <motion.div className="box"
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView={"show"}>
          <img src="download.png" alt="download" />
          <div className="detail">
            <h4>Download Resume</h4>
            <a download='/Mr.pdf'>Click me</a>
          </div>
        </motion.div>
      </div>
      <div className="send-message">
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">Send me a message</p>
        <div className='info'>
          <div>
            <label htmlFor="firstname">First Name</label><br />
            <input type="text" id="firstname" placeholder="First Name" required />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label><br />
            <input type="text" id="lastname" placeholder="Last Name" required />
          </div>
        </div>
        <div className='info'>
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" id="email" placeholder="Email" required />
          </div>
          <div>
            <label htmlFor="subject">Subject (Optional)</label><br />
            <input type="text" id="subject" placeholder="Subject" />
          </div>
        </div>
        <div className='message'>
          <label htmlFor="message">Message</label><br />
          <textarea id="message" placeholder="Message" rows="6" cols="50"></textarea>
        </div>
        <button>Send</button>
      </div>
    </motion.section>
  );
}