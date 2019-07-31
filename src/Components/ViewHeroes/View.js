import React, { Component } from 'react'
import './View.css'
import HeroCard from './HeroCard'

export default class ViewHeroes extends Component {
    createHero = () => {
        let user = +sessionStorage.getItem("userId");
        let heroArr = []
        this.props.heroes.forEach(hero => {
            if (hero.userId === user) {
                heroArr.push(hero)
            }
        })
        return heroArr
    }
    render () {
        return(
            <React.Fragment>
            <section className="heroes">
            {
                this.createHero(this.props.heroes).map(hero =>
                    <HeroCard key={hero.id} 
                    hero={hero} 
                    heroFunction={this.props.heroFunction} 
                    {...this.props} />
                )
            }
            <div className="newHeroBtn">
                <button type="button"
                    className="btn btn-warning"
                    onClick={() => {
                        this.props.history.push("/create")}
                    }>
                Create Hero
                </button>
            </div>
            </section>
            </React.Fragment>
        )
    }
}