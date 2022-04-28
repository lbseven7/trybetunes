import React from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';

// fiz sozinho...
class Favorites extends React.Component {
  constructor() {
    super();
    this.listFavorite = this.listFavorite.bind(this);
    this.state = {
      listMusic: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.listFavorite();
  }

  async listFavorite() {
    this.setState({
      loading: true,
    });

    const songs = await getFavoriteSongs();

    this.setState({
      loading: false,
      listMusic: songs,
    });
  }

  render() {
    const { loading, listMusic } = this.state;
    return (
      <div>
        { loading ? <Loading />
          : (
            <div data-testid="page-favorites">
              <Header />
              { listMusic.map((musics, index) => (
                <MusicCard
                  key={ index }
                  trackName={ musics.trackName }
                  previewUrl={ musics.previewUrl }
                  trackId={ musics.trackId }
                  favoriteSongs={ musics } // dica do Dilenio
                  listFavorite={ this.listFavorite } // dica do Dilenio
                />
              ))}
            </div>
          )}
      </div>
    );
  }
}

export default Favorites;
