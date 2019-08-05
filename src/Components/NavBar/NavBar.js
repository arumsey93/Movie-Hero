import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    render () {
        return (
            <nav className="navbar justify-content-center navbar-light light- bg-dark flex-md-nowrap p-0 shadow">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/create">Create Hero</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/heroes">View Heroes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/hallOfFame">Hall of Fame</Link>
                </li>
            </ul>
            </nav>
        )
    }
}

export default withRouter(NavBar)