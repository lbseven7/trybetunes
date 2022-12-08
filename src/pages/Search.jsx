import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import styles from './Search.module.css';

class Search extends React.Component {
  constructor() {
    super();
    this.clickPesquisar = this.clickPesquisar.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      inputChange: '',
      result: [],
      loading: false,
      albumResult: '',
      notFound: '',
      saveInputChange: '',
    };
  }

  // 5. Crie o formulário para pesquisar artistas (input)
  onInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  // Requisito 06
  async clickPesquisar() {
    // event.preventDefault();
    const { inputChange } = this.state;

    this.setState({
      loading: true,
    });

    const result = await searchAlbumsAPI(inputChange);

    this.setState({
      result,
      loading: false,
      saveInputChange: inputChange,
      inputChange: '',
      notFound: 'Nenhum álbum foi encontrado',
      albumResult: 'Resultado de álbuns de: ',
    });
  }

  render() {
    // 5. Crie o formulário para pesquisar artistas (input)
    const {
      inputChange,
      saveInputChange,
      albumResult,
      result,
      loading,
      notFound,
    } = this.state;
    const characters = 2;
    return (
      <>
        <Header />
        { loading && <Loading />}
        { !loading && (
          <div data-testid="page-search">
            <form className={ styles.search }>
              <input
                className="inputSearch"
                data-testid="search-artist-input"
                onChange={ this.onInputChange }
                value={ inputChange }
                name="inputChange"
                placeholder="Nome do Artista"
              />
              <button
                className="btnSearch"
                type="button"
                data-testid="search-artist-button"
                // 5. Crie o formulário para pesquisar artistas (input)
                disabled={ inputChange.length < characters }
                onClick={ this.clickPesquisar }
              >
                Pesquisar
              </button>
            </form>
            <div className={ styles.albuns }>
              { result.length === 0 ? (<span>{ notFound }</span>) : (
                <>
                  <h3>
                    { albumResult }
                    { saveInputChange }
                  </h3>
                  <div className={ styles.container }>
                    { result.map((element) => (
                      <div key={ element.collectionId }>
                        <img
                          src={ element.artworkUrl100 }
                          alt={ element.collectionName }
                        />
                        <p>{ element.collectionName }</p>
                        <p>{ element.artistName }</p>
                        <Link
                          to={ `/album/${element.collectionId}` }
                          data-testid={ `link-to-album-${element.collectionId}` }
                        >
                          Álbum
                        </Link>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Search;
