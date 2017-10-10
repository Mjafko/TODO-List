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
        <li className={css(styles.green)} key={ key }
          onClick={ this.changeColor }>
          { this.props.task[ key ] }
            <span className={ css( buttonStyle.button, buttonStyle.hover ) }>
              <button onClick={ () => this.props.deleteTask( key ) }>X</button>
            </span>
        </li>
      )
    }
    return tasks
  }

  changeColor() {
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
  green: {
    ':hover': {
        backgroundColor: 'green'
    }
  },
  completedTask: {
    backgroundColor: 'green'
  }
})
