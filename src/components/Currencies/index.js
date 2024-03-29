import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

class Currencies extends React.Component {
  constructor(props) {
    super(props);
    console.log('[Currencies] Constructor');
  }

  componentDidMount() {
    console.log('[Currencies] componentDidMount');
  }

  componentDidUpdate() {
    console.log('[Currencies] componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('[Currencies] componentWillUnmount');
  }

  render() {
    console.log('[Currencies] render');
    const {
      currencies,
      handleClickOnCurrency,
      search,
      setSearch,
    } = this.props;
    return (
      <div className="currencies">
        <input
          type="text"
          placeholder="Recherche"
          className="search"
          value={search}
          onChange={(event) => {
            //console.log(event.target.value);
            setSearch(event.target.value);
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
  }
}

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
  search: PropTypes.string.isRequired,
  // paramètre: nouvelle valeur
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;
