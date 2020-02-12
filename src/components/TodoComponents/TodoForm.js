

import React, { Component } from "react";
class TodoForm extends Component {
  render() {
    return (
      <div className="todoForm">
        <div className="header">
          <form >
            <input placeholder="Task"
             
             value = {this.props.todoValue}
             onChange={this.props.handleInput} 

            />
            <button type="button" onClick={this.props.addTask}> Add Task </button>
          </form>
        </div>
      </div>
    );
  }
}
export default TodoForm;
