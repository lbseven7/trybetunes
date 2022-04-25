import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      audios: [],
    };
    this.pegarMusicas = this.pegarMusicas.bind(this);
  }

  componentDidMount() {
    this.pegarMusicas();
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
            favoriteSongs={
              {
                artistId: element.artistId,
                artistName: element.artistName,
                collectionName: element.collectionName,
                collectionPrice: element.collectionPrice,
                artworkUrl100: element.artworkUrl100,
                releaseDate: element.releaseDate,
                trackCount: element.trackCount }
            }
          />
        )) }
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
