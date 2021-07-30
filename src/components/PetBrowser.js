import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  generatePets = () => {
    // console.log("Pets: ", this.props.pets);
    return this.props.pets.map((pet) => <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} />);
  }

  render() {
    return <div className="ui cards">{this.generatePets()}</div>
  }
}

export default PetBrowser
