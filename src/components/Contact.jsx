import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import emailjs from '@emailjs/browser';
import resume from '/Mr.pdf';

export default function Contact({ textEnter, textLeave }) {

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_14oxuhy', 'template_7lz6wer', e.target, 'pdG_CUmZ_XIBzqQT7');
  }

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
            <a href="mailto:seahuyty4444@gmail.com">seahuyty@gmail.com</a>
          </div>
        </motion.div>
        <motion.div className="box"
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView={"show"}>
          <img src="telegram.png" alt="telegram" />
          <div className="detail">
            <h4>Telegram</h4>
            <a>@SeaHuyty</a>
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
            <a href='https://github.com/SeaHuyty' target="_blank">@SeaHuyty</a>
          </div>
        </motion.div>
        <motion.div className="box"
          variants={fadeIn('right', 0.1)}
          initial="hidden"
          whileInView={"show"}>
          <img src="linkedIn.png" alt="github" />
          <div className="detail">
            <h4>LinkedIn</h4>
            <a href='https://www.linkedin.com/in/sea-huyty-bab014283/' target="_blank">Sea Huyty</a>
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
            <a href={resume} download='/Mr.pdf'>Click me</a>
          </div>
        </motion.div>
      </div>
      <form className="send-message" onSubmit={sendEmail}>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="title">Send me a message</p>
        <div className='info'>
          <div>
            <label htmlFor="firstname">First Name</label><br />
            <input type="text" name="firstname" id="firstname" placeholder="First Name" required />
          </div>
          <div>
            <label htmlFor="lastname">Last Name</label><br />
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" required />
          </div>
        </div>
        <div className='info'>
          <div>
            <label htmlFor="email">Email</label><br />
            <input type="text" name="email" id="email" placeholder="Email" required />
          </div>
          <div>
            <label htmlFor="subject">Subject (Optional)</label><br />
            <input type="text" name="subject" id="subject" placeholder="Subject" />
          </div>
        </div>
        <div className='message'>
          <label htmlFor="message">Message</label><br />
          <textarea id="message" name="message" placeholder="Message" rows="6" cols="50"></textarea>
        </div>
        <button type='submit' variants="contained">Send</button>
      </form>
    </motion.section>
  );
}