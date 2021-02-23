/* eslint-disable react/prop-types */
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';

const Header = ({ authenticated }) => {
  const renderedLinks = () => {
    if (authenticated) {
      return (
        <div>
          <Link to="/welcome">Sign Out</Link>
          <Link to="/list">Characters</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </div>
    );
  };

  return (
    <header className="header">
      <div className="header__wrapper container">
        <LogoIcon className="logo" />
        {renderedLinks()}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
  };
};

export default connect(mapStateToProps)(Header);
