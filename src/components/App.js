import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  handleChangeType = event => {
    this.setState({ filters: { type: event.target.value } })
  }

  handleFindPetsClick = event => {
    let url = "/api/pets";
    if (this.state.filters.type !== "all") {
      url += `?type=${this.state.filters.type}`;
    }

    fetch(url)
      .then(resp => resp.json())
      .then(pets => {
        this.setState({ pets: pets });
      })
  }

  handleAdoptPet = id => {
    const index = this.state.pets.findIndex(pet => pet.id === id);
    // console.log("ADOPTED: ", adoptedPet);
    const { pets } = { ...this.state };
    console.log("pets: ", pets);
    pets[index].isAdopted = true;
    this.setState({ pets: pets });
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.handleChangeType} onFindPetsClick={this.handleFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.handleAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


