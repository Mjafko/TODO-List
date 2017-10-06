import React, {Component} from 'react'

import ItemList from '../item-list/ItemList'

export class Input extends Component {
  constructor() {
    super()
    this.state = {
      input : ''
    }

    this.handleClick = this.handleClick.bind( this )
    this.handleChange = this.handleChange.bind( this )
  }

  handleClick(e) {
    console.log(this.state.input);

  }

  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  render() {
    return (
      <div className="Input">
        <label>
          Add TODO :
          <input name="input" type="text" onChange={this.handleChange}/>
          <button onClick={this.handleClick}>Save</button>
        </label>
        <ItemList />
      </div>
  );
  }
}
