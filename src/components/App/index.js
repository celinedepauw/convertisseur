// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import currenciesList from 'src/data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies
      currencies={currenciesList}
    />
    <Result />
  </div>

);

// == Export
export default App;
