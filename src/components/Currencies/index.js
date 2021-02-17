import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ currencies, handleClickOnCurrency }) => (
  <div className="currencies">
    <h2 className="title">Currencies</h2>
    <ul className="all-currencies">
      {currencies.map((currency) => (
        <li 
        key={currency.name} 
        className="currency"
        onClick={() => {
          //console.log('clic');
          handleClickOnCurrency(currency.name);
        }}
        >
        {currency.name}
        </li>
      ))}
    </ul>
  </div>
);

Currencies.propTypes = {
  // currencies est un tableau d'objets
  // on précise les différentes propriétés de chaque objet
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired, // obligatoire qu'il y ait cette "forme"
  ).isRequired, // la prop currencies est obligatoire
  // paramètre : nom de la nouvelle devise
  handleClickOnCurrency: PropTypes.func.isRequired,
};

export default Currencies;
