import React from 'react';
import Header from '../components/Header';
// import { getUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  // primeiro
  constructor() {
    super();

    this.state = {

    };
  }

  // async infoUserLogin() {
  //   const user = await getUser();
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="profileEdit" data-testid="page-profile-edit">
          <form>
            <p>Fique à vontade para usar o seu nome social</p>
            <label htmlFor="nome">
              <input id="nome" placeholder="Digite seu nome" />
            </label>

            <p>Escolha um e-mail válido</p>
            <label htmlFor="email">
              <input id="email" placeholder="usuario@usuario.com.br" />
            </label>

            <p>Descrição</p>
            <label htmlFor="sobre">
              <input id="sobre" placeholder="Sobre mim" />
            </label>

            <button className="btnProfileEdit" type="submit">Salvar</button>
          </form>
        </div>
      </div>

    );
  }
}

export default ProfileEdit;
