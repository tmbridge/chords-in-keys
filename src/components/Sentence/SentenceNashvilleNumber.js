import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SentenceNashvilleNumber extends Component {
    render() {
        console.log("Roman Numeral value in component: " + this.props.value)
        return this.props.value;
    }
}

export default SentenceNashvilleNumber;