import {Component} from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import React from "react";

class ErrorBoundary extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(){
        this.setState({
            hasError: true
        });
    }

    render(){

        if(this.state.hasError){
            return <ErrorIndicator/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;