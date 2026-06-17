import { FiArrowRight } from 'react-icons/fi';
import { valueCards } from '../data/content.js';

function ValueSection() {
  return (
    <section className="section valueSection">
      <div className="container valueGrid">
        <div>
          <span className="line" />
          <h2>O valor que você busca em um único lugar</h2>
          <p>
            A FinUp reúne organização, planejamento e análise financeira em uma plataforma simples, moderna e responsiva.
          </p>
          <a className="linkAction" href="#contato">Saiba mais <FiArrowRight /></a>
        </div>

        <div className="miniCards">
          {valueCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="miniCard" key={card.title}>
                <span className="filledIcon"><Icon /></span>
                <h3>{card.title}</h3>
                <span className="smallLine" />
                <p>{card.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ValueSection;
