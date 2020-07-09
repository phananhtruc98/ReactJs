import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos.js';
import AddTodo from './components/AddTodo.js';
import Header from './layout/header.js';
import  { v4 as uuidv4 } from 'uuid';
class App extends Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Do homework',
        completed: false
      },
      {
        id: uuidv4(),
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
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(), 
      title, 
      completed: false
    }
    this.setState({todos: [...this.state.todos,newTodo]});
  }
  render() {
    return (

      <div className="App" >
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }

}

export default App;
