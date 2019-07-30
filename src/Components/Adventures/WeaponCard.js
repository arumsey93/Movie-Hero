import React, { Component } from 'react'


export default class WeaponsCard extends Component {
    render () {
        return (
            <option id={this.props.weapon.id}>{this.props.weapon.name}</option>
        )
    }
}
