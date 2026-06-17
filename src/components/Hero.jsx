import { FiArrowRight, FiDollarSign, FiTrendingUp } from 'react-icons/fi';
import { stats } from '../data/content.js';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroDecor" />
      <div className="container heroGrid">
        <div className="heroText">
          <span className="eyebrow">Olá, controle seu dinheiro</span>
          <h1>Uma solução que simplifica sua vida financeira</h1>
          <p>
            Controle despesas, acompanhe receitas e visualize relatórios claros para tomar melhores decisões todos os dias.
          </p>
          <div className="heroButtons">
            <a className="btn btnPrimary" href="#precos">Cadastre-se <FiArrowRight /></a>
            <a className="btn btnOutline" href="#solucoes">Veja mais</a>
          </div>
        </div>

        <div className="dashboardCard" aria-label="Resumo financeiro ilustrativo">
          <div className="cardTop">
            <div>
              <span>Saldo atual</span>
              <strong>R$ 8.420,00</strong>
            </div>
            <span className="roundIcon"><FiDollarSign /></span>
          </div>

          <div className="chartBars">
            <span className="bar h30" />
            <span className="bar h60" />
            <span className="bar h45" />
            <span className="bar h75" />
            <span className="bar h55" />
            <span className="bar h90" />
            <span className="bar h65" />
          </div>

          <div className="growthBox">
            <FiTrendingUp />
            <div>
              <strong>+24%</strong>
              <span>economia este mês</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container statsGrid">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <article className="statItem" key={item.label}>
              <Icon />
              <strong>{item.number}</strong>
              <span>{item.label}</span>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Hero;
