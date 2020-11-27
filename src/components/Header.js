import React from 'react';
import { NavLink } from 'react-router-dom';
import Focus_plus from '../image/logo_focus+.png';
import Logo from '../image/logo_ministère.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo}
      alt="ministère logo"
      title="Logo du ministère"></img>
      <img src={Focus_plus}
      alt="Focus+ logo"
      height="200"
      title="Focus + logo"></img>
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
      <p>Ceci n'est qu'un prototype</p>
    </div>
  );
};

export default Header;