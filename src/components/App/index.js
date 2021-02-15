// == Import npm
import React from 'react';

// == Import
import './styles.css';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import allCurrencies from 'src/data/currencies';

// == Composant
const App = () => {
  console.log(allCurrencies);
  allCurrencies.forEach(function(index) {
    console.log(index);
  });
  return (
    <div className="app">
      <Header />
      <Currencies
        name={allCurrencies.name}
        rate={allCurrencies.rate}
      />
      <Result />
    </div>
  );
};

// == Export
export default App;
