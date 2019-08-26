import React, { Component } from 'react';
import Header from './components/header/Header'
import Sidenav from './components/sidenav/Sidenav'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'


class App extends Component {

  render() {
    return (
      <Router>  
        <div>
          <Header />
          <Sidenav />
          <Route path="/dashboard" exact component={Dashboard} />
        </div>
      </Router>
    );
  }
 
}

export default App;
