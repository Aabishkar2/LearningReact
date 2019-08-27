import React, { Component } from 'react'
import Header from '../header/Header'
import Sidenav from '../sidenav/Sidenav'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    constructor(props) {
        super(props)
        let loggedIn = localStorage.getItem('authenticated') === "true" ? true : false;
        this.state = {
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false) {
            return <Redirect to="/" />
        }
        return (
            <div>
                <Header />
                <Sidenav />
                <div className="content-wrapper">
                    <h3> This is a Dashboard </h3>
                </div>
            </div>
        )
    }
}

export default Dashboard
