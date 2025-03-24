export default function Home({ textEnter, textLeave }) {
    return (
      <section id="home" className="one">
        <div className="myName">
          <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
            Hi there
            <br />
            <span className="span1">this is</span>
            <br />
            <span className="span2">Your Name</span>
          </p>
        </div>
        <img src="car1.png" alt="car" />
        <div className="intro">
          <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
            I'm always eager to learn, create, and explore new ideas. Whether it's building something
            from scratch or improving existing projects, I enjoy taking on challenges and finding
            creative solutions.
          </p>
        </div>
      </section>
    );
  }