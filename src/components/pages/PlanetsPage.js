import React, {Component} from 'react';
import {PlanetList, PlanetDetails} from "../sw-components";
import Row from "../Row/Row";

class PlanetsPage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({
            selectedItem
        })
    };

    render() {
        const {selectedItem} = this.state;

        return (
            <Row
                left={ <PlanetList onItemSelected={this.onItemSelected}/> }
                right={ <PlanetDetails itemId={selectedItem}/> }
            />
        );
    }
}

export default PlanetsPage;