import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ baseAmount, setAmount }) => (
  <header className="header">
    <h1 className="title">Converter</h1>
    <input
      type="text"
      className="input"
      value={baseAmount}
      onChange={(event) => {
        // le retour de onChange est forcément une string
        // dc il faut transformer en nombre pour être cohérent avec la valeur initiale dans le state
        setAmount(parseFloat(event.target.value));
      }}
    />
    <p className="amount">euros</p>
  </header>
);

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default Header;
