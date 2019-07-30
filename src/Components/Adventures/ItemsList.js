import React, { Component } from 'react'
import './Adventures.css'
import WeaponCard from './WeaponCard'
import DefenseCard from './DefenseCard'
import UtilityCard from './UtilityCard'

export default class ItemsList extends Component {
    render () {
        return (
            <React.Fragment>
                <section className="weaponsList">
                    <h5>Weapons:</h5>
                    <select className="itemSelect">
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
            </React.Fragment>
        )
    }
}