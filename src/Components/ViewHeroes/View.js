import React, { Component } from 'react'
import './View.css'
import HeroCard from './HeroCard'

export default class ViewHeroes extends Component {

    render () {
        return(
            <React.Fragment>
            <section className="heroes">
            {
                this.props.heroes.map(hero =>
                    <HeroCard key={hero.id} animal={hero} {...this.props} />
                )
            }
            <div className="newHeroBtn">
                <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push("/heroes/new")}
                    }>
                Create Hero
                </button>
            </div>
            </section>
            </React.Fragment>
        )
    }
}