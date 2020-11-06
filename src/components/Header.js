import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <h1>Focus +</h1>
      <nav>
        <NavLink activeClassName="active" to="/" exact={true}>
          Accueil
        </NavLink>
        <NavLink activeClassName="active" to="/focus+">
          Focus+
        </NavLink>
        <NavLink activeClassName="active" to="/video">
          Video tuto
        </NavLink>
        <NavLink activeClassName="active" to="/forum">
          Forum
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;