import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

class NavBar extends Component {
    state = {
        saveDisabled: false
    }

    logOut = () => {
        sessionStorage.clear()
        this.props.history.push("welcome/login")
    }
    

    render () {
        return (
            <nav className="navbar justify-content-center navbar-dark light-blue bg-dark flex-md-nowrap p-0 shadow">
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
                <li className="nav-item">
                    <button 
                    className="btn btn-dark light-blue bg-dark shadow"
                    onClick={() => {
                        this.setState({saveDisabled: true})
                        this.logOut()
                    }}
                    >Log Out</button>
                </li>
            </ul>
            </nav>
        )
    }
}

export default withRouter(NavBar)