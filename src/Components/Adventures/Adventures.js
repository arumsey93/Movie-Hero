import React, { Component } from 'react'
import './Adventures.css'
import AdventureCard from './AdventureCard'
import adventureFunction from '../ApplicationViews'

export default class AdventuresList extends Component {
    render () {
        return(
            <React.Fragment>
            <section className="adventures">
            {
                this.props.adventures.map(adventures => 
                    <AdventureCard key={adventures.id} 
                    adventure={adventures} 
                    adventureFunction={this.props.adventureFunction}
                    {...this.props} />
                )
            }
            </section>
            </React.Fragment>
        )
    }
}
