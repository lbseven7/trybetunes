import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
// segundo: importar a getUser
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class Profile extends React.Component {
  // primeiro; estrutura do constructor
  constructor() {
    super();
    this.perfilExibition = this.perfilExibition.bind(this);
    this.state = {
      loading: true,
      users: '',
    };
  }

  componentDidMount() {
    this.perfilExibition();
  }

  // terceiro: função que vai chamar a getUser
  async perfilExibition() {
    this.setState((async () => {
      const user = await getUser();
      this.setState({
        users: user,
      });
    }), () => {
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div data-testid="page-profile">
        {loading ? <Loading /> : (
          <div>
            <div>
              <Header />
            </div>
            <div className="profile-div">
              <img src={ users.image } data-testid="profile-image" alt="img-profile" />
            </div>

            <div className="profile-div">
              <Link to="/profile/edit">
                <button type="button">Editar perfil</button>
              </Link>
            </div>
            <div />
            <p>{ users.name }</p>
            <p>{ users.email }</p>
            <p>{ users.description }</p>
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
