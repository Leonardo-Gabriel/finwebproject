import { FiArrowRight } from 'react-icons/fi';

function ManagementSection() {
  return (
    <section className="section management">
      <div className="container managementGrid">
        <div className="mockupArea">
          <div className="mockupBg one" />
          <div className="mockupBg two" />
          <div className="mockupWindow">
            <div className="mockupHeader">
              <span />
              <span />
              <span />
            </div>
            <h3>Dashboard FinUp</h3>
            <p>Receitas x despesas</p>
            <div className="mockChart">
              <span className="c1" />
              <span className="c2" />
              <span className="c3" />
              <span className="c4" />
              <span className="c5" />
              <span className="c6" />
            </div>
          </div>
          <div className="floatingInvoice">
            <strong>Meta concluída</strong>
            <span>Reserva de emergência + R$ 900</span>
          </div>
        </div>

        <div>
          <span className="line" />
          <h2>Gerenciamento financeiro sem complicação</h2>
          <p>
            Tenha uma visão completa do seu dinheiro, acompanhe seus resultados e reduza o tempo gasto com planilhas manuais.
          </p>
          <a className="linkAction" href="#contato">Saiba mais <FiArrowRight /></a>
        </div>
      </div>
    </section>
  );
}

export default ManagementSection;
