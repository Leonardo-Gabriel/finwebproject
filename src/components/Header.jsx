import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a className="logo" href="#home" onClick={closeMenu}>FinUp</a>

        <button className="menuButton" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`navContent ${isOpen ? 'open' : ''}`}>
          <ul className="navLinks">
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#solucoes" onClick={closeMenu}>Soluções</a></li>
            <li><a href="#depoimentos" onClick={closeMenu}>Depoimentos</a></li>
            <li><a href="#precos" onClick={closeMenu}>Preços</a></li>
            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          </ul>

          <div className="navActions">
            <a className="login" href="#contato" onClick={closeMenu}>Login</a>
            <a className="btn btnPrimary btnSmall" href="#precos" onClick={closeMenu}>
              Cadastre-se <FiArrowRight />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
