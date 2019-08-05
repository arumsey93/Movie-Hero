import React, { Component } from "react";
import './HOF.css'
import HallOfFameCard from "./HOFCard";

export default class HallOfFame extends Component {
    render () {
        return (
            <section>
                <div className="hallOfFameHeaderDiv">
                    <h1 className="HOFHeader">Hall of Fame</h1>
                </div>
                <div className="HOFChampions">
                    {
                        this.props.bag.map(b => {
                            if (b.won === true) {
                                return (
                                <HallOfFameCard 
                                key={b.id} 
                                winnerBag={b} 
                                {...this.props} />)
                            } else {
                                return ""
                            }
                        })
                    }
                </div>
            </section>
        )
    }
}