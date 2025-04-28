import { motion } from 'framer-motion';

export default function Project({ textEnter, textLeave }) {
    return (
        <motion.section className="five"
            initial = {{ opacity: 0 }}
            whileInView = {{ 
            opacity: 1, 
            transition: {
                duration: 1
            }
            }}
        >
            <div className='header'>
                <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Projects</p>
                <small>Take a look at my projects to see how I approach different challenges and bring ideas to life!</small>
            </div>
            <div className="grid">
                <div className="project-box block">
                    <img src='webDesign0201.png' alt="Second Year Term One Web Design Project" />
                    <div className="detail">
                        <h2>PaPaN - Porsche-Exclusive Car Dealership Website</h2>
                        <p>A website for a specialized car dealership that exclusively sells Porsche vehicles. The design concept is inspired by Porsche’s philosophy—precision, innovation, and timeless elegance.
                            With a focus on luxury and functionality, the platform allows users to explore available models effortlessly while staying true to Porsche’s legacy of excellence.</p>
                        <div className='buttons'>
                            <a href='https://2nd-year-term1-web-project.vercel.app/' target='_blank'>Website</a>
                            <a href='https://github.com/SeaHuyty/2ndYear-Term1-WebProject' target='_blank'>Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="project-box block">
                    <img src='database0202.png' alt="Second Year Term One Database Project" />
                    <div className="detail">
                        <h2>Photo Phnom Penh Tuk Tuk Tour Ticket System</h2>
                        <p>A website for a specialized car dealership that exclusively sells Porsche vehicles. The design concept is inspired by Porsche’s philosophy—precision, innovation, and timeless elegance.
                            With a focus on luxury and functionality, the platform allows users to explore available models effortlessly while staying true to Porsche’s legacy of excellence.</p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}