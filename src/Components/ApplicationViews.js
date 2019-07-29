import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from './login/login'

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

    render () {
        return (
            <React.Fragment>

            <Route
            path="/welcome/login"
            render={props => {
                return <Login users={this.state.users} {...props} />;
                }}
            />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)