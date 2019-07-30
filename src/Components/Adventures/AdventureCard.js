import React, { Component } from 'react'
import './Adventures.css'

export default class AdventureCard extends Component {

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
                        this.props.history.push(`/items/${this.props.adventure.id}/items`)}
                    }>
                    Select
                </button>
                </div>
            </div>
        </div>
        )
    }
}