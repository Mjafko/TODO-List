import React, {Component} from 'react'

export default class ItemList extends Component {
  constructor() {
    super()
  }

  // deleteTask(index) {
  //   delete this.props.task[index]
  //   alert(this.props.task[index] + ' task was deleted!')
  // }

  renderTasks() {
    let tasks = []
    for ( let key in this.props.task ) {
      tasks.push(
        <li key={ key } onClick={ () => this.props.deleteTask( key ) }>
          { this.props.task[ key ] }
        </li>
      )
    }
    return tasks
  }

  render() {
    return (
      <div className="ItemList">
        <p>Hello from Item List</p>
        <ul>
          { this.renderTasks() }
        </ul>
      </div>
    )
  }
}
