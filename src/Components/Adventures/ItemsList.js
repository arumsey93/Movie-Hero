import React, { Component } from 'react'
import './Adventures.css'

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
    }

    toggleMenu = () => {
        this.setState({
          showMenu: !this.state.showMenu
        })
      }

      delete(id){
          this.setState(prevState => ({
              data: prevState.data.filter(el => el != id)
          }))
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
    //             adventureId: this.props.match.params.adventureId
    //         }

    //     }
    // }

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
                    <h5>Defense:</h5>
                    <select
                    className="defenseSelect"
                    id="defense"
                    onChange={this.handleFieldChange}
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
                    <h5>Utility:</h5>
                    <select
                    className="utilitySelect"
                    id="utility"
                    onChange={this.handleFieldChange}
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
                </section>
                <section className="itemList">
                    <div className="itemContainer">
                        <div className="ICHeader">
                            <h5 className="itemHeader">Item List:</h5>
                        </div>
                        <section className="border itemBox">
                            <div className={`menu ${menuVis}`}>
                                <p>{this.state.weapon}</p>
                                <p>{this.state.defense}</p>
                                <p>{this.state.utility}</p>
                            </div>
                        </section>
                        <div className="threebtns">
                            <button 
                            type="button"
                            className="delwepbtn btn btn-warning"
                            onClick={this.delete(weapon.id)}
                            >Remove Weapon</button>
                            <button 
                            type="button"
                            className="deldefbtn btn btn-warning"

                            >Remove Defense</button>
                            <button 
                            type="button"
                            className="delutilbtn btn btn-warning"

                            >Remove Utility</button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}