// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";

class TodoList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="todoListMain">
        <div className="header">
          {this.props.todoList.map((item )=> {
            console.log(item.task);
            return( <p key={item.id}>{item.task}</p>)
          })}
          
        </div>
      </div>
    );
  }
}

export default TodoList;
