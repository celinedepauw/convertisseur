// == Import npm
import React from 'react';

// == Import
import './styles.css';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies />
  </div>
);

// == Export
export default App;
