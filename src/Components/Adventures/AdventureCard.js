import React, { Component } from 'react'
import './Adventures.css'

export default class AdventureCard extends Component {
adventureScore = this.props.adventure.score
adventureId = this.props.adventure.id
    render () {
        
        return (
            <div key={this.props.adventure.id} className="card">
            <div className="card-body">
                <div className="card-title">
                    <h5>{this.props.adventure.name}</h5>
                    <p>{this.props.adventure.description}</p>
                <button type="button"
                    className="btn btn-warning"
                    id={this.props.adventure.id}
                    onClick={() => {
                        
                        this.props.history.push(`/adventures/${this.props.adventure.id}/items`)
                        this.props.adventureFunction(this.adventureId, this.adventureScore, this.props.adventure.key, this.props.adventure.victory, this.props.adventure.defeat)
                        sessionStorage.setItem("adventureScore", this.props.adventure.score)
                        sessionStorage.setItem("adventureKey", this.props.adventure.key)
                        sessionStorage.setItem("adventureVictory", this.props.adventure.victory)
                        sessionStorage.setItem("adventureDefeat", this.props.adventure.defeat)

                    }
                    }>
                    Select
                </button>
                </div>
            </div>
        </div>
        )
    }
}