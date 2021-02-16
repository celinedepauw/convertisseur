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
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    // on appelle le constructeur de React.Component en lui donnant les props
    super(props);
    // on créé le state du composant sous forme d'objet
    this.state = {
      open: true,
    };
  }

  render() {
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

    // pour accéder à une information du state, on pourrait noter :
    // this.state.open
    // ou :
    // const { open } = this.state;

    const { open } = this.state;

    return (
      <div className="app">
        <Header />
        <button
          type="button"
          onClick={() => {
            // je décris les modifs à appliquer sur le state
            this.setState({
              // j'inverse la valeur de open (cela fonctionne car open est un booléen)
              open: !open,
            });
          }}
        >Toggle Currencies
        </button>
        {open && <Currencies currencies={currenciesList} />}
        <Result />
      </div>
    );
  }
};

// == Export
export default App;
