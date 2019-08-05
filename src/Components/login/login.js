import React, { Component } from "react";
import "./login.css";

export default class Login extends Component {
    state = {
        username: "",
        password: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };

      handleLogin = event => {
        event.preventDefault();
        let temp = ""
        let findUser = this.props.users.find(user => {
          if (
            user.username === this.state.username &&
            user.password === this.state.password
          ) {
            temp = user;
          }
          return temp
        });
        if (findUser) {
          sessionStorage.setItem("userId",findUser.id)
          this.props.history.push("/")
        } else {
          alert("username or password was incorect. please enter the right password or username");
        }
      };

      render() {
        return (
          <div className="loginHeaderDiv">
            <h1 className="loginHeader">Login</h1>
            <form onSubmit={this.handleLogin} className="loginForm">
              <input
                onChange={this.handleFieldChange}
                type="username"
                id="username"
                placeholder="Username"
                className="form-control"
              />
              <input
                onChange={this.handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
              />
              <button type="submit" className="btn btn-warning">Sign in</button>
              <div className="rememberMeDiv">
                <label htmlFor="Remember Me">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    value="remember"
                    type="checkbox"
                    className="rememberMe"
                    onClick={() => {
                      this.setState({ rememberMe: true });
                    }}
                  />
                  Remember Me
                </label>
              </div>
            </form>
          </div>
        );
      }
}