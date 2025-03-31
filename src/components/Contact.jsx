export default function Contact({ textEnter, textLeave }) {
  return (
    <section id="contact" className="four">
      <div className='header'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Contact</p>
      </div>
    </section>
  );
}