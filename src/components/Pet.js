import React from 'react'

class Pet extends React.Component {
  handleClick = event => {
    this.props.onAdoptPet(this.props.pet.id);
  }

  renderAdoptButtons = () => {
    if (this.props.pet.isAdopted) {
      return  (
        <div className="extra content">
          <button className="ui disabled button">Already adopted</button>
        </div>
        )
      } else {
        return (
        <div className="extra content">
          <button className="ui primary button" onClick={this.handleClick}>Adopt pet</button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */}
            {this.props.pet.gender === "male" ? "♂" : "♀"}
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        {this.renderAdoptButtons()}
      </div>
    )
  }
}

Pet.defaultProps = {
  isAdopted: false
}

export default Pet
