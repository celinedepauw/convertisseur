import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

const Currencies = ({ allCurrencies }) => (
  <div className="currencies">
    <h2 className="title">Currencies</h2>
    <ul className="all-currencies">
      <li>Blablabla</li>
    </ul>
  </div>
);

/*Currencies.propTypes = {
  // currencies est un tableau d'objets
  // on précise les différentes propriétés de chaque objet
  allCurrencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired, // obligatoire qu'il y ait cette "forme"
  ).isRequired, // la prop ingredients est obligatoire
};*/

export default Currencies;
