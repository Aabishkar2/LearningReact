import React, { Component } from 'react';
import Todos from './components/todos/Todos'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    todos : [
      {
        id: 1,
        title: "Peaky Blinders",
        status: "watched"
      },
      {
        id: 2,
        title: "Narcos",
        status: "watched"
      },
      {
        id: 3,
        title: "Breaking Bad",
        status: "not-watched"
      },
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
        <h3>Nepal</h3>
      </div>
    );
  }
 
}

export default App;
