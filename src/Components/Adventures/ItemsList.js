import React, { Component } from 'react'
import './Adventures.css'

export default class ItemsList extends Component {
    state = {
        weapon: "",
        defense: "",
        utility: "",
        showMenu: false,
        heroId: parseInt(sessionStorage.getItem("heroId")),
        adventureScore: parseInt(sessionStorage.getItem("adventureScore")),
        adventureKey: sessionStorage.getItem("adventureKey"),
        selectedOption: "",
        selectedDefense: "",
        selectedUtility: "",
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    handleClickChange = evt => {
        this.setState({selectedOption: evt.target.value});
    }

    handleDefenseChange = evt => {
        this.setState({selectedDefense: evt.target.value})
    }

    handleUtilityChange = evt => {
        this.setState({selectedUtility: evt.target.value})
    }

    weaponHandleFieldChange = evt => {
        const newStateToChange = {}
        newStateToChange.selectedOption = evt.target.value
        this.props.weapons.forEach(weapon =>
            {
                if(weapon.name === newStateToChange.selectedOption) {
                    newStateToChange.weaponId = weapon.id
                    newStateToChange.weaponScore = weapon.score
                } 
            }
            )
            this.setState(newStateToChange)
    }

    defenseHandleFieldChange = evt => {
        const newStateToChange = {}
        newStateToChange.selectedDefense = evt.target.value
        this.props.defenses.forEach(defense =>
            {
                if(defense.name === newStateToChange.selectedDefense) {
                    newStateToChange.defenseId = defense.id
                    newStateToChange.defenseScore= defense.score
                } 
            }
            )
            this.setState(newStateToChange)
    }

    utilityHandleFieldChange = evt => {
        const newStateToChange = {}
        newStateToChange.selectedUtility = evt.target.value
        this.props.utility.forEach(ut =>
            {
                if(ut.name === newStateToChange.selectedUtility) {
                    newStateToChange.utilityId = ut.id
                    newStateToChange.utilityKey= ut.key
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

    updateItems = () => {
        if (this.state.selectedOption === "") {
            alert("Please Select A Weapon")
        } else if (this.state.selectedDefense === "") {
            alert("Please Select A Defense Item")
        } else if (this.state.selectedUtility === "") {
            alert("Please Select A Utility Item")
        } else {
            const itemBag = {
                weapon: this.state.selectedOption,
                defense: this.state.selectedDefense,
                utility: this.state.selectedUtility,
                userId: +sessionStorage.getItem("userId"),
                heroId: this.state.heroId,
                timestamp: Date.now(),
                adventureId: parseInt(this.props.match.params.adventureId),
                adventureScore: this.state.adventureScore,
                adventureKey: this.state.adventureKey,
                score: this.state.weaponScore + this.state.defenseScore,
                utilityKey: this.state.utilityKey,
                won: false
            }
            this.props.addBag(itemBag)
            console.log(itemBag)
        }
    }

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
                        value={this.state.selectedOption}
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
                        value={this.state.selectedDefense}
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
                        value={this.state.selectedUtility}
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
                                <p id={this.state.weapon.id} className="weaponItemList">{this.state.selectedOption}</p>
                                <p id={this.state.defense.id} className="defenseItemList">{this.state.selectedDefense}</p>
                                <p id={this.state.utility.id} className="utilityItemList">{this.state.selectedUtility}</p>
                            </div>
                        </section>
                        <div className="threebtns">
                            <button 
                            type="button"
                            className="delwepbtn btn btn-warning"
                            onClick={() => {
                                this.setState({weapon: "", selectedOption: ""})
                                }
                            }
                            >Remove Weapon</button>
                            <button 
                            type="button"
                            className="deldefbtn btn btn-warning"
                            onClick={() => this.setState({defense: "", selectedDefense: ""})}
                            >Remove Defense</button>
                            <button 
                            type="button"
                            className="delutilbtn btn btn-warning"
                            onClick={() => this.setState({utility: "", selectedUtility: ""})}
                            >Remove Utility</button>
                        </div>
                        <div className="addItemsToBag">
                            <button
                            type="button"
                            className="addItemsBtn btn btn-warning btn-lg"
                            onClick={
                                (evt) => {
                                    evt.preventDefault()
                                    this.props.weaponFunction(this.state.weaponId)
                                    this.props.defenseFunction(this.state.defenseId)
                                    this.props.utilityFunction(this.state.utilityId)
                                    this.updateItems()
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
                    <div className="startAdventure">
                        <div className="startAdventureBtn">
                            <button
                            type="button"
                            className="btn btn-danger btn-lg"
                            // onClick={
                            //     () => {
                            //         if (itemBag.score && itembag.>= itemBag.adventureScore) {
                                        
                            //         }
                            //     }
                            // }
                            >Start Your Adventure!</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


// compare and add score values
// compare key values