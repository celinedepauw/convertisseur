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
Objectif : pouvoir filtrer les devises
- ajouter un input dans Currencies
- prendre en compte la saisie à chaque caractère tapé
- fournir la nouvelle valeur au composant App
- appliquer un filtre sur les devises (dans App), et fournir la nouvelle liste à Currencies
*/

/*
Champ contrôlé :
https://fr.reactjs.org/docs/forms.html#controlled-components
*/


// == Composant
class App extends React.Component {
  constructor(props) {
    // on appelle le constructeur de React.Component en lui donnant les props
    super(props);
    // on créé le state du composant sous forme d'objet
    this.state = {
      // indique si les devises sont affichées
      open: true,
      // montant à convertir
      baseAmount: 1,
      // devise sélectionnée
      currency: 'United States Dollar',
      // contenu du champ de recherche, valeur vide à l'initialisation
      inputSearch: '',
    };
    // on remplace la méthode handleClick par une version améliorée qui ne perdra
    // pas le lien avec this
    this.handleClick = this.handleClick.bind(this);

    this.computeAmount = this.computeAmount.bind(this);

    this.setCurrency = this.setCurrency.bind(this);

    this.setInputSearch = this.setInputSearch.bind(this);

    this.setInputAmount = this.setInputAmount.bind(this);
  }

  // appel après le 1er rendu du composant
  componentDidMount() {
    console.log('[App] componentDidMount');
    this.updateTitle();
  }

  // https://fr.reactjs.org/docs/react-component.html#componentdidupdate
  // componentDidUpdate a accès aux props et au state qu'il y avait avant la
  // mise à jour qui a engendré le nouveau rendu
  componentDidUpdate(prevProps, prevState) {
    console.log('[App] componentDidUpdate');

    // mise à jour du titre seulement si la devise a changé
    // eslint-disable-next-line react/destructuring-assignment
    if (prevState.currency !== this.state.currency) {
      this.updateTitle();
    }
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

  // mettre à jour la devise dans le state
  setCurrency(newCurrencyName) {
    this.setState({
      currency: newCurrencyName,
    });
  }

  // méthode qui met à jour inputSearch dans le state
  setInputSearch(newValue) {
    this.setState({
      inputSearch: newValue,
    });
  }

  setInputAmount(newValue) {
    this.setState({
      baseAmount: newValue,
    });
  }

  // retourne les devises filtrées en fonction du champ de recherche
  getFilteredCurrencies() {
    const { inputSearch } = this.state;

    let filteredCurrencies = currenciesList;

    // si le champ de recherche n'est pas vide, on filtre les devises
    if (inputSearch.length > 0) {
      // faire le filtrage
      filteredCurrencies = currenciesList.filter((currency) => {
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
        const loweredInputSearch = inputSearch.toLowerCase();
        const loweredCurrencyName = currency.name.toLowerCase();

        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
        return loweredCurrencyName.includes(loweredInputSearch);
      });
    }

    return filteredCurrencies;
  }

  // retourne le montant converti à partir des informations du state
  computeAmount() {
    const { baseAmount, currency } = this.state;

    // récupérer le taux correspondant à la devise sélectionnée
    const currencyData = currenciesList.find((data) => data.name === currency);

    // multiplier le taux par le montant de base
    const result = currencyData.rate * baseAmount;

    // arrondir à 2 décimales
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
    const roundedResult = result.toFixed(2);

    // retourner le résultat
    return roundedResult;
  }

  // mise à jour du titre de la page
  updateTitle() {
    const { currency } = this.state;
    document.title = `Converter - ${currency}`;
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

    const {
      open,
      currency,
      inputSearch,
      baseAmount,
    } = this.state;

    const result = this.computeAmount();

    // déterminer les devises à afficher
    const filteredCurrencies = this.getFilteredCurrencies();

    return (
      <div className="app">
        <Header
          baseAmount={baseAmount}
          setAmount={this.setInputAmount}
        />
        <CustomButton open={open} manageClick={this.handleClick} />
        {open && (
          <Currencies
            currencies={filteredCurrencies} 
            handleClickOnCurrency={this.setCurrency}
            search={inputSearch}
            setSearch={this.setInputSearch}
          />
        )}
        <Result value={result} currency={currency} />
      </div>
    );
  }
};

// == Export
export default App;
