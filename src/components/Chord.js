import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Chord extends Component {
    render() {
        console.log("Chord value in component: " + this.props.value)
        return this.props.value;
    }
}

export default Chord;