import React, { Component } from 'react'
import './View.css'

export default class HeroCard extends Component {
    state = {
        saveDisabled: false
    }
    render () {
        return (
            <div key={this.props.hero.id} className="card">
            <div className="card-body">
                <div className="card-title">
                    <div className="heroImgDiv">
                    <img 
                    className="hero-img"
                    src={this.props.hero.imgUrl}
                    alt={this.props.hero.desc}
                    ></img>
                    </div>
                    <h5 className="hero-name">{this.props.hero.name}</h5>
                    <p className="hero-desc">{this.props.hero.desc}</p>
                    <button
                            type="button"
                            className="btn btn-warning"
                            onClick={() => {
                                this.props.history.push(`/heroes/${this.props.hero.id}/edit`);
                            }}
                            >
                            Edit
                    </button>
                    <button
                            type="button"
                            className="btn btn-danger"
                            onClick={
                                () => {this.setState({ saveDisabled: true },
                                () => this.props.deleteHero(this.props.hero.id),
                                )
                            }
                        }
                    >Delete</button>
                    <button
                            type="button"
                            className="btn btn-success"
                            onClick={
                                () => {
                                    this.props.history.push(`/${this.props.hero.id}/adventures`)
                                    this.props.heroFunction(this.props.hero.id, this.props.hero.name)
                                    sessionStorage.setItem("heroId", this.props.hero.id)
                                    sessionStorage.setItem("heroName", this.props.hero.name)
                                }
                            }
                    >Select Hero</button>
                </div>
            </div>
        </div>
        )
    }
}