/* eslint-disable react/prop-types */
import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import * as actions from '../../redux/auth/auth.actions';

const Header = () => {
  const authenticated = useSelector((state) => state.auth.authenticated);

  const dispatch = useDispatch();

  const onSignOut = () => {
    dispatch(actions.signout());
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

export default Header;
