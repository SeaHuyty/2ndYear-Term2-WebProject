export default function Experience({ textEnter, textLeave }) {
    return (
      <section id="experience" className="two">
        <div className="item" id="item1"></div>
        <div className="item" id="item2"></div>
        <div className="item" id="item3">
          <p onMouseEnter={textEnter} onMouseLeave={textLeave}>Experience</p>
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
          <p onMouseEnter={textEnter} onMouseLeave={textLeave}>Experience</p>
          <p>Software Engineer</p>
          <p>Microsoft</p>
        </div>
        <div className="item" id="item1">
          <p onMouseEnter={textEnter} onMouseLeave={textLeave}>Experience</p>
          <p>Software Engineer</p>
          <p>Microsoft</p>
        </div>
      </section>
    );
  }