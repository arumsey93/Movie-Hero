import React, { Component } from "react";
import './HOF.css'

export default class HallOfFameCard extends Component {
    render () {
        return (
            <div key={this.props.bag.id} className="HOF-card">
                <div className="card-body">
                    <div className="HOF-card-title">
                    <div className="HOFheroImgDiv">
                        <img 
                        className="hof-img"
                        src={this.props.winnerBag.heroImg}
                        alt={this.props.winnerBag.desc}
                        ></img>
                    </div>
                        <h5 className="HOF-hero-name">{this.props.winnerBag.heroName}</h5>
                    </div>
                    <div className="card-box">
                        <p className="HOF-hero-desc">{this.props.winnerBag.heroName} passed the {this.props.winnerBag.adventureName} adventure using a {this.props.winnerBag.weapon}, a {this.props.winnerBag.defense}, and a {this.props.winnerBag.utility}.</p>
                    </div>
                </div>
            </div>
        )
    }
}