import React, { Component } from 'react'
import createHandler from '../APIManager/createhandler'
import './View.css'
import * as firebase from "firebase/app";
import "firebase/storage";

export default class EditHeroForm extends Component {
    state = {
        heroName: "",
        heroDesc: "",
        userId: "",
        newImgUrl: null,
        oldImgUrl: null
    }

    storageRef = firebase.storage().ref("hero-images");

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingHero = evt => {
        evt.preventDefault();
        if (this.heroName || this.heroDesc === "") {
            window.alert("Please Enter a Name or Description")
        } 
        if (this.state.newImgUrl) {
            console.log(this.state)
            const ref = this.storageRef.child(this.state.heroName)
            return ref
            .put(this.state.newImgUrl)
            .then(data => data.ref.getDownloadURL())
            .then(imageUrl => {
                return this.props.updateHero({
                name: this.state.heroName,
                desc: this.state.heroDesc,
                userId: this.state.userId,
                id: this.props.match.params.heroId,
                imgUrl: imageUrl
            })
        })
        .then(()=> this.props.history.push("/heroes"))
        } else {
            console.log("oldimgurl", this.state)
            return this.props.updateHero({
                name: this.state.heroName,
                desc: this.state.heroDesc,
                userId: this.state.userId,
                id: this.props.match.params.heroId,
                imgUrl: this.state.oldImgUrl
            })
            .then(()=> this.props.history.push("/heroes"))
        }
    }

    componentDidMount() {
        createHandler.get(this.props.match.params.heroId)
        .then(hero => {
            this.setState({
                heroName: hero.name,
                heroDesc: hero.desc,
                userId: hero.userId,
                oldImgUrl: hero.imgUrl
            })
        })
    }

    render () {
        return (
            <React.Fragment>
                <form className="heroForm">
                <div className="input-group border-color: grey">
                    <div className="input-group-prepend">
                    </div>
                    <div className="custom-file">
                        <input
                        type="file"
                        className="custom-file-input"
                        id="newImgUrl"
                        aria-describedby="inputGroupFileAddon01"
                        onChange={e => this.setState({newImgUrl: e.target.files[0]})}
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01" placeholder="Choose File">
                        </label>
                    </div>
                    </div>
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

// edit hero without having to edit the photo
//add the imageUrl URL to text input in edit hero and create hero after image is selected