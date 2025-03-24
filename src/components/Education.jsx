export default function Education({ textEnter, textLeave }) {
    return (
      <section id="education" className="three">
        <p onMouseEnter={textEnter} onMouseLeave={textLeave}>Education</p>
        <img className="man" src="Image-7.png" alt="man" />
      </section>
    );
  }