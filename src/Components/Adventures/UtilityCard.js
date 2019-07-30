import React, { Component } from 'react'


export default class UtilityCard extends Component {
    render () {
        return (
            <option id={this.props.ut.id}>{this.props.ut.name}</option>
        )
    }
}