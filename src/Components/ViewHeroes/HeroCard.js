import React, { Component } from 'react'
import './View.css'

export default class HeroCard extends Component {
    render () {
        return (
            <div key={this.props.hero.id} className="card">
            <div className="card-body">
                <div className="card-title">
                    <h5>{this.props.hero.name}</h5>
                    <p>{this.props.hero.desc}</p>
                </div>
            </div>
        </div>
        )
    }
}