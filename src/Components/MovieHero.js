import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./MovieHero.css";

class MovieHero extends Component {
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