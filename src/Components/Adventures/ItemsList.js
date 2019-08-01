import React, { Component } from 'react'
import './Adventures.css'
import ItemIndex from './ItemIndex'
import StartAdventureBtn from './StartAdventure'
import Items from './Items'

export default class ItemsList extends Component {
    state = {
        weapon: "",
        defense: "",
        utility: "",
        selectedOption: "",
        selectedDefense: "",
        selectedUtility: "",
        bagId: "",
        showMenu: false,
        heroId: parseInt(sessionStorage.getItem("heroId")),
        heroName: sessionStorage.getItem("heroName"),
        adventureScore: parseInt(sessionStorage.getItem("adventureScore")),
        adventureKey: sessionStorage.getItem("adventureKey"),
        adventureVictory: sessionStorage.getItem("adventureVictory"),
        adventureDefeat: sessionStorage.getItem("adventureDefeat"),
        adventureName: sessionStorage.getItem("adventureName")
    }

    componentDidMount() {
        this.props.getOneBag(this.props.bagId)
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

    removeWeapon = () => {
        this.setState({weapon: "", selectedOption: ""})
    }

    removeDefense = () => {
        this.setState({defense: "", selectedDefense: ""})
    }

    removeUtility = () => {
        this.setState({utility: "", selectedUtility: ""})
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
        this.props.utilities.forEach(ut =>
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
                heroName: this.state.heroName,
                timestamp: Date.now(),
                adventureId: parseInt(this.props.match.params.adventureId),
                adventureScore: this.state.adventureScore,
                adventureKey: this.state.adventureKey,
                adventureVictory: this.state.adventureVictory,
                adventureDefeat: this.state.adventureDefeat,
                adventureName: this.state.adventureName,
                score: this.state.weaponScore + this.state.defenseScore,
                utilityKey: this.state.utilityKey,
                won: false
            }
            this.props.addBag(itemBag)
            console.log(itemBag)
        }
    }

    render () {
        return (
            <React.Fragment>
                <div className="ItemsDiv">
                    <Items 
                    weaponHandleFieldChange={this.weaponHandleFieldChange}
                    defenseHandleFieldChange={this.defenseHandleFieldChange}
                    utilityHandleFieldChange={this.utilityHandleFieldChange}
                    toggleMenu={this.toggleMenu}
                    menuVis={this.menuVis}
                    handleFieldChange={this.handleFieldChange}
                    handleClickChange={this.handleClickChange}
                    handleDefenseChange={this.handleDefenseChange}
                    handleUtilityChange={this.handleUtilityChange}
                    removeWeapon={this.removeWeapon}
                    removeDefense={this.removeDefense}
                    removeUtility={this.removeUtility}
                    updateItems={this.updateItems}
                    {...this.props} 
                    selectedOption={this.state.selectedOption}
                    selectedDefense={this.state.selectedDefense}
                    selectedUtility={this.state.selectedUtility}
                    showMenu={this.state.showMenu}
                    weapon={this.state.weapon}
                    defense={this.state.defense}
                    utility={this.state.utility}
                    />
                </div>
                <div className="ItemIndexDiv">
                    <ItemIndex {...this.props} />
                </div>
                <div className="startAdventure">
                    <StartAdventureBtn 
                    removeWeapon={this.removeWeapon}
                    removeDefense={this.removeDefense}
                    removeUtility={this.removeUtility}
                    {...this.props} />
                </div>
            </React.Fragment>
        )
    }
}