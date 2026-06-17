import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footerGrid">
        <div>
          <a className="logo" href="#home">FinUp</a>
          <div className="socialLinks">
            <a href="#home" aria-label="Instagram"><FiInstagram /></a>
            <a href="#home" aria-label="Facebook"><FiFacebook /></a>
            <a href="#home" aria-label="Linkedin"><FiLinkedin /></a>
          </div>
        </div>

        <div>
          <h3>Empresa</h3>
          <a href="#home">Sobre nós</a>
          <a href="#home">Faça parte do time</a>
          <a href="#home">Blog</a>
        </div>

        <div>
          <h3>Funcionalidades</h3>
          <a href="#solucoes">Controle financeiro</a>
          <a href="#solucoes">Relatórios</a>
          <a href="#solucoes">Metas</a>
          <a href="#solucoes">Dashboard</a>
        </div>

        <div>
          <h3>Recursos</h3>
          <a href="#home">iOS e Android</a>
          <a href="#precos">Teste gratuito</a>
          <a href="#depoimentos">Clientes</a>
          <a href="#home">API</a>
        </div>
      </div>

      <div className="footerBottom">
        Feito com amor na aula de Programação Web ©2024 FinUp - Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
