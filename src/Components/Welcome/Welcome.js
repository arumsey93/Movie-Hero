import React, { Component } from "react"

export default class Welcome extends Component {
    render(){
        return(
            <section>
                <h1 class="text-center">Movie Hero</h1>
                <h3 class="text-center">Please Login or Register</h3>
                <div class="container">
                    <div class="row">
                        <div class="col text-center">
                            <button className="loginbtn" onClick = { () => {
                                this.props.history.push("/welcome/login")
                            }}>Login</button>
                            <button class="registerbtn" onClick = { () => {
                                this.props.history.push("/welcome/register")
                            }}>Register</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}