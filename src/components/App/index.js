// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import allCurrencies from 'src/data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies />
    <Result />
  </div>

);

// == Export
export default App;
