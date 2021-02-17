import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ currencies, handleClickOnCurrency }) => (
  <div className="currencies">
    <input
      type="text"
      placeholder="Recherche"
      className="search"
      onChange={(event) => {
        console.log(event.target.value);
      }}
      />
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
