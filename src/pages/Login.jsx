import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">

        <form>
          <input
            data-testid="login-name-input"
            placeholder="Digite seu nome"
          />
        </form>
        <button
          type="submit"
          data-testid="login-submit-button"
          // onClick={ createUser() }
          // disabled=""
        >
          Entrar
        </button>
      </div>
    );
  }
}

export default Login;
