import React from 'react';
import { Redirect } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    // this.inputValidation = this.inputValidation.bind(this);

    this.state = {
      name: '',
      loading: false,
      direct: false,
    };
  }

  // Requisito 02 controlando meu input
  onInputChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  // Requisito 02 função validação do input

  // inputValidation() {
  //   const { inputChange } = this.state;
  //   const tres = 3;
  //   if (inputChange.length >= tres) {
  //     this.setState(() => ({ btnDisable: false }));
  //   }
  // }

  async onClickButton() {
    const { name } = this.state;
    this.setState({
      loading: true,
    });

    await createUser({ name });

    this.setState({
      loading: false,
      direct: true,
    });
  }

  render() {
    const { name, direct } = this.state;
    const { loading } = this.state;
    // Requisito 02 função validação do input
    const minCharacters = 3;
    return (
      <div>
        {/* <p>Login</p> */}
        { loading ? (<Loading />
        ) : (
          <div className="page-login" data-testid="page-login">
            <form className="login">
              <input
                data-testid="login-name-input"
                placeholder="Digite seu nome"
                onChange={ this.onInputChange }
                value={ name }
                name="name"
                type="text"
              />
            </form>
            <div className="login">
              <button
                type="submit"
                data-testid="login-submit-button"
                disabled={ name.length < minCharacters }
                // disabled={ btnDisable }
                onClick={ this.onClickButton }
              >
                Entrar
              </button>
            </div>
          </div>
        )}
        { direct ? <Redirect to="/search" /> : null }
      </div>
    );
  }
}

export default Login;
