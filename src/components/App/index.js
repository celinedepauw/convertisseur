// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';

import currenciesList from 'src/data/currencies';

/*
Objectif : pouvoir afficher ou masquer les devises grâce à un bouton
- affichage conditionnel de Currencies (par rapport à une variable)
- mise en place d'un bouton
- "connecter" l'action du bouton avec la variable pour modifier l'affichage
*/

// == Composant
const App = () => {
  // indique si les devises sont affichées
  let open = true;

  /**
   * Affichage conditionnel d'un composant en React
   * {open && <Currencies currencies={currenciesList} />}
   * Si open est false, la suite est ignorée : Currencies ne s'affiche pas
   * Si open est true, la suite est exécutée : Currencies est affiché
   */

  /**
    * Liste évènements React
    * https://fr.reactjs.org/docs/events.html
    */

  return (
    <div className="app">
      <Header />
      <button
        type="button"
        onClick={() => {
          console.log('clic');
          open = false;
        }}
      >Toggle Currencies
      </button>
      {open && <Currencies currencies={currenciesList} />}
      <Result />
    </div>

  );
};

// == Export
export default App;
