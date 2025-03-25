export default function Contact({ textEnter, textLeave }) {
  return (
    <section id="contact" className="four">
      <h1 onMouseEnter={textEnter} onMouseLeave={textLeave}>Contact Me</h1>
    </section>
  );
}