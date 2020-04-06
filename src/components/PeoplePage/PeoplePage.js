import React, {Component} from 'react';
import './PeoplePage.scss';
import ItemList from "../ItemList/ItemList";
import ItemDetails from "../ItemDetails/ItemDetails";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import SwapiService from "../../services/SwapiService";
import Row from "../Row/Row";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";


class PeoplePage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: 3,
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    render() {

        if(this.state.hasError) {
            return <ErrorIndicator/>
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}
                renderItem={({name, gender, birth_year}) => `${name} (${gender}, ${birth_year})`}
            />
        );

        const personDetails = (
            <ItemDetails itemId={this.state.selectedPerson}/>
        );

        return (
            <ErrorBoundary>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundary>
        );
    }
}

export default PeoplePage;