import React, { Component } from 'react'
import './View.css'

export default class HeroCard extends Component {
    render () {
        return (
            <div key={this.props.heroes.id} className="card">
            <div className="card-body">
                <div className="card-title">
                    <h5>{this.props.heroes.name}</h5>
                </div>
            </div>
        </div>
        )
    }
}