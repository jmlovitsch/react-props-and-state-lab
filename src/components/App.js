import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all",
      },
    };
  }

  //fetches with correct api based on type
  clickFetchPets = () => {
    console.log(`fetched ${this.state.filters.type}`);
    let edn = '/api/pets';
    if (this.state.filters.type !== 'all') {
        edn += `?type=${this.state.filters.type}`;
      }
    // console.log(petsUrl);
    fetch(edn)
    .then(r => r.json())
    .then(pets => this.setState({ pets: pets }))
    console.log(this.state.pets);
  };

  //setstate type
  onChangePets = (event) => {
    console.log(event.target.value);
    event.persist();
    this.setState({
      filters: {
        type: event.target.value,
      },
    });
    console.log(this.state.filters.type);
  };

  //setstate of isAdopted
  onAdoptPet = (petId) => {

      const updated = this.state.pets.map( pet => {
         return pet.id === petId ? {...pet, isAdopted: !pet.isAdopted} : pet
        })
        this.setState({
            pets: updated
      })
      console.log('updated')
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                clickFetchPets={this.clickFetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                petsInfo={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
