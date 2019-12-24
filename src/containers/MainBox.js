import React, {Component} from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends Component {

  state = {selected: "profile"}

  select = (clicked) => {
    this.setState({selected: clicked})
  }

  render() {

    let detailsToDisplay

    switch (this.state.selected) {
      case "profile": detailsToDisplay = < Profile />
      break
      case "photo": detailsToDisplay = < Photos />
      break
      case "cocktail": detailsToDisplay = < Cocktails />
      break
      case "pokemon": detailsToDisplay = < Pokemon />
      break
      default: detailsToDisplay = null
      break
    }

    return (
      <div>
        <MenuBar 
        selected={this.state.selected} 
        select={this.select}
        />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
