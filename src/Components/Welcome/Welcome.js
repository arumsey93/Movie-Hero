import React, { Component } from "react"
import './Welcome.css'

export default class Welcome extends Component {
    render(){
        return(
            <section>
                <div className="welcomeHeaderDiv">
                    <h1 className="welcome-header text-center">Movie Hero</h1>
                    <h3 className="login-register-header text-center">Please Login or Register</h3>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                                <button className="loginbtn btn btn-warning" onClick = { () => {
                                    this.props.history.push("/welcome/login")
                                }}>Login</button>
                                <button className="registerbtn btn btn-warning" onClick = { () => {
                                    this.props.history.push("/welcome/register")
                                }}>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}