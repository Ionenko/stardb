import React, {Component} from 'react';
import './App.scss';
import SwapiService from '../../services/SwapiService';
import DummySwapiService from '../../services/DummySwapiService';
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {SwapiServiceProfider} from "../SwapiServiceContext/SwapiServiceContext";
import PeoplePage from '../pages/PeoplePage';
import PlanetsPage from '../pages/PlanetsPage';
import StarshipsPage from '../pages/StarshipsPage';
import LoginPage from '../pages/LoginPage';
import SecretPage from '../pages/SecretPage';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {StarshipDetails} from "../sw-components";

class App extends Component {

    state = {
        // showRandomPlanet: true,
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    };

    onLogin = () => {
        console.log('isLogin');
        this.setState({
            isLoggedIn: true
        })
    };

    onServiceChange = () => {
      console.log('Change');
      this.setState(({swapiService}) => {
          const Service = swapiService instanceof SwapiService ? DummySwapiService: SwapiService;

          console.log('switch to ', Service.name);

          return {
              swapiService: new Service()
          }
      });
    };


    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const {isLoggedIn} = this.state;

        // const {showRandomPlanet} = this.state;

        // const planet = showRandomPlanet ? <RandomPlanet/> : null;

        return (
            <div className="container">
                <SwapiServiceProfider value={this.state.swapiService}>
                    <Router>
                        <React.Fragment>
                            <Header onServiceChange={this.onServiceChange}/>
                            <RandomPlanet updateInterval={2000}/>
                            <Switch>
                                <Route path="/"
                                       render={() => <h2 className="center">Wellcome to StarDB</h2>}
                                       exact
                                />
                                <Route path="/people/:id?" component={PeoplePage}/>
                                <Route path="/planets" component={PlanetsPage}/>
                                <Route path="/starships" exact component={StarshipsPage}/>
                                <Route path="/starships/:id"
                                       render={({match, location, history}) => {
                                            const {id} = match.params;
                                            return <StarshipDetails itemId={id}/>
                                       }}
                                />

                                <Route path="/login" render={() => (
                                    <LoginPage
                                        isLoggedIn={isLoggedIn}
                                        onLogin={this.onLogin}
                                    />)}
                                />
                                <Route path="/secret" render={() => (
                                    <SecretPage
                                        isLoggedIn={isLoggedIn}
                                    />)}
                                />
                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>

                        </React.Fragment>
                    </Router>
                </SwapiServiceProfider>
            </div>
        );
    }
}

export default App;
