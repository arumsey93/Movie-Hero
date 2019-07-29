import React, { Component } from 'react'
import './Create.css'

export default class Create extends Component {
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

    constructNewHero = evt => {
        evt.preventDefault();
        if (this.heroName || this.heroDesc === "") {
            window.alert("Please Enter a Name or Description")
        } else {
            const hero = {
                name: this.state.heroName,
                desc: this.state.heroDesc,
                userId: +sessionStorage.getItem("userId"),
            }
        this.props.addHero(hero)
        .then(()=> this.props.history.push("/heroes"))
        }
    }


    render () {
        return (
            <React.Fragment>
            <h1 className="create-title text-center">Create Your Hero</h1>
            <section className="create-heroes">
                <form className="heroForm" onSubmit={this.constructNewHero}>
                    <div className="hero-form-group">
                        <label htmlFor="heroName">Hero Name</label>
                        <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="heroName"
                        placeholder="Hero Name"
                        />
                    </div>
                    <div className="hero-form-group">
                        <label htmlFor="heroDesc">Hero Description</label>
                        <input
                        type="text"
                        required
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="heroDesc"
                        placeholder="Hero Description"
                        />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col text-center">
                            <button
                                type="heroSubmit"
                                className="btn btn-primary"
                            >
                            Submit
                            </button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
            </React.Fragment>
        )
    }
}