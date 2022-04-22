import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      user: '',
    };
  }

  async componentDidMount() {
    // const { loading } = this.state;
    this.setState({
      loading: true,
    });

    const user = await getUser();

    this.setState({
      loading: false,
      user: user.name,
    });
  }

  render() {
    const { loading, user } = this.state;
    return (

      <header data-testid="header-component">
        {loading ? <Loading /> : <h3 data-testid="header-user-name">{user}</h3>}
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
