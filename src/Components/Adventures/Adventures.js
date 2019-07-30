import React, { Component } from 'react'
import './Adventures.css'
import AdventureCard from './AdventureCard'

export default class AdventuresList extends Component {
    render () {
        return(
            <React.Fragment>
            <section className="adventures">
            {
                this.props.adventures.map(adventure => 
                    <AdventureCard key={adventure.id} ad={adventure} {...this.props} />
                )
            }
            </section>
            </React.Fragment>
        )
    }
}
