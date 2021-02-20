import React from 'react';
import './Header.scss';
import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';

const Header = () => (
  <header className="header">
    <div className="header__wrapper container">
      <LogoIcon className="logo" />
    </div>
  </header>
);

export default Header;
