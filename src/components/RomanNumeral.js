import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class RomanNumeral extends Component {
    render() {
        console.log("Roman Numeral value in component: " + this.props.value)
        return this.props.value;
    }
}

export default RomanNumeral;