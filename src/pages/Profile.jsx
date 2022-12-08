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
    this.updated = this.updated.bind(this);
    this.state = {
      loading: true,
      // users: '',
      name: 'a',
      image: 'a',
      email: 'a',
      description: 'a',
    };
  }

  componentDidMount() {
    this.perfilExibition();
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // terceiro: função que vai chamar a getUser
  async perfilExibition() {
    this.setState((async () => {
      const user = await getUser();
      this.setState({
        name: user.name,
        image: user.image,
        email: user.email,
        description: user.description,
      });
    }), () => {
      this.setState({
        loading: false,
      });
    });
  }

  async updated() {
    await updateUser();
    // console.log('resposta da API', updated);
  }

  render() {
    const { name, email, description, image, loading } = this.state;
    return (
      <div data-testid="page-profile">
        {loading ? <Loading /> : (
          <div>
            <div>
              <Header />
            </div>
            <div className="profile-div">
              <img src={ image } data-testid="profile-image" alt="img-profile" />
            </div>

            <div className="profile-div">
              <Link to="/profile/edit">
                <button className="btnProfile" type="button">Editar perfil</button>
              </Link>
            </div>
            <div className="divUsers" />
            <p>{ name }</p>
            <p>{ email }</p>
            <p>{ description }</p>
          </div>
        )}
        <Link to="/profile"><span /></Link>
      </div>
    );
  }
}

export default Profile;
