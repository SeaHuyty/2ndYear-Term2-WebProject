export default function Education({ textEnter, textLeave }) {
  return (
    <section id="education" className="three">
      <p onMouseEnter={textEnter} onMouseLeave={textLeave} className="header">Education</p>
      <br />
      <div className="grid">
        <div id="box" className="box1">
          <p>Bachelor Degree of Computer Science</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius molestiae deserunt qui vitae nisi nobis natus ex. Laborum, maiores? Nemo placeat beatae qui dignissimos rerum ut sapiente sunt dolore maxime!</p>
        </div>
        <div id="box" className="box2">
          <p>Master Degree of Mechatronic Engineering</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius molestiae deserunt qui vitae nisi nobis natus ex. Laborum, maiores? Nemo placeat beatae qui dignissimos rerum ut sapiente sunt dolore maxime!</p>
        </div>
      </div>
    </section>
  );
}