import React, { Component } from 'react'


export default class DefenseCard extends Component {
    render () {
        return (
            <option id={this.props.defense.id}>{this.props.defense.name}</option>
        )
    }
}