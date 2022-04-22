import React from 'react';
import Loading from '../pages/Loading';
import Header from './Header';
// import favoriteSongsAPI from '../services/favoriteSongsAPI';

// Requisito 08 lista de músicas favoritas
class MusicCard extends React.Component {
//   constructor() {
//     super();

  //     this.state = {
  //       //   favotites: [],
  //     //   inputChange: '',
  //     };
  //   }

  // 8. Crie o mecanismo para adicionar músicas na lista de músicas favoritas - NÃO FUNCIONA AINDA
  //   async componentDidMount() {
  //     const favorites = await favoriteSongsAPI();
  //     this.setState({ favorites });
  //   }

  render() {
    // const { inputChange } = this.state;
    return (
      <div>
        <Header />
        <Loading />
        <h3>MusicCard</h3>
        <label htmlFor="track">
          Favorita
          <input
            id="track"
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            // name=""
            // value={}
            checked
            // name="inputChange"
            // value={ inputChange }
          />
        </label>
      </div>
    );
  }
}

export default MusicCard;
