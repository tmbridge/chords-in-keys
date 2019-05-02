import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Key extends Component {

    render() {
        console.log("Key value in component: " + this.props.value)
        return this.props.value;
    }
}

export default Key;