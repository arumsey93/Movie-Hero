import React, { Component } from "react";
import './HOF.css'

export default class HallOfFameCard extends Component {
    render () {
        return (
            <div key={this.props.bag.id} className="card">
                <div className="card-body">
                    <div className="card-title">
                        <p>{this.props.winnerBag.heroName}</p>
                    </div>
                    <div className="card-box">
                        <p>{this.props.winnerBag.heroName} passed the {this.props.winnerBag.adventureName} adventure using a {this.props.winnerBag.weapon}, a {this.props.winnerBag.defense}, and a {this.props.winnerBag.utility}.</p>
                    </div>
                </div>
            </div>
        )
    }
}