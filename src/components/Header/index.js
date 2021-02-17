import React from 'react' ;

import './header.scss';

const Header = () => (
  <header className="header">
    <h1 className="title">Converter</h1>
    <input
      type="text"
      className="input"
    />
    <p className="amount">euros</p>
  </header>
);

export default Header;
