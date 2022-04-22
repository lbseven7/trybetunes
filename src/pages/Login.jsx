import React from 'react';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

class Login extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    // this.inputValidation = this.inputValidation.bind(this);

    this.state = {
      // btnDisable: true,
      // name: '',
      // loading: false,
      // user: [],
      inputChange: '',
    };
  }

  // async componentDidMount() {
  //   const user = await createUser();
  //   this.setState({ user });
  // }

  // Requisito 02 controlando meu input
  onInputChange(event) {
    const { name, value } = event.target;

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

  // NÃO FUNCIONA AINDA - quando clica aparece loading
  onClickButton({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });

    createUser({ name });
    // console.log(createUser);

    this.setState({
      loading: true,
      inputChange: true,
    });
  }

  render() {
    const { inputChange } = this.state;
    const { loading } = this.state;
    // Requisito 02 função validação do input
    const minCharacters = 3;
    return (
      <div>
        <p>Login</p>
        { loading ? (<Loading />
        ) : (
          <div className="page-login" data-testid="page-login">
            <form className="login">
              <input
                data-testid="login-name-input"
                placeholder="Digite seu nome"
                onChange={ this.onInputChange }
                value={ inputChange }
                name="inputChange"
              />
            </form>
            <div className="login">
              <button
                type="submit"
                data-testid="login-submit-button"
                disabled={ inputChange.length < minCharacters }
                // disabled={ btnDisable }
                onClick={ this.onClickButton }
              >
                Entrar
              </button>
            </div>
          </div>
        )}
      </div>

    );
  }
}

export default Login;
