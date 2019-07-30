import React, { Component } from 'react'
import './Adventures.css'
import weaponheandler from '../APIManager/weaponhandler'
import defensehandler from '../APIManager/defensehandler'
import utilityhandler from '../APIManager/utilityhandler'

export default class ItemsList extends Component {
    state = {
        weapon: "",
        defense: "",
        utility: "",
        showMenu: false
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
        console.log(stateToChange)
    }

    toggleMenu = () => {
        this.setState({
          showMenu: !this.state.showMenu
        })
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
    const menuVis = this.state.showMenu ? 'show' : 'hide';
        return (
            <React.Fragment>
                <section className="itemsList">
                    <h5>Weapons:</h5>
                    <select 
                    className="weaponsSelect"
                    id="weapon"
                    onChange={this.handleFieldChange}
                    >
                    {
                    this.props.weapons.map(weapon => 
                        <option 
                        required 
                        id={weapon.id}
                        value={weapon.name}>
                        {weapon.name}
                        </option>
                        )
                    }
                    </select>
                    <h5>Defense:</h5>
                    <select 
                    className="defenseSelect"
                    id="defense"
                    onChange={this.handleFieldChange}
                    >
                    {
                    this.props.defenses.map(defense => 
                        <option 
                        required
                        id={defense.id}
                        value={defense.name}>
                        {defense.name}
                        </option>
                        )
                    }
                    </select>
                    <h5>Utility:</h5>
                    <select 
                    className="utilitySelect"
                    id="utility"
                    onChange={this.handleFieldChange}
                    >
                    {
                    this.props.utility.map(ut => 
                        <option 
                        required 
                        id={ut.id}
                        value={ut.name}>
                        {ut.name}
                        </option>
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
                            onClick={this.toggleMenu}>
                            Add Items
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
                            <div className={`menu ${menuVis}`}>
                                <p>{this.state.weapon}</p>
                                <p>{this.state.defense}</p>
                                <p>{this.state.utility}</p>
                            </div>
                        </section>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}