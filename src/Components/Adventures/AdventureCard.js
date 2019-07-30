import React, { Component } from 'react'
import './Adventures.css'

export default class AdventureCard extends Component {
    render () {
        return (
            <div key={this.props.ad.id} className="card">
            <div className="card-body">
                <div className="card-title">
                    <h5>{this.props.ad.name}</h5>
                    <p>{this.props.ad.description}</p>
                </div>
            </div>
        </div>
        )
    }
}