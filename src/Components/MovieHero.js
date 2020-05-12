import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./MovieHero.css";

class MovieHero extends Component {
    state = {
        userResults: [],
        emailResults: []
    }

    inputEvent = (event) => {
        const newState = {}
        // this.setState({userResults: []})
        if (event.key === "Enter") {
            let input = document.getElementById("searchBar").value
            fetch (`https://movie-hero-server.herokuapp.com/users?username_like=${input}`)
            .then(r => r.json())
            .then(username => newState.userResults = username)
            .then(() => fetch (`https://movie-hero-server.herokuapp.com/users?email_like=${input}`))
            .then(r => r.json())
            .then(email => newState.emailResults = email)
            .then(() => {
            this.setState(newState)
            this.props.history.push("/search")
            })
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default withRouter(MovieHero);