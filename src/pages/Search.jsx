import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      inputChange: '',
      // input: '',
    };
  }

  // 5. Crie o formulário para pesquisar artistas (input)
  onInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    }, this.onClickButton);
  }

  // Requisito 06 Não faço idéia como fazer isso...
  // clickPesquisar(event) {
  //   const { input } = this.state;
  //   input.event.target = '';
  // }

  render() {
    // 5. Crie o formulário para pesquisar artistas (input)
    const { inputChange } = this.state;
    const characters = 2;
    return (
      <div>
        <Header />
        <div className="search" data-testid="page-search">
          <form>
            <input
              data-testid="search-artist-input"
              onChange={ this.onInputChange }
              value={ inputChange }
              name="inputChange"
              placeholder="Nome do Artista"
            />
            <button
              className="btnSearch"
              type="submit"
              data-testid="search-artist-button"
              // 5. Crie o formulário para pesquisar artistas (input)
              disabled={ inputChange.length < characters }
            >
              Pesquisar
            </button>
          </form>
        </div>
      </div>

    );
  }
}

export default Search;
