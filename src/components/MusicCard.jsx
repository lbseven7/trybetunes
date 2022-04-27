import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

// ajuda Lucas Moreti
class MusicCard extends React.Component {
  constructor() {
    super();
    this.favorite = this.favorite.bind(this);
    this.state = {
      loading: false,
      favoritesMusic: [],
    };
  }

  // Requisito 09 ajuda do Guilherme Oliveira
  async componentDidMount() {
    const favorites = await getFavoriteSongs();
    this.setState({
      favoritesMusic: favorites,
    });
  }

  // Requisito 09 ajuda do Guilherme Oliveira
  isFavorite = (trackId) => {
    const { favoritesMusic } = this.state;
    const isFavorite = favoritesMusic
      .some((element) => element.trackId === trackId);

    return isFavorite;
  }

  async favorite({ target }) {
    const { favoriteSongs } = this.props;

    this.setState({
      loading: true,
    });

    if (target.checked) {
      await addSong(favoriteSongs);
    } else {
      await removeSong(favoriteSongs);
    }

    // Requisito 09 ajuda do Guilherme Oliveira
    const favoritesMusic = await getFavoriteSongs();

    this.setState({
      loading: false,
      favoritesMusic,
    });
  }

  render() {
    const { loading } = this.state;
    const { previewUrl, trackName, trackId } = this.props;
    return (
      <div>
        { loading ? (<Loading />) : (
          <>
            <h3>{trackName}</h3>
            <audio data-testid="audio-component" src={ previewUrl } controls>
              <track kind="captions" />
              O seu navegador não suporta o elemento
              {' '}
              <code>audio</code>
              .
            </audio>
            <label htmlFor="boxcheck">
              Favorita
              <input
                id="boxcheck"
                type="checkbox"
                data-testid={ `checkbox-music-${trackId}` }
                onChange={ this.favorite }
                checked={ this.isFavorite(trackId) }
              />
            </label>
          </>
        )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string,
  trackName: PropTypes.string,
}.isRequired;

export default MusicCard;
