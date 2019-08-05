import React, { Component } from 'react'
import './Adventures.css'

export default class Items extends Component {
    render () {
        const menuVis = this.props.showMenu ? 'show' : 'hide';
        return (
            <div>
                <div className="ItemPageHeader">
                    <h4>Item List</h4>
                </div>
                    <section className="itemsList">
                        <div className="wepItemDiv">
                            <div className="wepItemDivHeader">
                                <h5>Weapons:</h5>
                            </div>
                            <select
                            value={this.props.selectedOption}
                            className="weaponsSelect btn btn-warning"
                            id="weapon"
                            onChange={this.props.weaponHandleFieldChange}
                            >
                            <option value=""
                            className="btn btn-warning"
                            >Weapons:</option>
                            {
                            this.props.weapons.map(weapon => 
                                <option 
                                required 
                                key={weapon.id}
                                id={weapon.id}
                                className="btn btn-warning"
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
                            value={this.props.selectedDefense}
                            className="defenseSelect btn btn-warning"
                            id="defense"
                            onChange={this.props.defenseHandleFieldChange}
                            >
                            <option value="">Defense Items:</option>
                            {
                            this.props.defenses.map(defense => 
                                <option 
                                required
                                key={defense.id}
                                id={defense.id}
                                className="btn btn-warning"
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
                            value={this.props.selectedUtility}
                            className="utilitySelect btn btn-warning"
                            id="utility"
                            onChange={this.props.utilityHandleFieldChange}
                            >
                            <option value="">Utility Items:</option>
                            {
                            this.props.utilities.map(ut => 
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
                                <p id={this.props.weapon.id} className="weaponItemList">{this.props.selectedOption}</p>
                                <p id={this.props.defense.id} className="defenseItemList">{this.props.selectedDefense}</p>
                                <p id={this.props.utility.id} className="utilityItemList">{this.props.selectedUtility}</p>
                            </div>
                        </section>
                        <div className="threebtns">
                            <button 
                            type="button"
                            className="delwepbtn btn btn-warning"
                            onClick={() => {this.props.removeWeapon()}}
                            >Remove Weapon</button>
                            <button 
                            type="button"
                            className="deldefbtn btn btn-warning"
                            onClick={() => {this.props.removeDefense()}}
                            >Remove Defense</button>
                            <button 
                            type="button"
                            className="delutilbtn btn btn-warning"
                            onClick={() => {this.props.removeUtility()}}
                            >Remove Utility</button>
                        </div>
                        <div className="addItemsToBag">
                            <button
                            type="button"
                            className="addItemsBtn btn btn-warning btn-lg"
                            onClick={
                                (evt) => {
                                    evt.preventDefault()
                                    this.props.weaponFunction(this.props.weaponId)
                                    this.props.defenseFunction(this.props.defenseId)
                                    this.props.utilityFunction(this.props.utilityId)
                                    this.props.updateItems()
                                }
                            }
                            >Add To Bag</button>
                        </div>
                    </div>
                </section>  
            </div>
        )
    }
}