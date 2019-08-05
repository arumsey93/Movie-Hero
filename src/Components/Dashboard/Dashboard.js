import React, { Component } from 'react'
import './Dashboard.css'
import torch from "./torch.gif"

export default class Dashboard extends Component {
    render () {
        return (
            <section>
                <div className="dashHeaderDiv">
                    <div className="dashCol">
                        <div className="dashboardHeader">
                            <div className="torchTwo">
                                <img
                                src={torch}
                                alt={torch}
                                ></img>
                            </div>
                            <div className="dashTitleAndWelcomeDiv">
                                <h1 className="dashTitle">Movie Hero</h1>
                                    <div className="dashWelcomeDiv">
                                        <h4 className="dashWelcome">Welcome Adventurer!</h4>
                                    </div>
                            </div>
                        <div className="torchOne">
                            <img
                            src={torch}
                            alt={torch}
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="rulesDiv">
                    <div className="rulesHeaderDiv">
                        <h6 className="rulesHeader">Rules of Engagement</h6>
                    </div>
                </div>
                <div className="anotherRulesDiv">
                    <div className="rulesListDiv">
                        <p className="rules">
                            Greetings Adventurer!  We are glad you stopped by!  We need your assistance in righting a few wrongs.  As you very well know, movie plots these days are getting stale and repetitive.  We have designed a few challenges based on plots of movies that have become commonplace.
                            <br></br>
                            <br></br>
                            How to Play:
                            <br></br>
                            Create a Hero, or view all your heroes and select one to take on an adventure.
                            <br></br>
                            Select an Adventure.  Read the adventures description carefully, there may be hints here!
                            <br></br>
                            Select a Weapon, Defense item, and Utility item.
                            <br></br>
                            Once you think you have the right items add them to your bag!
                            <br></br>
                            Click, "Start Your Adventure!" once you have all your items added to your bag.
                        </p>
                    </div>
                </div>
                <div className="buttonsDash">
                    <div className="createHeroDashBtn">
                        <button
                        type="button"
                        className="btn btn-warning"
                        onClick={
                            () => {
                                this.props.history.push("/create")
                            }
                        }
                        >Create A Hero</button>
                    </div>
                    <div className="viewHeroDashBtn">
                        <button
                        type="button"
                        className="btn btn-warning"
                        onClick={
                            () => {
                                this.props.history.push("/heroes")
                            }
                        }
                        >View Your Heroes</button>
                    </div>
                </div>
            </div>
            <div className="availableAdventuresDiv">
                <div className="availableAdventuresHeaderDiv">
                    <h5 className="availableAdventuresHeader">Available Adventures</h5>
                </div>
                <div className="availableAdventuresListDiv">
                    <ul
                    className="availableAdventuresList"
                    id="availableAdventuresList"
                    >
                    {
                        this.props.adventures.map(a =>
                            <li
                            key={a.id}
                            value={a.name}
                            id={a.id}>
                                <b>{a.name}</b>
                                <br></br>
                                {a.description}
                            </li>
                            )
                    }
                    </ul>
                </div>
            </div>
            </section>
        )
    }
}