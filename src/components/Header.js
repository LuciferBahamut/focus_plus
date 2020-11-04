import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Conversion d'images sous vue daltonienne</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
          Accueil
        </NavLink>
        <NavLink activeClassName="active" to="/list">
          Liste de fichiers
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;