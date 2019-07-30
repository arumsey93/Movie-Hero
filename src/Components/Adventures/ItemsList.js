import React, { Component } from 'react'
import './Adventures.css'
import WeaponCard from './WeaponCard'
import DefenseCard from './DefenseCard'
import UtilityCard from './UtilityCard'
import weaponheandler from '../APIManager/weaponhandler'
import defensehandler from '../APIManager/defensehandler'
import utilityhandler from '../APIManager/utilityhandler'

export default class ItemsList extends Component {
    state = {
        weapon: "",
        defense: "",
        utility: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateItems = evt => {
        evt.preventDefault()
        if (this.weapon === "") {
            alert("Please Select A Weapon")
        } else if (this.defense === "") {
            alert("Please Select A Defense Item")
        } else if (this.utility === "") {
            alert("Please Select A Utility Item")
        } else {
            const itemBag = {
                weapon: this.state.weapon,
                defense: this.state.defense,
                utility: this.state.utility,
                userId: +sessionStorage.getItem("userId"),
                heroId: this.props.match.params.heroId,
                adventureId: this.props.match.params.adventureId
            }
        }
    }

    render () {
        return (
            <React.Fragment>
                <section className="itemsList">
                    <h5>Weapons:</h5>
                    <select className="weaponsSelect">
                    {
                    this.props.weapons.map(weapon => 
                            <WeaponCard key={weapon.id} weapon={weapon} {...this.props} />
                        )
                    }
                    </select>
                    <h5>Defense:</h5>
                    <select className="defenseSelect">
                    {
                    this.props.defenses.map(defense => 
                            <DefenseCard key={defense.id} defense={defense} {...this.props} />
                        )
                    }
                    </select>
                    <h5>Utility:</h5>
                    <select className="utilitySelect">
                    {
                    this.props.utility.map(ut => 
                            <UtilityCard key={ut.id} ut={ut} {...this.props} />
                        )
                    }
                    </select>
                </section>
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <button
                            type="button"
                            className="btn btn-success"
                            // onClick={
                            //     () => {
                            //         this.
                            //     }
                            // }
                            >Add Items
                            </button>
                        </div>
                    </div>
                </div>
                <section className="itemList">
                    <div className="itemContainer">
                        <div className="ICHeader">
                            <h5 className="itemHeader">Item List:</h5>
                        </div>
                        <section className="itemBox">
                            <div className="itemsDiv">

                            </div>
                        </section>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}