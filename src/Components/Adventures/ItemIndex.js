import React, { Component } from 'react'
import './Adventures.css'

export default class ItemIndex extends Component {
    render() {
        return (
            <section>
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
                            this.props.utilities.map(ut =>
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
            </section>
        )
    }
}