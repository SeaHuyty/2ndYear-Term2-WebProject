export default function Contact({ textEnter, textLeave }) {
  return (
    <section id="contact" className="four">
      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>Contact Me</p>
    </section>
  );
}