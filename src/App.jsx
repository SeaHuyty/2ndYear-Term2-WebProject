import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    },
    text: {
      height: 120,
      width: 120,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      mixBlendMode: "difference",
      backgroundColor: "White"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <>
      <div className="container">
          <nav className="navBar">
            <motion.div className="name" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} transition={{ type: 'spring', stiffness: 300 }} >YOUR NAME</motion.div>
            <div className="navigation"> 
              <a href="#">HOME</a>
              <a href="#">HOME</a>
              <a href="#">HOME</a>
              <a href="#">HOME</a>
            </div>
          </nav>

          <footer>
            {/* Implement a component here that loop to retrieve data */}
            <a href="#"><motion.img src="linkedIn.png" alt="LinkedIn" whileHover={{ scale: 1.4 }} whileTap={{ scale: 0.9 }} transition={{ type: 'spring', stiffness: 300 }} /></a>
            <a href="#"><img src="github.png" alt="Github" /></a>
            <a href="#"><img src="telegram.png" alt="Telegram" /></a>
            <a href="#"><img src="gmail.png" alt="email" /></a>
          </footer>

          <section className="one">
            <div className="myName">
              <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Hi there<br /><span className="span1">this is</span><br /><span className="span2">Your Name</span></p>
            </div>
            <img src="car1.png" alt="car" />
            <div className="intro">
              <p onMouseEnter={textEnter} onMouseLeave={textLeave} >I'm always eager to learn, create, and explore new ideas. Whether it's building something from scratch or improving existing projects, I enjoy taking on challenges and finding creative solutions.</p>
            </div>
          </section>


          <section className="three">
              <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Education</p>
              <img className="man" src="Image-7.png" alt="man" />
          </section>

          <section className="two">

            <div className="item" id="item1"></div>

            <div className="item" id="item2"></div>

            <div className="item" id="item3">
              <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Experience</p>
              <p>Software Engineer</p>
              <p>Microsoft</p>
              <img className="cloud1" src="R.png" alt="Cloud" />
              <img className="cloud4" src="R.png" alt="Cloud" />
              <img className="cloud2" src="R.png" alt="Cloud" />
              <img className="cloud3" src="R.png" alt="Cloud" />
              <img className="ufo" src="ufo.png" alt="ufo" />
              <img className="floatingAstro" src="floatingAstro.png" alt="astro" />
            </div>

            <div className="item" id="item4">
              <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Experience</p>
              <p>Software Engineer</p>
              <p>Microsoft</p>
            </div>

            <div className="item" id="item1">
              <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Experience</p>
              <p>Software Engineer</p>
              <p>Microsoft</p>
            </div>
          </section>

          <section className="four" id="fi">
              <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} >Fourth Page</h1>
          </section>

          <section className="five">
              <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} >Fifth Page</h1>
          </section>

      </div>
      <motion.div className="cursor" variants={variants} animate={cursorVariant} />
    </>
  );
};

export default App;