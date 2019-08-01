import React, { Component } from "react";
import './HOF.css'

export default class HallOfFameCard extends Component {
    render () {
        return (
            <div key={this.props.bag.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <h4>{this.props.heroName}</h4>
                    </div>
                </div>
            </div>
        )
    }
}