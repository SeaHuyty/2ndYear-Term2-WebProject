import { experienceItems } from '../data';

export default function Experience({ textEnter, textLeave }) {
  return (
    <section id="experience" className="two">
      {experienceItems.map((item) => (
        <div key={item.id} className="item" id={item.id}>
          <p onMouseEnter={textEnter} onMouseLeave={textLeave}>{item.title}</p>
          <p>{item.role}</p>
          <p>{item.company}</p>
          {item.images?.map((img) => (
            <img
              key={img.className}
              className={img.className}
              src={img.src}
              alt={img.alt}
            />
          ))}
        </div>
      ))}
    </section>
  );
}