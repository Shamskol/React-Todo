import React from "react";

class TodoForm extends React.Component {

render() {
return (
<div className="todoForm">
    <div className="header">
    <form>
    
    <input placeholder="Task"
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