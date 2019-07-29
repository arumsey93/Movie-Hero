import React, { Component } from "react"

export default class Welcome extends Component {
    render(){
        return(
            <section>
                <h1 className="text-center">Movie Hero</h1>
                <h3 className="text-center">Please Login or Register</h3>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <button className="loginbtn" onClick = { () => {
                                this.props.history.push("/welcome/login")
                            }}>Login</button>
                            <button className="registerbtn" onClick = { () => {
                                this.props.history.push("/welcome/register")
                            }}>Register</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}