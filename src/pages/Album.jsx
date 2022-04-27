import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';
// import Loading from './Loading';
// import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      audios: [],
      // favoritesMusic: [],
      // loadMusic: true,
    };
    this.pegarMusicas = this.pegarMusicas.bind(this);
    // this.favorites = this.favorites.bind(this);
  }

  componentDidMount() {
    this.pegarMusicas();
    // this.favorites();
  }

  async pegarMusicas() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const audios = await getMusics(id);
    this.setState({
      audios,
    });
  }

  // Requisito 09
  // async favorites() {
  //   const { favoritesMusic } = this.state;
  //   const favoritesMusic = await getFavoriteSongs();
  //   this.setState({
  //     favoritesMusic: [...audios]
  //   }, () => { const { favoritesMusic } = this.state; });
  // }

  render() {
    const { audios } = this.state;

    return (
      <div data-testid="page-album">
        <Header />
        <div>
          <span data-testid="artist-name">{ audios[0]?.artistName }</span>
          <span data-testid="album-name">{ audios[0]?.collectionName }</span>
        </div>

        { audios.filter((element) => (element.kind === 'song')).map((element) => (
          <MusicCard
            key={ element.trackId }
            trackName={ element.trackName }
            previewUrl={ element.previewUrl }
            trackId={ element.trackId } // bugou ajuda do Isaac
            favoriteSongs={ element }
          />
        ))}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
}.isRequired;

export default Album;
