import React, { Component } from "react";
import './HOF.css'
import HallOfFameCard from "./HOFCard";

export default class HallOfFame extends Component {
    render () {
        return (
            <section>
                <div className="hallOfFameHeaderDiv">
                    <h4 className="HOFHeader">Hall of Fame</h4>
                </div>
                <div className="HOFChampions">
                    {
                        this.props.bag.map(b => {
                            if (b.won === true) {
                                return (
                                <HallOfFameCard 
                                key={b.id} 
                                bag={b} 
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