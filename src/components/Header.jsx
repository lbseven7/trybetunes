import React from 'react';
import { Link } from 'react-router-dom';
// import '../index.css';

class Header extends React.Component {
  render() {
    return (
      <header data-testid="header-component">
        <div className="link01">
          <Link to="/search" data-testid="link-to-search">Pesquisar</Link>
        </div>

        <div className="link02">
          <Link to="/favorites" data-testid="link-to-favorites">Favoritas</Link>
        </div>

        <div className="link03">
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </div>

      </header>
    );
  }
}

export default Header;
