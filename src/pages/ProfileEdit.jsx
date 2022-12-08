import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

class ProfileEdit extends React.Component {
  // primeiro
  constructor() {
    super();
    this.infoUserLogin = this.infoUserLogin.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.isBtnDisabled = this.isBtnDisabled.bind(this);
    this.state = {
      loading: false,
      image: '',
      name: '',
      // disabled: true,
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // isBtnDisabled() {
  //   if (disabled === true) {
  //     this.setState({
  //       disabled: false,
  //     });
  //   }
  // }

  async infoUserLogin() {
    this.setState({
      loading: true,
    });

    const user = await getUser();

    this.setState({
      name: user.name,
      email: user.email,
      description: user.description,
      image: user.image,
      loading: false,
    });
  }

  render() {
    const { loading, image, email, description, name } = this.state;
    const { isBtnDisabled } = this.props;
    return (
      <div>
        <Header />
        <div className="profileEdit" data-testid="page-profile-edit">
          <div>
            { loading ? (<Loading />) : (
              <div>
                <form>

                  <label htmlFor="sobre">
                    imagem:
                    <input
                      data-testid="edit-input-image"
                      value={ image }
                      name="image"
                      placeholder="Insira um link"
                    />
                  </label>

                  <p>Fique à vontade para usar o seu nome social</p>
                  <label htmlFor="nome">
                    Nome:
                    <input
                      data-testid="edit-input-name"
                      id="nome"
                      placeholder="Digite seu nome"
                      name="name"
                      value={ name }
                    />
                  </label>

                  <p>Escolha um e-mail válido</p>
                  <label htmlFor="labelEmail">
                    Email:
                    <input
                      data-testid="edit-input-email"
                      id="labelEmail"
                      placeholder="usuario@usuario.com.br"
                      name="email"
                      value={ email }
                    />
                  </label>

                  <p>Descrição</p>
                  <label htmlFor="sobre">
                    Descrição:
                    <input
                      data-testid="edit-input-description"
                      id="sobre"
                      placeholder="Sobre mim"
                      name="description"
                      value={ description }
                    />
                  </label>

                  <button
                    data-testid="edit-button-save"
                    className="btnProfileEdit"
                    type="submit"
                    disabled={ isBtnDisabled }
                    onClick={ this.onSaveBtnDisabled }

                  >
                    Salvar
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

    );
  }
}

ProfileEdit.propTypes = {
  isBtnDisabled: PropTypes.func,
  onSaveBtnDisabled: PropTypes.func,
}.isRequired;

export default ProfileEdit;
