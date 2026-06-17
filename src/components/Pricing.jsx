import { FiCheck } from 'react-icons/fi';
import { plans } from '../data/content.js';

function Pricing() {
  return (
    <section id="precos" className="section pricing">
      <div className="container">
        <div className="sectionHeader">
          <span className="eyebrow">Planos e preços</span>
          <h2>Nossos planos</h2>
        </div>

        <div className="pricingGrid">
          {plans.map((plan) => (
            <article className={`priceCard ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && <span className="badge">7 dias grátis</span>}
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="price">
                <strong>{plan.price}</strong>
                {plan.period && <span>{plan.period}</span>}
              </div>
              <a className={`btn ${plan.featured ? 'btnPrimary' : 'btnOutline'}`} href="#contato">{plan.button}</a>
              <ul>
                {plan.benefits.map((benefit) => (
                  <li key={benefit}><FiCheck /> {benefit}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
