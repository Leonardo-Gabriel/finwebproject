import { solutions } from '../data/content.js';

function Solutions() {
  return (
    <section id="solucoes" className="section solutions">
      <div className="container">
        <div className="sectionHeader">
          <span className="eyebrow">Soluções</span>
          <h2>Sob medida para você</h2>
          <p>
            Inovação é com a gente! A FinUp ajuda você a cuidar melhor do seu dinheiro com ferramentas simples e eficientes.
          </p>
        </div>

        <div className="cardsGrid">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <article className="solutionCard" key={item.title}>
                <div className="outlineIcon"><Icon /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
