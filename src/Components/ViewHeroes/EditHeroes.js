import React, { Component } from 'react'
import createHandler from '../APIManager/createhandler'
import './View.css'

export default class EditHeroForm extends Component {
    state = {
        heroName: "",
        heroDesc: "",
        userId: "",
        photo: null
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingHero = evt => {
        evt.preventDefault()
        if (this.heroName || this.heroDesc === "") {
            window.alert("Please Enter a Name or Description")
        } else {
            const hero = {
                name: this.state.heroName,
                desc: this.state.heroDesc,
                userId: +sessionStorage.getItem("userId"),
                id: this.props.match.params.heroId
            }
            this.props.updateHero(hero)
            .then(() => this.props.history.push("/heroes"))
        }
    }

    componentDidMount() {
        createHandler.get(this.props.match.params.heroId)
        .then(hero => {
            this.setState({
                heroName: hero.name,
                heroDesc: hero.desc,
                userId: hero.userId
            })
        })
    }

    render () {
        return (
            <React.Fragment>
                <form className="heroForm">
                    <div className="form-group">
                    <label htmlFor="heroName">Hero Name</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="heroName"
                        value = {this.state.heroName}
                    />
                    </div>
                    <div className="form-group">
                    <label htmlFor="heroDesc">Hero Description</label>
                    <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="heroDesc"
                        value = {this.state.heroDesc}
                    />
                    </div>
                    <button
                    type="submit"
                    onClick={this.updateExistingHero}
                    className="btn btn-warning"
                    >
                    Submit
                    </button>
                </form>
        </React.Fragment>
        )
    }
}