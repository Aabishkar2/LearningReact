import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'

class App extends Component {

  constructor(props) {
    super(props)
    let authenticated = localStorage.getItem('authenticated') === "true" ? true : false;
    this.state = {
      authenticated
    }
  }


  render() {
        return (
          <Router>  
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/dashboard" exact component={Dashboard}  />
            </Switch>
          </Router>
        )
      }
}

export default App;
