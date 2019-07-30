import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from './login/login';
import Welcome from './Welcome/Welcome';
import Register from './register/register'
import UserHandler from './APIManager/userhandler'
import Dashboard from './Dashboard/Dashboard'
import Create from './Create/Create'
import createHandler from "./APIManager/createhandler";
import ViewHeroes from "./ViewHeroes/View"
import EditHeroForm from "./ViewHeroes/EditHeroes"
import AdventuresList from "./Adventures/Adventures";
import adventurehandler from "./APIManager/adventurehandler";
import weaponhandler from "./APIManager/weaponhandler"
import defensehandler from "./APIManager/defensehandler"
import utilityhandler from "./APIManager/utilityhandler"
import ItemsList from "./Adventures/ItemsList"


class ApplicationViews extends Component {
    state = {
        users: [],
        heroes: [],
        adventures: [],
        bag: [],
        weapons: [],
        defense: [],
        utility: []
    };

    componentDidMount() {
        UserHandler.getAll()
          .then(users => this.setState({ users: users }))
            .then(() => createHandler.getAll())
            .then(heroes => this.setState({heroes: heroes}))
            .then(() => adventurehandler.getAll())
            .then(adventures => this.setState({adventures: adventures}))
            .then(() => weaponhandler.getAll())
            .then(weapons => this.setState({weapons: weapons}))
            .then(() => defensehandler.getAll())
            .then(defense => this.setState({defense: defense}))
            .then(() => utilityhandler.getAll())
            .then(utility => this.setState({utility: utility}))
    };

    addUser = user =>
    UserHandler.post(user)
      .then(() => UserHandler.getAll())
      .then(users =>
        this.setState({
          users: users
        })
      );

    addHero = hero => 
    createHandler.post(hero)
        .then(() => createHandler.getAll())
        .then(heroes => 
            this.setState({
                heroes: heroes
            }))

    updateHero = hero => {
        return createHandler.put(hero)
        .then(() => createHandler.getAll())
        .then(heroes => {
            this.setState({
                heroes: heroes
            })
        })
    }

    updateWeapon = weapon => {
        return weaponhandler.put(weapon)
        .then(() => weaponhandler.getAll())
        .then(weapons => {
            this.setState({
                weapons: weapons
            })
        })
    }

    updateDefense = def => {
        return defensehandler.put(def)
        .then(() => defensehandler.getAll())
        .then(defense => {
            this.setState({
                defense: defense
            })
        })
    }

    updateUtility = util => {
        return utilityhandler.put(util)
        .then(() => utilityhandler.getAll())
        .then(utility => {
            this.setState({
                utility: utility
            })
        })
    }

    deleteHero = hero => {
        createHandler.delete(hero)
        .then(() => createHandler.getAll())
        .then(heroes => {
            this.setState({
                heroes: heroes
            })
        })
    }

    isAuthenticated = () => sessionStorage.getItem("userId") !== null;

    render () {
        return (
            <React.Fragment>
            <Route 
            exact
            path="/"
            render={props => {
                if (this.isAuthenticated()) {
                    return (
                        <Dashboard 
                        {...props} 
                        />
                    );
            } else {
                return <Redirect to="/welcome" />;
                }
            }} 
            />
            <Route
            exact
            path="/welcome"
            render={props => {
                return <Welcome users={this.state.users} {...props} />;
                }}
            />
            <Route
            path="/welcome/login"
            render={props => {
                return <Login users={this.state.users} {...props} />;
                }}
            />
            <Route
            path="/welcome/register"
            render={props => {
                return <Register users={this.state.users} addUser={this.addUser} {...props}/>;
                }}
            />
            <Route
            exact
            path="/create"
            render={props => {
                if(this.isAuthenticated()) {
                    return (
                        <Create {...props}
                        addHero={this.addHero} />
                    )
                } else {
                    return <Redirect to="/welcome" />
                }
            }}
            />
            <Route
            exact
            path="/heroes"
            render={props => {
                if(this.isAuthenticated()){
                    return (
                        <ViewHeroes {...props}
                        heroes={this.state.heroes}
                        deleteHero={this.deleteHero}
                        />
                    )
                } else {
                    return <Redirect to="/welcome" />
                }
            }}
            />
            <Route 
            exact
            path="/heroes/:heroId(\d+)/edit"
            render={props => {
                return (
                    <EditHeroForm {...props}
                    heroes={this.state.heroes}
                    updateHero={this.updateHero}
                    />
                )
            }}
            />
            <Route
            exact
            path="/adventures"
            render={props => {
                if(this.isAuthenticated()) {
                    return (
                        <AdventuresList {...props}
                        adventures={this.state.adventures} />
                    )
                } else {
                    return <Redirect to="/welcome" />
                }
            }}
            />
            <Route
            exact
            path="/:heroId(\d+)/adventures"
            render={props => {
                if(this.isAuthenticated()) {
                    return (
                        <AdventuresList {...props}
                        adventures={this.state.adventures} />
                    )
                } else {
                    return <Redirect to="/welcome" />
                }
            }}
            />
            <Route
            exact
            path="/adventures/:adventureId(\d+)/items"
            render={props => {
                if(this.isAuthenticated()) {
                    return (
                        <ItemsList {...props}
                        weapons={this.state.weapons}
                        defenses={this.state.defense}
                        utility={this.state.utility}
                        updateWeapon={this.updateWeapon}
                        updateDefense={this.updateDefense}
                        updateUtility={this.updateUtility}
                        />
                    )
                }
            }}
            />
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews)