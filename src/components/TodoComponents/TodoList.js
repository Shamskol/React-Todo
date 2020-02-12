// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from "react";
class TodoList extends Component {
 
  render() {
    
    return (


      <div className="todoListMain">
        <div className="header">
         {this.props.todoList.map((item ) =>{
           
         return(<p key={item.id}>{item.task}</p>)
         })}
         
        </div>
      </div>
    );
  }
}
export default TodoList;
