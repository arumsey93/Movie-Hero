import React, { Component } from 'react'
import './Adventures.css'
import AdventureCard from './AdventureCard'

export default class AdventuresList extends Component {
    render () {
        return(
            <React.Fragment>
            <section className="adventures">
            {
                this.props.adventures.map(adventures => 
                    <AdventureCard key={adventures.id} adventure={adventures} {...this.props} />
                )
            }
            </section>
            </React.Fragment>
        )
    }
}
