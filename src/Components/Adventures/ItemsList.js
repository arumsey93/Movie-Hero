import React, { Component } from 'react'
import './Adventures.css'

export default class ItemsList extends Component {
    state = {
        weapon: "",
        defense: "",
        utility: "",
        showMenu: false,
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    weaponHandleFieldChange = evt => {
        const newStateToChange = {}
        newStateToChange[evt.target.id] = evt.target.value
        this.props.weapons.forEach(weapon =>
            {
                if(weapon.name === newStateToChange[evt.target.id]) {
                    newStateToChange.weaponId = weapon.id
                } 
            }
            )
            this.setState(newStateToChange)
    }

    defenseHandleFieldChange = evt => {
        const newStateToChange = {}
        newStateToChange[evt.target.id] = evt.target.value
        this.props.defenses.forEach(defense =>
            {
                if(defense.name === newStateToChange[evt.target.id]) {
                    newStateToChange.defenseId = defense.id
                } 
            }
            )
            this.setState(newStateToChange)
    }

    utilityHandleFieldChange = evt => {
        const newStateToChange = {}
        newStateToChange[evt.target.id] = evt.target.value
        this.props.utility.forEach(ut =>
            {
                if(ut.name === newStateToChange[evt.target.id]) {
                    newStateToChange.utilityId = ut.id
                } 
            }
            )
            this.setState(newStateToChange)
    }

    toggleMenu = () => {
        this.setState({
          showMenu: !this.state.showMenu
        })
      }



    // updateItems = evt => {
    //     evt.preventDefault()
    //     if (this.weapon === "") {
    //         alert("Please Select A Weapon")
    //     } else if (this.defense === "") {
    //         alert("Please Select A Defense Item")
    //     } else if (this.utility === "") {
    //         alert("Please Select A Utility Item")
    //     } else {
    //         const itemBag = {
    //             weapon: this.state.weapon,
    //             defense: this.state.defense,
    //             utility: this.state.utility,
    //             userId: +sessionStorage.getItem("userId"),
    //             heroId: this.props.match.params.heroId,
    //             adventureId: this.props.match.params.adventureId,
    //         }

    //     }
    // }

    render () {
    const menuVis = this.state.showMenu ? 'show' : 'hide';
        return (
            <React.Fragment>
                <div className="ItemPageHeader">
                    <h4>Item List</h4>
                </div>
                <section className="itemsList">
                    <div className="wepItemDiv">
                        <div className="wepItemDivHeader">
                            <h5>Weapons:</h5>
                        </div>
                        <select
                        className="weaponsSelect"
                        id="weapon"
                        onChange={this.weaponHandleFieldChange}
                        >
                        <option value="">Weapons:</option>
                        {
                        this.props.weapons.map(weapon => 
                            <option 
                            required 
                            key={weapon.id}
                            id={weapon.id}
                            value={weapon.name}>
                            {weapon.name}
                            </option>
                            )
                        }
                        </select>
                    </div>
                    <div className="defItemDiv">
                        <div className="defItemDivHeader">
                            <h5>Defense:</h5>
                        </div>
                        <select
                        className="defenseSelect"
                        id="defense"
                        onChange={this.defenseHandleFieldChange}
                        >
                        <option value="">Defense Items:</option>
                        {
                        this.props.defenses.map(defense => 
                            <option 
                            required
                            key={defense.id}
                            id={defense.id}
                            value={defense.name}>
                            {defense.name}
                            </option>
                            )
                        }
                        </select>
                    </div>
                    <div className="utilItemDiv">
                        <div className="utilItemDivHeader">
                            <h5>Utility:</h5>
                        </div>
                        <select
                        className="utilitySelect"
                        id="utility"
                        onChange={this.utilityHandleFieldChange}
                        >
                        <option value="">Utility Items:</option>
                        {
                        this.props.utility.map(ut => 
                            <option 
                            required
                            key={ut.id} 
                            id={ut.id}
                            value={ut.name}>
                            {ut.name}
                            </option>
                            )
                        }
                        </select>
                    </div>
                </section>
                <section className="itemList">
                    <div className="itemContainer">
                        <div className="ICHeader">
                            <h5 className="itemHeader">Item List:</h5>
                        </div>
                        <section className="itemBox">
                            <div className={`menu ${menuVis}`}>
                                <p id={this.state.weapon.id} className="weaponItemList">{this.state.weapon}</p>
                                <p id={this.state.defense.id} className="defenseItemList">{this.state.defense}</p>
                                <p id={this.state.utility.id} className="utilityItemList">{this.state.utility}</p>
                            </div>
                        </section>
                        <div className="threebtns">
                            <button 
                            type="button"
                            className="delwepbtn btn btn-warning"
                            onClick={() => this.setState({weapon: ""})}
                            >Remove Weapon</button>
                            <button 
                            type="button"
                            className="deldefbtn btn btn-warning"
                            onClick={() => this.setState({defense: ""})}
                            >Remove Defense</button>
                            <button 
                            type="button"
                            className="delutilbtn btn btn-warning"
                            onClick={() => this.setState({utility: ""})}
                            >Remove Utility</button>
                        </div>
                        <div className="addItemsToBag">
                            <button
                            type="button"
                            className="addItemsBtn btn btn-warning btn-lg"
                            onClick={
                                () => {
                                    this.props.weaponFunction(this.state.weaponId)
                                    this.props.defenseFunction(this.state.defenseId)
                                    this.props.utilityFunction(this.state.utilityId)
                                }
                            }
                            >Add To Bag</button>
                        </div>
                        <div className="ItemIndexHeaderDiv">
                            <h5 className="itemIndexHeader">Item Index</h5>
                        </div>
                        <div className="itemIndex">
                            <div className="wepItemIndexDiv">
                            <h6 className="weaponIndexHeader">Weapon Items</h6>
                                <ul 
                                className="weaponIndex"
                                id="weaponIndex"
                                >
                                {
                                    this.props.weapons.map(weapon => 
                                        <li
                                        key={weapon.id}
                                        value={weapon.name}
                                        id={weapon.id}>
                                        {weapon.name}
                                        </li>
                                        )
                                }  
                                </ul>
                            </div>
                            <div className="defenseItemIndexDiv">
                            <h6 className="defenseIndexHeader">Defense Items</h6>
                            <ul
                            className="defenseIndex"
                            id="defenseIndex"
                            >
                            {
                                this.props.defenses.map(defense => 
                                    <li
                                    key={defense.id}
                                    value={defense.name}
                                    id={defense.id}>
                                    {defense.name}
                                    </li>
                                    )
                            }
                            </ul>
                            </div>
                            <div className="utilityItemIndexDiv">
                            <h6 className="utilityIndexHeader">Utility Items</h6>
                                <ul 
                                className="utilityIndex"
                                id="utilityIndex"
                                >
                                {
                                    this.props.utility.map(ut =>
                                        <li 
                                        key={ut.id}
                                        value={ut.name}
                                        id={ut.id}>
                                        {ut.name}
                                        </li>
                                        )
                                }
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}