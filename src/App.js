import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import uuid from "uuid";
const initialToDo = 
[
  {
    task: 'Organize Garage',
    id: uuid(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: uuid(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoList: initialToDo,

      todoValue: "" 
    }
  }
  handleInput = e => {
    
    
    const {value} = e.target;
    this.setState({todoValue: value})
  };
  addTask = (e) => {
    
  e.preventDefault()
  
  const newToDo =  {
    task: this.state.todoValue,
    id: uuid(),
    completed: false
  }
this.setState ({todoList:[...this.state.todoList,newToDo],
  todoValue: "" 
})
  };

  render() {
    return (
      <div className="App">
    {/* <h1>This is task</h1> */}
        
        <TodoList
         

         todoList={this.state.todoList}
         
         
        
        
        />
        <TodoForm
        
        
        addTask={this.addTask}

      
        handleInput={this.handleInput}
        todoValue={this.state.todoValue}
       
        
        />

        
      </div>
    );
  }
}

export default App;
