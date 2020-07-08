import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Do homework',
        completed: false
      },
      {
        id: 3,
        title: 'Play with cat',
        completed: true
      }
    ]
  }

// Toggle complete
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    console.log(id)
  }

  render() {
    return (

      <div className="App" >
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }

}

export default App;
