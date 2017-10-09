import React, {Component} from 'react'

import ItemList from '../item-list/ItemList'

export default class Input extends Component {
  constructor() {
    super()

    this.taskInput = ''
    this.state = {
      taskList: {}
    }
    this.handleClick = this.handleClick.bind( this )
    this.deleteTask = this.deleteTask.bind(this)
  }

  componentDidUpdate() {
  }

  handleClick(e) {

    let myNotification = new Notification('Task added', {
      body: 'New Task was created : '
    })

    let random = Math.random().toString(36).substring(7)
    let key = new Date().getTime() + "_" + random
    this.state.taskList[ key ] = this.taskInput.value
    this.setState( this.state )
  }

  deleteTask(index) {
    delete this.state.taskList[index]
    this.forceUpdate()
  }

  render() {
    return (
      <div className="Input">
        <label>
          Add TODO :
          <input name="input" type="text" ref={(input) => { this.taskInput = input }} />
          <button onClick={this.handleClick}>Save</button>
        </label>
        <ItemList task={this.state.taskList} deleteTask={this.deleteTask}/>
      </div>
    )
  }
}
