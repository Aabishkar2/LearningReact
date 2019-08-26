import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Login extends Component {

    state = {
        invalidInput: false
    }

    componentDidMount() {
        document.body.classList.add("login-page");
    }

    render() {
        const invalidLogin = {display: this.state.invalidInput ? 'block' : 'none'};
        return (
            <div>
                <div className="login-box">
                    <div className="login-logo">
                        <b>Login</b>
                    </div>
                    {/* /.login-logo */}
                    <div className="login-box-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form onSubmit={this.handleSubmit}>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" name="email" placeholder="Email" />
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" name="password" placeholder="Password" />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <div className="row">
                            <div className="col-xs-8">
                            </div>
                            {/* /.col */}
                            <div className="col-xs-4">
                            <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                            {/* /.col */}
                        </div>
                        </form>
                        <div className="invalid" style={invalidLogin}>
                            <p> Invalid Password </p>
                        </div>
                        <a href="#">I forgot my password</a><br />
                        <a href="" className="text-center">Register a new membership</a>
                    </div>
                    {/* /.login-box-body */}
                    </div>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        if(data.get('email') === "aabishkar2@gmail.com" && data.get('password') === "123456"){
            localStorage.setItem('authenticated', 'true')
            this.props.history.push('/dashboard')
        } else {
            this.setState({ invalidInput: true });
        }
    }
}

export default Login
