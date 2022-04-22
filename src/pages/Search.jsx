import React from 'react';
import Header from '../components/Header';
// import Loading from './Loading';
import searchAlbumsAPIs from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.clickPesquisar = this.clickPesquisar.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      inputChange: '',
      // loading: false,
      albumResult: 'Resultado de álbuns de: ',
      saveInputChange: '',
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
  async clickPesquisar(event) {
    event.preventDefault();
    const { inputChange } = this.state;

    this.setState({
      // loading: true,
    });

    const result = await searchAlbumsAPIs(inputChange);
    console.log(result);

    this.setState({
      // loading: false,
      saveInputChange: inputChange,
      inputChange: '',
    });
  }

  render() {
    // 5. Crie o formulário para pesquisar artistas (input)
    const { inputChange, saveInputChange, albumResult } = this.state;
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
              onClick={ this.clickPesquisar }
            >
              Pesquisar
            </button>
            <h3>
              { albumResult }
              { saveInputChange }
            </h3>
          </form>
        </div>
      </div>

    );
  }
}

export default Search;
