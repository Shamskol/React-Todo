import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {

      item: ""
    };

  }

  handleInput= e => {

    this.setState ({

      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.task);
    this.setState({
      item: ""
    });
  };

render()  {
return (
<div className="todoForm">
    <div className="header">
    <form onSubmit={this.handleSubmit}>
    
    <input 
    placeholder="Task"
     type="text"
     name="item"
      value = {this.props.todoValue}
      onChange={this.props.handleInput}
    
    />
     <button type="button" onClick={this.props.addTask}> Add Task </button>
     <button type="button" onClick={this.props.clearCompleted}>Clear Completed</button>
    
    
    </form>



    </div>

</div>
);
}


}

export default TodoForm;