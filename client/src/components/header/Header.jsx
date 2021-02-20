import React from 'react';
import './Header.scss';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';

const Header = () => (
  <header className="header container">
    <LogoIcon className="logo" />
  </header>
);

export default Header;
