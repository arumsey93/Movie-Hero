import React, { Component } from 'react'
import './Adventures.css'

export default class StartAdventureButton extends Component{
    render() {
        return (
            <div className="startAdventureBtn">
                <button
                type="button"
                className="btn btn-danger btn-lg"
                
                >Start Your Adventure!</button>
            </div>
        )
    }
}