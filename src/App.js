import React, { Component } from 'react';
import Header from './components/header/Header'
import Sidenav from './components/sidenav/Sidenav'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login'

class App extends Component {

  authenticated() {
    return localStorage.getItem('authenticated') === "true" ? true : false;
  }

  render() {
    if(!this.authenticated()){
      return (
        <Router>
          <Route path="/" exact component={Login} />
        </Router>
      ) 
    } else {
        return (
          <div>
          <Router>  
            <Header />
            <Sidenav />
            <Switch>
              <Route path="/dashboard" exact component={Dashboard}  />
            </Switch>
          </Router>
          </div>
        )
      }
    }
}

export default App;
