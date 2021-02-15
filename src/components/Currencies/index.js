import React from 'react' ;

import './currencies.scss';

const Currencies = () => (
  <div className="currencies">
    <h2 className="title">Currencies</h2>
    <ul className="all-currencies">
      <li className="currency">
        Australian Dollar
      </li>
      <li className="currency">
        Bulgarian Lev
      </li>
      <li className="currency">
        Brazilian Real
      </li>
    </ul>
  </div>
);

export default Currencies;
