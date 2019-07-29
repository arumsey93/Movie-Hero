import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from './login/login';
import Welcome from './Welcome/Welcome';
import Register from './register/register'
import UserHandler from './APIManager/userhandler'
import Dashboard from './Dashboard/Dashboard'
import Create from './Create/Create'

class ApplicationViews extends Component {
    state = {
        users: [],
        heroes: [],
        adventures: [],
        bag: [],
        weapons: [],
        defense: [],
        utility: []
    };

    componentDidMount() {
        UserHandler.getAll()
          .then(users => this.setState({ users: users }))
    };

    addUser = user =>
    UserHandler.post(user)
      .then(() => UserHandler.getAll())
      .then(users =>
        this.setState({
          users: users
        })
      );

    isAuthenticated = () => sessionStorage.getItem("userId") !== null;

    render () {
        return (
            <React.Fragment>
            <Route 
            exact
            path="/"
            render={props => {
                if (this.isAuthenticated()) {
                    return (
                        <Dashboard 
                        {...props} 
                        />
                    );
            } else {
                return <Redirect to="/welcome" />;
                }
            }} 
            />
            <Route
            exact
            path="/welcome"
            render={props => {
                return <Welcome users={this.state.users} {...props} />;
                }}
            />
            <Route
            path="/welcome/login"
            render={props => {
                return <Login users={this.state.users} {...props} />;
                }}
            />
            <Route
            path="/welcome/register"
            render={props => {
                return <Register users={this.state.users} addUser={this.addUser} {...props}/>;
                }}
            />
            <Route
            exact
            path="/create"
            render={props => {
                if(this.isAuthenticated()) {
                    return (
                        <Create {...props} />
                    )
                } else {
                    return <Redirect to="/welcome" />
                }
            }}
            />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)