import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'


export default class ItemList extends Component {
  constructor() {
    super()
  }

  renderTasks() {
    let tasks = []
    for ( let key in this.props.task ) {
      tasks.push(
        <li className={css(styles.red)} key={ key }
          onClick={ () => this.props.deleteTask( key ) }>
          { this.props.task[ key ] }
            <span className={ css( buttonStyle.button, buttonStyle.hover ) }><button>X</button>
            <button>D</button></span>
        </li>
      )
    }
    return tasks
  }

  render() {
    return (
      <div className="itemList">
        <p>My Task List</p>
          <hr></hr>
        <ul>
          { this.renderTasks() }
        </ul>
      </div>
    )
  }
}

const buttonStyle = StyleSheet.create({
  button: {
    opacity: '0'
  },
  hover: {
          ':hover': {
              opacity: '1'
          }
  }
})

const styles = StyleSheet.create({
  red: {
  }
})

// .divbutton:hover button {
//    display: block; /* On :hover of div show button */
// }
