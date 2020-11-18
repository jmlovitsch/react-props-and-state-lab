import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
      const petBoxes = this.props.petsInfo.map( pet => {
          return <Pet petInfo={pet} key={pet.id} onAdoptPet={this.props.onAdoptPet} />
      })
    return <div className="ui cards">{petBoxes}</div>
  }
}

export default PetBrowser
