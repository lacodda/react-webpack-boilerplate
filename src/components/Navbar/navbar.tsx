import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Navbar: React.FC = () => (
  <div className="navbar__container">
    <div className="navbar__menu">
      <Link to="/">home</Link>
      <Link to="/info">info</Link>
      <Link to="/about">about</Link>
    </div>
  </div>
);

export default Navbar;
