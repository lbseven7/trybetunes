import React from 'react';
import PropTypes from 'prop-types';
import addSong from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

// ajuda Lucas Moreti
class MusicCard extends React.Component {
  constructor() {
    super();
    this.favorite = this.favorite.bind(this);
    this.state = {
      loading: false,
      checked: false,
    };
  }

  async favorite() {
    const { favoriteSongs } = this.props;
    this.setState({
      loading: true,
    });

    await addSong(favoriteSongs);

    this.setState({
      loading: false,
    });
  }

  render() {
    const { loading, checked } = this.state;
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
                checked={ checked }
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
