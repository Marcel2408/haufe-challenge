/* eslint-disable react/prop-types */
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import * as actions from '../../redux/auth/auth.actions';

const Header = ({ authenticated, signout }) => {
  const onSignOut = () => {
    signout();
  };
  const renderedLinks = () => {
    if (authenticated) {
      return (
        <div>
          <Link className="header__link" onClick={onSignOut} to="/">
            Sign Out
          </Link>
        </div>
      );
    }
    return (
      <div>
        <Link className="header__link" to="/signup">
          Sign Up
        </Link>
        <Link className="header__link" to="/login">
          Login
        </Link>
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

export default connect(mapStateToProps, actions)(Header);
