import React, { Component } from 'react'
import './Adventures.css'

export default class AdventureCard extends Component {
adventureScore = this.props.adventure.score
adventureId = this.props.adventure.id
    render () {
        
        return (
            <div key={this.props.adventure.id} className="ad-card">
            <div className="ad-card-body">
                <div className="ad-card-title">
                    <div className="ad-img-div">
                        <img
                        className="ad-img"
                        src={this.props.adventure.img}
                        alt={this.props.adventure.description}>
                        </img>
                    </div>
                    <h5 className="ad-card-name">{this.props.adventure.name}</h5>
                    <p className="ad-card-desc">{this.props.adventure.description}</p>
                <div className="ad-btn-div">
                <button type="button"
                    className="btn btn-warning"
                    id={this.props.adventure.id}
                    onClick={() => {
                        
                        this.props.history.push(`/adventures/${this.props.adventure.id}/items`)
                        this.props.adventureFunction(this.adventureId, this.adventureScore, this.props.adventure.key, this.props.adventure.victory, this.props.adventure.defeat, this.props.adventure.name)
                        sessionStorage.setItem("adventureScore", this.props.adventure.score)
                        sessionStorage.setItem("adventureKey", this.props.adventure.key)
                        sessionStorage.setItem("adventureVictory", this.props.adventure.victory)
                        sessionStorage.setItem("adventureDefeat", this.props.adventure.defeat)
                        sessionStorage.setItem("adventureName", this.props.adventure.name)

                    }
                    }>
                    Select
                </button>
                </div>
                </div>
            </div>
        </div>
        )
    }
}