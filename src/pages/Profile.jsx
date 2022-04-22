import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

class Profile extends React.Component {
  render() {
    return (
      <div data-testid="page-profile">
        <div>
          <Header />
          <p>Editar perfil</p>
        </div>
        <div className="profile-div">
          <img data-testid="profile-image" alt="img-profile" />
        </div>

        <div className="profile-div">
          <Link to="/profile/edit">Editar perfil</Link>
        </div>
        <div />

      </div>
    );
  }
}

export default Profile;
