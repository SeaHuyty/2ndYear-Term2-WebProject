export default function Education({ textEnter, textLeave }) {
  return (
    <section id="education" className="three">
      <div className='header'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Education</p>
      </div>
      <br />
      <div className="grid">
        <div id="box" className="box1">
          <h2>Bachelor Degree of Computer Science</h2>
          <small>June 2005 - June 2009</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius molestiae deserunt qui vitae nisi nobis natus ex. Laborum, maiores? Nemo placeat beatae qui dignissimos rerum ut sapiente sunt dolore maxime!</p>
        </div>
        <div id="box" className="box2">
          <h2>Master Degree of Mechatronic Engineering</h2>
          <small>June 2011 - June 2013</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius molestiae deserunt qui vitae nisi nobis natus ex. Laborum, maiores? Nemo placeat beatae qui dignissimos rerum ut sapiente sunt dolore maxime!</p>
        </div>
      </div>
    </section>
  );
}