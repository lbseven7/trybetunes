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
    // this.reloadingUpdate = this.reloadingUpdate.bind(this);
    this.state = {
      listMusic: [],
      loading: false,
      // reloading: false,
    };
  }

  componentDidMount() {
    this.listFavorite();
  }

  // Requisito 12 Bônus
  // componentDidUpdate(prevState) {
  //   const { loading } = this.state;
  //   if (prevState.loading !== loading) {
  //     // this.listFavorite();
  //     console.log('qualquer');
  //   }
  // }

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

  // reloadingUpdate() {
  //   const { reloading } = this.state;
  //   this.setState({
  //     reloading: !reloading,
  //   });
  // }

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
                  // reloading={ reloading }
                  // reloadingUpdate={ this.reloadingUpdate }
                />
              ))}

            </div>
          )}
      </div>
    );
  }
}

export default Favorites;
