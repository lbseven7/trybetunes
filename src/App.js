/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Loading from './pages/Loading';
// import MusicCard from './components/MusicCard';
// import Header from './components/Header';
// 1. Crie as rotas necessárias para a aplicação

class App extends React.Component {
  render() {
    return (
      <>
        <div className="AppParagraph">
          <p>TrybeTunes</p>
          {/* <img src="" alt="" /> */}
          <input className="inputHeaderApp" placeholder="Usuário" />
        </div>

        <BrowserRouter>
          {/* <h3>Login</h3> */}
          {/* <MusicCard /> */}
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route path="/search" component={ Search } />
            <Route path="/album/:id" component={ Album } />
            <Route path="/favorites" component={ Favorites } />
            <Route exact path="/profile" component={ Profile } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            {/* <Route exact path="/musicCard" component={ MusicCard } /> */}
            <Route exact path="/loading" component={ Loading } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
