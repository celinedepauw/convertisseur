// == Import npm
import React from 'react';

// == Import
import './styles.css';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

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
