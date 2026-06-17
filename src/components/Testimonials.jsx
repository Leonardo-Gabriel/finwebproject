import { FiStar } from 'react-icons/fi';
import { testimonials } from '../data/content.js';

function Testimonials() {
  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <div className="sectionHeader lightHeader">
          <span className="eyebrow">Conselho de quem conhece</span>
          <h2>Cada cliente importa!</h2>
          <p>Veja como a FinUp ajuda pessoas e empresas a terem mais controle sobre suas finanças.</p>
        </div>

        <div className="testimonialGrid">
          {testimonials.map((item) => (
            <article className="testimonialCard" key={item.name}>
              <div className="avatar">{item.avatar}</div>
              <p>“{item.text}”</p>
              <div className="stars" aria-label="5 estrelas">
                <FiStar /><FiStar /><FiStar /><FiStar /><FiStar />
              </div>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
