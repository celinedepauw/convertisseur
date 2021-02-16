// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import Header from 'src/components/Header';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import CustomButton from 'src/components/CustomButton';

import currenciesList from 'src/data/currencies';

/*
Objectif : pouvoir afficher ou masquer les devises grâce à un bouton
- affichage conditionnel de Currencies (par rapport à une variable)
- mise en place d'un bouton
- "connecter" l'action du bouton avec la variable pour modifier l'affichage
*/

// == Composant
class App extends React.Component {
  constructor(props) {
    // on appelle le constructeur de React.Component en lui donnant les props
    super(props);
    // on créé le state du composant sous forme d'objet
    this.state = {
      open: true,
    };
    // on remplace la méthode handleClick par une version améliorée qui ne perdra
    // pas le lien avec this
    this.handleClick = this.handleClick.bind(this);
  }

  // en javascript, si j'utilise une méthide en callback (ex pour un event),
  // le lien vers "this" est perdu et this est undefined
  // pour conserver le lien avec "this" dans la méthode,
  // on le bind à la méthode
  handleClick() {
    const { open } = this.state;

    // je décris les modifications à appliquer sur le state
    this.setState({
      open: !open,
    });
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
        <CustomButton open={open} manageClick={this.handleClick} />
        {open && <Currencies currencies={currenciesList} />}
        <Result />
      </div>
    );
  }
};

// == Export
export default App;
