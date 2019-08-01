import React, { Component } from 'react'
import './Adventures.css'

export default class StartAdventureButton extends Component{

    editedBag = bag => {
        let newBag = {
            id: bag.id,
            weapon: bag.weapon,
            defense: bag.defense,
            utility: bag.utility,
            userId: bag.userId,
            heroId: bag.heroId,
            heroName: bag.heroName,
            timestamp: bag.timestamp,
            adventureId: bag.adventureId,
            adventureScore: bag.adventureScore,
            adventureKey: bag.adventureKey,
            adventureVictory: bag.adventureVictory,
            adventureDefeat: bag.adventureDefeat,
            adventureName: bag.adventureName,
            score: bag.score,
            utilityKey: bag.utilityKey,
            won: true
        }
        console.log(newBag)
        this.props.updateWon(newBag)
    }

    getScore = bag => {
        if(bag.score >= bag.adventureScore && bag.utilityKey === bag.adventureKey) {
            this.editedBag(bag)
            alert(bag.adventureVictory)
        } else if (bag.score < bag.adventureScore && bag.utilityKey !== bag.adventureKey) {
            alert("Your items are too weak for this mission, and your utility item is not correct.  Try using different items!", bag.adventureDefeat)
        } else if (bag.utilityKey !== bag.adventureKey) {
            alert("You chose the wrong utility item for this mission, your hero needs the correct item to succeed!", bag.adventureDefeat)
        } else if (bag.score < bag.adventureScore) {
            alert("Your items are not strong enough to pass this adventure, try using different items!", bag.adventureDefeat)
        } else {
            return ""
        }
    }

    render() {
        return (
            <div className="startAdventureBtn">
                <button
                type="button"
                className="btn btn-danger btn-lg"
                onClick={
                    () => {
                        this.props.bag.forEach(bag => {
                            if (bag.id === this.props.bagId) {
                                this.getScore(bag)
                            }else {
                                return ""
                            }
                        })
                    }
                }
                >Start Your Adventure!</button>
            </div>
        )
    }
}

