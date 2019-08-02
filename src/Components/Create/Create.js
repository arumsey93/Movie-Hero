import React, { Component } from 'react'
import './Create.css'
import * as firebase from "firebase/app";
import "firebase/storage";

export default class Create extends Component {
    state = {
        heroName: "",
        heroDesc: "",
        userId: "",
        imgUrl: null
    }

    storageRef = firebase.storage().ref("hero-images");

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
            const ref = this.storageRef.child(this.state.heroName)
            return ref
            .put(this.state.imgUrl)
            .then(data => data.ref.getDownloadURL())
            .then(imageUrl => {
                return this.props.addHero({
                name: this.state.heroName,
                desc: this.state.heroDesc,
                userId: +sessionStorage.getItem("userId"),
                imgUrl: imageUrl
            })
        })
        .then(()=> this.props.history.push("/heroes"))
        }
    }


    render () {
        return (
            <React.Fragment>
            <h1 className="create-title text-center">Create Your Hero</h1>
            <section className="create-heroes">
                <form className="heroForm" onSubmit={this.constructNewHero}>
                <div className="input-group">
                    <div className="input-group-prepend">
                    </div>
                    <div className="custom-file">
                        <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={e => this.setState({imgUrl: e.target.files[0]})}
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                        Choose file
                        </label>
                    </div>
                    </div>
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
                                className="btn btn-warning"
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